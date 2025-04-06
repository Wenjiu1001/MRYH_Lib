
// 定义辐射群系 ID
let RADIATION_BIOME_ID = 'biomesoplenty:wasteland';
// 定义辐射强度
let RADIATION_LEVEL = 15;
// 定义抗辐射药水效果的ID
let ANTI_RADIATION_EFFECT_ID = "zombie_extreme:radiation_protection";
// 定义防护装备的 ID
let PROTECTION_HELMET_ID = [
    "zombiekit:exo_helmet",
    "marbledsarsenal:hazmat_armor_helmet",
    "apocalypsenow:contamination_suit_green_helmet",
    "apocalypsenow:hazmat_suit_helmet",
    "apocalypsenow:advanced_hazmat_suit_helmet",
    "apocalypsenow:contamination_suit_white_helmet",
    "apocalypsenow:level_a_hazmatsuit_helmet",
    "zombie_extreme:hazmat_suit_helmet",
    "spore:plated_helmet",
    "spore:living_helmet",
    "spore:inf_helmet",
    "zombie_extreme:juggernaut_suit_helmet",
    "apocalypsenow:brazilian_army_helmet",
    "apocalypsenow:british_army_helmet",
    "apocalypsenow:canadian_army_helmet",
    "apocalypsenow:chinese_army_helmet",
    "apocalypsenow:bombsquad_helmet",
    "zombiekit:bomb_helmet",
    "apocalypsenow:italian_bersaglieri_army_helmet",
    "apocalypsenow:japanese_army_helmet",
    "zombie_extreme:exo_suit_helmet",
    "apocalypsenow:mexican_army_helmet",
    "apocalypsenow:russian_army_helmet",
    "apocalypsenow:juggernaut_helmet",
    "apocalypsenow:usa_armor_helmet"
];
let PROTECTION_CHESTPLATE_ID = [
    "zombiekit:exo_chestplate",
    "marbledsarsenal:hazmat_armor_chestplate",
    "apocalypsenow:advanced_hazmat_suit_chestplate",
    "apocalypsenow:contamination_suit_white_chestplate",
    "apocalypsenow:contamination_suit_blue_chestplate",
    "apocalypsenow:level_a_hazmatsuit_chestplate",
    "zombie_extreme:hazmat_suit_chestplate",
    "spore:inf_chest",
    "spore:plated_chest",
    "spore:living_chest",
    "spore:r_elytron",
    "spore:inf_up_chest",
    "zombie_extreme:juggernaut_suit_chestplate",
    "apocalypsenow:brazilian_army_chestplate",
    "apocalypsenow:british_army_chestplate",
    "apocalypsenow:canadian_army_chestplate",
    "apocalypsenow:chinese_army_chestplate",
    "apocalypsenow:bombsquad_chestplate",
    "zombiekit:bomb_chestplate",
    "apocalypsenow:italian_bersaglieri_army_chestplate",
    "apocalypsenow:japanese_army_chestplate",
    "zombie_extreme:exo_suit_chestplate",
    "apocalypsenow:mexican_army_chestplate",
    "apocalypsenow:russian_army_chestplate",
    "apocalypsenow:juggernaut_chestplate",
    "apocalypsenow:usa_armor_chestplate"
];
let PROTECTION_LEGGINGS_ID = [
    "zombiekit:exo_leggings",
    "marbledsarsenal:hazmat_armor_leggings",
    "apocalypsenow:hazmat_suit_leggings",
    "apocalypsenow:advanced_hazmat_suit_leggings",
    "apocalypsenow:contamination_suit_white_leggings",
    "apocalypsenow:level_a_hazmatsuit_leggings",
    "zombie_extreme:hazmat_suit_leggings",
    "apocalypsenow:contamination_suit_blue_leggings",
    "spore:inf_pants",
    "spore:plated_pants",
    "spore:living_pants",
    "zombie_extreme:juggernaut_suit_leggings",
    "apocalypsenow:brazilian_army_leggings",
    "apocalypsenow:british_army_leggings",
    "apocalypsenow:canadian_army_leggings",
    "apocalypsenow:chinese_army_leggings",
    "apocalypsenow:bombsquad_leggings",
    "zombiekit:bomb_leggings",
    "apocalypsenow:italian_bersaglieri_army_leggings",
    "apocalypsenow:japanese_army_leggings",
    "zombie_extreme:exo_suit_leggings",
    "apocalypsenow:mexican_army_leggings",
    "apocalypsenow:russian_army_leggings",
    "apocalypsenow:juggernaut_leggings",
    "apocalypsenow:usa_armor_leggings"
];
let PROTECTION_BOOTS_ID = [
    "zombiekit:exo_boots",
    "marbledsarsenal:hazmat_armor_boots",
    "apocalypsenow:hazmat_suit_boots",
    "apocalypsenow:advanced_hazmat_suit_boots",
    "apocalypsenow:contamination_suit_white_boots",
    "apocalypsenow:level_a_hazmatsuit_boots",
    "spore:inf_boots",
    "spore:plated_boots",
    "spore:living_boots",
    "zombie_extreme:juggernaut_suit_boots",
    "apocalypsenow:brazilian_army_boots",
    "apocalypsenow:british_army_boots",
    "apocalypsenow:canadian_army_boots",
    "apocalypsenow:chinese_army_boots",
    "apocalypsenow:bombsquad_boots",
    "zombiekit:bomb_boots",
    "apocalypsenow:italian_bersaglieri_army_boots",
    "apocalypsenow:japanese_army_boots",
    "zombie_extreme:exo_suit_boots",
    "apocalypsenow:mexican_army_boots",
    "apocalypsenow:russian_army_boots",
    "apocalypsenow:juggernaut_boots",
    "apocalypsenow:usa_armor_boots"
];

