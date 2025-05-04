// 研究所战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:research_institute_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:research_institute_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:research_institute_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:research_institute_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})