let randomCount = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
let randomCountlow = Math.floor(Math.random() * (2 - 0 + 1)) + 10;
let randomEnchantLevel = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
let randomEnchantLevellow = Math.floor(Math.random() * (10 - 0 + 1)) + 10;
let randomChance = Math.random() * (0.7 - 0.1) + 0.1;
let randomChancelow = Math.random() * (0.1 - 0.01) + 0.1;

const droplowLuck = [
];
const drophighLuck = [
];
function dropluck01(luck) {
    if (luck > 0 && luck < 6) {
        return droplowLuck;
    } else if (luck >= 6) {
        return drophighLuck;
    } else {
        return [];
    }
}
function dropluck02(droplootPool) {
    if (droplootPool.length === 0) return null;
    const droprandom = Math.floor(Math.random() * droplootPool.length);
    return droplootPool[droprandom];
}

const medicalairdroplowLuck = [
];
const medicalairdrophighLuck = [
];
function medicalairdropluck01(luck) {
    if (luck > 0 && luck < 6) {
        return medicalairdroplowLuck;
    } else if (luck >= 6) {
        return medicalairdrophighLuck;
    } else {
        return [];
    }
}
function medicalairdropluck02(medicalairdroplootPool) {
    if (medicalairdroplootPool.length === 0) return null;
    const medicalairdroprandom = Math.floor(Math.random() * medicalairdroplootPool.length);
    return medicalairdroplootPool[medicalairdroprandom];
}

const militaryairdroplowLuck = [
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
const militaryairdrophighLuck = [
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
    const militaryairdroprandom = Math.floor(Math.random() * militaryairdroplootPool.length);
    return militaryairdroplootPool[militaryairdroprandom];
}

LootJS.modifiers((event) => {
    event.addBlockLootModifier("apocalypsenow:blocks/dropboxcommon")
        .randomChance(0.8)
        .apply((context) => {
            let luck = context.getLuck();
            let droploot = dropluck01(luck);
            const droprandomLoot = dropluck02(droploot);
            if (droprandomLoot !== null) {
                context.addLoot(LootEntry.of(droprandomLoot, randomCountlow).withChance(randomChance))
                context.addLoot(LootEntry.of(droprandomLoot, randomCountlow).withChance(randomChance))
                context.addLoot(LootEntry.of(droprandomLoot, randomCountlow).withChance(randomChance))
            }
        })
    event.addBlockLootModifier("apocalypsenow:blocks/medicalairdropbox")
        .randomChance(0.8)
        .apply((context) => {
            let luck = context.getLuck();
            let medicalairdroploot = medicalairdropluck01(luck);
            const medicalairdroprandomLoot = medicalairdropluck02(medicalairdroploot);
            if (medicalairdroprandomLoot !== null) {
                context.addLoot(LootEntry.of(medicalairdroprandomLoot, randomCountlow).withChance(randomChance))
                context.addLoot(LootEntry.of(medicalairdroprandomLoot, randomCountlow).withChance(randomChance))
                context.addLoot(LootEntry.of(medicalairdroprandomLoot, randomCountlow).withChance(randomChance))
            }
        })
    event.addBlockLootModifier("apocalypsenow:blocks/militaryairdrop")
        .removeLoot(Ingredient.all)
        .randomChance(0.8)
        .apply((context) => {
            let luck = context.getLuck();
            let militaryairdroploot = militaryairdropluck01(luck);
            const militaryairdroprandomLoot = militaryairdropluck02(militaryairdroploot);
            if (militaryairdroprandomLoot !== null) {
                context.addLoot(LootEntry.of(militaryairdroprandomLoot, 1).withChance(randomChance).enchantWithLevels(randomEnchantLevellow))
                context.addLoot(LootEntry.of(militaryairdroprandomLoot, 1).withChance(randomChance).enchantWithLevels(randomEnchantLevellow))
                context.addLoot(LootEntry.of(militaryairdroprandomLoot, 1).withChance(randomChance).enchantWithLevels(randomEnchantLevel))
                context.addLoot(LootEntry.of(militaryairdroprandomLoot, 1).withChance(randomChance).enchantWithLevels(randomEnchantLevel))
            }
        })

})