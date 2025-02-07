
let $AnvilUpdateEvent = Java.loadClass('net.minecraftforge.event.AnvilUpdateEvent');
let $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack');
let $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
let $Random = Java.loadClass('java.util.Random');

let random = new $Random();

// 品质及其概率
let QUALITY_PROBABILITIES = [
    { name: 'inferior', probability: 20 },
    { name: 'common', probability: 30 },
    { name: 'rare', probability: 30 },
    { name: 'artifact', probability: 10 },
    { name: 'legendary', probability: 7 },
    { name: 'epic', probability: 3 }
];

// 生成随机品质
function getRandomQuality() {
    let totalProbability = QUALITY_PROBABILITIES.reduce((acc, q) => acc + q.probability, 0);
    let rand = random.nextInt(totalProbability);
    let cumulativeProbability = 0;
    for (let quality of QUALITY_PROBABILITIES) {
        cumulativeProbability += quality.probability;
        if (rand < cumulativeProbability) {
            return quality.name;
        }
    }
    return QUALITY_PROBABILITIES[QUALITY_PROBABILITIES.length - 1].name; // 默认返回最后一个
}

NativeEvents.onEvent($AnvilUpdateEvent, (e) => {
    let item = e.left;
    if (e.right.id == 'minecraft:emerald') {
        let outputItem = item.copy();
        let quality = getRandomQuality();

        // 定义一个映射表，用于处理不同类型的装备
        let tagMap = {
            'mryh:sword': 'mryh_attribute',
            'mryh:armor_head': 'mryh_attribute_armor_head',
            'mryh:armor_chest': 'mryh_attribute_armor_chest',
            'mryh:armor_legs': 'mryh_attribute_armor_legs',
            'mryh:armor_feet': 'mryh_attribute_armor_feet'
        };

        // 遍历映射表，检查物品是否具有对应的标签
        for (let [tag, nbtKey] of Object.entries(tagMap)) {
            if (outputItem.hasTag(tag)) {
                outputItem.nbt.putString(nbtKey, `${quality}${tag.includes('armor') ? '_armor' : ''}`);
                e.setOutput(outputItem);
                e.setCost(2); // 设置经验成本
                e.setMaterialCost(1); // 设置材料消耗
                break; // 一旦匹配到一个标签，就不再继续检查其他标签
            }
        }
    }
});
