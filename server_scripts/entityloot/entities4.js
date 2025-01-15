ServerEvents.entityLootTables(event => {
    event.modifyEntity("zombie_extreme:faceless", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(90)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("zombie_extreme:ram", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

    event.modifyEntity("spore:proto", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })

    })

    event.modifyEntity("spore:reconstructor", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:delusioner", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:verva", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:braurei", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:usurper", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:umarmed", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:vigil", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:mound", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:gastgaber", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:scamper", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:claw", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:scent", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:volatile", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:brute", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:stalker", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:howler", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:spitter", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:slasher", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:leaper", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:busser", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:braiomil", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:griefer", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("spore:knight", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(400).count(10)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("minecraft:dragon_breath").weight(50).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(40)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
        Loot.addPool(pool => {
            pool.addItem("modern_structures:netherstarshard").weight(100)
            pool.addEmpty(900)
        })
    })

    event.modifyEntity("undead_revamp2:slaveman", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("iron_ingot").weight(200).count(10)
            pool.addItem("minecraft:prismarine_crystals").weight(200)
            pool.addItem("gold_ingot").weight(200).count(10)
            pool.addItem("diamond").weight(200).count(2)
            pool.addItem("emerald").weight(100).count(2)
            pool.addItem("netherite_scrap").weight(10)
            pool.addEmpty(90)
        })
        Loot.addPool(pool => {
            pool.addItem("apocalypsenow:money").weight(600).count([10, 20])
            pool.addItem("apocalypsenow:money_block").weight(10)
            pool.addEmpty(390)
        })
    })

})
