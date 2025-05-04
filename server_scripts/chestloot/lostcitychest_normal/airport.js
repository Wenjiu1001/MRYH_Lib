// 机场战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:airport_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:airport_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:airport_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:airport_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})