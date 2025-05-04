
// 定义掉落物品的数组
let militaryairdroplowLuck = [
    "marbledsarsenal:black_juggernaut_armor_helmet",
    "zombiekit:standard_riot_helmet",
    "zombiekit:snow_riot_helmet",
    "zombiekit:forest_riot_helmet",
    "zombiekit:desert_riot_helmet",
    "max_armory:lamellar_armor_helmet",
    "zombiekit:snow_tactical_helmet",
    "zombiekit:forest_tactical_helmet",
    "zombiekit:desert_tactical_helmet",
    "marbledsarsenal:black_juggernaut_armor_chestplate",
    "zombiekit:standard_riot_chestplate",
    "zombiekit:snow_riot_chestplate",
    "zombiekit:forest_riot_chestplate",
    "zombiekit:desert_riot_chestplate",
    "max_armory:lamellar_armor_chestplate",
    "zombiekit:snow_tactical_chestplate",
    "zombiekit:forest_tactical_chestplate",
    "zombiekit:desert_tactical_chestplate",
    "marbledsarsenal:black_juggernaut_armor_leggings",
    "zombiekit:standard_riot_leggings",
    "zombiekit:snow_riot_leggings",
    "zombiekit:forest_riot_leggings",
    "zombiekit:desert_riot_leggings",
    "max_armory:lamellar_armor_leggings",
    "zombiekit:snow_tactical_leggings",
    "zombiekit:forest_tactical_leggings",
    "zombiekit:desert_tactical_leggings",
    "marbledsarsenal:black_juggernaut_armor_boots",
    "zombiekit:standard_riot_boots",
    "zombiekit:snow_riot_boots",
    "zombiekit:forest_riot_boots",
    "zombiekit:desert_riot_boots",
    "max_armory:lamellar_armor_boots",
    "zombiekit:snow_tactical_boots",
    "zombiekit:forest_tactical_boots",
    "zombiekit:desert_tactical_boots",
    "minecraft:chainmail_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_helmet",
    "minecraft:diamond_helmet",
    "minecraft:netherite_helmet",
    "apocalypsenow:yellow_football_armor_helmet",
    "apocalypsenow:red_football_armor_helmet",
    "apocalypsenow:blue_football_armor_helmet",
    "apocalypsenow:black_football_armor_helmet",
    "minecraft:chainmail_chestplate",
    "minecraft:iron_chestplate",
    "minecraft:golden_chestplate",
    "minecraft:diamond_chestplate",
    "minecraft:netherite_chestplate",
    "apocalypsenow:yellow_football_armor_chestplate",
    "apocalypsenow:red_football_armor_chestplate",
    "apocalypsenow:blue_football_armor_chestplate",
    "apocalypsenow:black_football_armor_chestplate",
    "minecraft:chainmail_leggings",
    "minecraft:iron_leggings",
    "minecraft:golden_leggings",
    "minecraft:diamond_leggings",
    "minecraft:netherite_leggings",
    "apocalypsenow:yellow_football_armor_leggings",
    "apocalypsenow:red_football_armor_leggings",
    "apocalypsenow:blue_football_armor_leggings",
    "apocalypsenow:black_football_armor_leggings",
    "minecraft:chainmail_boots",
    "minecraft:iron_boots",
    "minecraft:golden_boots",
    "minecraft:diamond_boots",
    "minecraft:netherite_boots",
    "apocalypsenow:yellow_football_armor_boots",
    "apocalypsenow:red_football_armor_boots",
    "apocalypsenow:blue_football_armor_boots",
    "apocalypsenow:black_football_armor_boots",
    "apocalypsenow:fire_figther_helmet",
    "apocalypsenow:biohazard_helmet",
    "apocalypsenow:rusty_helmet",
    "apocalypsenow:swat_helmet",
    "apocalypsenow:soldier_helmet",
    "apocalypsenow:divingsuit_helmet",
    "apocalypsenow:fire_figther_chestplate",
    "apocalypsenow:biohazard_chestplate",
    "apocalypsenow:rusty_chestplate",
    "apocalypsenow:swat_chestplate",
    "apocalypsenow:soldier_chestplate",
    "apocalypsenow:divingsuit_chestplate",
    "apocalypsenow:fire_figther_leggings",
    "apocalypsenow:biohazard_leggings",
    "apocalypsenow:rusty_leggings",
    "apocalypsenow:swat_leggings",
    "apocalypsenow:soldier_leggings",
    "apocalypsenow:divingsuit_leggings",
    "apocalypsenow:fire_figther_boots",
    "apocalypsenow:biohazard_boots",
    "apocalypsenow:rusty_boots",
    "apocalypsenow:swat_boots",
    "apocalypsenow:soldier_boots",
    "apocalypsenow:divingsuit_boots",
    "apocalypsenow:hockey_helmet",
    "apocalypsenow:contamination_suit_white_helmet",
    "marbledsarsenal:riot_armor_helmet",
    "marbledsarsenal:swat_armor_helmet",
    "marbledsarsenal:winter_military_armor_helmet",
    "marbledsarsenal:desert_military_armor_helmet",
    "marbledsarsenal:hazmat_armor_helmet",
    "mcore:steel_helmet",
    "mcore:titanium_helmet",
    "apocalypsenow:hockey_chestplate",
    "apocalypsenow:contamination_suit_white_chestplate",
    "marbledsarsenal:riot_armor_chestplate",
    "marbledsarsenal:swat_armor_chestplate",
    "marbledsarsenal:winter_military_armor_chestplate",
    "marbledsarsenal:desert_military_armor_chestplate",
    "marbledsarsenal:hazmat_armor_chestplate",
    "mcore:steel_chestplate",
    "mcore:titanium_chestplate",
    "apocalypsenow:hockey_leggings",
    "apocalypsenow:contamination_suit_white_leggings",
    "marbledsarsenal:riot_armor_leggings",
    "marbledsarsenal:swat_armor_leggings",
    "marbledsarsenal:winter_military_armor_leggings",
    "marbledsarsenal:desert_military_armor_leggings",
    "marbledsarsenal:hazmat_armor_leggings",
    "mcore:steel_leggings",
    "mcore:titanium_leggings",
    "apocalypsenow:hockey_boots",
    "apocalypsenow:contamination_suit_white_boots",
    "marbledsarsenal:riot_armor_boots",
    "marbledsarsenal:swat_armor_boots",
    "marbledsarsenal:winter_military_armor_boots",
    "marbledsarsenal:desert_military_armor_boots",
    "marbledsarsenal:hazmat_armor_boots",
    "mcore:steel_boots",
    "mcore:titanium_boots",
    "apocalypsenow:construction_helmet",
    "apocalypsenow:swatriotcontrol_helmet",
    "apocalypsenow:military_riot_armor_helmet",
    "apocalypsenow:hazmat_suit_helmet",
    "apocalypsenow:police_helmet",
    "apocalypsenow:military_urban_helmet",
    "apocalypsenow:advanced_hazmat_suit_helmet",
    "apocalypsenow:construction_chestplate",
    "apocalypsenow:swatriotcontrol_chestplate",
    "apocalypsenow:military_riot_armor_chestplate",
    "apocalypsenow:hazmat_suit_chestplate",
    "apocalypsenow:police_chestplate",
    "apocalypsenow:military_urban_chestplate",
    "apocalypsenow:advanced_hazmat_suit_chestplate",
    "apocalypsenow:construction_leggings",
    "apocalypsenow:swatriotcontrol_leggings",
    "apocalypsenow:military_riot_armor_leggings",
    "apocalypsenow:hazmat_suit_leggings",
    "apocalypsenow:police_leggings",
    "apocalypsenow:military_urban_leggings",
    "apocalypsenow:advanced_hazmat_suit_leggings",
    "apocalypsenow:construction_boots",
    "apocalypsenow:swatriotcontrol_boots",
    "apocalypsenow:military_riot_armor_boots",
    "apocalypsenow:hazmat_suit_boots",
    "apocalypsenow:police_boots",
    "apocalypsenow:military_urban_boots",
    "apocalypsenow:advanced_hazmat_suit_boots"
];
let militaryairdrophighLuck = [
    "zombiekit:standard_tactical_helmet",
    "zombiekit:standard_tactical_chestplate",
    "zombiekit:standard_tactical_leggings",
    "zombiekit:standard_tactical_boots",
    "apocalypsenow:anarchy_helmet",
    "apocalypsenow:anarchy_chestplate",
    "apocalypsenow:anarchy_leggings",
    "apocalypsenow:anarchy_boots",
    "apocalypsenow:jet_pilot_helmet",
    "apocalypsenow:jet_pilot_chestplate",
    "apocalypsenow:jet_pilot_leggings",
    "apocalypsenow:jet_pilot_boots",
    "zombiekit:skiing_helmet",
    "zombiekit:skiing_chestplate",
    "zombiekit:skiing_leggings",
    "zombiekit:skiing_boots",
    "apocalypsenow:forestguard_helmet",
    "apocalypsenow:forestguard_chestplate",
    "apocalypsenow:forestguard_leggings",
    "apocalypsenow:forestguard_boots"
];

