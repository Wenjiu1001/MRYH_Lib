
ServerEvents.entityLootTables(event => {

    event.modifyEntity("tacz_npc:duty", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })

    event.modifyEntity("tacz_npc:bandit", Loot => {

        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(150) // 300 / 2
            pool.addItem("coal").weight(100) // 200 / 2
            pool.addItem("iron_ingot").weight(75) // 150 / 2
            pool.addItem("gold_ingot").weight(50) // 100 / 2
            pool.addItem("diamond").weight(25) // 50 / 2
            pool.addItem("emerald").weight(10) // 不变
            pool.addItem("netherite_scrap").weight(1) // 不变
            pool.addEmpty(414) // 1000 - (150+100+75+50+25+10+1) = 414
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(300).count([1, 2]) // 600 / 2
            pool.addItem("apocalypsenow:money_block").weight(5) // 10 / 2
            pool.addEmpty(695) // 1000 - (300+5) = 695
        })
    })
})
