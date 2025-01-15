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
            Item.of('tacz:ammo', 7, '{AmmoId:"tacz:50ae"}').withChance(1)
        ], 'minecraft:copper_ingot', [
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder']),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"tacz:9mm"}')
        ], "minecraft:copper_ingot", [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 4, '{AmmoId:"tacz:50bmg"}')
        ], "minecraft:copper_ingot", [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"tacz:rpg_rocket"}')
        ], "mryh:high_permession", [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"tacz:338"}')
        ], "mryh:medium_permession", [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"tacz:40mm"}')
        ], "mryh:low_permession", [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 100)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"tacz:46x30"}')
        ], "mryh:low_permession", [
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 100)]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 100)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"tacz:357mag"}')
        ], "minecraft:copper_ingot", [
        create.deploying(incomplete, [incomplete, 'create:copper_sheet']),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"tacz:556x45"}')
        ], 'immersiveengineering:dust_copper', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 25, '{AmmoId:"tacz:45acp"}')
        ], 'create:copper_sheet', [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"wemql:sw11"}')
        ], 'minecraft:iron_nugget', [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 5, '{AmmoId:"immersive_armorer:chemical"}')
        ], '#forge:nuggets/copper', [
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:lava", 25)]),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'create:super_glue']).keepHeldItem()
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:339x57fmj"}').withChance(0.6),
            Item.of('tacz:ammo', 90, '{AmmoId:"emxarms:339x57"}').withChance(0.4)
        ], "mryh:medium_permession", [
        create.deploying(incomplete, [incomplete, 'minecraft:coal']),
        create.deploying(incomplete, [incomplete, 'minecraft:amethyst_shard']),
        create.deploying(incomplete, [incomplete, 'minecraft:quartz']),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 500)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:339x57"}')
        ], "mryh:low_permession", [
        create.deploying(incomplete, [incomplete, 'minecraft:coal']),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 500)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 240, '{AmmoId:"emxarms:339x57x"}').withChance(0.4),
            Item.of('tacz:ammo', 360, '{AmmoId:"emxarms:339x57fmj"}').withChance(0.3),
            Item.of('tacz:ammo', 480, '{AmmoId:"emxarms:339x57"}').withChance(0.3)
        ], 'minecraft:netherite_ingot', [
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_rod']),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 500)])
    ]
    ).transitionalItem(incomplete).loops(3)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"helldiver2:rifle_normal"}')
        ], 'create:iron_sheet', [
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 32, '{AmmoId:"warhammer:promethium_can"}')
        ], 'minecraft:blaze_powder', [
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 32, '{AmmoId:"warhammer:laser_cell"}')
        ], 'minecraft:redstone_block', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"wemql:zy14"}')
        ], "mryh:low_permession", [
        create.deploying(incomplete, [incomplete, 'minecraft:gunpower']),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 16, '{AmmoId:"create_armorer:rbapb"}')
        ], "mryh:low_permession", [
        create.deploying(incomplete, [incomplete, 'create:copper_sheet']),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:gunpower'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"cake:20_82"}')
        ], 'minecraft:blaze_rod', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"emxarms:x16he"}')
        ], "minecraft:gunpowder", [
        create.deploying(incomplete, [incomplete, 'minecraft:charcoal']),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:charcoal']),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 2, '{AmmoId:"cake:battery"}')
        ], "mryh:medium_permession", [
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_rod']),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone']),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"create_armorer:gas_pistol_ammo"}')
        ], "minecraft:gunpowder", [
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:ap_ammo"}')
        ], "minecraft:gunpowder", [
        create.deploying(incomplete, [incomplete, 'create:copper_sheet']),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:402x31"}')
        ], "mryh:low_permession", [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:coal"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:402x31rip"}').withChance(0.7),
            Item.of('tacz:ammo', 90, '{AmmoId:"emxarms:402x31"}').withChance(0.3)
        ], "minecraft:iron_ingot", [
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.deploying(incomplete, [incomplete, "minecraft:coal"]),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"emxarms:402x31fmj"}').withChance(0.6),
            Item.of('tacz:ammo', 90, '{AmmoId:"emxarms:402x31rip"}').withChance(0.2),
            Item.of('tacz:ammo', 120, '{AmmoId:"emxarms:402x31"}').withChance(0.2)
        ], 'minecraft:amethyst_shard', [
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.deploying(incomplete, [incomplete, "minecraft:coal"]),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.pressing(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:quartz'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"emxarms:1045x103"}')
        ], 'create:iron_sheet', [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:coal"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 12, '{AmmoId:"emxarms:1045x103belt"}').withChance(0.75),
            Item.of('tacz:ammo', 24, '{AmmoId:"emxarms:1045x103"}').withChance(0.25)
        ], 'create:iron_sheet', [
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
        create.deploying(incomplete, [incomplete, "minecraft:coal"]),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 50)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 5, '{AmmoId:"wemql:my15"}')
        ], 'minecraft:iron_nugget', [
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"])
    ]
    ).transitionalItem(incomplete).loops(3)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"immersive_armorer:454_casul"}')
        ], "minecraft:gunpowder", [
        create.deploying(incomplete, [incomplete, 'immersiveengineering:dust_copper']),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"]),
        create.deploying(incomplete, [incomplete, "minecraft:copper_ingot"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 40, '{AmmoId:"emxarms:410x57ap"}')
        ], 'minecraft:blaze_powder', [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, "mryh:low_permession"]),
        create.deploying(incomplete, [incomplete, "minecraft:coal"])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:stream_capacitor"}')
        ], '#forge:glass', [
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone']),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 4, '{AmmoId:"immersive_armorer:high_power_capacitor"}')
        ], '#forge:glass', [
        create.deploying(incomplete, [incomplete, 'minecraft:redstone']),
        create.deploying(incomplete, [incomplete, "minecraft:iron_ingot"]),
        create.deploying(incomplete, [incomplete, 'minecraft:quartz']),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 32, '{AmmoId:"warhammer:psyker_power"}')
        ], 'minecraft:dragon_breath', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:ender_pearl']).keepHeldItem(),
        create.deploying(incomplete, [incomplete, 'minecraft:ender_pearl']).keepHeldItem(),
        create.deploying(incomplete, [incomplete, 'minecraft:ender_pearl']).keepHeldItem(),
        create.deploying(incomplete, [incomplete, 'minecraft:ender_pearl']).keepHeldItem(),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', '{AmmoId:"converted:enduring_victory_pt"}')
        ], 'minecraft:bone', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:bone']),
        create.deploying(incomplete, [incomplete, 'minecraft:bone']),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"wemql:dw12"}')
        ], 'minecraft:gunpowder', [
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 4, '{AmmoId:"qkl:16mm"}')
        ], 'minecraft:paper', [
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"create_armorer:slap"}')
        ], 'immersiveengineering:dust_iron', [
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(3)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 60, '{AmmoId:"helldiver2:pistol_normal"}')
        ], 'immersiveengineering:dust_iron', [
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 32, '{AmmoId:"warhammer:75_bolt"}')
        ], 'minecraft:netherite_ingot', [
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
        create.deploying(incomplete, [incomplete, 'minecraft:blaze_powder']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, "mryh:medium_permession"]),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 250)])
    ]
    ).transitionalItem(incomplete).loops(3)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"wemql:sy13"}')
        ], "mryh:medium_permession", [
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 1000)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"converted:m259"}')
        ], 'immersiveengineering:dust_copper', [
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"warhammer:825_ammo"}')
        ], 'immersiveengineering:dust_copper', [
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"qkl:rb10"}')
        ], 'immersiveengineering:dust_copper', [
        create.deploying(incomplete, [incomplete, 'create:copper_sheet']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.pressing(incomplete, incomplete)
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 8, '{AmmoId:"helldiver2:explode_ap"}')
        ], 'immersiveengineering:dust_copper', [
        create.deploying(incomplete, [incomplete, 'zombie_extreme:ignot_bronze']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"]),
        create.pressing(incomplete, incomplete),
        create.filling(incomplete, [incomplete, Fluid.of("minecraft:water", 100)])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"emxarms:emx_tediore"}')
        ], 'minecraft:clay_ball', [
        create.deploying(incomplete, [incomplete, '#forge:glass']),
        create.deploying(incomplete, [incomplete, "mryh:low_permession"]),
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 48, '{AmmoId:"tacz:308"}')
        ], 'minecraft:lapis_lazuli', [
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, "mryh:low_permession"]),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, "minecraft:gunpowder"])
    ]
    ).transitionalItem(incomplete).loops(6)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 5, '{AmmoId:"emxarms:x16sg"}')
        ], 'minecraft:coal', [
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 6, '{AmmoId:"tacz:12g"}')
        ], 'minecraft:iron_nugget', [
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"mpworld:545x39"}')
        ], 'minecraft:stone', [
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_nugget'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"helldiver2:rifle_ap"}')
        ], 'zombie_extreme:ignot_bronze', [
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"tacz:762x39"}')
        ], 'minecraft:gunpowder', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 24, '{AmmoId:"wemql:jf10"}')
        ], 'immersiveengineering:dust_iron', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder'])
    ]
    ).transitionalItem(incomplete).loops(4)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:burst_capacitor"}')
        ], '#forge:glass', [
        create.cutting(incomplete, incomplete),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:redstone'])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 10, '{AmmoId:"helldiver2:shotgun_normal"}')
        ], 'minecraft:iron_ingot', [
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:gunpowder']),
        create.deploying(incomplete, [incomplete, 'minecraft:copper_ingot'])
    ]
    ).transitionalItem(incomplete).loops(2)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 30, '{AmmoId:"converted:32nails"}')
        ], 'immersiveengineering:dust_copper', [
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot']),
        create.deploying(incomplete, [incomplete, 'minecraft:iron_ingot'])
    ]
    ).transitionalItem(incomplete).loops(1)
    create.sequenced_assembly(
        [
            Item.of('tacz:ammo', 20, '{AmmoId:"immersive_armorer:cut_steel_rod"}')
        ], 'minecraft:iron_ingot', [
        create.deploying(incomplete, [incomplete, 'createaddition:iron_wire']),
        create.deploying(incomplete, [incomplete, 'createaddition:iron_wire']),
    ]
    ).transitionalItem(incomplete).loops(1)
})