ServerEvents.entityLootTables(event => {
    event.modifyEntity("zombie_extreme:clicker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:boomer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:revived", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:terrorist_scav_pistol", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:terrorist_scav_pistol_armored", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:terrorist_scav", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("tacz_npcs:terrorist_no_armor", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300).count(2)
            pool.addItem("coal").weight(200).count(2)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:thespitter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:invisiblebidy", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:thebidyupside", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:deadclogger", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:theordure", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:clogger", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("undead_revamp2:invisiclogger", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })


    event.modifyEntity("undead_revamp2:bomber", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(250).count(2)
            pool.addItem("coal").weight(150).count(2)
            pool.addItem("minecraft:prismarine_crystals").weight(100)
            pool.addItem("iron_ingot").weight(150).count(2)
            pool.addItem("gold_ingot").weight(100).count(2)
            pool.addItem("diamond").weight(100)
            pool.addItem("emerald").weight(20)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(128)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([2, 4])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })
})