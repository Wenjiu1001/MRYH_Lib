ServerEvents.entityLootTables(event => {
    event.modifyEntity("zombie_extreme:assasin_black_ops", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(245)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:chainsaw", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(245)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:infected_juggernaut", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(245)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("spore:inf_scientist", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_player", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_drowned", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_wanderer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_evoker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_vindicator", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_pillager", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_witch", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_villager", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_husk", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:inf_human", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("undead_revamp2:thebeartamer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(5)
            pool.addItem("gold_ingot").weight(200).count(5)
            pool.addItem("diamond").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("emerald").weight(50)
            pool.addItem("netherite_scrap").weight(5)
            pool.addEmpty(195)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([5, 10])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })
})