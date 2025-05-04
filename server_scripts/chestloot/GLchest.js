
// 定义随机数生成函数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 定义随机范围生成函数
function getRandomChance(min, max) {
    return Math.random() * (max - min) + min;
}

// ## 定义原版矿物的获取函数
function getRandomOre() {
    let lootPoolOres = [
        "minecraft:coal",
        "minecraft:copper_ingot",
        "minecraft:iron_ingot",
        "minecraft:quartz",
        "minecraft:amethyst_shard",
        "minecraft:gold_ingot",
        "minecraft:glowstone_dust"
    ];
    return lootPoolOres[Math.floor(Math.random() * lootPoolOres.length)];
}

// ## 定义模组矿物的获取函数
function getRandomOreMod() {
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
    return lootPoolOres2[Math.floor(Math.random() * lootPoolOres2.length)];
}

// ## 定义模组重要材料的获取函数
function getRandomMaterialMod() {
    let lootPoolmaterial2 = [
        "minecraft:prismarine_shard",
        "minecraft:prismarine_crystals",
        "minecraft:nautilus_shell",
        "minecraft:scute",
        "minecraft:echo_shard",
        "minecraft:blaze_powder",
        "minecraft:nether_wart",
        "minecraft:ghast_tear",
        "minecraft:blaze_rod",
        "minecraft:slime_ball"
    ];
    return lootPoolmaterial2[Math.floor(Math.random() * lootPoolmaterial2.length)];
}

// ## 定义模组重要材料 2 的获取函数
function getRandomMaterialMod2() {
    let lootPoolmaterial3 = [
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
    return lootPoolmaterial3[Math.floor(Math.random() * lootPoolmaterial3.length)];
}

// ## 定义模组重要材料 3 的获取函数
function getRandomMaterial3() {
    let lootPoolmaterial4 = [];
    return lootPoolmaterial4[Math.floor(Math.random() * lootPoolmaterial4.length)];
}

// ## 定义三种 SH 难度心的获取函数
function getRandomHeart() {
    let lootPoolheart = [
        "scalinghealth:cursed_heart",
        "scalinghealth:enchanted_heart",
        "scalinghealth:chance_heart",
        "scalinghealth:heart_crystal_shard",
        "scalinghealth:power_crystal_shard"
    ];
    return lootPoolheart[Math.floor(Math.random() * lootPoolheart.length)];
}

// ## 定义待定任务的获取函数
function getRandomTaskItem() {
    let lootPooltask = [
        "scalinghealth:heart_crystal",
        "scalinghealth:power_crystal"
    ];
    return lootPooltask[Math.floor(Math.random() * lootPooltask.length)];
}

// ## 定义奇异饰品的获取函数
function getRandomCuriousItem() {
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
    return lootPoolCurious[Math.floor(Math.random() * lootPoolCurious.length)];
}

// ## 定义无名饰品的获取函数
function getRandomCuriousItem2() {
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
    return lootPoolCurious2[Math.floor(Math.random() * lootPoolCurious2.length)];
}

// ## 定义魔改 kjs 饰品的获取函数
function getRandomCuriousItemKJS() {
    let lootPoolCuriouskjs = [];
    return lootPoolCuriouskjs[Math.floor(Math.random() * lootPoolCuriouskjs.length)];
}

// ## 定义现代启示录高数值药水效果装备的获取函数
function getRandomHarmor() {
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
        "zombiekit:standard_tactical_helmet"
    ];
    return lootPoolHarmor[Math.floor(Math.random() * lootPoolHarmor.length)];
}

// ## 定义更改后的高数值装备的获取函数
function getRandomHarmorMod() {
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
    return lootPoolHarmor2[Math.floor(Math.random() * lootPoolHarmor2.length)];
}

// ## 定义升级配件的获取函数
function getRandomupgradetierattachments() {
    let random = [
        "cyber_armorer:mod_blood",
        "cyber_armorer:mod_hurt",
        "emxarms:muzzle_emx_throw",
        "trisdyna:muzzle_trls_2",
        "trisdyna:muzzle_trls_3",
        "trisdyna:muzzle_trls_1",
        "emxarms:muzzle_emx_encapsulation",
        "applied_armorer:muzzle_chip_firefly",
        "applied_armorer:muzzle_chip_atm_x2",
        "bf1:ammo_mod_slug",
        "tacz:ammo_mod_fmj",
        "cyber_armorer:mod_static",
        "cyber_armorer:mod_ap",
        "tacz:ammo_mod_he",
        "tacz:ammo_mod_hp",
        "cyber_armorer:cyber_extended_mag_1",
        "tacz:ammo_mod_i",
        "trisdyna:stock_tris1",
        "trisdyna:stock_tris2",
        "trisdyna:stock_sf7e_sp",
        "emxarms:stock_emx_yield",
        "emxarms:stock_emx_reentrantlock",
        "emxarms:bayonet_emx_lightupgrade",
        "emxarms:stock_emx_sleep",
        "bc:apds",
        "bc:api",
        "bc:hei",
        "emxarms:muzzle_emx_catch",
        "applied_armorer:muzzle_chip_pcs_x1",
        "applied_armorer:muzzle_chip_firework",
        "emxarms:muzzle_emx_encapsulationse",
        "trisdyna:muzzle_tris1",
        "trisdyna:muzzle_tris2",
        "bc:tiehua_1",
        "bc:tiehua_3",
        "bc:tiehua_2",
        "cyber_armorer:cyber_extended_mag_3",
        "cyber_armorer:cyber_extended_mag_2",
        "cyber_armorer:mod_consentrate",
        "cyber_armorer:mod_insendiary",
        "cyber_armorer:mod_apex",
        "cyber_armorer:mod_equal"
    ];
    return random[Math.floor(Math.random() * random.length)];
}

