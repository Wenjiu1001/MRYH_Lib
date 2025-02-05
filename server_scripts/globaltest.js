

// 定义自定义标签
/*
ServerEvents.tags('minecraft:item', event => {
    const myTag = 'mryh:random_attribute';
    event.add(myTag, 'minecraft:wooden_sword');
    event.add(myTag, 'minecraft:stone_sword');
    event.add(myTag, 'minecraft:iron_sword');
    event.add(myTag, 'minecraft:golden_sword');
    event.add(myTag, 'minecraft:diamond_sword');
    event.add(myTag, 'minecraft:netherite_sword');
});
*/

ItemEvents.firstLeftClicked(event => {
    let nbt = event.item.nbt;
    switch (event.item.id) {
        case 'minecraft:wooden_sword':
            nbt.putString('mryh_attribute', 'strength');
            break;
        case 'minecraft:stone_sword':
            nbt.putString('mryh_attribute', 'speed');
            break;
        case 'minecraft:iron_boots':
            nbt.putString('mryh_attribute_armor_feet', 'durability');
            break;
        case 'minecraft:golden_boots':
            nbt.putString('mryh_attribute_armor_feet', 'defense');
            break;
        default:
            break;
    }
});

let $LecternMenu = Java.loadClass('net.minecraft.world.inventory.LecternMenu');
let $SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider');

PlayerEvents.chat(e => {
    let info = e.component.getString()
    if (!info.startsWith('open')) return
    let id = Number(info.substring(4))
    e.player.openMenu(
        new $SimpleMenuProvider(
            () => new $LecternMenu(id),
            ''
        )
    )
})