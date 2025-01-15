/*
StartupEvents.registry('item', e => {
    //物品轮子-多图层
    e.create('soda_incan')
        .color((itemstack, tintIndex) => global.setTint_one(itemstack, tintIndex))
        .useAnimation('drink')
        .useDuration(itemstack => 32)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (itemstack.getOrCreateTag().potions !== undefined) {
                itemstack.nbt.potions.forEach(ep => {
                    entity.potionEffects.add(ep.effect, ep.time * 20, ep.level - 1, false, true)
                })
            }
            if (entity.player) {
                /** @type {$Player_}
                let player = entity
                level.server.schedule(1, (_) => { player.addItem(Item.of('kubejs:soda_can').item) })
            }
        })
        .textureJson({
            layer0: 'kubejs:item/food/soda/soda_incan_0',
            layer1: 'kubejs:item/food/soda/soda_incan_1'
        })
        .tag("create:upright_on_belt")
        .displayName("罐装汽水")

    return itemstack.shrink(1)
})
*/
