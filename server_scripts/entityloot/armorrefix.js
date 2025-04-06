ServerEvents.entityLootTables(event => {

    event.modifyEntity("zombie_extreme:zero_patient", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("max_armory:iron_plate").weight(100)
            pool.addItem("zombie_extreme:uranium").weight(100)
            pool.addItem("zombie_extreme:fulguria_fuel_rod").weight(100)
            pool.addItem("zombie_extreme:batteries").weight(100)
            pool.addEmpty(600)
        })
    })
    event.modifyEntity("zombie_extreme:fetus_spawn", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("max_armory:iron_plate").weight(100)
            pool.addItem("zombie_extreme:uranium").weight(100)
            pool.addItem("zombie_extreme:fulguria_fuel_rod").weight(100)
            pool.addItem("zombie_extreme:batteries").weight(100)
            pool.addEmpty(600)
        })
    })
    event.modifyEntity("zombie_extreme:devestated", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("max_armory:iron_plate").weight(100)
            pool.addItem("zombie_extreme:uranium").weight(100)
            pool.addItem("zombie_extreme:fulguria_fuel_rod").weight(100)
            pool.addItem("zombie_extreme:batteries").weight(100)
            pool.addEmpty(600)
        })
    })
    event.modifyEntity("zombie_extreme:chainsaw", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("max_armory:iron_plate").weight(100)
            pool.addItem("zombie_extreme:uranium").weight(100)
            pool.addItem("zombie_extreme:fulguria_fuel_rod").weight(100)
            pool.addItem("zombie_extreme:batteries").weight(100)
            pool.addEmpty(600)
        })
    })
    event.modifyEntity("zombie_extreme:rat_king", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("max_armory:iron_plate").weight(200)
            pool.addItem("zombie_extreme:uranium").weight(200)
            pool.addItem("zombie_extreme:fulguria_fuel_rod").weight(200)
            pool.addItem("zombie_extreme:batteries").weight(200)
            pool.addEmpty(200)
        })
    })
})

LootJS.modifiers(e => {
    e.addEntityLootModifier('pig')
        .removeLoot(Ingredient.all)
        .addLoot("minecraft:porkchop")
    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot("touhou_little_maid:power_point")
})
