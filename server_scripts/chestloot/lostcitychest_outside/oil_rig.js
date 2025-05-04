// 油井战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:oil_rig_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:oil_rig_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:oil_rig_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:oil_rig_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})