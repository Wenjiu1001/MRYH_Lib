

let lang = "kubejs/assets/mryh/lang/" + Client.languageManager.selected.toString() + ".json";
let json = JsonIO.read(lang);
json = JsonIO.toObject(json);

ItemEvents.tooltip(event => {
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


ItemEvents.tooltip((event) => {
    // 监听所有物品的工具提示事件
    event.addAdvancedToAll((item, advanced, tooltip) => {
        // 定义一个通用函数来处理不同类型的属性
        let addTooltipForAttribute = (attribute, tooltip) => {
            switch (attribute) {
                case 'inferior':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.inferior"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.inferior.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack-1_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack_speed-0.1_multiply_base"));
                    break;
                case 'common':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.common"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.common.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+1_addition"));
                    break;
                case 'rare':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.rare"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.rare.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+1_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack_speed+0.1_addition"));
                    break;
                case 'artifact':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.artifact"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.artifact.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack_speed+0.1_multiply_base"));
                    break;
                case 'legendary':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.legendary"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.legendary.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+0.05_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack_speed+0.2_multiply_base"));
                    break;
                case 'epic':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.epic"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.epic.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+0.1_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack_speed+0.3_multiply_base"));
                    break;
                case 'inferior_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.inferior_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.inferior.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health-2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor-0.1_multiply_base"));
                    break;
                case 'common_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.common_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.common.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor+1_addition"));
                    break;
                case 'rare_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.rare_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.rare.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor_toughness+0.1_multiply_base"));
                    break;
                case 'artifact_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.artifact_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.artifact.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor_toughness+0.1_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.luck+1_addition"));
                    break;
                case 'legendary_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.legendary_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.legendary.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health+2_addition"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor_toughness+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+4_addition"));
                    break;
                case 'epic_armor':
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.epic_armor"));
                    tooltip.add(Text.translatable("tooltips.item.alliance_level.epic.add"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.health+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.armor_toughness+0.2_multiply_base"));
                    tooltip.add(Text.translatable("tooltips.item.attribute.attack+0.1_multiply_base"));
                    break;
                default:
                    break;
            }
        };

        // 获取物品的自定义属性tag
        if (item.nbt != null) {
            let attributes = [
                item.nbt.getString('mryh_attribute'),
                item.nbt.getString('mryh_attribute_armor_head'),
                item.nbt.getString('mryh_attribute_armor_chest'),
                item.nbt.getString('mryh_attribute_armor_legs'),
                item.nbt.getString('mryh_attribute_armor_feet')
            ];

            // 遍历所有属性并添加工具提示
            attributes.forEach(attribute => {
                if (attribute) {
                    addTooltipForAttribute(attribute, tooltip);
                }
            });
        }
    });
});
