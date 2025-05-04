// 电影院战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:cinema_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:cinema_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:cinema_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:cinema_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})