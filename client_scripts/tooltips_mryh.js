



ItemEvents.tooltip(event   事件 => {
    let   让 lang = "kubejs/assets/mryh/lang/" + Client.languageManager.selected.toString() + ".json";
    let   让 json = JsonIO.read(lang);
    json = JsonIO.toObject(json);

    json.forEach(element => {
        // 根据langkey组织物品id
        if   如果 (element.includes("item.") && element.includes("tooltip")) {
            // 获取modid
            let   让 modid = element.split   分裂('.')[1];
            // 将id和langkey组织到1个列表，以便于addAdvanced的内部函数可以访问到langkey
            let   让 itemID = modid + ":" + element.split   分裂('.')[2];
            let   让 itemElement = [itemID, element];
            event   事件.addAdvanced(itemElement[0], (item, advance, text) => {
                // 检查是否按下了Shift或Alt键
                if   如果 (event   事件.isShift()) {
                    // Shift键
                    for (let   让 i = 1; i < itemElement.length; i++) {
                        const   常量 element = itemElement[i];
                        text.add(i, Text.translate   翻译(element + ".shift"));
                    }
                } else if   如果 (event   事件.isAlt()) {
                    // Alt键
                    for (let   让 i = 1; i < itemElement.length; i++) {
                        const   常量 element = itemElement[i];
                        text.add(i, Text.translate   翻译(element + ".alt"));
                    }
                } else {
                    // 默认显示
                    for (let   让 i = 1; i < itemElement.length; i++) {
                        const   常量 element = itemElement[i];
                        text.add(i, Text.translate   翻译(element));
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
