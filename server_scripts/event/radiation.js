// 定义辐射群系 ID
let RADIATION_BIOME_ID = 'biomesoplenty:wasteland';
// 定义辐射强度
let RADIATION_LEVEL = 15;
// 定义抗辐射药水效果的ID
let ANTI_RADIATION_EFFECT_ID = "mryh:noradiation";
// 定义防护装备的 ID
let PROTECTION_HELMET_ID = "apocalypsenow:advanced_hazmat_suit_helmet";
let PROTECTION_CHESTPLATE_ID = "apocalypsenow:advanced_hazmat_suit_chestplate";
let PROTECTION_LEGGINGS_ID = "apocalypsenow:advanced_hazmat_suit_leggings";
let PROTECTION_BOOTS_ID = "apocalypsenow:advanced_hazmat_suit_boots";

// 使用 PlayerEvents.tick 事件
PlayerEvents.tick(event => {
    let player = event.player;
    let damage = RADIATION_LEVEL * 0.1;
    let biomeId = event.player.block.biomeId.toString();

    let helmet = player.inventory.armor[3];
    let chestplate = player.inventory.armor[2];
    let leggings = player.inventory.armor[1];
    let boots = player.inventory.armor[0];
    let hasAntiRadiationEffect = player.getEffect("mryh:noradiation")
    let isProtected = helmet && chestplate && leggings && boots &&
        helmet.id == PROTECTION_HELMET_ID &&
        chestplate.id == PROTECTION_CHESTPLATE_ID &&
        leggings.id == PROTECTION_LEGGINGS_ID &&
        boots.id == PROTECTION_BOOTS_ID;

    if (biomeId == RADIATION_BIOME_ID) {
        if (event.level.dayTime() % 20 == 0) {
            if (!isProtected && !hasAntiRadiationEffect) {
                // 计算新的生命值
                let newHealth = player.health - damage;
                if (newHealth <= 0) {
                    // 如果生命值小于等于 0，则杀死玩家
                    player.kill()
                } else {
                    // 否则，减少生命值
                    player.health = newHealth;
                    player.sendData('mryh:radiation', { radiation: 1 })
                }
            } else {
                if (isProtected) {
                    if (event.level.dayTime() % 600 == 0) {
                        reduceDurability(helmet, 2);
                        reduceDurability(chestplate, 2);
                        reduceDurability(leggings, 2);
                        reduceDurability(boots, 2);
                        player.sendData('mryh:radiation', { radiation: 2 })
                    }
                } else if (hasAntiRadiationEffect && event.level.dayTime() % 600 == 0) {
                    player.sendData('mryh:radiation', { radiation: 3 })
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