// 定义获取掉落物品的函数
function militaryairdropluck01(luck) {
    if (luck > 0 && luck < 6) {
        return militaryairdroplowLuck;
    } else if (luck >= 6) {
        return militaryairdrophighLuck;
    } else {
        return [];
    }
}
function militaryairdropluck02(militaryairdroplootPool) {
    if (militaryairdroplootPool.length === 0) return null;
    let militaryairdroprandom = Math.floor(Math.random() * militaryairdroplootPool.length);
    return militaryairdroplootPool[militaryairdroprandom];
}

LootJS.modifiers((event) => {
    event.addLootTableModifier("apocalypsenow:blocks/militaryairdrop")
        .removeLoot(Ingredient.all)
        .randomChance(1)
        .apply((context) => {
            let player = context.getPlayer();
            if (!player) return;

            let luck = player.getLuck();
            let lootPool = militaryairdropluck01(luck); // 获取战利品池
            
            // 如果池为空则退出
            if (!lootPool || lootPool.length === 0) return;

            // 生成四次独立随机选择
            for (let i = 0; i < 4; i++) {
                // 每次循环都重新执行随机选取
                let randomItem = militaryairdropluck02(lootPool);
                
                if (randomItem) {
                    // 根据索引决定附魔等级范围
                    let [min, max] = i < 2 ? [10, 30] : [30, 50];
                    context.addLoot(
                        LootEntry.of(randomItem, 1)
                            .enchantWithLevels(getRandomNumber(min, max))
                    );
                }
            }
        });
});
