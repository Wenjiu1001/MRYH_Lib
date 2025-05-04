



ItemEvents.tooltip(event => {
    let lang = "kubejs/assets/mryh/lang/" + Client.languageManager.selected.toString() + ".json";
    let json = JsonIO.read(lang);
    json = JsonIO.toObject(json);

    json.forEach(element => {
        // 根据langkey组织物品id
        if (element.includes("item.") && element.includes("tooltip")) {
            // 获取modid
            let modid = element.split('.')[1];
            // 将id和langkey组织到1个列表，以便于addAdvanced的内部函数可以访问到langkey
            let itemID = modid + ":" + element.split('.')[2];
            let itemElement = [itemID, element];
            event.addAdvanced(itemElement[0], (item, advance, text) => {
                // 检查是否按下了Shift或Alt键
                if (event.isShift()) {
                    // Shift键
                    for (let i = 1; i < itemElement.length; i++) {
                        const element = itemElement[i];
                        text.add(i, Text.translate(element + ".shift"));
                    }
                } else if (event.isAlt()) {
                    // Alt键
                    for (let i = 1; i < itemElement.length; i++) {
                        const element = itemElement[i];
                        text.add(i, Text.translate(element + ".alt"));
                    }
                } else {
                    // 默认显示
                    for (let i = 1; i < itemElement.length; i++) {
                        const element = itemElement[i];
                        text.add(i, Text.translate(element));
                    }
                }
            });
        }
    });
});

//例子
/*
"item.mryh.example.tooltip": "Default tooltip text"
"item.mryh.example.tooltip.alt": "Alt key tooltip text"
"item.mryh.example.tooltip.shift": "Shift key tooltip text"
*/



ItemEvents.tooltip(e=>{
    e.add('zombiekit:exo_helmet',Text.yellow("辐射防护能力"))
    e.add('zombiekit:exo_chestplate',Text.yellow("辐射防护能力"))
    e.add('zombiekit:exo_leggings',Text.yellow("辐射防护能力"))
    e.add('zombiekit:exo_boots',Text.yellow("辐射防护能力"))
})