// ## 定义镜子和枪口配件的获取函数
function getRandomguntierattachments() {
    let random = [
        "applied_armorer:si_ms_12",
        "tacz:scope_standard_8x",
        "bf1:sniper_scope",
        "bluearchive:scope_kurumi",
        "emxarms:sight_emx_aw_ba",
        "tacz:sight_exp3",
        "immersive_armorer:sight_light",
        "trisdyna:sight_tris_eos",
        "emxarms:sight_emx_aps",
        "bluearchive:scope_toki",
        "tacz:scope_elcan_4x",
        "emxarms:sight_emx_anonymous",
        "applied_armorer:scope_xgs_905",
        "bluearchive:scope_shiroko",
        "applied_armorer:si_double_sided_mirror",
        "emxarms:sight_emx_laterano_yh",
        "applied_armorer:si_pricision",
        "bluearchive:scope_otogi",
        "helldiver2:sight_1x_standard",
        "cyber_armorer:optic_02",
        "cyber_armorer:optic_01",
        "tacz:sight_552",
        "emxarms:sight_emx_tanh",
        "cyber_armorer:scope_01",
        "bluearchive:scope_fuuka",
        "bf1:sight_nydar",
        "create_armorer:sight_medium_distance",
        "emxarms:sight_emx_koei1",
        "emxarms:sight_emx_aw_h",
        "tacz:sight_rmr_dot",
        "tacz:sight_coyote",
        "immersive_armorer:scope_spyglass_ie",
        "create_armorer:sight_reflex",
        "emxarms:sight_emx_char2_ev",
        "emxarms:sight_emx_demo2",
        "emxarms:sight_emx_laterano",
        "applied_armorer:si_double_sided_mirror",
        "emxarms:sight_emx_laterano_yh",
        "applied_armorer:si_pricision",
        "bluearchive:scope_yukino",
        "bluearchive:scope_otogi",
        "applied_armorer:scope_ms_14",
        "applied_armorer:si_simple_3",
        "bluearchive:scope_toki",
        "tacz:scope_elcan_4x",
        "bluearchive:scope_serika",
        "trisdyna:sight_aurora",
        "emxarms:sight_emx_return_eos",
        "emxarms:sight_emx_integer",
        "applied_armorer:sight_type_3741",
        "immersive_armorer:sight_simple_reflex",
        "trisdyna:sight_tris_eosl",
        "emxarms:sight_emx_char1",
        "emxarms:sight_emx_char2",
        "emxarms:sight_emx_array",
        "bluearchive:scope_noa",
        "tacz:sight_uh1",
        "trisdyna:sight_tris_eosl",
        "emxarms:sight_emx_char1",
        "emxarms:sight_emx_char2",
        "emxarms:sight_emx_anonymous",
        "applied_armorer:scope_ms_14",
        "emxarms:sight_emx_anonymous_gw",
        "dawnhunting:tcplsight_t2",
        "applied_armorer:si_simple_3",
        "emxarms:sight_emx_return_yh",
        "trisdyna:sight_antares",
        "trisdyna:sight_neutron",
        "applied_armorer:scope_xgs_905",
        "bluearchive:scope_shiroko",
        "create_armorer:scope_telephoto",
        "bluearchive:scope_niko",
        "cyber_armorer:sight_05",
        "emxarms:sight_emx_laterano_rsi",
        "create_armorer:sight_standard",
        "tacz:sight_t1",
        "cyber_armorer:sight_02",
        "tacz:sight_t2",
        "cyber_armorer:sight_03",
        "cyber_armorer:sight_01",
        "emxarms:sight_emx_return",
        "helldiver2:sight_2x_advanced",
        "tacz:sight_sro_dot",
        "bc:qjz171_s",
        "applied_armorer:si_profession",
        "tacz:scope_acog_ta31",
        "cyber_armorer:sight_04",
        "applied_armorer:muzzle_chip_wither_sword",
        "applied_armorer:muzzle_classic",
        "applied_armorer:muzzle_commander",
        "bf1:bayonet_general",
        "mpworld:knife",
        "bf1:oem_muzzle_choke",
        "tacz:muzzle_brake_trex",
        "tacz:muzzle_compensator_trident",
        "tacz:muzzle_silencer_knight_qd",
        "emxarms:bayonet_emx_skyhunter",
        "emxarms:bayonet_emx_atomic",
        "emxarms:muzzle_sf7b_uac9000",
        "create_armorer:muzzle_pipe",
        "cyber_armorer:muzzle_07",
        "cyber_armorer:muzzle_06",
        "cyber_armorer:muzzle_05",
        "cyber_armorer:muzzle_04",
        "cyber_armorer:muzzle_03",
        "cyber_armorer:muzzle_02",
        "trisdyna:muzzle_tris_sl2",
        "trisdyna:muzzle_tris_sl1",
        "applied_armorer:muzzle_chip_hyper_propellant",
        "bluearchive:muzzle_fuuka",
        "tacz:muzzle_brake_pioneer",
        "tacz:muzzle_silencer_vulture",
        "mpworld:knife2",
        "applied_armorer:bayonet_gladius",
        "tacz:muzzle_brake_cyclone_d2",
        "create_armorer:muzzle_refit_iron_spike",
        "tacz:muzzle_silencer_phantom_s1",
        "tacz:muzzle_silencer_mirage",
        "immersive_armorer:bayonet_revolver",
        "gfl2:muzzle_speakers",
        "create_armorer:muzzle_refit_energy_blade",
        "tacz:muzzle_silencer_vulture",
        "tacz:muzzle_brake_cthulhu",
        "immersive_armorer:muzzle_extended_barrel",
        "immersive_armorer:muzzle_refit_pressure_wave",
        "bluearchive:muzzle_miyako",
        "applied_armorer:muzzle_chip_fat_boy",
        "emxarms:bayonet_emx_skyhunter_yh",
        "emxarms:bayonet_emx_skyhunter2",
        "emxarms:bayonet_emx_skyhunter_gw",
        "bc:chandai",
        "emxarms:muzzle_sf7b_super6",
        "immersive_armorer:muzzle_refit_melted_metal_spitter",
        "immersive_armorer:muzzle_refit_he_compound",
        "immersive_armorer:muzzle_refit_fuel_stream_diffuser",
        "immersive_armorer:muzzle_refit_face_melter",
        "emxarms:bayonet_emx_glowsword",
        "immersive_armorer:muzzle_focused_nozzle",
        "helldiver2:muzzle_brake_leviathan",
        "helldiver2:muzzle_brake_diligence",
        "helldiver2:muzzle_silencer_harmony",
        "helldiver2:muzzle_conpensator_civilization",
        "helldiver2:muzzle_brake_freedom",
        "create_armorer:muzzle_refit_lava_perfusion_bottle",
        "create_armorer:muzzle_refit_brass_retractor",
        "tacz:muzzle_silencer_ptilopsis",
        "emxarms:bayonet_emx_skyhunterax",
        "applied_armorer:muzzle_ns_1",
        "tacz:bayonet_m9",
        "applied_armorer:bayonet_er",
        "applied_armorer:muzzle_bs_mod4",
        "tacz:bayonet_6h3",
        "tacz:deagle_golden_long_barrel",
        "create_armorer:muzzle_refit_bigger_cylinder",
        "immersive_armorer:muzzle_refit_electromagnetic_accelerator"
    ];
    return random[Math.floor(Math.random() * random.length)];
}

