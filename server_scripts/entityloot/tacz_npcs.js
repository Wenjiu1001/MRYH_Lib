ServerEvents.entityLootTables(event => {

    event.modifyEntity("tacz_npcs:scav", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:scav_usec", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:scav_usec_armored", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:scav_usec_pistol", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:scav_usec_pistol_armored", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:test_scav", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })
})