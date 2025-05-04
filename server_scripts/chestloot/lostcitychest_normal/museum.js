// 博物馆战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:museum_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:museum_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:museum_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:museum_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})