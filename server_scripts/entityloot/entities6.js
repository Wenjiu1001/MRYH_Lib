
ServerEvents.entityLootTables(event => {
    let entities = [
        "zombie_extreme:rat_king",
        "zombie_extreme:demolisher",
        "zombie_extreme:zero_patient",
        "spore:hindenburg",
        "spore:gazenbreacher",
        "spore:sieger"
    ];

    entities.forEach(entity => {
        event.modifyEntity(entity, Loot => {
            Loot.addPool(pool => {
                pool.killedByPlayer();

                let items = [
                    { item: "iron_ingot", weight: 330, count: 20 },
                    { item: "gold_ingot", weight: 200, count: 40 },
                    { item: "diamond", weight: 250, count: 6 },
                    { item: "emerald", weight: 200, count: 2 },
                    { item: "netherite_scrap", weight: 20 }
                ];

                items.forEach(item => {
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

                let sumWeight = items.reduce(
                    (total, item) => total + (item.weight > 5 ? Math.floor(item.weight / 2) : item.weight),
                    0
                );
                pool.addEmpty(1000 - sumWeight);
            });

            Loot.addPool(pool => {
                let moneyItems = [
                    { item: "apocalypsenow:money", weight: 600, count: [20, 40] },
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

            if (entity.startsWith("spore:")) {
                Loot.addPool(pool => {
                    pool.addItem("modern_structures:netherstarshard").weight(500);
                    pool.addEmpty(500);
                });
            }
        });
    });
});
