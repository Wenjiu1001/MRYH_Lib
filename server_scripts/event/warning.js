// 定义辐射群系 ID
const RADIATION_BIOME_ID = 'biomesoplenty:wasteland';
// 定义辐射强度
const RADIATION_LEVEL = 15;
// 定义抗辐射药水效果的ID
const ANTI_RADIATION_EFFECT_ID = "mryh:noradiation";
// 定义防护装备的 ID
const PROTECTION_HELMET_ID = "apocalypsenow:advanced_hazmat_suit_helmet";
const PROTECTION_CHESTPLATE_ID = "apocalypsenow:advanced_hazmat_suit_chestplate";
const PROTECTION_LEGGINGS_ID = "apocalypsenow:advanced_hazmat_suit_leggings";
const PROTECTION_BOOTS_ID = "apocalypsenow:advanced_hazmat_suit_boots";

// 使用 PlayerEvents.tick 事件
PlayerEvents.tick(event => {
    const player = event.player;
    const damage = RADIATION_LEVEL * 0.1;
    const biomeId = event.player.block.biomeId.toString();

    const helmet = player.inventory.armor[3];
    const chestplate = player.inventory.armor[2];
    const leggings = player.inventory.armor[1];
    const boots = player.inventory.armor[0];
    const hasAntiRadiationEffect = player.getEffect("mryh:noradiation")
    const isProtected = helmet && chestplate && leggings && boots &&
        helmet.id === PROTECTION_HELMET_ID &&
        chestplate.id === PROTECTION_CHESTPLATE_ID &&
        leggings.id === PROTECTION_LEGGINGS_ID &&
        boots.id === PROTECTION_BOOTS_ID;

    if (biomeId === RADIATION_BIOME_ID) {
        if (event.level.dayTime() % 20 === 0) {
            if (!isProtected && !hasAntiRadiationEffect) {
                player.health -= damage;
                player.tell(`你受到了 ${damage.toFixed(2)} 点辐射伤害！`);
            } else {
                if (isProtected) {
                    if (event.level.dayTime() % 100 === 0) {
                        reduceDurability(helmet, 2);
                        reduceDurability(chestplate, 2);
                        reduceDurability(leggings, 2);
                        reduceDurability(boots, 2);
                        player.tell("你的防护装备成功防护了辐射，但耐久度减少了。");
                    }
                } else if (hasAntiRadiationEffect && event.level.dayTime() % 100 === 0) {
                    player.tell("你受到抗辐射药水的保护，没有受到伤害。");
                }
            }
        }
    }
});

// 减少装备耐久度的函数
function reduceDurability(armorPiece, amount) {
    if (armorPiece) {
        const newDamageValue = Math.min(armorPiece.damageValue + amount, armorPiece.maxDamage);
        armorPiece.setDamageValue(newDamageValue);
    }
}

let $Zombie = Java.loadClass("net.minecraft.world.entity.monster.Zombie")

let bleedcount = 0

EntityEvents.hurt(event => {
    if (event.entity.isPlayer()) {
        event.player.tell("测试");
        if (event.source.actual instanceof $Zombie) {
            event.player.tell("成功");
            bleedcount++;
            event.player.sendData('mryh:bleedcount', { bleedcount: bleedcount });
        }
    }
});