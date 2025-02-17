
ServerEvents.entityLootTables(event => {
    let entities = [
        "zombie_extreme:fetus",
        "zombie_extreme:night_hunter",
        "zombie_extreme:goon",
        "spore:wendigo",
        "spore:brot",
        "spore:inquisitor",
        "spore:plagued",
        "undead_revamp2:theheavy",
        "undead_revamp2:thehorrors"
    ];

    entities.forEach(entity => {
        event.modifyEntity(entity, Loot => {
            Loot.addPool(pool => {
                pool.killedByPlayer();

                let items = [
                    { item: "iron_ingot", weight: 300, count: 15 },
                    { item: "minecraft:dragon_breath", weight: 100, count: 2 },
                    { item: "gold_ingot", weight: 200, count: 15 },
                    { item: "diamond", weight: 200, count: 4 },
                    { item: "emerald", weight: 150, count: 2 },
                    { item: "netherite_scrap", weight: 15 }
                ];

                let pool1Items = entity.startsWith("undead_revamp2:") ? [
                    { item: "iron_ingot", weight: 300, count: 15 },
                    { item: "minecraft:dragon_breath", weight: 100, count: 2 },
                    { item: "gold_ingot", weight: 200, count: 15 },
                    { item: "diamond", weight: 200, count: 4 },
                    { item: "emerald", weight: 150, count: 2 },
                    { item: "netherite_scrap", weight: 15 }
                ] : items;

                pool1Items.forEach(item => {
                    let adjustedWeight = item.weight > 5 ? Math.floor(item.weight / 2) : item.weight;
                    let count = item.count instanceof Array ? item.count : [item.count, item.count];
                    let adjustedCount = (
                        typeof item.count === "object"
                        ? item.count[0] < 2 || item.count[1] > 5
                        : false
                    )
                        ? item.count
                        : item.count;

                    pool.addItem(item.item)
                        .weight(adjustedWeight)
                        .count(adjustedCount);
                });

                let sumWeight = pool1Items.reduce(
                    (total, item) => total + (item.weight > 5 ? Math.floor(item.weight / 2) : item.weight),
                    0
                );
                pool.addEmpty(1000 - sumWeight);
            });

            Loot.addPool(pool => {
                let moneyItems = [
                    { item: "apocalypsenow:money", weight: 600, count: [15, 30] },
                    { item: "apocalypsenow:money_block", weight: 10 }
                ];

                moneyItems.forEach(item => {
                    let adjustedWeight = item.weight > 5 ? Math.floor(item.weight / 2) : item.weight;
                    let adjustedCount = (
                        item.count instanceof Array
                            ? item.count[0] < 2 || item.count[1] > 5
                            : false
                    )
                        ? item.count
                        : item.count;
                    pool.addItem(item.item)
                        .weight(adjustedWeight)
                        .count(adjustedCount);
                });

                let sumMoneyWeight = moneyItems.reduce(
                    (total, item) => total + (item.weight > 5 ? Math.floor(item.weight / 2) : item.weight),
                    0
                );
                pool.addEmpty(1000 - sumMoneyWeight);
            });

            if (entity.startsWith("spore:") || entity === "undead_revamp2:theheavy") {
                Loot.addPool(pool => {
                    pool.addItem("modern_structures:netherstarshard").weight(200);
                    pool.addEmpty(800);
                });
            }
        });
    });
});
