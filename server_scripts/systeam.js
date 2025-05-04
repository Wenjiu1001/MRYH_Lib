
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
    DifficultdamageToPlayer(e)
};

/** 
 * @param {Internal.LivingHurtEvent_} event 
 */
global.HurtCoreByPlayer = event => {
    event.entity.invulnerableTime = 10 + 1;
    handleDamageByPlayer(event);
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

let tagToMultiplier = {
    'difficult_level_1': 0.8,
    'difficult_level_2': 1.0,
    'difficult_level_3': 1.5,
    'difficult_level_4': 2.0
};

/** 
 * @param {Internal.LivingHurtEvent_} e 
 */
function DifficultdamageToPlayer(e) {
    if (!e.entity.isPlayer()) return;

    let multiplier = 1.0;

    for (let tag in tagToMultiplier) {
        if (e.entity.tags.contains(tag)) {
            multiplier = tagToMultiplier[tag];
            break;
        }
    }

    e.amount = Math.round(e.amount * multiplier * 100) / 100;
}
