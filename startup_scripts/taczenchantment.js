
StartupEvents.registry("enchantment", e => {
    e.create("mryh:slowness_bullet")
        .canEnchant((item) => {
            return item.id == 'tacz:modern_kinetic_gun'
        })
        .minLevel(1)
        .maxLevel(5)
        .displayName("减速子弹")
    e.create("mryh:killeradd_bullet")
        .canEnchant((item) => {
            return item.id == 'tacz:modern_kinetic_gun'
        })
        .damageBonus((level, entityType) => {
            if (entityType == "undead") {
                return level * 2
            }
        })
        .minLevel(1)
        .maxLevel(5)
        .displayName("增强射击战术")
})