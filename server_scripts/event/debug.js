
/*ServerEvents.blockLootTables((event) => {
    event.modifyBlock('apocalypsenow:blocks/dropboxcommon', (loot) => {
        // 遍历战利品表中的所有奖池
        loot.pools.forEach((pool) => {
            // 遍历奖池中的所有物品
            pool.entries.forEach((entry) => {
                // 输出物品ID
                console.log(entry.name);
            });
        });
    });
});*/

EntityEvents.hurt(event => {
    let enchantlevel = event.source.player.mainHandItem.getEnchantmentLevel("mryh:slowness_bullet")
    if (event.source.actual.isPlayer()) {
        if (event.source.player.mainHandItem.getEnchantmentLevel("mryh:slowness_bullet")) {
            event.entity.potionEffects.add('minecraft:slowness', 30, enchantlevel)
        }
    }
});


/**
 * @param {$LivingEntityHurtEventJS_} event
 * @returns
 */

// 处理非玩家造成的伤害
global.HurtCoreByOther = event => {
    // 这里添加处理非玩家造成的伤害的逻辑
    console.log("Handling damage by other", event);
};

global.HurtCoreByPlayer = event => {
    // 设置被攻击者的无敌帧为1帧
    event.entity.invulnerableTime = 10 + 1;
    let Damage = event.getSource().getType().toString();
    // 不同的伤害类型会转向不同的函数，优先根据数值计算出初步伤害
    handleDamageByPlayer(event);
};

function handleDamageByPlayer(event) {
    let DamageType = event.getSource().getType().toString();
    switch (DamageType) {
        case "tacz.bullet":
            return BulletDamageByPlayer(event);
        default:
            break;
    }
}

function BulletDamageByPlayer(event) {
    let enchantlevel = event.source.player.mainHandItem.getEnchantmentLevel("mryh:killeradd_bullet")
    let count = event.amount * (1 + 0.5 * enchantlevel)
    if (enchantlevel) {
        event.setAmount(count)
    }
}
