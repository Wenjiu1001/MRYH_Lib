

let $EnchantmentCategory = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentCategory')

$EnchantmentCategory.create('test', (i) => true)
StartupEvents.registry("enchantment", e => {
    e.create("mryh:slowness_bullet")
        .canEnchant((item) => {
            return item.id == 'tacz:modern_kinetic_gun'
        })
        .minLevel(1)
        .maxLevel(5)
        .category('test')
        .rarity('very_rare')
        .displayName("减速子弹")
    e.create("mryh:killeradd_bullet")
        .canEnchant((item) => {
            return item.id == 'tacz:modern_kinetic_gun'
        })
        .minLevel(1)
        .maxLevel(5)
        .category('test')
        .rarity('very_rare')
        .displayName("增强射击战术")
})
