ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:zombie", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(70)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("lapis_lazuli").weight(30)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(189)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("gunpowder").weight(200).count([1, 2])
            pool.addItem("bone").weight(50).count([1, 2])
            pool.addItem("spider_eye").weight(50).count([1, 2])
            pool.addItem("phantom_membrane").weight(50).count([1, 2])
            pool.addItem("carrot").weight(50).count([1, 2])
            pool.addItem("ender_pearl").weight(40).count([1, 2])
            pool.addItem("potato").weight(50).count([1, 2])
            pool.addItem("ghast_tear").weight(10).count([1, 2])
            pool.addEmpty(500)
        })
    })
    event.modifyEntity("minecraft:zombie_horse", Loot => {
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
    event.modifyEntity("minecraft:zombie_villager", Loot => {
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
    event.modifyEntity("minecraft:zombified_piglin", Loot => {
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
    event.modifyEntity("spore:inf_hazmat", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("copper_ingot").weight(300)
            pool.addItem("coal").weight(200)
            pool.addItem("iron_ingot").weight(150)
            pool.addItem("gold_ingot").weight(100)
            pool.addItem("minecraft:dragon_breath").weight(50)
            pool.addItem("diamond").weight(50)
            pool.addItem("emerald").weight(10)
            pool.addItem("netherite_scrap").weight(1)
            pool.addEmpty(139)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([1, 2])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })
})