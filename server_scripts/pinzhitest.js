
let $ArmorItem = Java.loadClass('net.minecraft.world.item.ArmorItem');
let $ArmorItem$Type = Java.loadClass('net.minecraft.world.item.ArmorItem$Type');
let $SwordItem = Java.loadClass('net.minecraft.world.item.SwordItem');

// 定义所有需要处理的标签
let itemTags = [
    '@apocalypsenow',
    '@zombiekit',
    '@minecraft',
    '@cold_sweat',
    '@immersiveengineering',
    '@mutantmonsters',
    '@marbledsarsenal',
    '@spore',
    '@undead_revamp2',
    '@zombie_extreme',
    '@tacz'
];

// 处理盔甲和剑的函数
function processItem(event, item, itemId) {
    if (item instanceof $ArmorItem) {
        let armorType = item.type;
        if (armorType == $ArmorItem$Type.HELMET) {
            event.add('mryh:armor_head', itemId);
        } else if (armorType == $ArmorItem$Type.CHESTPLATE) {
            event.add('mryh:armor_chest', itemId);
        } else if (armorType == $ArmorItem$Type.LEGGINGS) {
            event.add('mryh:armor_legs', itemId);
        } else if (armorType == $ArmorItem$Type.BOOTS) {
            event.add('mryh:armor_feet', itemId);
        }
    }
    if (item instanceof $SwordItem || (item.id === 'tacz:modern_kinetic_gun')) {
        event.add('mryh:sword', itemId);
    }
}

ServerEvents.tags('item', event => {
    itemTags.forEach(tag => {
        Ingredient.of(tag).itemIds.forEach(itemId => {
            let item = Item.of(itemId).item;
            processItem(event, item, itemId);
        });
    });
});