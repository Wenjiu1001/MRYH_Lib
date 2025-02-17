// 居民住宅战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:apartment_1', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })

    event.modify('mryh:apartment_2', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })

    event.modify('mryh:apartment_3', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })

    event.modify('mryh:apartment_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})
