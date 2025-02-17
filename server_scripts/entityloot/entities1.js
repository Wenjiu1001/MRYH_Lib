
ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:zombie", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(35) // 70 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("lapis_lazuli").weight(15) // 30 / 2
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(554) // 1000 - (150+100+75+35+25+10+15+1) = 554
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
        Loot.addPool(pool => {
            pool.addItem("gunpowder").weight(100) // 200 / 2
            pool.addItem("bone").weight(25) // 50 / 2
            pool.addItem("spider_eye").weight(25) // 50 / 2
            pool.addItem("phantom_membrane").weight(25) // 50 / 2
            pool.addItem("carrot").weight(25) // 50 / 2
            pool.addItem("ender_pearl").weight(20) // 40 / 2
            pool.addItem("potato").weight(25) // 50 / 2
            pool.addItem("ghast_tear").weight(5) // 10 / 2
            pool.addEmpty(725) // 1000 - (100+25+25+25+25+20+25+5) = 725
        })
    })
    event.modifyEntity("minecraft:zombie_horse", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(594) // 1000 - (150+100+75+50+25+10+1) = 594
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })
    event.modifyEntity("minecraft:zombie_villager", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(594) // 1000 - (150+100+75+50+25+10+1) = 594
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })
    event.modifyEntity("minecraft:zombified_piglin", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(594) // 1000 - (150+100+75+50+25+10+1) = 594
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })
    event.modifyEntity("spore:inf_hazmat", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("minecraft:dragon_breath").weight(25) // 50 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(564) // 1000 - (150+100+75+50+25+25+10+1) = 564
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100) // 不变
            pool.addEmpty(900) // 1000 - 100 = 900
        })
    })
})