// ## 定义其他配件的获取函数
function getRandomothertierattachments() {
    let random = [
        "create_armorer:extended_mag_ca_3",
        "create_armorer:extended_mag_ca_1",
        "tacz:extended_mag_2",
        "emxarms:ammo_sgeb",
        "immersive_armorer:extended_jar_3",
        "emxarms:ammo_l3r",
        "emxarms:ammo_h1",
        "emxarms:ammo_h3",
        "emxarms:ammo_h3r",
        "trisdyna:sf7e_ammo_3",
        "trisdyna:sf7e_ammo_2",
        "trisdyna:sf7e_ammo_1",
        "emxarms:ammo_sh2_if",
        "emxarms:ammo_sghe",
        "applied_armorer:extended_battery_aa_2",
        "immersive_armorer:extended_capacitor_3",
        "emxarms:emx_sfmag_1",
        "emxarms:ammo_sh3",
        "emxarms:ammo_sh1",
        "applied_armorer:extended_mag_aa_2",
        "applied_armorer:extended_mag_aa_1",
        "applied_armorer:extended_mag_aa_3",
        "tacz:extended_mag_3",
        "emxarms:ammo_sgap",
        "emxarms:emx_heavyweight_mag_3",
        "tacz:sniper_extended_mag_3",
        "tacz:sniper_extended_mag_2",
        "tacz:sniper_extended_mag_1",
        "emxarms:ammo_sreb",
        "emxarms:ammo_l1",
        "emxarms:emx_sfmag_3if",
        "emxarms:ammo_l2",
        "emxarms:ammo_l3",
        "emxarms:emx_lightweight_mag_2",
        "emxarms:ammo_srhe",
        "tacz:light_extended_mag_2",
        "tacz:light_extended_mag_3",
        "emxarms:emx_sfmag_3",
        "trisdyna:trammo_3",
        "applied_armorer:extended_battery_aa_1",
        "applied_armorer:extended_battery_aa_3",
        "trisdyna:trammo_1",
        "trisdyna:trammo_2",
        "immersive_armorer:extended_capacitor_2",
        "trisdyna:grip_shimmer",
        "create_armorer:grip_gantry_shaft",
        "emxarms:grip_emx_wireframedb",
        "tacz:grip_vertical_talon",
        "tacz:grip_vertical_military",
        "tacz:grip_vertical_ranger",
        "emxarms:grip_emx_if_ev",
        "emxarms:ammo_l2_hp",
        "emxarms:ammo_l2_if",
        "emxarms:grip_emx_if",
        "bf1:grip_trench_bipods",
        "emxarms:grip_emx_nested",
        "immersive_armorer:grip_twined",
        "applied_armorer:grip_sl_2",
        "bluearchive:grip_shiroko",
        "emxarms:grip_emx_double_yh",
        "bluearchive:grip_yukino",
        "dawnhunting:grip_tcpl_m1",
        "create_armorer:grip_pipe",
        "applied_armorer:grip_light",
        "applied_armorer:grip_stable",
        "applied_armorer:grip_eazy",
        "emxarms:grip_emx_synchronized1",
        "applied_armorer:extended_mid_mag_aa_2",
        "applied_armorer:extended_mid_mag_aa_3",
        "applied_armorer:extended_mid_mag_aa_1",
        "tacz:light_extended_mag_1",
        "immersive_armorer:grip_treated_wood",
        "gfl2:grip_banana",
        "tacz:grip_magpul_afg_2",
        "applied_armorer:grip_static_1",
        "emxarms:grip_emx_protected",
        "emxarms:grip_emx_synchronized0_yh",
        "trisdyna:grip_barrier",
        "bluearchive:grip_kurumi",
        "emxarms:grip_emx_float",
        "tacz:oem_stock_tactical",
        "tacz:oem_stock_light",
        "tacz:stock_carbon_bone_c5",
        "applied_armorer:bracelet_zenith",
        "bc:shuangtou",
        "applied_armorer:bracelet_exo",
        "applied_armorer:bracelet_magma_wristband",
        "create_armorer:grip_wooden",
        "emxarms:grip_emx_double_h",
        "tacz:stock_militech_b5",
        "emxarms:grip_emx_static",
        "applied_armorer:bracelet_broken_handcuffs",
        "emxarms:bayonet_emx_doom",
        "immersive_armorer:grip_aluminium",
        "bc:yinji",
        "gfl2:grip_rk_5",
        "applied_armorer:grip_lf11",
        "emxarms:grip_emx_wireframeex",
        "immersive_armorer:stock_crude",
        "applied_armorer:bracelet_koeis_armband",
        "tacz:oem_stock_heavy",
        "tacz:stock_tactical_ar",
        "immersive_armorer:stock_simple",
        "applied_armorer:bracelet_broken_watch",
        "applied_armorer:grip_storm",
        "emxarms:grip_emx_coder",
        "emxarms:grip_emx_extendsex",
        "applied_armorer:bracelet_niklas",
        "applied_armorer:bracelet_aerial_wristband"
    ];
    return random[Math.floor(Math.random() * random.length)];
}

