// 定义变量
let randomCount = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
let randomCountlow = Math.floor(Math.random() * (2 - 0 + 1)) + 10;
let randomEnchantLevel = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
let randomEnchantLevellow = Math.floor(Math.random() * (10 - 0 + 1)) + 10;
let randomChance = Math.random() * (0.7 - 0.1) + 0.1;
let randomChancelow = Math.random() * (0.1 - 0.01) + 0.1;

// 定义原版矿物的数组
let lootPoolOres = [
    "minecraft:coal",
    "minecraft:copper_ingot",
    "minecraft:iron_ingot",
    "minecraft:quartz",
    "minecraft:amethyst_shard",
    "minecraft:gold_ingot",
    "minecraft:glowstone_dust"
];

// 定义模组矿物的数组
let lootPoolOres2 = [
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

// 定义原版杂物的数组
let lootPoolItem = [
    "minecraft:leather",
    "minecraft:string",
    "minecraft:rabbit_foot",
    "minecraft:gunpowder",
    "minecraft:redstone"
];

// 定义模组杂物的数组
let lootPoolItem1 = [
    "apocalypsenow:ducttape",
    "apocalypsenow:scrapmetal",
    "apocalypsenow:textilethread",
    "apocalypsenow:textilethread"
];

// 定义沉浸工程杂物的数组
let lootPoolItem2 = [
    "immersiveengineering:hemp_fabric",
    "immersiveengineering:component_electronic",
    "immersiveengineering:component_iron",
    "immersiveengineering:hemp_fiber"
];

// 定义末日生存工具包杂物的数组
let lootPoolItem3 = [
    "zombiekit:saltpeter",
    "zombiekit:rubber",
    "zombiekit:death_bat",
    "zombiekit:iron_wire"
];

// 定义其他杂物的数组
let lootPoolItem4 = [
    "zombie_extreme:rubber",
    "zombie_extreme:bronze_wire",
    "zombie_extreme:cloth",
    "marbledsarsenal:armor_plate",
    "spore:mutated_fiber",
    "marbledsarsenal:rubber"
];

// 定义普通子弹的数组
let lootPooltaczammo = [
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

// 定义高级子弹的数组
let lootPooltaczammo2 = [
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

// 定义回复生命值的数组
let lootPooltx = [
    "apocalypsenow:bloodbag",
    "scalinghealth:bandages",
    "apocalypsenow:medicalkit",
    "zombiekit:medical_kit",
    "scalinghealth:medkit",
    "minecraft:golden_apple"
];

// 定义增益正面状态的数组
let lootPooltx2 = [
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

// 定义解除负面状态的数组
let lootPooltx3 = [
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

// 定义原版装备的数组
let lootPoolarmor = [
    "minecraft:leather_helmet",
    "minecraft:chainmail_helmet",
    "minecraft:iron_helmet",
    "minecraft:golden_helmet",
    "minecraft:diamond_helmet",
    "minecraft:netherite_helmet",
    "minecraft:leather_chestplate",
    "minecraft:chainmail_chestplate",
    "minecraft:iron_chestplate",
    "minecraft:golden_chestplate",
    "minecraft:diamond_chestplate",
    "minecraft:netherite_chestplate",
    "minecraft:leather_leggings",
    "minecraft:chainmail_leggings",
    "minecraft:iron_leggings",
    "minecraft:golden_leggings",
    "minecraft:diamond_leggings",
    "minecraft:netherite_leggings",
    "minecraft:leather_boots",
    "minecraft:chainmail_boots",
    "minecraft:iron_boots",
    "minecraft:golden_boots",
    "minecraft:diamond_boots",
    "minecraft:netherite_boots"
];

// 定义max武器库装备的数组
let lootPoolarmormax = [
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

// 定义僵尸拓展装备的数组
let lootPoolarmore = [
    "apocalypsenow:yellow_football_armor_helmet",
    "apocalypsenow:red_football_armor_helmet",
    "apocalypsenow:blue_football_armor_helmet",
    "apocalypsenow:black_football_armor_helmet",
    "apocalypsenow:yellow_football_armor_chestplate",
    "apocalypsenow:red_football_armor_chestplate",
    "apocalypsenow:blue_football_armor_chestplate",
    "apocalypsenow:black_football_armor_chestplate",
    "apocalypsenow:yellow_football_armor_leggings",
    "apocalypsenow:red_football_armor_leggings",
    "apocalypsenow:blue_football_armor_leggings",
    "apocalypsenow:black_football_armor_leggings",
    "apocalypsenow:yellow_football_armor_boots",
    "apocalypsenow:red_football_armor_boots",
    "apocalypsenow:blue_football_armor_boots",
    "apocalypsenow:black_football_armor_boots"
];

// 定义末日生存工具包装备的数组
let lootPoolarmors = [
    "apocalypsenow:snowghillie_helmet",
    "apocalypsenow:u_sarmy_helmet",
    "apocalypsenow:fire_figther_helmet",
    "apocalypsenow:biohazard_helmet",
    "apocalypsenow:rusty_helmet",
    "apocalypsenow:swat_helmet",
    "apocalypsenow:soldier_helmet",
    "apocalypsenow:divingsuit_helmet",
    "apocalypsenow:u_sarmy_chestplate",
    "apocalypsenow:fire_figther_chestplate",
    "apocalypsenow:biohazard_chestplate",
    "apocalypsenow:rusty_chestplate",
    "apocalypsenow:swat_chestplate",
    "apocalypsenow:soldier_chestplate",
    "apocalypsenow:divingsuit_chestplate",
    "apocalypsenow:snowghillie_chestplate",
    "apocalypsenow:snowghillie_leggings",
    "apocalypsenow:u_sarmy_leggings",
    "apocalypsenow:fire_figther_leggings",
    "apocalypsenow:biohazard_leggings",
    "apocalypsenow:rusty_leggings",
    "apocalypsenow:swat_leggings",
    "apocalypsenow:soldier_leggings",
    "apocalypsenow:divingsuit_leggings",
    "apocalypsenow:snowghillie_boots",
    "apocalypsenow:u_sarmy_boots",
    "apocalypsenow:fire_figther_boots",
    "apocalypsenow:biohazard_boots",
    "apocalypsenow:rusty_boots",
    "apocalypsenow:swat_boots",
    "apocalypsenow:soldier_boots",
    "apocalypsenow:divingsuit_boots"
];

// 定义现代启示录低数值装备的数组
let lootPoolarmorn = [
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

// 定义未修改低伤枪械的数组
let lootPoolgun = [
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
    "gz:black_market_rpk74",
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

// 定义重要材料物品的数组
let lootPoolmaterial = [
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

// 定义模组重要材料的数组
let lootPoolmaterial2 = [
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

// 定义模组重要材料的数组
let lootPoolmaterial3 = [
];

// 定义三种SH难度心的数组
let lootPoolheart = [
    "scalinghealth:cursed_heart",
    "scalinghealth:enchanted_heart",
    "scalinghealth:chance_heart",
    "scalinghealth:heart_crystal_shard",
    "scalinghealth:power_crystal_shard"
];

// 定义待定任务的数组
let lootPooltask = [
    "scalinghealth:heart_crystal",
    "scalinghealth:power_crystal"
];

// 定义奇异饰品的数组
let lootPoolCurious = [
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

// 定义无名饰品的数组
let lootPoolCurious2 = [
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

// 定义魔改kjs饰品的数组
let lootPoolCuriouskjs = [

];

// 定义现代启示录高数值药水效果装备的数组
let lootPoolHarmor = [
    "apocalypsenow:forestguard_helmet",
    "apocalypsenow:forestguard_chestplate",
    "apocalypsenow:forestguard_leggings",
    "apocalypsenow:forestguard_boots",
    "zombiekit:skiing_boots",
    "zombiekit:skiing_leggings",
    "zombiekit:skiing_chestplate",
    "zombiekit:skiing_helmet",
    "apocalypsenow:jet_pilot_boots",
    "apocalypsenow:jet_pilot_leggings",
    "apocalypsenow:jet_pilot_chestplate",
    "apocalypsenow:jet_pilot_helmet",
    "apocalypsenow:anarchy_boots",
    "apocalypsenow:anarchy_leggings",
    "apocalypsenow:anarchy_chestplate",
    "apocalypsenow:anarchy_helmet",
    "zombiekit:standard_tactical_boots",
    "zombiekit:standard_tactical_leggings",
    "zombiekit:standard_tactical_chestplate",
    "zombiekit:standard_tactical_helmet",
];

// 定义更改后的高数值装备的数组
let lootPoolHarmor2 = [
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

// 定义魔改毕业套装的数组
let lootPoolHarmor3 = [
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

// 定义未改高伤枪械的数组
let lootPoolgunm = [
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
    "mpworld:ak338lb"
];

// 定义魔改中级枪械的数组
let lootPoolgunx = [
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

// 定义魔改高级枪械的数组
let lootPoolgunz = [
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




// 定义原版矿物的获取函数
function getRandomOre() {
    return lootPoolOres[Math.floor(Math.random() * lootPoolOres.length)];
}

// 定义模组矿物的获取函数
function getRandomOreMod() {
    return lootPoolOres2[Math.floor(Math.random() * lootPoolOres2.length)];
}

// 定义原版杂物的获取函数
function getRandomItem() {
    return lootPoolItem[Math.floor(Math.random() * lootPoolItem.length)];
}

// 定义模组杂物的获取函数
function getRandomItemMod() {
    return lootPoolItem1[Math.floor(Math.random() * lootPoolItem1.length)];
}

// 定义沉浸工程杂物的获取函数
function getRandomItemIE() {
    return lootPoolItem2[Math.floor(Math.random() * lootPoolItem2.length)];
}

// 定义末日生存工具包杂物的获取函数
function getRandomItemZK() {
    return lootPoolItem3[Math.floor(Math.random() * lootPoolItem3.length)];
}

// 定义其他杂物的获取函数
function getRandomItemOther() {
    return lootPoolItem4[Math.floor(Math.random() * lootPoolItem4.length)];
}

// 定义普通子弹的获取函数
function getRandomAmmo() {
    return lootPooltaczammo[Math.floor(Math.random() * lootPooltaczammo.length)];
}

// 定义高级子弹的获取函数
function getRandomAmmoMod() {
    return lootPooltaczammo2[Math.floor(Math.random() * lootPooltaczammo2.length)];
}

// 定义回复生命值的获取函数
function getRandomHealthItem() {
    return lootPooltx[Math.floor(Math.random() * lootPooltx.length)];
}

// 定义增益正面状态的获取函数
function getRandomBuffItem() {
    return lootPooltx2[Math.floor(Math.random() * lootPooltx2.length)];
}

// 定义解除负面状态的获取函数
function getRandomDebuffItem() {
    return lootPooltx3[Math.floor(Math.random() * lootPooltx3.length)];
}

// 定义原版装备的获取函数
function getRandomArmor() {
    return lootPoolarmor[Math.floor(Math.random() * lootPoolarmor.length)];
}

// 定义max武器库装备的获取函数
function getRandomArmorMax() {
    return lootPoolarmormax[Math.floor(Math.random() * lootPoolarmormax.length)];
}

// 定义僵尸拓展装备的获取函数
function getRandomArmorZombie() {
    return lootPoolarmore[Math.floor(Math.random() * lootPoolarmore.length)];
}

// 定义末日生存工具包装备的获取函数
function getRandomArmorZK() {
    return lootPoolarmors[Math.floor(Math.random() * lootPoolarmors.length)];
}

// 定义现代启示录低数值装备的获取函数
function getRandomArmorApocalypse() {
    return lootPoolarmorn[Math.floor(Math.random() * lootPoolarmorn.length)];
}

// 定义未修改低伤枪械的获取函数
function getRandomGun() {
    return lootPoolgun[Math.floor(Math.random() * lootPoolgun.length)];
}

// 定义重要材料物品的获取函数
function getRandomMaterial() {
    return lootPoolmaterial[Math.floor(Math.random() * lootPoolmaterial.length)];
}

// 定义模组重要材料的获取函数
function getRandomMaterialMod() {
    return lootPoolmaterial2[Math.floor(Math.random() * lootPoolmaterial2.length)];
}

// 定义模组重要材料的获取函数
function getRandomMaterialMod2() {
    return lootPoolmaterial3[Math.floor(Math.random() * lootPoolmaterial3.length)];
}

// 定义三种SH难度心的获取函数
function getRandomHeart() {
    return lootPoolheart[Math.floor(Math.random() * lootPoolheart.length)];
}

// 定义待定的获取函数
function getRandomTaskItem() {
    return lootPooltask[Math.floor(Math.random() * lootPooltask.length)];
}

// 定义奇异饰品的获取函数
function getRandomCuriousItem() {
    return lootPoolCurious[Math.floor(Math.random() * lootPoolCurious.length)];
}

// 定义无名饰品的获取函数
function getRandomCuriousItem2() {
    return lootPoolCurious2[Math.floor(Math.random() * lootPoolCurious2.length)];
}

// 定义魔改kjs饰品的获取函数
function getRandomCuriousItemKJS() {
    return lootPoolCuriouskjs[Math.floor(Math.random() * lootPoolCuriouskjs.length)];
}

// 定义现代启示录高数值药水效果装备的获取函数
function getRandomHarmor() {
    return lootPoolHarmor[Math.floor(Math.random() * lootPoolHarmor.length)];
}

// 定义更改后的高数值装备的获取函数
function getRandomHarmorMod() {
    return lootPoolHarmor2[Math.floor(Math.random() * lootPoolHarmor2.length)];
}

// 定义魔改毕业套装的获取函数
function getRandomHarmorGraduation() {
    return lootPoolHarmor3[Math.floor(Math.random() * lootPoolHarmor3.length)];
}

// 定义未改高伤枪械的获取函数
function getRandomGunHigh() {
    return lootPoolgunm[Math.floor(Math.random() * lootPoolgunm.length)];
}

// 定义魔改中级枪械的获取函数
function getRandomGunMid() {
    return lootPoolgunx[Math.floor(Math.random() * lootPoolgunx.length)];
}

// 定义魔改高级枪械的获取函数
function getRandomGunTop() {
    return lootPoolgunz[Math.floor(Math.random() * lootPoolgunz.length)];
}


// 箱子战利品
LootJS.modifiers((event) => {
    // 矿物
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.6)
        .apply((context) => {
            // 80%原版矿物
            context.addLoot(LootEntry.of(getRandomOre(), randomCount).withChance(randomChance).when((c) => c.randomChance(0.8)));
            // 20%模组矿物
            context.addLoot(LootEntry.of(getRandomOreMod(), randomCount).withChance(randomChance).when((c) => c.randomChance(0.2)));

        });

    // 杂物
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.4)
        .apply((context) => {
            // 70%普通杂物
            context.addLoot(LootEntry.of(getRandomItem(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.7)));
            // 30%模组杂物
            context.addLoot(LootEntry.of(getRandomItemMod(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.3)));
        });

    // 子弹
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.3)
        .apply((context) => {
            // 70%普通子弹
            context.addLoot(LootEntry.of('tacz:ammo', randomCount, { AmmoId: getRandomAmmo() }).withChance(randomChance).when((c) => c.randomChance(0.7)));
            // 30%高级子弹
            context.addLoot(LootEntry.of('tacz:ammo', randomCount, { AmmoId: getRandomAmmoMod() }).withChance(randomChance).when((c) => c.randomChance(0.3)));
        });

    // 医疗物品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.2)
        .apply((context) => {
            // 60%回复生命值
            context.addLoot(LootEntry.of(getRandomHealthItem(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.6)));
            // 30%增益正面状态
            context.addLoot(LootEntry.of(getRandomBuffItem(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.3)));
            // 10%解除负面状态
            context.addLoot(LootEntry.of(getRandomDebuffItem(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.1)));
        });

    // 装备
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .apply((context) => {
            // 50%原版装备
            context.addLoot(LootEntry.of(getRandomArmor(), 1).withChance(randomChance).when((c) => c.randomChance(0.5)));
            // 10%max武器库装备
            context.addLoot(LootEntry.of(getRandomArmorMax(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 10%僵尸拓展装备
            context.addLoot(LootEntry.of(getRandomArmorZombie(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 10%末日生存工具包装备
            context.addLoot(LootEntry.of(getRandomArmorZK(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 10%现代启示录低数值装备
            context.addLoot(LootEntry.of(getRandomArmorApocalypse(), 1).withChance(randomChance).when((c) => c.randomChance(0.3)));
            // 10%更改后的高数值装备
            context.addLoot(LootEntry.of(getRandomHarmorMod(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
        });

    // 枪械
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .apply((context) => {
            // 60%未修改低伤枪械
            context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGun() }).withChance(randomChance).when((c) => c.randomChance(0.6)));
            // 40%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.4)));
        });

    // 重要材料物品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .apply((context) => {
            // 40%模组重要材料
            context.addLoot(LootEntry.of(getRandomMaterialMod(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.4)));
            // 40%模组重要材料
            context.addLoot(LootEntry.of(getRandomMaterialMod2(), randomCountlow).withChance(randomChance).when((c) => c.randomChance(0.4)));
            // 20%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.2)));
        });

    // 难度之心
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.03)
        .apply((context) => {
            // 50%三种SH难度心
            context.addLoot(LootEntry.of(getRandomHeart(), 1).withChance(randomChance).when((c) => c.randomChance(0.5)));
            // 50%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.5)));
        });

    // 任务道具
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.03)
        .apply((context) => {
            // 50%待定
            context.addLoot(LootEntry.of(getRandomTaskItem(), 1).withChance(randomChance).when((c) => c.randomChance(0.5)));
            // 50%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.5)));
        });

    // 饰品
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.02)
        .apply((context) => {
            // 30%奇异饰品
            context.addLoot(LootEntry.of(getRandomCuriousItem(), 1).withChance(randomChance).when((c) => c.randomChance(0.3)));
            // 30%无名饰品
            context.addLoot(LootEntry.of(getRandomCuriousItem2(), 1).withChance(randomChance).when((c) => c.randomChance(0.3)));
            // 10%魔改kjs饰品
            context.addLoot(LootEntry.of(getRandomCuriousItemKJS(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 30%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.3)));
        });

    // 高级装备
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.01)
        .apply((context) => {
            // 30%现代启示录高数值药水效果装备
            context.addLoot(LootEntry.of(getRandomHarmor(), 1).withChance(randomChance).when((c) => c.randomChance(0.3)));
            // 20%更改后的高数值装备
            context.addLoot(LootEntry.of(getRandomHarmorMod(), 1).withChance(randomChance).when((c) => c.randomChance(0.2)));
            // 10%魔改毕业套装
            context.addLoot(LootEntry.of(getRandomHarmorGraduation(), 1).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 40%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.4)));

        });

    // 高级枪械
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.01)
        .apply((context) => {
            // 50%未改高伤枪械
            context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunHigh() }).withChance(randomChance).when((c) => c.randomChance(0.5)));
            // 20%魔改中级枪械
            context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunMid() }).withChance(randomChance).when((c) => c.randomChance(0.2)));
            // 10%魔改高级枪械
            context.addLoot(LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunTop() }).withChance(randomChance).when((c) => c.randomChance(0.1)));
            // 20%空
            context.addLoot(LootEntry.of("minecraft:air", 1).withChance(randomChance).when((c) => c.randomChance(0.2)));
        });
});
