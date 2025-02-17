
ServerEvents.entityLootTables(event => {
    let entities = [
        "zombie_extreme:faceless",
        "zombie_extreme:ram",
        "spore:proto",
        "spore:reconstructor",
        "spore:delusioner",
        "spore:verva",
        "spore:braurei",
        "spore:usurper",
        "spore:umarmed",
        "spore:vigil",
        "spore:mound",
        "spore:gastgaber",
        "spore:scamper",
        "spore:claw",
        "spore:scent",
        "spore:volatile",
        "spore:brute",
        "spore:stalker",
        "spore:howler",
        "spore:spitter",
        "spore:slasher",
        "spore:leaper",
        "spore:busser",
        "spore:braiomil",
        "spore:griefer",
        "spore:knight",
        "undead_revamp2:slaveman"
    ];

    entities.forEach(entity => {
        event.modifyEntity(entity, Loot => {
            Loot.addPool(pool => {
                pool.killedByPlayer();

                let items = [
                    { item: "iron_ingot", weight: 400, count: 10 },
                    { item: "gold_ingot", weight: 200, count: 10 },
                    { item: "diamond", weight: 200, count: 2 },
                    { item: "emerald", weight: 100, count: 2 },
                    { item: "netherite_scrap", weight: 10 }
                ];

                // 使用 concat() 方法避免潜在的语法问题
                let pool1Items = entity.startsWith("spore:") 
                    ? items.concat([{ item: "minecraft:dragon_breath", weight: 50, count: 2 }])
                    : items;

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
                    { item: "apocalypsenow:money", weight: 600, count: [10, 20] },
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