// ## 定义原版装备的获取函数
function getRandomArmor() {
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
    return lootPoolarmor[Math.floor(Math.random() * lootPoolarmor.length)];
}

// ## 定义 max 武器库装备的获取函数
function getRandomArmorMax() {
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
    return lootPoolarmormax[Math.floor(Math.random() * lootPoolarmormax.length)];
}

// ## 定义僵尸拓展装备的获取函数
function getRandomArmorZombie() {
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
    return lootPoolarmore[Math.floor(Math.random() * lootPoolarmore.length)];
}

// ## 定义末日生存工具包装备的获取函数
function getRandomArmorZK() {
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
    return lootPoolarmors[Math.floor(Math.random() * lootPoolarmors.length)];
}

// ## 定义现代启示录低数值装备的获取函数
function getRandomArmorApocalypse() {
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
    return lootPoolarmorn[Math.floor(Math.random() * lootPoolarmorn.length)];
}

// ## 定义未修改低伤枪械的获取函数
function getRandomGun() {
    let lootPoolgun = [
        "applied_armorer:niklas_pistol_semi_pride",
        "immersive_armorer:standard_rail_pistol_mk3",
        "immersive_armorer:standard_rail_pistol_mk2",
        "immersive_armorer:standard_rail_pistol_mk1",
        "helldiver2:p2_peacemaker",
        "bf1:sw_model3",
        "bf1:obrez",
        "immersive_armorer:revolver",
        "immersive_armorer:standard_rail_pistol_mk4",
        "tacz:glock_17",
        "tacz:cz75",
        "tacz:p320",
        "mpworld:qs38",
        "tacz:deagle",
        "mpworld:leftdeagle",
        "tacz:deagle_golden",
        "mpworld:leftdeagle2",
        "tacz:m1911",
        "bf1:kolibri",
        "bf1:handgun",
        "create_armorer:pistol_auto_stress",
        "create_armorer:pistol_revolver_torque",
        "immersive_armorer:pistol_9mm",
        "applied_armorer:niklas_pistol_semi_union",
        "applied_armorer:niklas_pistol_semi_right",
        "mpworld:ise_52",
        "tacz:vector45",
        "gfl2:suomi",
        "trisdyna:cms92",
        "bluearchive:mika",
        "bf1:smg0818",
        "bluearchive:natsu",
        "helldiver2:smg37_defender",
        "mpworld:ls30d",
        "tacz:p90",
        "tacz:hk_mp5a5",
        "tacz:ump45",
        "gfl2:mourningwhispers",
        "bluearchive:miyako",
        "gfl2:ppsh_41",
        "tacz:uzi",
        "mpworld:ms39",
        "bluearchive:kurumi",
        "mpworld:ise_52c",
        "mpworld:ise_52b"
    ];
    return lootPoolgun[Math.floor(Math.random() * lootPoolgun.length)];
}

// ## 定义未改高伤枪械的获取函数
function getRandomGunHigh() {
    let lootPoolgunm = [
        "immersive_armorer:pump_shotgun",
        "mpworld:shot",
        "bc:dd",
        "mpworld:m870s",
        "tacz:m870",
        "tacz:db_long",
        "tacz:db_short",
        "bf1:model10",
        "create_armorer:shotgun_pump_bearing",
        "cyber_armorer:m2038",
        "bluearchive:niko",
        "helldiver2:ar23_liberator",
        "bf1:m1916",
        "helldiver2:ar23c_liberator",
        "immersive_armorer:assult_rifle",
        "mpworld:ls22b",
        "tacz:scar_h",
        "mpworld:545p",
        "mpworld:ls22",
        "mpworld:22r",
        "tacz:m16a4",
        "gfl2:g11_5",
        "tacz:m16a1",
        "gfl2:191",
        "tacz:sks_tactical",
        "tacz:type_81",
        "gfl2:wanderingstars",
        "bluearchive:azusa",
        "bluearchive:yukino",
        "mpworld:ls30",
        "helldiver2:ar23p_liberator",
        "bluearchive:toki",
        "bf1:vg15",
        "tacz:scar_l",
        "create_armorer:rifle_assult_crane",
        "mpworld:ls30b",
        "mpworld:ls45",
        "mpworld:ls",
        "tacz:aug"
    ];
    return lootPoolgunm[Math.floor(Math.random() * lootPoolgunm.length)];
}

