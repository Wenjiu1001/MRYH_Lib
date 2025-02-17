
ServerEvents.entityLootTables(event => {

    event.modifyEntity("undead_revamp2:thespectre", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thepregnant", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thehorrorsdecoys", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thesmoker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:the_moonflower", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thegliter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:sucker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thehunter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:theswarmer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thebidy", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thewolf", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:therod", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:theimmortal", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:invisiimmortal", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:theskeeper", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thesomnolence", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:axestrom", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:crackleball", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:flame", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:coppertar", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:propball_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:smokesmitter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("undead_revamp2:thelurker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("minecraft:prismarine_crystals").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })
})
