
ServerEvents.entityLootTables(event => {
    const entities = [
        "zombie_extreme:assasin_black_ops",
        "zombie_extreme:chainsaw",
        "zombie_extreme:infected_juggernaut",
        "spore:inf_scientist",
        "spore:inf_player",
        "spore:inf_drowned",
        "spore:inf_wanderer",
        "spore:inf_evoker",
        "spore:inf_vindicator",
        "spore:inf_pillager",
        "spore:inf_witch",
        "spore:inf_villager",
        "spore:inf_husk",
        "spore:inf_human",
        "undead_revamp2:thebeartamer"
    ];

    entities.forEach(entity => {
        event.modifyEntity(entity, Loot => {
            Loot.addPool(pool => {
                pool.killedByPlayer();

                const items = [
                    { item: "iron_ingot", weight: 400, count: 5 },
                    { item: "gold_ingot", weight: 200, count: 5 },
                    { item: "diamond", weight: 100, count: 2 },
                    { item: "emerald", weight: 50 },
                    { item: "netherite_scrap", weight: 5 }
                ];

                // 使用 concat() 方法避免潜在的语法问题
                const pool1Items = entity.startsWith("spore:") 
                    ? items.concat([{ item: "minecraft:dragon_breath", weight: 50 }])
                    : items;

                pool1Items.forEach(item => {
                    const adjustedWeight = item.weight > 5 ? Math.floor(item.weight / 2) : item.weight;
                    const count = item.count instanceof Array ? item.count : [item.count, item.count];
                    const adjustedCount = (
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

                const sumWeight = pool1Items.reduce(
                    (total, item) => total + (item.weight > 5 ? Math.floor(item.weight / 2) : item.weight),
                    0
                );
                pool.addEmpty(1000 - sumWeight);
            });

            Loot.addPool(pool => {
                const moneyItems = [
                    { item: "apocalypsenow:money", weight: 600, count: [5, 10] },
                    { item: "apocalypsenow:money_block", weight: 10 }
                ];

                moneyItems.forEach(item => {
                    const adjustedWeight = item.weight > 5 ? Math.floor(item.weight / 2) : item.weight;
                    const adjustedCount = (
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

                const sumMoneyWeight = moneyItems.reduce(
                    (total, item) => total + (item.weight > 5 ? Math.floor(item.weight / 2) : item.weight),
                    0
                );
                pool.addEmpty(1000 - sumMoneyWeight);
            });
        });
    });
});
