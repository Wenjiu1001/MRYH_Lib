ServerEvents.entityLootTables(event => {
    event.modifyEntity("zombie_extreme:rat_king", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:demolisher", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:zero_patient", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("spore:hindenburg", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(500)
            pool.addEmpty(500)
        })
    })

    event.modifyEntity("spore:gazenbreacher", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(500)
            pool.addEmpty(500)
        })
    })

    event.modifyEntity("spore:sieger", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(330).count(20)
            pool.addItem("gold_ingot").weight(200).count(40)
            pool.addItem("diamond").weight(250).count(6)
            pool.addItem("emerald").weight(200).count(2)
            pool.addItem("netherite_scrap").weight(20)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([20, 40])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(500)
            pool.addEmpty(500)
        })
    })
})