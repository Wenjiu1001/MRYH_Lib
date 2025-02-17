
// 矿物luck函数
let lowLuck01 = [
    "zombie_extreme:ingot_aluminum",
    "zombie_extreme:ingot_bronze",
    "zombie_extreme:ingot_steel",
    "zombie_extreme:ingot_tin",
    "zombie_extreme:ingot_lead",
    "immersiveengineering:ingot_thorium",
    "immersiveengineering:ingot_silver",
    "immersiveengineering:ingot_nickel",
    "immersiveengineering:ingot_uranium",
    "immersiveengineering:ingot_electrum",
    "immersiveengineering:ingot_constantan",
    "k_turtles:titanium_ingot",
    "minecraft:beacon_payment_items"
];
let highLuck01 = [
    "minecraft:diamond",
    "minecraft:lapis_lazuli",
    "minecraft:emerald",
    "minecraft:netherite_scrap"
];
function lootpoolluck01(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck01;
    } else if (luck >= 6) {
        return highLuck01;
    } else {
        return [];
    }
}
function luck01(lootPool01) {
    if (lootPool01.length === 0) return null;
    let randomIndex01 = Math.floor(Math.random() * lootPool01.length);
    return lootPool01[randomIndex01];
}

// 杂物luck函数
let lowLuck03 = [
    "apocalypsenow:ducttape",
    "apocalypsenow:scrapmetal",
    "apocalypsenow:textilethread",
    "apocalypsenow:textilethread",
    "immersiveengineering:hemp_fabric",
    "immersiveengineering:component_electronic",
    "immersiveengineering:component_iron",
    "immersiveengineering:hemp_fiber"
];
let highLuck03 = [
    "zombiekit:saltpeter",
    "zombiekit:rubber",
    "zombiekit:death_bat",
    "zombiekit:iron_wire",
    "zombie_extreme:rubber",
    "zombie_extreme:bronze_wire",
    "zombie_extreme:cloth",
    "marbledsarsenal:armor_plate",
    "spore:mutated_fiber",
    "marbledsarsenal:rubber"
];
function lootpoolluck03(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck03;
    } else if (luck >= 6) {
        return highLuck03;
    } else {
        return [];
    }
}
function luck03(lootPool03) {
    if (lootPool03.length === 0) return null;
    let randomIndex03 = Math.floor(Math.random() * lootPool03.length);
    return lootPool03[randomIndex03];
}

// 子弹luck函数
let lowLuck04 = [
    "tacz:9mm",
    "tacz:45acp",
    "tacz:762x25",
    "tacz:12g",
    "tacz:762x39",
    "tacz:556x45",
    "tacz:68x51fury",
    "tacz:308",
    "tacz:762x54",
    "tacz:30_06",
    "tacz:50ae",
    "tacz:357mag",
    "tacz:338",
    "tacz:46x30",
    "tacz:50bmg",
    "tacz:40mm"
];
let highLuck04 = [
    "create_armorer:rbapb",
    "emxarms:339x57x",
    "emxarms:x16sg",
    "helldiver2:explode_ap",
    "emxarms:emx_tediore",
    "emxarms:402x31rip",
    "emxarms:x16he",
    "wemql:my15",
    "cake:20_82",
    "wemql:zy14",
    "create_armorer:gas_pistol_ammo",
    "emxarms:1045x103",
    "emxarms:339x57fmj",
    "converted:m259",
    "helldiver2:rifle_normal",
    "warhammer:825_ammo",
    "immersive_armorer:ap_ammo",
    "warhammer:promethium_can",
    "warhammer:laser_cell",
    "qkl:rb10",
    "create_armorer:slap",
    "helldiver2:pistol_normal",
    "warhammer:75_bolt",
    "cake:battery",
    "wemql:sw11",
    "emxarms:339x57",
    "mpworld:hhh",
    "immersive_armorer:chemical",
    "wemql:sy13",
    "mpworld:coal_ore",
    "mpworld:coal_ore2",
    "mpworld:copper_ore2",
    "mpworld:copper",
    "mpworld:coal",
    "mpworld:diamond",
    "mpworld:copper_ore",
    "mpworld:iron_ore2",
    "mpworld:iron",
    "mpworld:gold",
    "mpworld:diamond_ore2",
    "mpworld:gold_ore",
    "mpworld:diamond_ore",
    "mpworld:gold_ore2",
    "emxarms:402x31",
    "emxarms:402x31fmj",
    "warhammer:psyker_power",
    "mpworld:22mm",
    "emxarms:410x57ap",
    "immersive_armorer:stream_capacitor",
    "mpworld:545x39",
    "helldiver2:rifle_ap",
    "immersive_armorer:burst_capacitor",
    "qkl:16mm",
    "converted:32nails",
    "wemql:dw12",
    "immersive_armorer:454_casul",
    "helldiver2:shotgun_normal",
    "helldiver2:shotgun_normal",
    "immersive_armorer:high_power_capacitor",
    "immersive_armorer:cut_steel_rod"
];
function lootpoolluck04(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck04;
    } else if (luck >= 6) {
        return highLuck04;
    } else {
        return [];
    }
}
function luck04(lootPool04) {
    if (lootPool04.length === 0) return null;
    let randomIndex04 = Math.floor(Math.random() * lootPool04.length);
    return lootPool04[randomIndex04];
}

