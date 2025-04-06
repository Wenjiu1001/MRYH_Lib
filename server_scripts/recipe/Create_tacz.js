
ServerEvents.recipes(event => {
    const { create } = event.recipes
    //动力合成器魔改
    create.mechanical_crafting("create:creative_blaze_cake", [
        "DDDDDDDDD",
        "DAAAAAAAD",
        "DAAAAAAAD",
        "DAAABAAAD",
        "DAABCBAAD",
        "DAAABAAAD",
        "DAAAAAAAD",
        "DAAAAAAAD",
        "DDDDDDDDD"
    ], {
        A: 'create:blaze_cake',
        B: 'mryh:ultimate_permession',
        C: "create:blaze_burner",
        D: "minecraft:nether_star"
    })
    create.mechanical_crafting('create:creative_fluid_tank', [
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAADBDAAA",
        "AAABCBAAA",
        "AAADBDAAA",
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAAAAAAAA"
    ], {
        A: 'create:fluid_tank',
        B: 'mryh:ultimate_permession',
        C: 'create:mechanical_pump',
        D: 'create:fluid_pipe'
    })
    create.mechanical_crafting(Item.of('tacz:ammo_box', '{Creative:1b}'), [
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAADBDAAA",
        "AAABCBAAA",
        "AAADBDAAA",
        "AAAAAAAAA",
        "AAAAAAAAA",
        "AAAAAAAAA"
    ], {
        A: 'minecraft:purpur_block',
        B: 'mryh:ultimate_permession',
        C: "minecraft:nether_star",
        D: 'minecraft:enchanted_golden_apple'
    })
    //石磨魔改
    create.milling('immersiveengineering:dust_copper', ["minecraft:copper_ingot"])
    create.milling('immersiveengineering:dust_iron', ["minecraft:iron_ingot"])
    create.milling('mryh:dust_tin', ['zombie_extreme:ignot_tin'])
    //粉碎轮魔改
    create.crushing(['immersiveengineering:dust_copper', Item.of('immersiveengineering:dust_copper').withChance(0.5)], ["minecraft:copper_ingot"]).processingTime(20 * 4)
    create.crushing(['immersiveengineering:dust_iron', Item.of('immersiveengineering:dust_iron').withChance(0.5)], ["minecraft:iron_ingot"]).processingTime(20 * 4)
    event.recipes.createCrushing('4x minecraft:tube_coral', 'minecraft:tube_coral_block')
    event.recipes.createCrushing('4x minecraft:brain_coral', 'minecraft:brain_coral_block')
    event.recipes.createCrushing('4x minecraft:bubble_coral', 'minecraft:bubble_coral_block')
    event.recipes.createCrushing('4x minecraft:fire_coral', 'minecraft:fire_coral_block')
    event.recipes.createCrushing('4x minecraft:horn_coral', 'minecraft:horn_coral_block')
    create.crushing(['mryh:dust_tin', Item.of('mryh:dust_tin').withChance(0.5)], ['zombie_extreme:ignot_tin']).processingTime(20 * 4)
    //注液器魔改
    create.filling("minecraft:tube_coral_block", ['minecraft:dead_tube_coral_block', Fluid.of("mryh:seawater", 100)])
    create.filling("minecraft:brain_coral_block", ['minecraft:dead_brain_coral_block', Fluid.of("mryh:seawater", 100)])
    create.filling("minecraft:bubble_coral", ['minecraft:dead_bubble_coral_block', Fluid.of("mryh:seawater", 100)])
    create.filling("minecraft:fire_coral_block", ['minecraft:fire_coral_block', Fluid.of("mryh:seawater", 100)])
    create.filling("minecraft:horn_coral", ['minecraft:horn_coral', Fluid.of("mryh:seawater", 100)])
    //动力搅拌器魔改
    create.mixing(Item.of('zombie_extreme:ignot_bronze', 2), ['immersiveengineering:dust_copper', 'mryh:dust_tin']).heated()
    create.mixing(Fluid.of("mryh:seawater", 1000), [Fluid.of("minecraft:water", 1000), 'minecraft:sea_pickle', 'minecraft:kelp', 'minecraft:seagrass']).heated()
    //序列组装魔改
    const incomplete = 'mryh:ammo_half'
    /*
     * 将重复使用的物品id单独存入一个常量里
     * 这一步其实可有可无,个人建议不要搞这个
     * 如果使用重复的名称,那么只有最后一条是有效的
     * 为了避免这种情况产生,请避免使用重复的常量&变量命名
    //序列组装
        create.sequenced_assembly(
            // 输出物品及概率(这里的概率更偏向于占比),
            // 占比越高输出该物品的概率越高
            // 数组内的第一个物品为主要输出物品
            // 其他输出物品则为“废料”
            [
                Item.of("diamond").withChance(0.02),
                Item.of("cobblestone").withChance(0.5),
                Item.of("stone").withChance(0.8)
            ],
            // 输入物品
            "minecraft:deepslate",
            // 参与机器--按顺序加工
            [
                // 参与机器--机械手
                create.deploying(incomplete, [incomplete, "minecraft:tnt"]).keepHeldItem(),
                // 参与机器--切石机
                create.cutting(incomplete, incomplete),
                // 参与机器--注液器
                create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 100)]),
                // 参与机器--压片
                create.pressing(incomplete,incomplete)
            ]
        )
        // 中间件--加工成的半成品物品
        .transitionalItem(incomplete)
        // 循环次数--如果不写默认为5次
        .loops(3)
        */
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"mpworld:22mm"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"mpworld:22mm"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:netherite_ingot'])
        ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"mpworld:357wg"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"mpworld:357wg"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:diamond']),
            create.deploying(incomplete, [incomplete, 'minecraft:log']),
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot'])
        ]
    ).transitionalItem(incomplete).loops(1)//5-32-16
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"mpworld:545x39"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"mpworld:545x39"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:diamond']),
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //7-42
    // [emxarms:339x57 60] {minecraft:iron_ingot 2 minecraft:coal 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:339x57"}').withChance(1)
        ],
        Item.of('tacz:ammo').withNBT('{AmmoId:"emxarms:339x57"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-2

    // [emxarms:339x57fmj 30] {minecraft:iron_ingot 2 minecraft:amethyst_shard 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"emxarms:339x57fmj"}').withChance(1)
        ],
        Item.of('tacz:ammo','{AmmoId:"emxarms:339x57fmj"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:amethyst_shard'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-1

    // [emxarms:339x57x 60] {minecraft:netherite_ingot 1 minecraft:iron_ingot 2 minecraft:blaze_rod 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:339x57x"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:339x57x"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:netherite_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:blaze_rod'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-2-1

    // [emxarms:402x31 45] {minecraft:iron_ingot 1 minecraft:coal 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 45, '{AmmoId:"emxarms:402x31"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-1

    // [emxarms:402x31fmj 30] {minecraft:iron_ingot 2 minecraft:amethyst_shard 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"emxarms:402x31fmj"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31fmj"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:amethyst_shard'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-1

    // [emxarms:402x31rip 60] {minecraft:iron_ingot 4 minecraft:amethyst_shard 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:402x31rip"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31rip"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:amethyst_shard'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //4-1

    // [emxarms:410x57ap 20] {minecraft:iron_ingot 3 minecraft:coal 5}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"emxarms:410x57ap"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:410x57ap"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //3-5

    // [emxarms:1045x103 24] {minecraft:iron_ingot 6 minecraft:coal 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 24, '{AmmoId:"emxarms:1045x103"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:1045x103"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //6-4

    // [emxarms:1045x103belt 10] {minecraft:iron_ingot 6 minecraft:blaze_powder 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"emxarms:1045x103belt"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:1045x103belt"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //6-1

    // [emxarms:emx_rem 10] {minecraft:nether_star 1 minecraft:netherite_ingot 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"emxarms:emx_rem"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:emx_rem"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:nether_star']),
            create.deploying(incomplete, [incomplete, 'minecraft:netherite_ingot'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-2

    // [emxarms:emx_tediore 30] {minecraft:clay_ball 2 minecraft:glass 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"emxarms:emx_tediore"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:emx_tediore"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:clay_ball']),
            create.deploying(incomplete, [incomplete, 'minecraft:glass'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-1

    // [emxarms:x16he 40] {minecraft:charcoal 3 minecraft:iron_ingot 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 40, '{AmmoId:"emxarms:x16he"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:x16he"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:charcoal']),
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //3-3

    // [emxarms:x16sg 20] {minecraft:iron_nugget 27 minecraft:coal 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"emxarms:x16sg"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"emxarms:x16sg"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //27-3

    // [trisdyna:emx_b1 16] {minecraft:iron_ingot 10 minecraft:coal 16}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 16, '{AmmoId:"trisdyna:emx_b1"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"trisdyna:emx_b1"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //10-16

    // [trisdyna:emx_b2 12] {minecraft:iron_ingot 16 minecraft:coal 20}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"trisdyna:emx_b2"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"trisdyna:emx_b2"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //16-20

    // [trisdyna:emx_b3 8] {minecraft:iron_ingot 24 minecraft:gold_ingot 8 minecraft:coal 30}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 8, '{AmmoId:"trisdyna:emx_b3"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"trisdyna:emx_b3"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:gold_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //24-8-30

    // [bf1:132x92 20] {#forge:ingots/iron 16 #forge:ingots/copper 72 #forge:gunpowder 24}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"bf1:132x92"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bf1:132x92"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //16-72-24

    // [bf1:450 5] {#forge:ingots/copper 2 #forge:gunpowder 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 5, '{AmmoId:"bf1:450"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bf1:450"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-1

    // [bf1:792x57 30] {#forge:ingots/copper 28 #forge:gunpowder 8}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"bf1:792x57"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bf1:792x57"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //28-8

    // [bf1:792x57simi 50] {#forge:ingots/copper 5 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 50, '{AmmoId:"bf1:792x57simi"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bf1:792x57simi"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //5-2

    // [bf1:fuel 1] {#forge:slimeballs 8}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 1, '{AmmoId:"bf1:fuel"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bf1:fuel"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:slimeballs'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8

    // [applied_armorer:cluster_quartz_bullet 24] {#forge:ingots/copper 12 #forge:gems/lapis 2 #forge:gunpowder 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 24, '{AmmoId:"applied_armorer:cluster_quartz_bullet"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"applied_armorer:cluster_quartz_bullet"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gems/lapis']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //12-2-4

    // [applied_armorer:etched_quartz_bullet 60] {#forge:ingots/copper 8 #forge:gems/lapis 2 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"applied_armorer:etched_quartz_bullet"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"applied_armorer:etched_quartz_bullet"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gems/lapis']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-2-2

    // [applied_armorer:fluix_battery 4] {#forge:ingots/iron 4 #forge:dusts/redstone 16}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 4, '{AmmoId:"applied_armorer:fluix_battery"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"applied_armorer:fluix_battery"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:dusts/redstone'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //4-16

    // [applied_armorer:fluix_infused_grenade 12] {#forge:ingots/copper 8 #forge:gems/lapis 4 #forge:dusts/redstone 6 #forge:gunpowder 6}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"applied_armorer:fluix_infused_grenade"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"applied_armorer:fluix_infused_grenade"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gems/lapis']),
            create.deploying(incomplete, [incomplete, '#forge:dusts/redstone']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-4-6-6

    // [applied_armorer:hard_core_quartz_bullet 24] {#forge:ingots/copper 12 #forge:gems/lapis 4 #forge:gunpowder 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 24, '{AmmoId:"applied_armorer:hard_core_quartz_bullet"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"applied_armorer:hard_core_quartz_bullet"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gems/lapis']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //12-4-4

    // [bc:2bore 2] {#forge:gunpowder 10 #forge:ingots/iron 10 #forge:ingots/copper 10}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"bc:2bore"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:2bore"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:gunpowder']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //10-10-10

    // [bc:127108 24] {#forge:gunpowder 30 #forge:ingots/iron 60 #forge:ingots/copper 60 #forge:rods/blaze 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 24, '{AmmoId:"bc:127108"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:127108"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:gunpowder']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:rods/blaze'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //30-60-60-1

    // [bc:pg9 3] {#forge:ingots/iron10 #forge:gunpowder 20}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 3, '{AmmoId:"bc:pg9"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:pg9"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //10-20

    // [bc:tanta_s 20] {#forge:gunpowder 64 #forge:ingots/iron 32 #forge:ingots/copper 32 #forge:obsidian 5 #forge:gems/amethyst 10}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"bc:tanta_s"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:tanta_s"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:gunpowder']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:obsidian']),
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //64-32-32-5-10

    // [bc:tanta 3] {minecraft:ancient_debris 20 minecraft:end_crystal 4 minecraft:dragon_breath 32 #forge:obsidian 32 #forge:gems/amethyst 20}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 3, '{AmmoId:"bc:tanta"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:tanta"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:ancient_debris']),
            create.deploying(incomplete, [incomplete, 'minecraft:end_crystal']),
            create.deploying(incomplete, [incomplete, 'minecraft:dragon_breath']),
            create.deploying(incomplete, [incomplete, '#forge:obsidian']),
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //20-4-32-32-20

    // [bc:tanta 3] {minecraft:obsidian 32 minecraft:end_crystal 1 minecraft:dragon_breath 32 minecraft:Amethyst Shard 16 minecraft:ancient_debris 20}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 3, '{AmmoId:"bc:tanta"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bc:tanta"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:obsidian']),
            create.deploying(incomplete, [incomplete, 'minecraft:end_crystal']),
            create.deploying(incomplete, [incomplete, 'minecraft:dragon_breath']),
            create.deploying(incomplete, [incomplete, 'minecraft:amethyst_shard']),
            create.deploying(incomplete, [incomplete, 'minecraft:ancient_debris'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //32-1-32-16-20

    // [bluearchive:ammog11toki 60] {#forge:ingots/copper 10 #forge:gunpowder 5}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"bluearchive:ammog11toki"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"bluearchive:ammog11toki"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //10-5

    // [create_armorer:gas_pistol_ammo 60] {#forge:ingots/copper 8 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"create_armorer:gas_pistol_ammo"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"create_armorer:gas_pistol_ammo"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-2

    // [create_armorer:rbapb 32] {#forge:ingots/copper 8 #forge:gunpowder 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 32, '{AmmoId:"create_armorer:rbapb"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"create_armorer:rbapb"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-3

    // [create_armorer:slap 60] {#forge:ingots/copper 4 #forge:ingots/iron 6 #forge:gunpowder 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"create_armorer:slap"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"create_armorer:slap"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //4-6-3

    // [cyber_armorer:material_1 2] {minecraft:planks 1 #forge:leather 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"cyber_armorer:material_1"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_1"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:planks']),
            create.deploying(incomplete, [incomplete, '#forge:leather'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-1

    // [cyber_armorer:material_2 2] {#forge:ingots/copper 1 #forge:ingots/iron 1 #forge:ingots/iron 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"cyber_armorer:material_2"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_2"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-1-1

    // [cyber_armorer:material_3 2] {#forge:ingots/gold 1 #forge:ingots/gold 1 #forge:ingots/gold 1 #forge:gems/diamond 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"cyber_armorer:material_3"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_3"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/gold']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/gold']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/gold']),
            create.deploying(incomplete, [incomplete, '#forge:gems/diamond'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-1-1-1

    // [cyber_armorer:material_4 2] {#forge:gems/amethyst 1 #forge:gems/amethyst 1 #forge:gems/amethyst 1 #forge:gems/amethyst 1 #forge:ingots/netherite 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"cyber_armorer:material_4"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_4"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst']),
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst']),
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst']),
            create.deploying(incomplete, [incomplete, '#forge:gems/amethyst']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/netherite'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-1-1-1-1

    // [dawnhunting:45acp 45] {#forge:ingots/copper 2 #forge:ingots/iron 3 minecraft:coal 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 45, '{AmmoId:"dawnhunting:45acp"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"dawnhunting:45acp"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-3-2

    // [dawnhunting:1045x103 22] {minecraft:iron_ingot 10 minecraft:coal 6 minecraft:copper_ingot 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 22, '{AmmoId:"dawnhunting:1045x103"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"dawnhunting:1045x103"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
            create.deploying(incomplete, [incomplete, 'minecraft:coal']),
            create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //10-6-2

    // [dawnhunting:b1 60] {#forge:gems/quartz 2 #forge:ingots/iron 4 minecraft:prismarine_crystals 1}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"dawnhunting:b1"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"dawnhunting:b1"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:gems/quartz']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, 'minecraft:prismarine_crystals'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-4-1

    // [helldiver2:explode_ap 15] {#forge:ingots/copper 5 #forge:ingots/iron 2 #forge:gunpowder 8}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"helldiver2:explode_ap"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"helldiver2:explode_ap"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //5-2-8

    // [helldiver2:pistol_normal 60] {#forge:ingots/iron 1 #forge:ingots/copper 8 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"helldiver2:pistol_normal"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"helldiver2:pistol_normal"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //1-8-2

    // [helldiver2:rifle_ap 30] {#forge:ingots/copper 6 #forge:ingots/iron 3 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"helldiver2:rifle_ap"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"helldiver2:rifle_ap"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //6-3-2

    // [helldiver2:rifle_normal 30] {#forge:ingots/copper 8 #forge:ingots/iron 1 #forge:gunpowder 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"helldiver2:rifle_normal"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"helldiver2:rifle_normal"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-1-2

    // [helldiver2:shotgun_normal 20] {#forge:ingots/iron 2 #forge:ingots/copper 12 #forge:gunpowder 6}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"helldiver2:shotgun_normal"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"helldiver2:shotgun_normal"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2-12-6

    // [immersive_armorer:454_casul 30] {#forge:ingots/copper 12 #forge:gunpowder 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"immersive_armorer:454_casul"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:454_casul"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //12-3

    // [immersive_armorer:ap_ammo 30] {#forge:ingots/copper 8 #forge:gunpowder 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"immersive_armorer:ap_ammo"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:ap_ammo"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, '#forge:gunpowder'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //8-4

    // [immersive_armorer:burst_capacitor 30] {#forge:glass 6 #forge:dusts/redstone 8 #forge:ingots/iron 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"immersive_armorer:burst_capacitor"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:burst_capacitor"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:glass']),
            create.deploying(incomplete, [incomplete, '#forge:dusts/redstone']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //6-8-4

    // [immersive_armorer:chemical 2] {#forge:ingots/copper 3 minecraft:blaze_powder 1 #forge:slimeballs 4}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"immersive_armorer:chemical"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:chemical"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/copper']),
            create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
            create.deploying(incomplete, [incomplete, '#forge:slimeballs'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //3-1-4

    // [immersive_armorer:cut_steel_rod 16] {#forge:ingots/iron 2}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 16, '{AmmoId:"immersive_armorer:cut_steel_rod"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:cut_steel_rod"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //2

    // [immersive_armorer:high_power_capacitor 15] {#forge:glass 4 #forge:dusts/redstone 6 #forge:gems/quartz 4 #forge:ingots/iron 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:high_power_capacitor"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:high_power_capacitor"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:glass']),
            create.deploying(incomplete, [incomplete, '#forge:dusts/redstone']),
            create.deploying(incomplete, [incomplete, '#forge:gems/quartz']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //4-6-4-3

    // [immersive_armorer:stream_capacitor 30] {#forge:glass 3 #forge:dusts/redstone 6 #forge:ingots/iron 3}
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"immersive_armorer:stream_capacitor"}').withChance(1)
        ],
        Item.of('tacz:ammo', '{AmmoId:"immersive_armorer:stream_capacitor"}').weakNBT(),
        [
            create.deploying(incomplete, [incomplete, '#forge:glass']),
            create.deploying(incomplete, [incomplete, '#forge:dusts/redstone']),
            create.deploying(incomplete, [incomplete, '#forge:ingots/iron'])
        ]
    )
        .transitionalItem(incomplete)
        .loops(1) //3-6-3
})
