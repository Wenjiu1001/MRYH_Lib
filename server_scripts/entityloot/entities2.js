
ServerEvents.entityLootTables(event => {
    const entities = [
        "zombie_extreme:clicker",
        "zombie_extreme:boomer",
        "zombie_extreme:revived",
        "undead_revamp2:thespitter",
        "undead_revamp2:invisiblebidy",
        "undead_revamp2:thebidyupside",
        "undead_revamp2:deadclogger",
        "undead_revamp2:theordure",
        "undead_revamp2:clogger",
        "undead_revamp2:invisiclogger",
        "undead_revamp2:bomber"
    ];

    entities.forEach(entity => {
        event.modifyEntity(entity, Loot => {
            Loot.addPool(pool => {
                pool.killedByPlayer();

                let items = [
                    { item: "copper_ingot", weight: 300, count: 2 },
                    { item: "coal", weight: 200, count: 2 },
                    { item: "iron_ingot", weight: 150, count: 2 },
                    { item: "gold_ingot", weight: 100, count: 2 },
                    { item: "diamond", weight: 100 },
                    { item: "emerald", weight: 20 },
                    { item: "netherite_scrap", weight: 1 }
                ];

                let pool1Items = entity.startsWith("undead_revamp2") ? [
                    { item: "copper_ingot", weight: 250, count: 2 },
                    { item: "coal", weight: 150, count: 2 },
                    { item: "minecraft:prismarine_crystals", weight: 100 },
                    { item: "iron_ingot", weight: 150, count: 2 },
                    { item: "gold_ingot", weight: 100, count: 2 },
                    { item: "diamond", weight: 100 },
                    { item: "emerald", weight: 20 },
                    { item: "netherite_scrap", weight: 1 }
                ] : items;

                pool1Items.forEach(item => {
                    let adjustedWeight = item.weight > 5 ? Math.floor(item.weight / 2) : item.weight;
                    let count = item.count instanceof Array ? item.count : [item.count, item.count];
                    let adjustedCount = (
                        typeof item.count === "object"
                        ? item.count[0] < 2 || item.count[1] > 5
                        : count[0] < 2 || count[1] > 5
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
                    { item: "apocalypsenow:money", weight: 600, count: [2, 4] },
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
        });
    });
});
