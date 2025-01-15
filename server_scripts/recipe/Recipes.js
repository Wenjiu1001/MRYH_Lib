ServerEvents.recipes(event => {
    //俄罗斯标记
    event.remove({ output: 'apocalypsenow:russian_tag' })
    event.shaped(Item.of('apocalypsenow:russian_tag', 1), [
        ' S ',
        'LOA',
        ' D '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:blue_dye',
            S: 'minecraft:white_dye',
            D: 'minecraft:red_dye',
            A: 'apocalypsenow:scissorst'
        })
    //巴西标记
    event.remove({ output: 'apocalypsenow:brazilian_tag' })
    event.shaped(Item.of('apocalypsenow:brazilian_tag', 1), [
        ' S ',
        'LOA',
        ' D '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:blue_dye',
            S: 'minecraft:white_dye',
            D: 'minecraft:red_dye',
            A: 'apocalypsenow:scissorst'
        })
    //英国标记
    event.remove({ output: 'apocalypsenow:british_tag' })
    event.shaped(Item.of('apocalypsenow:british_tag', 1), [
        ' O ',
        'LDA',
        ' O '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:blue_dye',
            D: 'minecraft:red_dye',
            A: 'apocalypsenow:scissorst'
        })
    //美国标记
    event.remove({ output: 'apocalypsenow:usa_tag' })
    event.shaped(Item.of('apocalypsenow:usa_tag', 1), [
        ' O ',
        'LDA',
        ' S '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:blue_dye',
            D: 'minecraft:red_dye',
            S: 'minecraft:white_dye',
            A: 'apocalypsenow:scissorst'
        })
    //SWAT防暴套装-胸甲
    event.remove({ output: 'apocalypsenow:swatriotcontrol_chestplate' })
    event.shaped(Item.of('apocalypsenow:swatriotcontrol_chestplate', 1), [
        'LSL',
        'ODO',
        'LOL'
    ],
        {
            L: 'minecraft:iron_ingot',
            O: 'apocalypsenow:polyester',
            S: 'apocalypsenow:reinforced_armor_plate',
            D: 'minecraft:black_dye'
        })
    //SWAT防暴套装-护腿
    event.remove({ output: 'apocalypsenow:swatriotcontrol_leggings' })
    event.shaped(Item.of('apocalypsenow:swatriotcontrol_leggings', 1), [
        'LOL',
        'ODO',
        'LSL'
    ],
        {
            L: 'minecraft:iron_ingot',
            O: 'apocalypsenow:polyester',
            S: 'apocalypsenow:reinforced_armor_plate',
            D: 'minecraft:black_dye'
        })
    //装甲板
    event.remove({ output: 'apocalypsenow:reinforced_armor_plate' })
    event.shaped(Item.of('apocalypsenow:reinforced_armor_plate', 8), [
        'LLL',
        'LOL',
        'LLL'
    ],
        {
            L: 'apocalypsenow:armorplate',
            O: 'minecraft:netherite_ingot',
        })
    //中国标记
    event.remove({ output: 'apocalypsenow:china_tag' })
    event.shaped(Item.of('apocalypsenow:china_tag', 1), [
        ' D ',
        'LOA',
        ' O '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:red_dye',
            D: 'minecraft:yellow_dye',
            A: 'apocalypsenow:scissorst'
        })
    //加拿大标记
    event.remove({ output: 'apocalypsenow:canada_tag' })
    event.shaped(Item.of('apocalypsenow:canada_tag', 1), [
        ' D ',
        'LOA',
        ' D '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:white_dye',
            D: 'minecraft:red_dye',
            A: 'apocalypsenow:scissorst'
        })
    //日本标记
    event.remove({ output: 'apocalypsenow:japan_tag' })
    event.shaped(Item.of('apocalypsenow:japan_tag', 1), [
        ' O ',
        'LDA',
        ' O '
    ],
        {
            L: 'apocalypsenow:cloth',
            O: 'minecraft:white_dye',
            D: 'minecraft:red_dye',
            A: 'apocalypsenow:scissorst'
        })
    //军营防暴套装-胸甲
    event.remove({ output: 'apocalypsenow:military_riot_armor_chestplate' })
    event.shaped(Item.of('apocalypsenow:military_riot_armor_chestplate', 1), [
        'L L',
        'ODO',
        'LOL'
    ],
        {
            L: 'apocalypsenow:armorplate',
            O: 'apocalypsenow:polyester',
            D: 'apocalypsenow:kevlar'
        })
    //军营防暴套装-护腿
    event.remove({ output: 'apocalypsenow:military_riot_armor_leggings' })
    event.shaped(Item.of('apocalypsenow:military_riot_armor_leggings', 1), [
        'LOL',
        'ODO',
        'L L'
    ],
        {
            L: 'apocalypsenow:armorplate',
            O: 'apocalypsenow:polyester',
            D: 'apocalypsenow:kevlar'
        })
    //删除祛魔编辑台
    event.remove({ output: 'editenchanting:enchantment_edit_table' })
    //删除转化桌
    event.remove({ mod: 'projecte' })
    //添加钱块分解
    event.remove({ output: 'apocalypsenow:money' })
    event.shaped(Item.of('apocalypsenow:money', 9), [
        'apocalypsenow:money_block'
    ]);
    //腐肉高炉烧制皮革
    event.blasting('1x minecraft:leather', '1x minecraft:rotten_flesh')
    //删除锻造模板
    event.remove({ output: 'minecraft:netherite_upgrade_smithing_template' })
    //删除饰品mod
    event.remove({ mod: 'nameless_trinkets' })
    event.remove({ mod: 'artifacts' })
    //删除k炮塔
    event.remove({ mod: 'k_turrets' })
    //删除cdu
    event.remove({ output: 'spore:cdu' })
    //增加末日生存工具包下界合金锻造
    //下界合金撬棍
    event.recipes.minecraft.smithing_transform(
        'zombiekit:netherite_crowbar',
        'zombiekit:crowbar',
        'minecraft:netherite_ingot'
    ).template('minecraft:netherite_scrap')
    //下界合金砍刀
    event.recipes.minecraft.smithing_transform(
        'zombiekit:netherite_machete',
        'zombiekit:machete',
        'minecraft:netherite_ingot'
    ).template('minecraft:netherite_scrap')
    //下界合金消防斧
    event.recipes.minecraft.smithing_transform(
        'zombiekit:netherite_fire_axe',
        'zombiekit:fire_axe',
        'minecraft:netherite_ingot'
    ).template('minecraft:netherite_scrap')
    //下界合金匕首
    event.recipes.minecraft.smithing_transform(
        'zombiekit:netherite_knife',
        'zombiekit:knife',
        'minecraft:netherite_ingot'
    ).template('minecraft:netherite_scrap')
    //下界合金园艺锄
    event.recipes.minecraft.smithing_transform(
        'zombiekit:netherite_rake',
        'zombiekit:rake',
        'minecraft:netherite_ingot'
    ).template('minecraft:netherite_scrap')

    // 终结维度装甲板
    event.recipes.create.mechanical_crafting('mryh:terminus_dimension_armor_plate',
        [
            ' PKQ ',
            'OCDER',
            'JBAFL',
            'NIHGS',
            ' TMU '
        ],
        {
            A: 'minecraft:nether_star',
            B: 'zombiekit:special_steel_sheet',
            C: 'k_turrets:titanium_ingot',
            D: 'max_armory:lamellar_armor_piece',
            E: 'immersiveengineering:plate_duroplast',
            F: 'zombie_extreme:ignot_titan',
            G: 'marbledsarsenal:armor_plate',
            H: 'apocalypsenow:reinforced_armor_plate',
            I: 'spore:armor_plate',
            J: 'createaddition:electrum_wire',
            K: 'marbledsarsenal:rubber',
            L: 'zombie_extreme:circuit_diagram',
            M: 'zombie_extreme:fulguria_fuel_rod',
            N: 'spore:living_core',
            O: 'spore:fleshy_claw',
            P: 'spore:hardened_bind',
            Q: 'spore:mutated_heart',
            R: 'spore:r_wing',
            S: 'spore:plated_muscle',
            T: 'spore:corrosive_sack',
            U: 'spore:spine'
        })
    // 反击维度装甲板
    event.recipes.create.mechanical_crafting('mryh:retaliation_dimension_armor_plate',
        [
            ' KKK ',
            'JCDEL',
            'JBAFL',
            'JIHGL',
            ' MMM '
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:prismarine_shard',
            C: 'minecraft:ghast_tear',
            D: 'zombiekit:fibre',
            E: 'k_turrets:explosive_powder',
            F: 'max_armory:chain_armor_piece',
            G: 'immersiveengineering:plate_electrum',
            H: 'immersiveengineering:plate_constantan',
            I: 'zombie_extreme:batteries',
            J: 'zombie_extreme:titan_plate',
            K: 'marbledsarsenal:armor_plate',
            L: 'apocalypsenow:reinforced_armor_plate',
            M: 'zombie_extreme:ignot_bronze'
        })
    // 联合维度装甲板
    event.recipes.create.mechanical_crafting('mryh:unified_dimension_armor_plate',
        [
            ' KKK ',
            'JCDEL',
            'JBAFL',
            'JIHGL',
            ' MMM '
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:scute',
            C: 'zombiekit:energy_rod',
            D: 'zombiekit:bulletproof_insert',
            E: 'k_turrets:titanium_ingot',
            F: 'max_armory:chain_armor_piece',
            G: 'immersiveengineering:plate_steel',
            H: 'zombie_extreme:ruby',
            I: 'zombie_extreme:bronze_wire',
            J: 'zombie_extreme:uranium_rod',
            K: 'marbledsarsenal:rubber',
            L: 'marbledsarsenal:armor_plate',
            M: 'apocalypsenow:armorplate'
        })
    // 防卫维度装甲板
    event.recipes.create.mechanical_crafting('mryh:defense_dimension_armor_plate',
        [
            ' KKK ',
            'JCDEL',
            'JBAFL',
            'JIHGL',
            ' MMM '
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'minecraft:ghast_tear',
            C: 'zombiekit:fibre',
            D: 'zombiekit:special_steel_sheet',
            E: 'zombiekit:special_ceramics',
            F: 'k_turrets:titanium_ingot',
            G: 'max_armory:iron_plate',
            H: 'immersiveengineering:plate_duroplast',
            I: 'immersiveengineering:wire_steel',
            J: 'immersiveengineering:plate_electrum',
            K: 'zombie_extreme:ignot_titan',
            L: 'zombie_extreme:rubber_sheet',
            M: 'zombie_extreme:circuit_diagram'
        })
    // 联盟维度装甲板
    event.recipes.create.mechanical_crafting('mryh:alliance_dimension_armor_plate',
        [
            ' KKK ',
            'JCDEL',
            'JBAFL',
            'JIHGL',
            ' MMM '
        ],
        {
            A: 'minecraft:netherite_ingot',
            B: 'immersiveengineering:plate_nickel',
            C: 'immersiveengineering:plate_silver',
            D: 'immersiveengineering:plate_lead',
            E: 'immersiveengineering:plate_aluminum',
            F: 'immersiveengineering:plate_copper',
            G: 'immersiveengineering:plate_duroplast',
            H: 'zombie_extreme:tin_plate',
            I: 'zombie_extreme:ignot_titan',
            J: 'marbledsarsenal:armor_plate',
            K: 'apocalypsenow:armorplate',
            L: 'max_armory:iron_plate',
            M: 'zombiekit:special_steel_sheet'
        })
    //特种钢板
    event.shaped('zombiekit:special_steel_sheet', [
        "ABA",
        "CAC",
        "ABA"
    ], {
        A: 'immersiveengineering:ingot_steel',
        B: 'zombiekit:special_ceramics',
        C: 'zombiekit:nitrocellulose'
    });
    //联合印章
    event.shaped(Item.of('mryh:combined_seal', 1),
        [
            " B ",
            " C ",
            "DAD"
        ],
        {
            A: 'spore:living_core',
            B: 'minecraft:diamond_sword',
            C: 'minecraft:shield',
            D: 'minecraft:nether_star'
        })
    //未知初级蓝图
    event.shapeless(Item.of('mryh:unknown_primary_blueprint', 1), [
        'minecraft:iron_ingot', 'mryh:unc'
    ]);
    //未知中级蓝图
    event.shapeless(Item.of('mryh:unknown_intermediate_blueprint', 1), [
        'minecraft:gold_ingot', 'mryh:unc'
    ]);
    //未知高级蓝图
    event.shapeless(Item.of('mryh:unknown_advanced_blueprint', 1), [
        'minecraft:diamond', 'mryh:unc'
    ]);
    //未知传说蓝图
    event.shapeless(Item.of('mryh:unknown_mythical_blueprint', 1), [
        'minecraft:emerald', 'mryh:unc'
    ]);
    //未知实验蓝图
    event.shapeless(Item.of('mryh:unknown_experimental_blueprint', 1), [
        'minecraft:netherite_ingot', 'mryh:unc'
    ]);

    //联合币
    event.shapeless(Item.of('mryh:unc', 1), [
        'apocalypsenow:money', 'apocalypsenow:money', 'minecraft:diamond'
    ]);
    //初级头盔蓝图
    event.shapeless(Item.of('mryh:helmet_primary_blueprint', 1), [
        'mryh:unknown_primary_blueprint', 'minecraft:iron_helmet'
    ]);
    //初级胸甲蓝图
    event.shapeless(Item.of('mryh:chest_primary_blueprint', 1), [
        'mryh:unknown_primary_blueprint', 'minecraft:iron_chestplate'
    ]);
    //初级护腿蓝图
    event.shapeless(Item.of('mryh:leggings_primary_blueprint', 1), [
        'mryh:unknown_primary_blueprint', 'minecraft:iron_leggings'
    ]);
    //初级靴子蓝图
    event.shapeless(Item.of('mryh:boots_primary_blueprint', 1), [
        'mryh:unknown_primary_blueprint', 'minecraft:iron_boots'
    ]);
    //中级头盔蓝图
    event.shapeless(Item.of('mryh:helmet_intermediate_blueprint', 1), [
        'mryh:unknown_intermediate_blueprint', 'minecraft:golden_helmet'
    ]);
    //中级胸甲蓝图
    event.shapeless(Item.of('mryh:chest_intermediate_blueprint', 1), [
        'mryh:unknown_intermediate_blueprint', 'minecraft:golden_chestplate'
    ]);
    //中级护腿蓝图
    event.shapeless(Item.of('mryh:leggings_intermediate_blueprint', 1), [
        'mryh:unknown_intermediate_blueprint', 'minecraft:golden_leggings'
    ]);
    //中级靴子蓝图
    event.shapeless(Item.of('mryh:boots_intermediate_blueprint', 1), [
        'mryh:unknown_intermediate_blueprint', 'minecraft:golden_boots'
    ]);
    //高级头盔蓝图
    event.shapeless(Item.of('mryh:helmet_advanced_blueprint', 1), [
        'mryh:unknown_advanced_blueprint', 'minecraft:diamond_helmet'
    ]);
    //高级护腿蓝图
    event.shapeless(Item.of('mryh:leggings_advanced_blueprint', 1), [
        'mryh:unknown_advanced_blueprint', 'minecraft:diamond_leggings'
    ]);
    //高级胸甲蓝图
    event.shapeless(Item.of('mryh:chest_advanced_blueprint', 1), [
        'mryh:unknown_advanced_blueprint', 'minecraft:diamond_chestplate'
    ]);
    //高级靴子蓝图
    event.shapeless(Item.of('mryh:boots_advanced_blueprint', 1), [
        'mryh:unknown_advanced_blueprint', 'minecraft:diamond_boots'
    ]);
    //实验头盔蓝图
    event.shapeless(Item.of('mryh:helmet_experimental_blueprint', 1), [
        'mryh:unknown_experimental_blueprint', 'minecraft:netherite_helmet'
    ]);
    //实验胸甲蓝图
    event.shapeless(Item.of('mryh:chest_experimental_blueprint', 1), [
        'mryh:unknown_experimental_blueprint', 'minecraft:netherite_chestplate'
    ]);
    //实验护腿蓝图
    event.shapeless(Item.of('mryh:leggings_experimental_blueprint', 1), [
        'mryh:unknown_experimental_blueprint', 'minecraft:netherite_leggings'
    ]);
    //实验靴子蓝图
    event.shapeless(Item.of('mryh:boots_experimental_blueprint', 1), [
        'mryh:unknown_experimental_blueprint', 'minecraft:netherite_boots'
    ]);
    //传说头盔蓝图
    event.shaped(Item.of('mryh:helmet_mythical_blueprint', 1), [
        'BBB',
        'BAB',
        '   '
    ],
        {
            A: 'mryh:unknown_mythical_blueprint',
            B: 'minecraft:emerald'
        })
    //传说胸甲蓝图
    event.shaped(Item.of('mryh:chest_mythical_blueprint', 1), [
        'BAB',
        'BBB',
        'BBB'
    ],
        {
            A: 'mryh:unknown_mythical_blueprint',
            B: 'minecraft:emerald'
        })
    //传说护腿蓝图
    event.shaped(Item.of('mryh:leggings_mythical_blueprint', 1), [
        'BBB',
        'BAB',
        'B B'
    ],
        {
            A: 'mryh:unknown_mythical_blueprint',
            B: 'minecraft:emerald'
        })
    //传说靴子蓝图
    event.shaped(Item.of('mryh:boots_mythical_blueprint', 1), [
        'BAB',
        'B B',
        '   '
    ],
        {
            A: 'mryh:unknown_mythical_blueprint',
            B: 'minecraft:emerald'
        })
})

