let randomCount = Math.floor(Math.random() * (10 - 5 + 1)) + 10;
let randomCountlow = Math.floor(Math.random() * (2 - 0 + 1)) + 10;
let randomEnchantLevel = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
let randomEnchantLevellow = Math.floor(Math.random() * (10 - 0 + 1)) + 10;
let randomChance = Math.random() * (0.7 - 0.1) + 0.1;
let randomChancelow = Math.random() * (0.1 - 0.01) + 0.1;

// 定义一般配件的数组
let lootPoolGeneral = [
    "emxarms:bayonet_emx_skyhunter",
    "emxarms:bayonet_emx_skyhunter_gw",
    "converted:afg2_sap",
    "emxarms:grip_emx_double_h",
    "emxarms:grip_emx_wireframedb",
    "emxarms:grip_emx_double_yh",
    "emxarms:grip_emx_synchronized0_yh",
    "tacz:muzzle_brake_pioneer",
    "tacz:muzzle_silence_ptilopsis",
    "gucci_attachments:stock_precise",
    "tacz:stock_carbon_bone_c5",
    "helldiver2:muzzle_brake_freedom",
    "converted:c5stock_sap",
    "converted:416sap_heavystock",
    "immersive_armorer:muzzle_refit_face_melter",
    "cake:muzzle_hk45",
    "tacz:bayonet_6h3",
    "immersive_armorer:bayonet_revolver",
    "emxarms:grip_emx_extendsex",
    "gucci_attachments:grip_rk2",
    "gucci_attachments:grip_rk6",
    "emxarms:grip_emx_wireframeex"
];

// 定义倍镜扩容的数组
let lootPoolScope = [
    "emxarms:sight_emx_integer",
    "immersive_armorer:muzzle_refit_fuel_stream_diffuser",
    "emxarms:sight_emx_return_yh",
    "create_armorer:scope_telephoto",
    "tacz:sight_t2",
    "immersive_armorer:extended_jar_1",
    "tacz:scope_acog_ta31",
    "cake:scope_sig556",
    "create_armorer:extended_mag_ca_2",
    "tacz:extended_mag_3",
    "tacz:scope_retro_2x",
    "tacz:light_extended_mag_2",
    "immersive_armorer:sight_simple_reflex",
    "tacz:light_extended_mag_3",
    "emxarms:sight_emx_laterano_rsi",
    "create_armorer:extended_mag_ca_1",
    "tuzi:sight_trojan",
    "tacz:sniper_extended_mag_3",
    "cake:scope_mp7",
    "converted:hhs2_cr",
    "tacz:sight_sro_dot",
    "emxarms:sight_emx_char1",
    "emxarms:sight_emx_return",
    "emxarms:sight_emx_char2_ev",
    "create_armorer:sight_standard"
];

// 定义特殊配件的数组
let lootPoolSpecial = [
    "immersive_armorer:extended_capacitor_3",
    "emxarms:ammo_h3",
    "emxarms:ammo_sh1",
    "emxarms:ammo_sgap",
    "emxarms:ammo_l2",
    "emxarms:ammo_h2_if",
    "emxarms:ammo_sh2_if",
    "immersive_armorer:extended_capacitor_2",
    "emxarms:emx_sfmag_1he",
    "emxarms:ammo_l2_if",
    "immersive_armorer:extended_jar_3",
    "emxarms:emx_sfmag_1"
];

// 定义EMX升级件的数组
let lootPoolEMX = [
    "emxarms:emx_cus_tool",
    "converted:enduring_victory_pt"
];

// 定义其他升级件的数组
let lootPoolAdditional = [
    "emxarms:muzzle_emx_catch",
    "emxarms:muzzle_emx_throw",
    "wemql:sj",
    "emxarms:stock_emx_sleep",
    "emxarms:muzzle_emx_catch",
    "emxarms:muzzle_emx_encapsulation",
    "emxarms:muzzle_emx_encapsulationse",
    "emxarms:bayonet_emx_lightupgrade",
    "emxarms:stock_emx_yield",
    "emxarms:stock_emx_reentrantlock"
];

// 定义获取一般配件的函数
function getRandomGeneralItem() {
    return lootPoolGeneral[Math.floor(Math.random() * lootPoolGeneral.length)];
}

// 定义获取倍镜扩容的函数
function getRandomScopeItem() {
    return lootPoolScope[Math.floor(Math.random() * lootPoolScope.length)];
}

// 定义获取特殊配件的函数
function getRandomSpecialItem() {
    return lootPoolSpecial[Math.floor(Math.random() * lootPoolSpecial.length)];
}

// 定义获取EMX升级件的函数
function getRandomEMXItem() {
    return lootPoolEMX[Math.floor(Math.random() * lootPoolEMX.length)];
}

// 定义获取其他升级件的函数
function getRandomAdditionalItem() {
    return lootPoolAdditional[Math.floor(Math.random() * lootPoolAdditional.length)];
}

// 应用LootJS修改器
LootJS.modifiers((event) => {
    // 50%配件
    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.5)
        .apply((context) => {
            // 70%一般配件
            context.addLoot(LootEntry.of('tacz:attachment', 1, { AttachmentId: getRandomGeneralItem() }).withChance(randomChance).when((c) => c.randomChance(0.7)));
            // 20%倍镜扩容
            context.addLoot(LootEntry.of('tacz:attachment', 1, { AttachmentId: getRandomScopeItem() }).withChance(randomChance).when((c) => c.randomChance(0.2)));
            // 10%特殊配件
            context.addLoot(LootEntry.of('tacz:attachment', 1, { AttachmentId: getRandomSpecialItem() }).withChance(randomChance).when((c) => c.randomChance(0.1)));
        });
    // 30%特殊升级件
    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.3)
        .apply((context) => {
            // 50%EMX升级件
            context.addLoot(LootEntry.of('tacz:ammo', 1, { AmmoId: getRandomEMXItem() }).withChance(randomChance).when((c) => c.randomChance(0.5)));
            // 50%其他升级件
            context.addLoot(LootEntry.of('tacz:attachment', 1, { AttachmentId: getRandomAdditionalItem() }).withChance(randomChance).when((c) => c.randomChance(0.5)));
        });
});