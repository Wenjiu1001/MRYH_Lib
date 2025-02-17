
ServerEvents.entityLootTables(event => {

    event.modifyEntity("apocalypsenow:crawler_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:crawler_2", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:crawler_3", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:crawler_4", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:horde_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:horde_2", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:horde_3", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:horde_4", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:horde_5", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:hunter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:looter_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:looter_2", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:looter_3", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:looter_4", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:looter_5", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:military_01", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:military_02", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:military_medic", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_34", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_35", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_36", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_37", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_38", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_39", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_40", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_41", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_42", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_43", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_44", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_45", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_46", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_47", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_48", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_49", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_50", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_51", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_52", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_53", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_54", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_55", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_56", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:runner_57", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:soldiers", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:soldiers_02", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_10", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_2", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_3", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_4", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_5", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_6", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_7", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_8", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:survivor_9", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_1", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_10", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_11", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_12", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_13", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_14", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_15", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_16", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_17", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_18", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_19", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_2", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_20", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_21", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_22", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_23", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_24", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_25", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_26", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_27", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_28", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_29", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_3", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_30", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_31", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_32", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_33", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_4", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_5", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_6", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_7", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_8", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("apocalypsenow:walker_9", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(489) // 1000 - (150+100+75+50+25+10+1) = 489
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

})
