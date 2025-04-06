

/**
 * @param {Internal.LivingHurtEvent_} event 
 * @param {$LivingEntityHurtEventJS_} event
 * @returns
 */
// 处理非玩家造成的伤害
global.HurtCoreByOther = event => {
    /*
    event.entity.invulnerableTime = 10 + 1;
    /*
    TermPlayerHurtByOthers(event)
    */
};

/** 
 * @param {Internal.LivingHurtEvent_} event 
 */
global.HurtCoreByPlayer = event => {
    event.entity.invulnerableTime = 10 + 1;
    /*
    let Damage = event.getSource().getType().toString();
    */
    handleDamageByPlayer(event);
    /*
    TermEntityHurtByPlayers(event)
    */
};

/** 
 * @param {Internal.LivingHurtEvent_} event 
 */
function handleDamageByPlayer(event) {
    let DamageType = event.getSource().getType().toString();
    switch (DamageType) {
        case "tacz.bullet":
            return BulletDamageByPlayer(event);
        default:
            break;
    }
}

/** 
 * @param {Internal.LivingHurtEvent_} event 
 */
function BulletDamageByPlayer(event) {
    let enchantlevel = event.source.player.mainHandItem
    // 战术射击增强
    if (enchantlevel.getEnchantmentLevel("mryh:killeradd_bullet")) {
        let count = event.amount * (1 + 0.1 * enchantlevel.getEnchantmentLevel("mryh:killeradd_bullet"))
        event.setAmount(count)
    }
    // 减速弹
    if (enchantlevel.getEnchantmentLevel("mryh:slowness_bullet")) {
        /**
         * @type {Internal.LivingEntity}
         */
        let entity = event.entity
        entity.potionEffects.add('minecraft:slowness', 60, enchantlevel.getEnchantmentLevel("mryh:slowness_bullet"))
    }
}