// ## 定义魔改中级枪械的获取函数
function getRandomGunMid() {
    let lootPoolgunx = [
        "emxarms:emx_pulse",
        "cyber_armorer:yukimura_genjiroh",
        "cyber_armorer:yukimura_skippy",
        "cyber_armorer:yukimura",
        "cyber_armorer:unity_cheetah",
        "cyber_armorer:unity_her_majesty",
        "cyber_armorer:unity",
        "applied_armorer:niklas_pistol_double_win_win",
        "bluearchive:noa",
        "cyber_armorer:3516",
        "helldiver2:authorized_gun",
        "helldiver2:p19_redeemer",
        "emxarms:emx_mac100",
        "emxarms:emx_pulsex2",
        "emxarms:emx_kund50",
        "bluearchive:ayane",
        "emxarms:emx_mac50",
        "emxarms:emx_tknife",
        "emxarms:emx_kund50ex",
        "emxarms:emx_expel32se",
        "gfl2:lioncubs",
        "emxarms:emx_umx32",
        "bluearchive:fuuka",
        "cyber_armorer:g58_dian",
        "cyber_armorer:saratoga",
        "bf1:vp1915",
        "cyber_armorer:g58_dian_yinglong",
        "emxarms:emx_expel32",
        "emxarms:emx_enforcer",
        "emxarms:emx_scgraves",
        "bluearchive:hoshino",
        "bf1:wex",
        "tacz:aa12",
        "bf1:ef46",
        "cyber_armorer:carnage",
        "cyber_armorer:m2038_the_headsman",
        "emxarms:emx_umx57h",
        "bluearchive:serika",
        "gfl2:97",
        "tacz:hk_g3",
        "cyber_armorer:ajax",
        "cyber_armorer:copperhead",
        "tacz:mk14",
        "applied_armorer:niklas_lever_vigenere",
        "emxarms:emx_mk951l",
        "gfl2:g36",
        "gfl2:skulla",
        "gfl2:416a5",
        "gfl2:95_5",
        "emxarms:emx_mk951r",
        "emxarms:emx_umx57",
        "tacz:m4a1",
        "mpworld:sc15",
        "tacz:ak47",
        "tacz:qbz_95",
        "bluearchive:momoi",
        "gfl2:97",
        "mpworld:ls30c",
        "cyber_armorer:ajax_moron_labe",
        "applied_armorer:moritz_rifle_ar77",
        "cyber_armorer:ajax_pit_bull",
        "emxarms:emx_rivet",
        "tacz:hk416d",
        "mpworld:te_01",
        "bf1:tg1918",
        "tacz:m107",
        "tacz:m95",
        "create_armorer:sniper_semi_clockwork",
        "mpworld:mas49",
        "tacz:ai_awp",
        "mpworld:ssg08",
        "bf1:martini",
        "immersive_armorer:railgun",
        "tacz:m700",
        "helldiver2:r63_diligence",
        "helldiver2:r63cs_diligence",
        "bf1:man_m95",
        "mpworld:ssg08b",
        "bf1:lewis",
        "bc:ak50",
        "tacz:m249",
        "bf1:mg0815",
        "tacz:rpk",
        "mpworld:ak338l",
        "mpworld:ak338lb",
        "create_armorer:mg_platemag_flywheel",
        "bf1:mhgl",
        "helldiver2:jar5_dominator",
        "create_armorer:special_melee_wrench",
        "create_armorer:special_melee_atomic",
        "applied_armorer:special_melee_task_manager",
        "bf1:f_faust",
        "tacz:m320",
        "helldiver2:r36_eruptor",
        "bc:spg9",
        "tacz:rpg7"
    ];
    return lootPoolgunx[Math.floor(Math.random() * lootPoolgunx.length)];
}

// ## 定义魔改高级枪械的获取函数
function getRandomGunTop() {
    let lootPoolgunz = [
        "emxarms:emx_pulse_al",
        "emxarms:emx_pulse_sc",
        "emxarms:emx_kund50ex_al",
        "emxarms:emx_pulse_dl1",
        "emxarms:emx_pulse_dl2",
        "trisdyna:fl3e_sd",
        "trisdyna:fl3e",
        "trisdyna:fl00",
        "emxarms:emx_expel32se_ba",
        "emxarms:emx_umx32_koei",
        "dawnhunting:tcpl_vector45",
        "emxarms:emx_expel32_lb",
        "gfl2:stm",
        "gfl2:ls06",
        "emxarms:emx_draftsman",
        "emxarms:emx_draftsman_ev",
        "emxarms:emx_draftsman_ev1",
        "helldiver2:sg225ie_breaker",
        "trisdyna:iras",
        "gfl2:mindhunter",
        "trisdyna:fpc211",
        "emxarms:emx_mk951r_ba",
        "emxarms:emx_mk951l_ba",
        "emxarms:emx_rivet_gw",
        "trisdyna:ch104",
        "dawnhunting:tcpl_vector45ar",
        "cyber_armorer:copperhead_psalm",
        "cyber_armorer:grad_overwatch",
        "cyber_armorer:grad_05",
        "cyber_armorer:grad_sparky",
        "cyber_armorer:grad",
        "gfl2:bittercaramel",
        "gfl2:forestelves",
        "bluearchive:otogi",
        "applied_armorer:moritz_sniper_semi_k30",
        "cyber_armorer:grad_borzaya",
        "emxarms:emx_pmg90",
        "emxarms:emx_pmg90eos",
        "emxarms:emx_mk88"
    ];
    return lootPoolgunz[Math.floor(Math.random() * lootPoolgunz.length)];
}

