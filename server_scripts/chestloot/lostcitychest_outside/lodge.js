// 旅馆战利品表
ServerEvents.chestLootTables(event => {
    event.modify('mryh:lodge_1', loot => {
        loot.addPool(pool => {
            pool.addItem('copper_ingot')
        })
    })

    event.modify('mryh:lodge_2', loot => {
        loot.addPool(pool => {
            pool.addItem('iron_ingot')
        })
    })

    event.modify('mryh:lodge_3', loot => {
        loot.addPool(pool => {
            pool.addItem('gold_ingot')
        })
    })

    event.modify('mryh:lodge_4', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:diamond')
        })
    })
})



LootJS.modifiers(e => {
    e.addLootTableModifier(/.*lodge.*/)
        .randomChance(1)
        .apply((context) => {
            context.addLoot(
                LootEntry.of("minecraft:beef", getRandomNumber(1, 2)).withChance(getRandomChance(0.1, 0.7))
            );
        });
})