// 医疗物品luck函数
let lowLuck05 = [
    "minecraft:golden_apple",
    "farmersdelight:squid_ink_pasta",
    "farmersdelight:cooked_rice",
    "zombie_extreme:dizziness_pill",
    "zombie_extreme:pill_night_vision",
    "zombie_extreme:pill_anti_hunger",
    "zombie_extreme:pill_psycho",
    "farmersdelight:roast_chicken",
    "zombie_extreme:pill_against_radiation",
    "zombiekit:painkiller",
    "zombie_extreme:syringe_adrenaline",
    "zombie_extreme:syringe_antidote",
    "zombie_extreme:experimental_pill",
    "farmersdelight:pasta_with_mutton_chop",
    "zombie_extreme:syringe_drug",
    "farmersdelight:vegetable_noodles",
    "farmersdelight:pumpkin_soup",
    "farmersdelight:steak_and_potatoes",
    "farmersdelight:honey_glazed_ham",
    "zombie_extreme:syringe_night_vision",
    "zombie_extreme:syringe_stimulator",
    "zombie_extreme:experimental_serum"
];
let highLuck05 = [
    "apocalypsenow:pain_killers",
    "apocalypsenow:homemadeantibiotics",
    "apocalypsenow:antibiotics",
    "apocalypsenow:bandage",
    "zombie_extreme:bandage",
    "zombiekit:miracle",
    "zombiekit:suspicious_drug",
    "zombiekit:bandage",
    "apocalypsenow:suturekit",
    "minecraft:enchanted_golden_apple"
];
function lootpoolluck05(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck05;
    } else if (luck >= 6) {
        return highLuck05;
    } else {
        return [];
    }
}
function luck05(lootPool05) {
    if (lootPool05.length === 0) return null;
    let randomIndex05 = Math.floor(Math.random() * lootPool05.length);
    return lootPool05[randomIndex05];
}

// 普通装备luck函数
let lowLuck06 = [
    "marbledsarsenal:olive_juggernaut_armor_helmet",
    "marbledsarsenal:black_juggernaut_armor_helmet",
    "zombiekit:standard_riot_helmet",
    "zombiekit:snow_riot_helmet",
    "zombiekit:forest_riot_helmet",
    "zombiekit:desert_riot_helmet",
    "max_armory:lamellar_armor_helmet",
    "zombiekit:snow_tactical_helmet",
    "zombiekit:forest_tactical_helmet",
    "zombiekit:desert_tactical_helmet",
    "marbledsarsenal:olive_juggernaut_armor_chestplate",
    "marbledsarsenal:black_juggernaut_armor_chestplate",
    "zombiekit:standard_riot_chestplate",
    "zombiekit:snow_riot_chestplate",
    "zombiekit:forest_riot_chestplate",
    "zombiekit:desert_riot_chestplate",
    "max_armory:lamellar_armor_chestplate",
    "zombiekit:snow_tactical_chestplate",
    "zombiekit:forest_tactical_chestplate",
    "zombiekit:desert_tactical_chestplate",
    "marbledsarsenal:olive_juggernaut_armor_leggings",
    "marbledsarsenal:black_juggernaut_armor_leggings",
    "zombiekit:standard_riot_leggings",
    "zombiekit:snow_riot_leggings",
    "zombiekit:forest_riot_leggings",
    "zombiekit:desert_riot_leggings",
    "max_armory:lamellar_armor_leggings",
    "zombiekit:snow_tactical_leggings",
    "zombiekit:forest_tactical_leggings",
    "zombiekit:desert_tactical_leggings",
    "marbledsarsenal:olive_juggernaut_armor_boots",
    "marbledsarsenal:black_juggernaut_armor_boots",
    "zombiekit:standard_riot_boots",
    "zombiekit:snow_riot_boots",
    "zombiekit:forest_riot_boots",
    "zombiekit:desert_riot_boots",
    "max_armory:lamellar_armor_boots",
    "zombiekit:snow_tactical_boots",
    "zombiekit:forest_tactical_boots",
    "zombiekit:desert_tactical_boots"
];
let highLuck06 = [
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
function lootpoolluck06(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck06;
    } else if (luck >= 6) {
        return highLuck06;
    } else {
        return [];
    }
}
function luck06(lootPool06) {
    if (lootPool06.length === 0) return null;
    let randomIndex06 = Math.floor(Math.random() * lootPool06.length);
    return lootPool06[randomIndex06];
}

