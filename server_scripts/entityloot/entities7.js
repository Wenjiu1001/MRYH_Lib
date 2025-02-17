
ServerEvents.entityLootTables(event => {
    event.modifyEntity("spore:howitzer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("diamond").weight(500).count(10)
            pool.addItem("emerald").weight(400).count(10)
            pool.addItem("netherite_scrap").weight(100)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([50, 100])
            pool.addItem("apocalypsenow:money_block").weight(400)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(800)
            pool.addEmpty(200)
        })
    })
})
