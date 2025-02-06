/*
let $AnvilUpdateEvent=Java.loadClass('net.minecraftforge.event.AnvilUpdateEvent')

NativeEvents.onEvent($AnvilUpdateEvent,e=>{
    let Left=e.left
    let Right=e.right
    e.output.nbt.putString()
})
*/



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
/*
// 监听AnvilUpdateEvent
NativeEvents.onEvent($AnvilUpdateEvent, (e) => {
    let leftItem = e.left;
    let rightItem = e.right;
    console.log('测试1')
    // 检查是否使用了钻石
    if (!rightItem.isEmpty() && rightItem.id == 'minecraft:diamond') {
        console.log('测试2')
        let quality = getRandomQuality();

        // 创建输出物品的副本
        let outputItem = leftItem.copy();

        // 检测物品是否是装备
        function isArmor(itemStack) {
            let slotType = itemStack.getEquipmentSlot();
            return slotType === $EquipmentSlot.HEAD ||
                   slotType === $EquipmentSlot.CHEST ||
                   slotType === $EquipmentSlot.LEGS ||
                   slotType === $EquipmentSlot.FEET;
        }
        console.log('测试3')
        // 检测物品是否是主手物品
        function isMainHand(itemStack) {
            let slotType = itemStack.getEquipmentSlot();
            return slotType === $EquipmentSlot.MAINHAND;
        }
        console.log('测试4')
        if (isArmor(leftItem)) {
            // 装备
            let slotType = leftItem.getEquipmentSlot();
            console.log('测试5')
            switch (slotType) {
                case $EquipmentSlot.HEAD:
                    outputItem.nbt.putString("mryh_attribute_armor_head", `${quality}_armor`);
                    break;
                case $EquipmentSlot.CHEST:
                    outputItem.nbt.putString("mryh_attribute_armor_chest", `${quality}_armor`);
                    break;
                case $EquipmentSlot.LEGS:
                    outputItem.nbt.putString("mryh_attribute_armor_legs", `${quality}_armor`);
                    break;
                case $EquipmentSlot.FEET:
                    outputItem.nbt.putString("mryh_attribute_armor_feet", `${quality}_armor`);
                    break;
            }
        } else if (isMainHand(leftItem)) {
            // 主手物品
            outputItem.nbt.putString("mryh_attribute", quality);
            console.log('测试6')
        }
        console.log('测试7')
        // 设置输出物品
        e.set
        e.setOutput(outputItem);
        e.setCost(2); // 设置经验成本
        e.setMaterialCost(1); // 设置材料消耗
        console.log('测试8')
    }
});
*/
/*
NativeEvents.onEvent($AnvilUpdateEvent, (e) => {
    let item = e.left;
    if (e.right.id == 'minecraft:emerald') {
        let outputItem = item.copy();
        if (!outputItem.nbt) {
            outputItem.nbt = {};
        }
        let equipmentSlot = item.equipmentSlot
        let MAINHAND = $EquipmentSlotType.MAINHAND
        console.log(equipmentSlot)
        console.log(MAINHAND)
        if (equipmentSlot == MAINHAND) {
            outputItem.nbt.putString("mryh_attribute", getRandomQuality());
            e.setOutput(outputItem);
            e.setCost(2); // 设置经验成本
            e.setMaterialCost(1); // 设置材料消耗
        }
    }
});
*/
NativeEvents.onEvent($AnvilUpdateEvent, (e) => {
    let item = e.left;
    if (e.right.id == 'minecraft:emerald') {
        let outputItem = item.copy();
        let quality = getRandomQuality();
        if(outputItem.hasTag('forge:tools')){
            outputItem.nbt.putString("mryh_attribute", quality)
            e.setOutput(outputItem);
            e.setCost(2); // 设置经验成本
            e.setMaterialCost(1); // 设置材料消耗 
        }
    }
});