// 普通枪械luck函数
let lowLuck07 = [
    "tacz:deagle",
    "tacz:glock_17",
    "gz:military_ak74",
    "immersive_armorer:standard_rail_pistol_mk2",
    "warhammer:accatran_ii",
    "mpworld:ud12",
    "gz:military_p416",
    "cake:hk416",
    "gz:mp5st",
    "tacz:m320",
    "gz:black_market_rpk74"
];
let highLuck07 = [
    "cib:galil",
    "cib:qbz951",
    "gz:pp19",
    "mpworld:sc15",
    "cake:sig556",
    "tacz:ump45",
    "tacz:rpk",
    "mpworld:ls",
    "tacz:rpg7",
    "tacz:ai_awp",
    "gz:m16a2",
    "tacz:aa12",
    "tacz:p320",
    "tacz:cz75"
];
function lootpoolluck07(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck07;
    } else if (luck >= 6) {
        return highLuck07;
    } else {
        return [];
    }
}
function luck07(lootPool07) {
    if (lootPool07.length === 0) return null;
    let randomIndex07 = Math.floor(Math.random() * lootPool07.length);
    return lootPool07[randomIndex07];
}

// 重要材料物品luck函数
let lowLuck08 = [
    "minecraft:prismarine_shard",
    "minecraft:prismarine_crystals",
    "minecraft:nautilus_shell",
    "minecraft:scute",
    "minecraft:echo_shard",
    "minecraft:blaze_powder",
    "minecraft:nether_wart",
    "minecraft:ghast_tear",
    "minecraft:blaze_rod"
];
let highLuck08 = [
    "mutantmonsters:creeper_shard",
    "philipsruins:frozen_prismarine_shard",
    "philipsruins:frozen_prismarine_crystals",
    "k_turrets:titanium_ingot",
    "k_turrets:explosive_powder",
    "zombiekit:fibre",
    "zombiekit:energy_rod",
    "zombiekit:special_steel_sheet",
    "zombiekit:bulletproof_insert",
    "zombiekit:special_ceramics",
    "max_armory:iron_plate",
    "max_armory:chain_armor_piece",
    "max_armory:lamellar_armor_piece",
    "immersiveengineering:stick_aluminum",
    "immersiveengineering:stick_steel",
    "immersiveengineering:plate_nickel",
    "immersiveengineering:plate_silver",
    "immersiveengineering:plate_lead",
    "immersiveengineering:plate_aluminum",
    "immersiveengineering:plate_copper",
    "immersiveengineering:plate_duroplast",
    "immersiveengineering:wire_lead",
    "immersiveengineering:wire_steel",
    "immersiveengineering:wire_electrum",
    "immersiveengineering:plate_gold",
    "immersiveengineering:plate_iron",
    "immersiveengineering:plate_steel",
    "immersiveengineering:plate_electrum",
    "immersiveengineering:plate_constantan",
    "undead_revamp2:the_somnolenceextract",
    "undead_revamp2:heavytooth",
    "undead_revamp2:beespheromones",
    "zombie_extreme:ignot_aluminum",
    "zombie_extreme:ruby",
    "cold_sweat:chameleon_molt",
    "cold_sweat:hoglin_hide",
    "zombie_extreme:lead_plate",
    "zombie_extreme:tin_plate",
    "zombie_extreme:steel_plate",
    "zombie_extreme:circuit_diagram",
    "zombie_extreme:batteries",
    "zombie_extreme:bronze_wire",
    "zombie_extreme:ignotlead",
    "zombie_extreme:ignot_tin",
    "zombie_extreme:ignot_bronze",
    "zombie_extreme:ignot_thorium",
    "zombie_extreme:fulguria_fuel_rod",
    "zombie_extreme:thorium_rod",
    "zombie_extreme:uranium_rod",
    "zombie_extreme:saw_blade",
    "zombie_extreme:titan_plate",
    "zombie_extreme:ignot_titan",
    "zombie_extreme:rubber_sheet",
    "mcore:titanium_ingot",
    "mcore:steel_scrap",
    "mcore:steel_ingot",
    "marbledsarsenal:rubber",
    "marbledsarsenal:armor_plate",
    "apocalypsenow:armorplate",
    "apocalypsenow:reinforced_armor_plate",
    "spore:nerves",
    "spore:cerebrum",
    "spore:spine",
    "spore:spine_fragment",
    "spore:living_core",
    "spore:fleshy_claw",
    "spore:hardened_bind",
    "spore:fleshy_bone",
    "spore:wing_membrane",
    "spore:mutated_fiber",
    "spore:mutated_heart",
    "spore:claw",
    "spore:innards",
    "spore:sickle_fragment",
    "spore:r_wing",
    "spore:tendons",
    "spore:corrosive_sack",
    "spore:altered_spleen",
    "spore:alveolic_sack",
    "spore:plated_muscle",
    "spore:armor_plate",
    "createaddition:copper_wire",
    "createaddition:iron_wire",
    "createaddition:gold_wire",
    "createaddition:electrum_wire",
    "createaddition:brass_rod",
    "createaddition:electrum_rod",
    "create:electrum_sheet"
];
function lootpoolluck08(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck08;
    } else if (luck >= 6) {
        return highLuck08;
    } else {
        return [];
    }
}
function luck08(lootPool08) {
    if (lootPool08.length === 0) return null;
    let randomIndex08 = Math.floor(Math.random() * lootPool08.length);
    return lootPool08[randomIndex08];
}