// ## 定义食物杂物的获取函数
function getRandomItem() {
    let lootPoolItem = [
        "apocalypsenow:human_flesh",
        "farmersdelight:cooked_mutton_chops",
        "farmersdelight:mutton_chops",
        "farmersdelight:bacon",
        "farmersdelight:cooked_salmon_slice",
        "farmersdelight:cooked_cod_slice",
        "farmersdelight:cooked_bacon",
        "farmersdelight:cod_slice",
        "farmersdelight:salmon_slice",
        "apocalypsenow:vitamins",
        "apocalypsenow:butter",
        "apocalypsenow:grape_juice",
        "apocalypsenow:apple_juice",
        "apocalypsenow:chicken_wing",
        "apocalypsenow:marmalade",
        "apocalypsenow:lettuce",
        "apocalypsenow:military_canteen",
        "apocalypsenow:cream_cracker",
        "apocalypsenow:large_soda",
        "apocalypsenow:grapejuicebox",
        "apocalypsenow:orangejuicebox",
        "apocalypsenow:whisky",
        "apocalypsenow:peach_juice",
        "apocalypsenow:cooked_chicken_wing",
        "apocalypsenow:tomato",
        "apocalypsenow:donut",
        "farmersdelight:tomato_sauce",
        "farmersdelight:wheat_dough",
        "farmersdelight:raw_pasta",
        "farmersdelight:pumpkin_slice",
        "farmersdelight:cabbage_leaf",
        "farmersdelight:minced_beef",
        "farmersdelight:beef_patty",
        "farmersdelight:chicken_cuts",
        "farmersdelight:cooked_chicken_cuts",
        "farmersdelight:ham",
        "apocalypsenow:cooked_canned_chilie",
        "apocalypsenow:water",
        "apocalypsenow:milk",
        "apocalypsenow:cheese",
        "apocalypsenow:vodka",
        "apocalypsenow:cereal",
        "apocalypsenow:wine",
        "apocalypsenow:orange_juice",
        "apocalypsenow:nonalcoholic_beer",
        "apocalypsenow:cooked_canned_food",
        "apocalypsenow:open_canned_food",
        "apocalypsenow:canned_food",
        "apocalypsenow:open_canned_tomatos",
        "apocalypsenow:canned_tomatos",
        "apocalypsenow:open_canned_beans",
        "apocalypsenow:canned_beans",
        "apocalypsenow:cooked_canned_pork",
        "apocalypsenow:open_canned_pork",
        "apocalypsenow:canned_pork",
        "apocalypsenow:canned_corn",
        "apocalypsenow:coke",
        "apocalypsenow:beer",
        "apocalypsenow:mre",
        "apocalypsenow:canned_chili",
        "apocalypsenow:coffee",
        "apocalypsenow:open_canned_chili",
        "apocalypsenow:applejuicebox",
        "apocalypsenow:macandcheese",
        "apocalypsenow:chips",
        "apocalypsenow:nutrition_bar",
        "apocalypsenow:canned_water",
        "apocalypsenow:sugar_free_soda",
        "apocalypsenow:porpsi",
        "apocalypsenow:chocolate_bar",
        "apocalypsenow:energy_drink",
        "apocalypsenow:contaminated_water",
        "apocalypsenow:canned_strawberry",
        "apocalypsenow:open_canned_strawberry",
        "apocalypsenow:cooked_canned_beans",
        "apocalypsenow:canned_rabbit_soup",
        "apocalypsenow:open_canned_rabbit_soup",
        "apocalypsenow:cooked_canned_rabbit_soup",
        "apocalypsenow:cooked_canned_soup",
        "apocalypsenow:open_canned_soup",
        "apocalypsenow:canned_soup",
        "minecraft:feather",
        "minecraft:carrot",
        "minecraft:rotten_flesh",
        "minecraft:apple",
        "minecraft:mushroom_stew",
        "apocalypsenow:canned_carrot",
        "apocalypsenow:can_opener",
        "minecraft:egg",
        "minecraft:bone_meal",
        "minecraft:bone",
        "minecraft:potato",
        "minecraft:bread",
        "minecraft:iron_nugget",
        "minecraft:bucket",
        "minecraft:gold_nugget",
        "minecraft:melon_slice",
        "minecraft:spider_eye",
        "apocalypsenow:open_canned_carrot",
        "apocalypsenow:canned_fish",
        "apocalypsenow:open_canned_fish",
        "apocalypsenow:cooked_canned_fish",
        "apocalypsenow:canned_beetroot",
        "apocalypsenow:open_canned_beetroot",
        "apocalypsenow:canned_melon",
        "apocalypsenow:open_canned_melon",
        "apocalypsenow:dogs_food",
        "apocalypsenow:open_dogs_food",
        "minecraft:cod",
        "minecraft:salmon",
        "minecraft:cooked_porkchop",
        "minecraft:cooked_mutton",
        "minecraft:cooked_salmon",
        "minecraft:white_wool",
        "minecraft:leather",
        "supplementaries:candy",
        "minecraft:string",
        "minecraft:book",
        "minecraft:pumpkin_pie",
        "minecraft:glow_berries",
        "minecraft:ink_sac",
        "minecraft:wheat",
        "minecraft:dried_kelp",
        "minecraft:cookie",
        "minecraft:stick",
        "minecraft:water_bucket",
        "minecraft:baked_potato",
        "minecraft:cooked_rabbit",
        "minecraft:tropical_fish",
        "minecraft:sweet_berries",
        "minecraft:beetroot",
        "minecraft:mutton",
        "minecraft:porkchop",
        "minecraft:beef",
        "minecraft:rabbit",
        "minecraft:cooked_beef",
        "minecraft:cooked_chicken",
        "minecraft:cooked_cod",
        "minecraft:chicken"
    ];
    return lootPoolItem[Math.floor(Math.random() * lootPoolItem.length)];
}

