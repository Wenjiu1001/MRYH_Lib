EntityEvents.hurt(event => {
    if (event.entity.isPlayer()) {
        let player = event.player;
        let playerData = player.persistentData;
        let bleedcount = playerData.getInt("mryh_bleedcount");
        let armor_vaule = player.getAttributeValue('generic.armor');
        let armor_tou_vaule = player.getAttributeValue('generic.armor_toughness');
        if (event.source.actual instanceof $Zombie) {
            let chanceToBleed = calculateBleedChance(armor_vaule, armor_tou_vaule);
            if (bleedcount < 100 && Math.random() > chanceToBleed) {
                bleedcount++;
                playerData.putInt("mryh_bleedcount", bleedcount);
                player.sendData('mryh:bleedcount', { bleedcount: bleedcount });
            }
        }
    }
});

PlayerEvents.tick(event => {
    let player = event.player;
    let playerData = player.persistentData;
    let bleedcount = playerData.getInt("mryh_bleedcount");
    let bleedTickCounter = playerData.getInt("mryh_bleedTickCounter");
    let maxHealth = player.getMaxHealth();
    let armor_tou_vaule = player.getAttributeValue('generic.armor_toughness');

    bleedTickCounter++;

    if (bleedTickCounter >= 120) {
        bleedTickCounter = 0;

        let healthToReduce = 0;
        let reductionFactor = 1.0; // 默认减少比例

        if (bleedcount > 0 && bleedcount < 50) {
            healthToReduce = maxHealth * 0.01; // 1% of max health
        } else if (bleedcount >= 50 && bleedcount < 100) {
            healthToReduce = maxHealth * 0.02; // 2% of max health
        } else if (bleedcount === 100) {
            healthToReduce = maxHealth * 0.05; // 5% of max health
        }

        // 计算护甲和韧性的影响
        reductionFactor = calculateReductionFactor(armor_tou_vaule);

        if (healthToReduce > 0) {
            let currentHealth = player.getHealth();
            let newHealth = Math.max(currentHealth - healthToReduce * reductionFactor, 0);
                if (newHealth <= 0) {
                    // 如果生命值小于等于 0，则杀死玩家
                    player.kill()
                } else {
                    // 否则，减少生命值
                    player.health = newHealth;
                }
        }
    }

    playerData.putInt("mryh_bleedTickCounter", bleedTickCounter);
});

PlayerEvents.respawned(event => {
    let player = event.player;
    let playerData = player.persistentData;
    playerData.putInt("mryh_bleedcount", 0);
    playerData.putInt("mryh_bleedTickCounter", 0);
    player.sendData('mryh:bleedcount', { bleedcount: 0 });
});

// 减少固定数值的药品列表
const medicinesReduceFixed = [
    "apocalypsenow:bandage",
    "apocalypsenow:medicalkit",
    "apocalypsenow:rags",
    "apocalypsenow:cleanrags",
    "apocalypsenow:suturekit"
];

// 直接清零的药品列表，需要长时间使用并shrink
const medicinesClear = [
    "scalinghealth:bandages",
    "scalinghealth:medkit",
    "zombie_extreme:bandage",
    "zombiekit:bandage",
    "zombiekit:medical_kit"
];

ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    let playerData = player.persistentData;

    // 获取物品名称
    let itemName = item.id;

    // 检查物品是否在减少固定数值的药品列表中
    if (medicinesReduceFixed.includes(itemName)) {
        let bleedcount = playerData.getInt("mryh_bleedcount");
        let reductionAmount = 30;
        bleedcount = Math.max(bleedcount - reductionAmount, 0); // 确保不小于0
        playerData.putInt("mryh_bleedcount", bleedcount);
        playerData.putInt("mryh_bleedTickCounter", 0);
        player.sendData('mryh:bleedcount', { bleedcount: bleedcount });
    }
    // 检查物品是否在直接清零的药品列表中
    else if (medicinesClear.includes(itemName)) {
        playerData.putInt("mryh_bleedcount", 0);
        playerData.putInt("mryh_bleedTickCounter", 0);
        player.sendData('mryh:bleedcount', { bleedcount: 0 });
        event.item.shrink(1);
    }
});


function calculateBleedChance(armorValue, toughnessValue) {
    let armorEffect = calculateArmorEffect(armorValue);
    let toughnessEffect = calculateToughnessEffect(toughnessValue);
    return (armorEffect * 0.5) + toughnessEffect;
}

function calculateArmorEffect(armorValue) {
    if (armorValue >= 30) {
        return 0.5; // 50% chance to not apply bleed count
    } else if (armorValue >= 10) {
        return 0.3; // 30% chance to not apply bleed count
    } else {
        return 0.1; // 10% chance to not apply bleed count
    }
}

function calculateToughnessEffect(toughnessValue) {
    if (toughnessValue > 20) {
        return 0.6; // 60% chance to not apply bleed count
    } else if (toughnessValue >= 10) {
        return 0.4; // 40% chance to not apply bleed count
    } else {
        return 0.2; // 20% chance to not apply bleed count
    }
}

function calculateReductionFactor(toughnessValue) {
    if (toughnessValue > 20) {
        return 0.5; // 减少50%的伤害
    } else if (toughnessValue >= 10) {
        return 0.7; // 减少30%的伤害
    } else {
        return 0.9; // 减少10%的伤害
    }
}