// 难度之心luck函数
let lowLuck09 = [
    "scalinghealth:cursed_heart",
    "scalinghealth:enchanted_heart",
    "scalinghealth:chance_heart"
];
let highLuck09 = [
    "scalinghealth:heart_crystal",
    "scalinghealth:power_crystal"
];
function lootpoolluck09(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck09;
    } else if (luck >= 6) {
        return highLuck09;
    } else {
        return [];
    }
}
function luck09(lootPool09) {
    if (lootPool09.length === 0) return null;
    let randomIndex09 = Math.floor(Math.random() * lootPool09.length);
    return lootPool09[randomIndex09];
}

// 任务道具luck函数
let lowLuck10 = [];

let highLuck10 = [];

function lootpoolluck10(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck10;
    } else if (luck >= 6) {
        return highLuck10;
    } else {
        return [];
    }
}
function luck10(lootPool10) {
    if (lootPool10.length === 0) return null;
    let randomIndex10 = Math.floor(Math.random() * lootPool10.length);
    return lootPool10[randomIndex10];
}

// 饰品luck函数
let lowLuck11 = [
    "artifacts:flame_pendant",
    "artifacts:villager_hat",
    "artifacts:night_vision_goggles",
    "artifacts:snorkel",
    "artifacts:novelty_drinking_hat",
    "artifacts:plastic_drinking_hat",
    "artifacts:eternal_steak",
    "artifacts:everlasting_beef",
    "artifacts:umbrella",
    "artifacts:charm_of_sinking",
    "artifacts:cloud_in_a_bottle",
    "artifacts:obsidian_skull",
    "artifacts:antidote_vessel",
    "artifacts:universal_attractor",
    "artifacts:helium_flamingo",
    "artifacts:cross_necklace",
    "artifacts:panic_necklace",
    "artifacts:shock_pendant",
    "artifacts:vampiric_glove",
    "artifacts:onion_ring",
    "artifacts:pickaxe_heater",
    "artifacts:scarf_of_invisibility",
    "artifacts:lucky_scarf",
    "artifacts:anglers_hat",
    "artifacts:cowboy_hat",
    "artifacts:superstitious_hat",
    "artifacts:thorn_pendant",
    "artifacts:rooted_boots",
    "artifacts:steadfast_spikes",
    "artifacts:running_shoes",
    "artifacts:kitty_slippers",
    "artifacts:aqua_dashers",
    "artifacts:feral_claws",
    "artifacts:fire_gauntlet"
];
let highLuck11 = [
    "nameless_trinkets:cracked_crown",
    "nameless_trinkets:callus",
    "nameless_trinkets:what_magnet",
    "nameless_trinkets:super_magnet",
    "nameless_trinkets:broken_magnet",
    "nameless_trinkets:experience_magnet",
    "nameless_trinkets:experience_battery",
    "nameless_trinkets:reverse_card",
    "nameless_trinkets:missing_page",
    "nameless_trinkets:lucky_rock",
    "nameless_trinkets:vampire_blood",
    "nameless_trinkets:speed_force",
    "nameless_trinkets:ghast_eye",
    "nameless_trinkets:blaze_nucleus",
    "nameless_trinkets:wooden_stick",
    "nameless_trinkets:ice_cube",
    "nameless_trinkets:sigil_of_baphomet",
    "nameless_trinkets:explosion_proof_jacket",
    "nameless_trinkets:electric_paddle",
    "nameless_trinkets:tear_of_the_sea",
    "nameless_trinkets:gods_crown",
    "nameless_trinkets:fertilizer",
    "nameless_trinkets:creeper_sense",
    "nameless_trinkets:blindfold",
    "nameless_trinkets:tick",
    "nameless_trinkets:rage_mind",
    "nameless_trinkets:puffer_fish_liver",
    "nameless_trinkets:nelumbo",
    "nameless_trinkets:dark_nelumbo",
    "nameless_trinkets:scarab_amulet",
    "nameless_trinkets:pocket_lightning_rod",
    "nameless_trinkets:fractured_nullstone",
    "nameless_trinkets:gills",
    "nameless_trinkets:moon_stone",
    "nameless_trinkets:ethereal_wings",
    "nameless_trinkets:spider_legs",
    "nameless_trinkets:fate_emerald",
    "nameless_trinkets:dragons_eye",
    "nameless_trinkets:mysterious_trinket"
];
function lootpoolluck11(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck11;
    } else if (luck >= 6) {
        return highLuck11;
    } else {
        return [];
    }
}
function luck11(lootPool11) {
    if (lootPool11.length === 0) return null;
    let randomIndex11 = Math.floor(Math.random() * lootPool11.length);
    return lootPool11[randomIndex11];
}

