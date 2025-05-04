
let $EnchantmentCategory = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentCategory')
let $ModernKineticGunItem = Java.loadClass('com.tacz.guns.item.ModernKineticGunItem')
let $TimelessAPI = Java.loadClass("com.tacz.guns.api.TimelessAPI")
let $Integer = Java.loadClass('java.lang.Integer')

// tacz的枪械通用附魔类别
let tacz_common = $EnchantmentCategory.create('TACZC', (item) => item instanceof $ModernKineticGunItem)
let un = $EnchantmentCategory.create('UN', (item) => true)

StartupEvents.registry("enchantment", e => {

    e.create("mryh:tactical_enhancement")
        .category(tacz_common)
        .minLevel(1)
        .maxLevel(5)
        .veryRare()
        .displayName("增强射击战术")

    e.create("mryh:slowing_bullets")
        .category(tacz_common)
        .minLevel(1)
        .maxLevel(5)
        .veryRare()
        .displayName("减速子弹")
    e.create("mryh:unbreakable")
        .category(un)
        .displayName("无法破坏")
})


ItemEvents.modification(e => {

    e.modify('tacz:modern_kinetic_gun', item => {

        // 忆然：给枪械附魔能力
        item.setEnchantmentValueFunction((stack) => {

            let value

            $TimelessAPI.getCommonGunIndex(item.getGunId(stack)).ifPresent(index => {

                // 筛选枪械类型
                switch (index.getType()) {
                    // 霰弹枪
                    case "shotgun":
                        return value = 10
                    // 未指定类型
                    default:
                        return value = 1
                }

            })

            return $Integer.valueOf(String(value))

        })
    })

})