// ## 定义现代杂物的获取函数
function getRandomItemMod() {
    let lootPoolItem1 = [
        "apocalypsenow:easteregg",
        "apocalypsenow:high_quality_cigarret",
        "apocalypsenow:high_quality_cigarettes",
        "apocalypsenow:medium_quality_cigarette",
        "apocalypsenow:medium_quality_cigarettes",
        "apocalypsenow:cigarette",
        "apocalypsenow:nail_gun",
        "apocalypsenow:nail",
        "apocalypsenow:strawhat_helmet",
        "apocalypsenow:glassbottle_2",
        "apocalypsenow:glassbottle_3",
        "apocalypsenow:ducttape",
        "apocalypsenow:sawi",
        "apocalypsenow:broken_radio",
        "apocalypsenow:cloth",
        "apocalypsenow:electrical_scrap",
        "apocalypsenow:aabattery",
        "apocalypsenow:toothpaste",
        "apocalypsenow:plastic",
        "apocalypsenow:bricktoys",
        "apocalypsenow:toy",
        "apocalypsenow:sock",
        "apocalypsenow:soap",
        "apocalypsenow:toiletpaper",
        "apocalypsenow:credit_card",
        "apocalypsenow:money",
        "apocalypsenow:breathingfiltermodule",
        "apocalypsenow:cards",
        "apocalypsenow:baseballball",
        "apocalypsenow:tenisball",
        "apocalypsenow:military_airdrop_radio",
        "apocalypsenow:radio_dropbox",
        "apocalypsenow:fantasy_book",
        "apocalypsenow:scifi_book",
        "apocalypsenow:novel_book",
        "apocalypsenow:comic_book",
        "minecraft:fishing_rod",
        "apocalypsenow:scrapmetal",
        "apocalypsenow:newspaper",
        "apocalypsenow:goldenwatch",
        "apocalypsenow:watch",
        "apocalypsenow:cellphone",
        "apocalypsenow:comb",
        "apocalypsenow:glue",
        "apocalypsenow:engineering_parts",
        "apocalypsenow:foam",
        "apocalypsenow:thincan",
        "apocalypsenow:small_can",
        "minecraft:iron_hoe",
        "apocalypsenow:needle",
        "apocalypsenow:bottle",
        "apocalypsenow:can",
        "apocalypsenow:nailbox",
        "minecraft:iron_pickaxe",
        "minecraft:iron_shovel",
        "minecraft:shears",
        "minecraft:flint_and_steel",
        "apocalypsenow:cigarettes",
        "apocalypsenow:magazine",
        "apocalypsenow:toothbrush",
        "minecraft:iron_axe",
        "minecraft:paper",
        "minecraft:diamond_axe"
    ];
    return lootPoolItem1[Math.floor(Math.random() * lootPoolItem1.length)];
}

// ## 定义现代装备杂物的获取函数
function getRandomItemIE() {
    let lootPoolItem2 = [
        "apocalypsenow:black_bikers_helmet",
        "apocalypsenow:pink_bikers_helmet",
        "apocalypsenow:cowboy_hat_helmet",
        "apocalypsenow:old_west_hat_helmet",
        "apocalypsenow:sack_helmet",
        "apocalypsenow:hockey_chestplate",
        "apocalypsenow:hockey_helmet",
        "apocalypsenow:hockey_leggings",
        "apocalypsenow:hockey_boots",
        "apocalypsenow:black_motorcycle_helmet_helmet",
        "apocalypsenow:red_motorcycle_helmet_helmet",
        "apocalypsenow:bluemotorcyclehelmet_helmet",
        "apocalypsenow:patriotmotorcyclehelmet_helmet",
        "apocalypsenow:red_football_armor_helmet",
        "apocalypsenow:yellow_football_armor_boots",
        "apocalypsenow:yellow_football_armor_leggings",
        "apocalypsenow:yellow_football_armor_chestplate",
        "apocalypsenow:yellow_football_armor_helmet",
        "apocalypsenow:red_football_armor_chestplate",
        "apocalypsenow:red_football_armor_leggings",
        "apocalypsenow:red_football_armor_boots",
        "apocalypsenow:green_bikers_helmet",
        "apocalypsenow:red_bikers_helmet",
        "apocalypsenow:gasmask_helmet",
        "apocalypsenow:jet_pilot_helmet",
        "apocalypsenow:black_football_armor_boots",
        "apocalypsenow:black_football_armor_leggings",
        "apocalypsenow:black_football_armor_chestplate",
        "apocalypsenow:black_football_armor_helmet",
        "apocalypsenow:blue_football_armor_boots",
        "apocalypsenow:blue_football_armor_leggings",
        "apocalypsenow:blue_football_armor_chestplate",
        "apocalypsenow:blue_football_armor_helmet",
        "apocalypsenow:bikers_helmet"
    ];
    return lootPoolItem2[Math.floor(Math.random() * lootPoolItem2.length)];
}

// ## 定义末日生存工具包杂物的获取函数
function getRandomItemZK() {
    let lootPoolItem3 = [
        "immersiveengineering:hemp_fabric",
        "immersiveengineering:component_electronic",
        "immersiveengineering:component_iron",
        "immersiveengineering:hemp_fiber",
        "zombiekit:saltpeter",
        "zombiekit:rubber",
        "zombiekit:death_bat",
        "zombiekit:iron_wire"
    ];
    return lootPoolItem3[Math.floor(Math.random() * lootPoolItem3.length)];
}

// ## 定义其他杂物的获取函数
function getRandomItemOther() {
    let lootPoolItem4 = [
        "zombie_extreme:rubber",
        "zombie_extreme:bronze_wire",
        "zombie_extreme:cloth",
        "marbledsarsenal:armor_plate",
        "spore:mutated_fiber",
        "marbledsarsenal:rubber"
    ];
    return lootPoolItem4[Math.floor(Math.random() * lootPoolItem4.length)];
}

// ## 定义普通子弹的获取函数
function getRandomAmmo() {
    let lootPooltaczammo = [
        "tacz:68x51fury",
        "tacz:308",
        "tacz:45acp",
        "tacz:762x39",
        "tacz:58x42",
        "tacz:12g",
        "tacz:9mm",
        "tacz:762x25",
        "tacz:50ae",
        "tacz:762x54",
        "tacz:30_06",
        "tacz:50bmg",
        "tacz:556x45",
        "tacz:46x30",
        "tacz:357mag"
    ];
    return lootPooltaczammo[Math.floor(Math.random() * lootPooltaczammo.length)];
}

