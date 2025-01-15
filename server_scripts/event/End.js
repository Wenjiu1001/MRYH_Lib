//生物掉落战利品
ServerEvents.entityLootTables(event => {
    //守卫者之眼
    event.modifyEntity("guardvillagers:guard", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:guardian_eye").weight(100)
            pool.addEmpty(900)
        })
    })
    //不死之眼
    event.modifyEntity("undead_revamp2:theheavy", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:undead_eye").weight(100)
            pool.addEmpty(900)
        })
    })
    //邪恶之眼
    event.modifyEntity("zombie_extreme:rat_king", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:evil_eye").weight(100)
            pool.addEmpty(900)
        })
    })
    //下界之眼
    event.modifyEntity("minecraft:blaze", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:nether_eye").weight(100)
            pool.addEmpty(900)
        })
    })
    //诅咒之眼
    event.modifyEntity("mutantmonsters:mutant_zombie", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:cursed_eye").weight(300)
            pool.addEmpty(700)
        })
    })
    event.modifyEntity("mutantmonsters:mutant_creeper", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:cursed_eye").weight(300)
            pool.addEmpty(700)
        })
    })
    event.modifyEntity("mutantmonsters:mutant_enderman", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:cursed_eye").weight(300)
            pool.addEmpty(700)
        })
    })
    event.modifyEntity("mutantmonsters:mutant_skeleton", Loot => {
        Loot.addPool(pool => {
            pool.killedByPlayer()
            pool.addItem("endrem:cursed_eye").weight(300)
            pool.addEmpty(700)
        })
    })
})

//合成配方修改
ServerEvents.recipes(event => {
    //漆黑之眼
    event.shaped(Item.of('endrem:black_eye', 1), [
        'ABC',
        'DEF',
        'GHI'
    ],
        {
            A: "apocalypsenow:armorplate",
            B: "apocalypsenow:kevlar",
            C: "apocalypsenow:papertrash",
            D: "apocalypsenow:trashblue",
            E: "apocalypsenow:engineering_parts",
            F: "apocalypsenow:electrical_scrap",
            G: "apocalypsenow:sawi",
            H: "apocalypsenow:fertilizer",
            I: "apocalypsenow:scrapmetal"
        })
    //神秘之眼
    event.shaped(Item.of('endrem:cryptic_eye', 1), [
        'ABC',
        'DEF',
        'GHI'
    ],
        {
            A: "refinedstorage:crafter_manager",
            B: "refinedstorage:wireless_grid",
            C: "refinedstorage:crafter",
            D: "refinedstorage:relay",
            E: "refinedstorage:wireless_transmitter",
            F: "refinedstorage:security_manager",
            G: "refinedstorage:controller",
            H: "refinedstorage:grid",
            I: "refinedstorage:disk_drive"
        })
    //腐化之眼
    event.shaped(Item.of('endrem:corrupted_eye', 1), [
        'ABC',
        'DEF',
        'GHI'
    ],
        {
            A: "zombiekit:bulletproof_insert",
            B: "zombiekit:rubber",
            C: "zombiekit:miracle",
            D: "zombiekit:plastics",
            E: "zombiekit:drone_summon",
            F: "zombiekit:machine_gun_components",
            G: "zombiekit:firecracker",
            H: "zombiekit:potion_jar",
            I: "zombiekit:battery"
        })
    //女巫之眼
    event.shaped(Item.of('endrem:witch_eye', 1), [
        'ABC',
        'DEF',
        'GHI'
    ],
        {
            A: "immersiveengineering:hemp_fiber",
            B: "immersiveengineering:stick_treated",
            C: "immersiveengineering:component_iron",
            D: "immersiveengineering:wire_copper",
            E: "immersiveengineering:plate_duroplast",
            F: "immersiveengineering:coal_coke",
            G: "immersiveengineering:component_electronic",
            H: "immersiveengineering:plate_steel",
            I: "immersiveengineering:wirecoil_steel"
        })
    //无赖之眼
    //序列组装
    //将重复使用的物品id单独存入一个常量
    const create = event.recipes.create
    const incomplete = 'create:incomplete_precision_mechanism'
    create.sequenced_assembly(
        [
            Item.of("minecraft:netherite_scrap").withChance(0.02),
            Item.of("endrem:rogue_eye").withChance(0.1),
            Item.of("minecraft:emerald").withChance(0.88)
        ],
        'minecraft:diamond',
        [
            //机械手
            create.deploying(incomplete, [incomplete, 'minecraft:tnt']).keepHeldItem(),
            //切石机
            create.cutting(incomplete, incomplete),
            //注液器
            create.filling(incomplete, [incomplete, Fluid.lava(100)]),
            //压片
            create.pressing(incomplete, incomplete)
        ]
    )
        //中间件-加工半成品
        .transitionalItem(incomplete)
        //流程循环次数
        .loops(3)
    // 魔力之眼
    event.shapeless(Item.of('endrem:magical_eye',1),[
        'tacz:modern_kinetic_gun'
    ]);
})
