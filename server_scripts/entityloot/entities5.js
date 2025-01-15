ServerEvents.entityLootTables(event => {
    event.modifyEntity("zombie_extreme:fetus", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(15)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:night_hunter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(15)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:goon", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(15)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("spore:wendigo", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(300).count(15)
            pool.addItem("minecraft:dragon_breath").weight(100).count(2)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:brot", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(300).count(15)
            pool.addItem("minecraft:dragon_breath").weight(100).count(2)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inquisitor", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(300).count(15)
            pool.addItem("minecraft:dragon_breath").weight(100).count(2)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:plagued", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(300).count(15)
            pool.addItem("minecraft:dragon_breath").weight(100).count(2)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("undead_revamp2:theheavy", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(300).count(15)
            pool.addItem("minecraft:dragon_breath").weight(100).count(2)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:thehorrors", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(200).count(15)
            pool.addItem("minecraft:prismarine_crystals").weight(200)
            pool.addItem("gold_ingot").weight(200).count(15)
            pool.addItem("diamond").weight(200).count(4)
            pool.addItem("emerald").weight(150).count(2)
            pool.addItem("netherite_scrap").weight(15)
            pool.addEmpty(35)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([15, 30])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })
})