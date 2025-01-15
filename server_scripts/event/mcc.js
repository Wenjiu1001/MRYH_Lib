ServerEvents.recipes(e => {
    //锻造台
    e.smithing('16x minecraft:lapis_lazuli','minecraft:blue_dye','minecraft:lapis_block','minecraft:diamond')
    //切石机
    e.stonecutting('zombie_extreme:ignotsteel','immersiveengineering:ingot_steel')
    e.stonecutting('modern_structures:steel','immersiveengineering:ingot_steel')
    e.stonecutting('marbledsapi:steel_ingot','immersiveengineering:ingot_steel')
    //删除切石机
    e.remove({output:'minecraft:stonecutter'})
    //添加切石机
    e.shaped('minecraft:stonecutter',[
        " A ",
        "BCD",
        "EEE"
    ],{
        A:'create:iron_sheet',
        B:'create:cogwheel',
        C:'create:shaft',
        D:'create:large_cogwheel',
        E:'create:andesite_casing'
    })
})