// 高级装备luck函数
let lowLuck12 = [
    "apocalypsenow:spec_ops_boots",
    "apocalypsenow:spec_ops_leggings",
    "apocalypsenow:spec_ops_chestplate",
    "apocalypsenow:spec_ops_helmet",
    "apocalypsenow:army_boots",
    "apocalypsenow:army_leggings",
    "apocalypsenow:army_chestplate",
    "apocalypsenow:army_helmet",
    "max_armory:lamellar_armor_boots",
    "max_armory:lamellar_armor_leggings",
    "max_armory:mingguang_armor_chestplate",
    "max_armory:mingguang_armor_helmet",
    "zombie_extreme:juggernaut_suit_boots",
    "zombie_extreme:juggernaut_suit_leggings",
    "zombie_extreme:juggernaut_suit_chestplate",
    "zombie_extreme:juggernaut_suit_helmet",
    "apocalypsenow:usa_armor_boots",
    "apocalypsenow:usa_armor_leggings",
    "apocalypsenow:usa_armor_chestplate",
    "apocalypsenow:usa_armor_helmet",
    "apocalypsenow:british_army_boots",
    "apocalypsenow:british_army_leggings",
    "apocalypsenow:british_army_chestplate",
    "apocalypsenow:british_army_helmet",
    "apocalypsenow:brazilian_army_boots",
    "apocalypsenow:brazilian_army_leggings",
    "apocalypsenow:brazilian_army_chestplate",
    "apocalypsenow:brazilian_army_helmet",
    "apocalypsenow:italian_bersaglieri_army_boots",
    "apocalypsenow:italian_bersaglieri_army_leggings",
    "apocalypsenow:italian_bersaglieri_army_chestplate",
    "apocalypsenow:italian_bersaglieri_army_helmet",
    "apocalypsenow:russian_army_boots",
    "apocalypsenow:russian_army_leggings",
    "apocalypsenow:russian_army_chestplate",
    "apocalypsenow:russian_army_helmet",
    "apocalypsenow:chinese_army_boots",
    "apocalypsenow:chinese_army_leggings",
    "apocalypsenow:chinese_army_chestplate",
    "apocalypsenow:chinese_army_helmet",
    "apocalypsenow:japanese_army_boots",
    "apocalypsenow:japanese_army_leggings",
    "apocalypsenow:japanese_army_chestplate",
    "apocalypsenow:japanese_army_helmet",
    "apocalypsenow:mexican_army_boots",
    "apocalypsenow:mexican_army_leggings",
    "apocalypsenow:mexican_army_chestplate",
    "apocalypsenow:mexican_army_helmet",
    "apocalypsenow:canadian_army_boots",
    "apocalypsenow:canadian_army_leggings",
    "apocalypsenow:canadian_army_chestplate",
    "apocalypsenow:canadian_army_helmet"
];
let highLuck12 = [
    "zombiekit:bomb_boots",
    "zombiekit:bomb_leggings",
    "zombiekit:bomb_chestplate",
    "zombiekit:bomb_helmet",
    "apocalypsenow:bombsquad_boots",
    "apocalypsenow:bombsquad_leggings",
    "apocalypsenow:bombsquad_chestplate",
    "apocalypsenow:bombsquad_helmet",
    "apocalypsenow:juggernaut_boots",
    "apocalypsenow:juggernaut_leggings",
    "apocalypsenow:juggernaut_chestplate",
    "apocalypsenow:juggernaut_helmet"
];
function lootpoolluck12(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck12;
    } else if (luck >= 6) {
        return highLuck12;
    } else {
        return [];
    }
}
function luck12(lootPool12) {
    if (lootPool12.length === 0) return null;
    let randomIndex12 = Math.floor(Math.random() * lootPool12.length);
    return lootPool12[randomIndex12];
}