// 使用 PlayerEvents.tick 事件
PlayerEvents.tick(event => {
    let player = event.player;
    let damage = RADIATION_LEVEL * 0.1;
    let biomeId = player.block.biomeId.toString();

    let helmet = player.inventory.armor[3];
    let chestplate = player.inventory.armor[2];
    let leggings = player.inventory.armor[1];
    let boots = player.inventory.armor[0];
    let hasAntiRadiationEffect = player.getEffect(ANTI_RADIATION_EFFECT_ID);

    // 修复：使用 includes() 检查装备ID
    let isProtected =
        helmet && chestplate && leggings && boots &&
        PROTECTION_HELMET_ID.includes(helmet.id) &&
        PROTECTION_CHESTPLATE_ID.includes(chestplate.id) &&
        PROTECTION_LEGGINGS_ID.includes(leggings.id) &&
        PROTECTION_BOOTS_ID.includes(boots.id);

    if (biomeId === RADIATION_BIOME_ID && !player.isCreative()) {
        if (event.level.dayTime() % 20 == 0) {
            if (!isProtected && !hasAntiRadiationEffect) {
                let newHealth = player.health - damage;
                if (newHealth <= 0) {
                    player.kill();
                } else {
                    player.health = newHealth;
                    player.sendData('mryh:radiation', { radiation: 1 });
                }
            } else {
                if (isProtected && event.level.dayTime() % 600 == 0) {
                    let send = 0;
                    // 修复：分别检查每个装备的附魔
                    if (!helmet.getEnchantmentLevel('g_abun:absolutelyunbreakable')) {
                        reduceDurability(helmet, 2);
                        send = 1;
                    }
                    if (!chestplate.getEnchantmentLevel('g_abun:absolutelyunbreakable')) {
                        reduceDurability(chestplate, 2);
                        send = 1;
                    }
                    if (!leggings.getEnchantmentLevel('g_abun:absolutelyunbreakable')) {
                        reduceDurability(leggings, 2);
                        send = 1;
                    }
                    if (!boots.getEnchantmentLevel('g_abun:absolutelyunbreakable')) {
                        reduceDurability(boots, 2);
                        send = 1;
                    }
                    if (send == 1) {
                        player.sendData('mryh:radiation', { radiation: 2 });
                    }
                } else if (hasAntiRadiationEffect && event.level.dayTime() % 600 == 0) {
                    player.sendData('mryh:radiation', { radiation: 3 });
                }
            }
        }
    }
});

// 减少装备耐久度的函数
function reduceDurability(armorPiece, amount) {
    if (armorPiece) {
        let newDamageValue = Math.min(armorPiece.damageValue + amount, armorPiece.maxDamage);
        armorPiece.setDamageValue(newDamageValue);
    }
}
/*
ItemEvents.rightClicked('zombie_extreme:pill_against_radiation',e=>{
    e.player.potionEffects.add("mryh:noradiation",6000,0,false,false)
})
    */