// ## 定义高级子弹的获取函数
function getRandomAmmoMod() {
    let lootPooltaczammo2 = [
        "mpworld:545x39",
        "cyber_armorer:bullet_sniper_smart",
        "cyber_armorer:bullet_rifle_smart",
        "bc:pg9",
        "dawnhunting:b1",
        "dawnhunting:45acp",
        "cyber_armorer:bullet_pistol_smart",
        "bc:145114",
        "applied_armorer:cluster_quartz_bullet",
        "bluearchive:ammog11toki",
        "mpworld:545x39",
        "bc:tanta",
        "cyber_armorer:bullet_buckshot",
        "cyber_armorer:bullet_sniper",
        "trisdyna:emx_b2",
        "trisdyna:emx_b3",
        "create_armorer:slap",
        "bc:2bore",
        "bc:127108",
        "cyber_armorer:bullet_rifle",
        "trisdyna:emx_b1",
        "bf1:fuel"
    ];
    return lootPooltaczammo2[Math.floor(Math.random() * lootPooltaczammo2.length)];
}

// ## 定义特殊类型ammo的获取函数
function getRandomAmmospec() {
    let lootPooltaczammo2 = [
        "cyber_armorer:bullet_buckshot",
        "cyber_armorer:bullet_sniper",
        "trisdyna:emx_b2",
        "trisdyna:emx_b3",
        "create_armorer:slap",
        "bc:2bore",
        "bc:127108",
        "cyber_armorer:bullet_rifle",
        "trisdyna:emx_b1",
        "bf1:fuel",
        "create_armorer:melee_weapon",
        "bc:tanta_s"
    ];
    return lootPooltaczammo2[Math.floor(Math.random() * lootPooltaczammo2.length)];
}

// ## 定义回复生命值的获取函数
function getRandomHealthItem() {
    let lootPooltx = [
        "apocalypsenow:bloodbag",
        "scalinghealth:bandages",
        "apocalypsenow:medicalkit",
        "zombiekit:medical_kit",
        "scalinghealth:medkit",
        "minecraft:golden_apple"
    ];
    return lootPooltx[Math.floor(Math.random() * lootPooltx.length)];
}

// ## 定义增益正面状态的获取函数
function getRandomBuffItem() {
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
    return lootPooltx2[Math.floor(Math.random() * lootPooltx2.length)];
}

// ## 定义解除负面状态的获取函数
function getRandomDebuffItem() {
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
    return lootPooltx3[Math.floor(Math.random() * lootPooltx3.length)];
}

// 定义获取随机物品的函数
function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 定义箱子战利品的逻辑
LootJS.modifiers((event) => {
    // 矿物
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.5)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomOre(), getRandomNumber(5, 10))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.8))
            );
            context.addLoot(
                LootEntry.of(getRandomOreMod(), getRandomNumber(1, 5))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.2))
            );
        });

    // 杂物
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.8)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomItem(), getRandomNumber(1, 3))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.7))
            );
            context.addLoot(
                LootEntry.of(getRandomItem(), getRandomNumber(1, 3))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.7))
            );
            context.addLoot(
                LootEntry.of(getRandomItemMod(), getRandomNumber(1, 1))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomItemIE(), getRandomNumber(1, 1))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.7))
            );
            context.addLoot(
                LootEntry.of(getRandomItemZK(), getRandomNumber(1, 1))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
        });

    // 子弹
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.3)
        .apply((context) => {
            context.addLoot(
                LootEntry.of('tacz:ammo', getRandomNumber(10, 30), { AmmoId: getRandomAmmo() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.7))
            );
            context.addLoot(
                LootEntry.of('tacz:ammo', getRandomNumber(5, 20), { AmmoId: getRandomAmmoMod() })
                    .withChance(getRandomChance(0.1, 0.4))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of('tacz:ammo', getRandomNumber(1, 3), { AmmoId: getRandomAmmospec() })
                    .withChance(getRandomChance(0.1, 0.2))
                    .when((c) => c.randomChance(0.3))
            );
        });

    // 医疗物品
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.2)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomHealthItem(), getRandomNumber(1, 2))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.6))
            );
            context.addLoot(
                LootEntry.of(getRandomBuffItem(), getRandomNumber(1, 2))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomDebuffItem(), getRandomNumber(1, 2))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
        });

    // 装备
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomArmor(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
            context.addLoot(
                LootEntry.of(getRandomArmorMax(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
            context.addLoot(
                LootEntry.of(getRandomArmorZombie(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
            context.addLoot(
                LootEntry.of(getRandomArmorZK(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
            context.addLoot(
                LootEntry.of(getRandomArmorApocalypse(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomHarmorMod(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
        });

    // 枪械配件
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .apply((context) => {
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGun() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.6))
            );
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGun() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.6))
            );
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGun() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.6))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.4))
            );
        });

    // 枪械
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .apply((context) => {
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGun() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.6))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.4))
            );
        });

    // 重要材料物品
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomMaterialMod(), getRandomNumber(1, 5))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.4))
            );
            context.addLoot(
                LootEntry.of(getRandomMaterialMod2(), getRandomNumber(1, 5))
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.4))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.2))
            );
        });

    // 难度之心
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.03)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomHeart(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
        });

    // 任务道具
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.03)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomTaskItem(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
        });

    // 饰品
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.02)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomCuriousItem(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomCuriousItem2(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomCuriousItemKJS(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
        });

    // 高级装备
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.01)
        .apply((context) => {
            context.addLoot(
                LootEntry.of(getRandomHarmor(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.3))
            );
            context.addLoot(
                LootEntry.of(getRandomHarmorMod(), 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.2))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.4))
            );
        });

    // 高级枪械
    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.01)
        .apply((context) => {
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunHigh() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.5))
            );
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunMid() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.2))
            );
            context.addLoot(
                LootEntry.of('tacz:modern_kinetic_gun', 1, { GunId: getRandomGunTop() })
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.1))
            );
            context.addLoot(
                LootEntry.of("minecraft:air", 1)
                    .withChance(getRandomChance(0.1, 0.7))
                    .when((c) => c.randomChance(0.2))
            );
        });
});
