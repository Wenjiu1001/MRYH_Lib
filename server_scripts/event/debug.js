

let $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

$BuiltInRegistries.ENCHANTMENT.forEach((/**@type {Internal.Enchantment} key */key, value) => {
    if (key.category == "UNIVERSAL_ENCHANTS_MRYH_KILLERADD_BULLET_3") {
        /**@type {Internal.EnchantmentCategory} */
        console.log(key.category.canEnchant(Item.of("tacz:modern_kinetic_gun")))
    } else if (key.category == "UNIVERSAL_ENCHANTS_MRYH_KILLERADD_BULLET") {
        console.log(key.category.canEnchant(Item.of("tacz:modern_kinetic_gun")))
    }
})
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
    // 增强射击战术
    if (enchantlevel.getEnchantmentLevel("mryh:tactical_enhancement")) {
        let count = event.amount * (1 + 0.1 * enchantlevel.getEnchantmentLevel("mryh:tactical_enhancement"))
        event.setAmount(count)
    }
    // 减速弹
    if (enchantlevel.getEnchantmentLevel("mryh:slowing_bullets")) {
        /**
         * @type {Internal.LivingEntity}
         */
        let entity = event.entity
        entity.potionEffects.add('minecraft:slowness', 60, enchantlevel.getEnchantmentLevel("mryh:slowing_bullets"))
    }
}