// 高级枪械
let lowLuck02 = [
    "converted:416sap",
    "converted:nails",
    "helldiver2:ar23p_liberator",
    "wemql:aa13m",
    "create_armorer:pistol_revolver_torque",
    "helldiver2:r63cs_diligence",
    "create_armorer:pistol_revolver_torque",
    "helldiver2:r63cs_diligence",
    "converted:416carbon",
    "helldiver2:smg37_defender",
    "cake:mpx",
    "helldiver2:authorized_gun",
    "mpworld:ak338lb",
    "immersive_armorer:standard_rail_pistol_mk3",
    "ttf:car_zero",
    "tuzi:volk",
    "tuzi:akalfa",
    "dfp:akimbo_deagle_gold",
    "create_armorer:mg_platemag_flywheel",
    "dfp:aa12_akimbo",
    "converted:claw",
    "tuzi:widowmaker",
    "gz:patriots",
    "helldiver2:r63_diligence",
    "warhammer:force_staff_iv",
    "cib:negev",
    "cake:ntw20",
    "helldiver2:sg225_breaker",
    "wemql:aa12m"
];
let highLuck02 = [
    "emxarms:emx_rivet",
    "emxarms:emx_draftsman_ev",
    "emxarms:emx_mg90",
    "cake:mg42",
    "emxarms:emx_mk88",
    "emxarms:emx_umx57",
    "wemql:1",
    "wemql:1",
    "emxarms:emx_expel32",
    "emxarms:emx_pmg90",
    "emxarms:emx_mk951l_ba",
    "emxarms:emx_mk951l",
    "emxarms:emx_rivet_gw",
    "emxarms:emx_draftsman",
    "emxarms:emx_mk951r",
    "emxarms:emx_mk951lmg",
    "emxarms:emx_mg57",
    "emxarms:emx_pulse_al",
    "emxarms:emx_pulse_dl2",
    "emxarms:emx_scgraves",
    "emxarms:emx_expel32se",
    "emxarms:emx_mg57_yh",
    "wemql:m45",
    "wemql:my95",
    "emxarms:emx_expel32se_ba",
    "emxarms:emx_umx32",
    "emxarms:emx_mac50",
    "emxarms:emx_kund50ex_al",
    "emxarms:emx_tknife",
    "emxarms:emx_pulsex2",
    "emxarms:emx_pulse",
    "emxarms:emx_pulse_sc",
    "emxarms:emx_kund50ex",
    "emxarms:emx_pulse_dl1",
    "emxarms:emx_kund50"
];
function lootpoolluck02(luck) {
    if (luck > 0 && luck < 6) {
        return lowLuck02;
    } else if (luck >= 6) {
        return highLuck02;
    } else {
        return [];
    }
}
function luck02(lootPool02) {
    if (lootPool02.length === 0) return null;
    let randomIndex02 = Math.floor(Math.random() * lootPool02.length);
    return lootPool02[randomIndex02];
}

