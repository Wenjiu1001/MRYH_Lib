
EntityEvents.hurt(event => {
    if (event.entity.isPlayer()) {
        let player = event.player
        let playerData = player.persistentData;
        let infectioncount = playerData.getInt("mryh_infectioncount");
        let armor_vaule = player.getAttributeValue('generic.armor');
        let armor_tou_vaule = player.getAttributeValue('generic.armor_toughness');
        if (event.source.actual instanceof $Zombie) {
            let chanceToBleed = calculateBleedChance(armor_vaule, armor_tou_vaule);
            if (infectioncount < 100 && Math.random() > chanceToBleed) {
                infectioncount++;
                playerData.putInt("mryh_infectioncount", infectioncount);
                player.sendData('mryh:infectioncount', { infectioncount: infectioncount });
            }
        }
    }
});

PlayerEvents.tick(event => {
    let player = event.player
    let playerData = player.persistentData;
    let infectioncount = playerData.getInt("mryh_infectioncount");
    let infectioncountsdead = playerData.getInt("mryh_infectioncountsdead");
    if (infectioncount == 100) {
        infectioncountsdead++;
        playerData.putInt("mryh_infectioncountsdead", infectioncountsdead);
        if (infectioncountsdead >= 6000) {
            player.kill();
            player.tell("您已被病毒感染，从而导致了死亡");
            playerData.putInt("mryh_infectioncount", 0);
            playerData.putInt("mryh_infectioncountsdead", 0);
        }
    }
});


PlayerEvents.respawned(event => {
    let player = event.player
    let playerData = player.persistentData;
    playerData.putInt("mryh_infectioncount", 0);
    playerData.putInt("mryh_infectioncountsdead", 0);
    player.sendData('mryh:infectioncount', { infectioncount: 0 });
});


// 减少固定数值的清除感染物品列表
const infectionMedicinesReduceFixed = [
    "apocalypsenow:antibiotics",
    "apocalypsenow:homemadeantibiotics"
];

// 直接清零的清除感染物品列表,需要长时间使用并shrink
const infectionMedicinesClear = [
    "mryh:deinfection",
    "zombiekit:miracle"
];

// 
const infectionMedicinesClearspecial = [
    "minecraft:enchanted_golden_apple",
    "minecraft:golden_apple"
]

ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    let playerData = player.persistentData;

    // 获取物品名称
    let itemName = item.id;

    // 检查物品是否在减少固定数值的清除感染物品列表中
    if (infectionMedicinesReduceFixed.includes(itemName)) {
        let infectioncount = playerData.getInt("mryh_infectioncount");
        let reductionAmount = 50;
        infectioncount = Math.max(infectioncount - reductionAmount, 0); // 确保不小于0
        playerData.putInt("mryh_infectioncount", infectioncount);
        playerData.putInt("mryh_infectioncountsdead", 0);
        player.sendData('mryh:infectioncount', { infectioncount: infectioncount });
    }
    // 检查物品是否在直接清零的清除感染物品列表中
    else if (infectionMedicinesClear.includes(itemName)) {
        playerData.putInt("mryh_infectioncount", 0);
        playerData.putInt("mryh_infectioncountsdead", 0);
        player.sendData('mryh:infectioncount', { infectioncount: 0 });
        event.item.shrink(1);
    }
});

ItemEvents.foodEaten(event => {
    let player = event.player;
    let item = event.item;
    let playerData = player.persistentData;

    // 获取物品名称
    let itemName = item.id;
    if (infectionMedicinesClearspecial.includes(itemName)) {
        playerData.putInt("mryh_infectioncount", 0);
        playerData.putInt("mryh_infectioncountsdead", 0);
        player.sendData('mryh:infectioncount', { infectioncount: 0 });
    }
})