// 箱子战利品
LootJS.modifiers((event) => {
    // 矿物
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.8)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool01 = lootpoolluck01(luck);
            let randomLoot01 = luck01(lootpool01);
            if (randomLoot01 !== null) {
                context.addLoot(LootEntry.of(randomLoot01, getRandomNumber(5, 10)).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.8)))
            }
        });
    // 杂物
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.6)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool03 = lootpoolluck03(luck);
            let randomLoot03 = luck03(lootpool03);
            if (randomLoot03 !== null) {
                context.addLoot(LootEntry.of(randomLoot03, getRandomNumber(1, 3)).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.7)))
            }
        });
    // 子弹
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.5)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool04 = lootpoolluck04(luck);
            let randomLoot04 = luck04(lootpool04);
            if (randomLoot04 !== null) {
                context.addLoot(LootEntry.of('tacz:ammo', getRandomNumber(1, 5), { AmmoId: randomLoot04 }).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.7)));
            }
        });
    // 医疗用品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.4)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool05 = lootpoolluck05(luck);
            let randomLoot05 = luck05(lootpool05);
            if (randomLoot05 !== null) {
                context.addLoot(LootEntry.of(randomLoot05, getRandomNumber(1, 2)).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.6)));
            }
        });
    // 普通装备
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.2)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool06 = lootpoolluck06(luck);
            let randomLoot06 = luck06(lootpool06);
            if (randomLoot06 !== null) {
                context.addLoot(LootEntry.of(randomLoot06, 1).withChance(getRandomChance(0.1, 0.7)).enchantWithLevels(getRandomNumber(10, 30)).when((c) => c.randomChance(0.5)));
            }
        });
    // 普通枪械
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool07 = lootpoolluck07(luck);
            let randomLoot07 = luck07(lootpool07);
            if (randomLoot07 !== null) {
                context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: randomLoot07 }).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.6)));
            }
        });
    // 重要材料物品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool08 = lootpoolluck08(luck);
            let randomLoot08 = luck08(lootpool08);
            if (randomLoot08 !== null) {
                context.addLoot(LootEntry.of(randomLoot08, getRandomNumber(1, 5)).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.4)));
            }
        });
    // 难度之心
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.06)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool09 = lootpoolluck09(luck);
            let randomLoot09 = luck09(lootpool09);
            if (randomLoot09 !== null) {
                context.addLoot(LootEntry.of(randomLoot09, 1).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.5)));
            }
        });
    // 任务道具
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.06)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool10 = lootpoolluck10(luck);
            let randomLoot10 = luck10(lootpool10);
            if (randomLoot10 !== null) {
                context.addLoot(LootEntry.of(randomLoot10, 1).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.5)));
            }
        });
    // 饰品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.04)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool11 = lootpoolluck11(luck);
            let randomLoot11 = luck11(lootpool11);
            if (randomLoot11 !== null) {
                context.addLoot(LootEntry.of(randomLoot11, 1).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.3)));
            }
        });
    // 高级装备
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.02)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool12 = lootpoolluck12(luck);
            let randomLoot12 = luck12(lootpool12);
            if (randomLoot12 !== null) {
                context.addLoot(LootEntry.of(randomLoot12, 1).withChance(getRandomChance(0.1, 0.7)).enchantWithLevels(getRandomNumber(30, 50)).when((c) => c.randomChance(0.3)));
            }
        });
    // 高级枪械
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.02)
        .apply((context) => {
            // 获取当前的幸运值添加luck战利品
            let luck = context.getLuck();
            let lootpool02 = lootpoolluck02(luck);
            let randomLoot02 = luck02(lootpool02);
            if (randomLoot02 !== null) {
                context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: randomLoot02 }).withChance(getRandomChance(0.1, 0.7)).when((c) => c.randomChance(0.5)));
            }
        });
});
