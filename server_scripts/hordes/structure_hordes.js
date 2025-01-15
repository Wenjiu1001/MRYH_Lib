AdvJSEvents.advancement(event => {
    const TRIGGER = event.TRIGGER;
    const title = "尸潮来袭！";
    const description = "尽可能的逃离或者消灭他们...";
    const icon = "minecraft:iron_sword";

    /**
     * 创建进度的通用函数
     * @param {string} id - 进度的ID
     * @param {string} featureId - 进度关联的结构ID
     * @param {object} parent - 父进度对象
     * @return {object} 创建的进度对象
     */
    function createAdvancement(id, featureId, parent) {
        return parent.addChild(id, childBuilder => {
            childBuilder
                .display(displayBuilder => {
                    displayBuilder.setTitle(title)
                    displayBuilder.setDescription(description)
                    displayBuilder.setIcon(icon);
                })
                .criteria(criteriaBuilder => {
                    criteriaBuilder.add("criteria", TRIGGER.fromJson({
                        "trigger": "minecraft:location",
                        "conditions": {
                            "player": [
                                {
                                    "condition": "minecraft:entity_properties",
                                    "entity": "this",
                                    "predicate": {
                                        "location": {
                                            "structure": featureId
                                        }
                                    }
                                }
                            ]
                        }
                    }));
                });
        });
    }

    /**
     * 创建根进度
     * @param {string} id - 根进度的ID
     * @param {string} featureId - 根进度关联的结构ID
     * @return {object} 创建的根进度对象
     */
    function createRoot(id, featureId) {
        return event.create(id)
            .display(displayBuilder => {
                displayBuilder.setTitle(title)
                displayBuilder.setDescription(description)
                displayBuilder.setIcon(icon);
            })
            .criteria(criteriaBuilder => {
                criteriaBuilder.add("criteria", TRIGGER.fromJson({
                    "trigger": "minecraft:location",
                    "conditions": {
                        "player": [
                            {
                                "condition": "minecraft:entity_properties",
                                "entity": "this",
                                "predicate": {
                                    "location": {
                                        "structure": featureId
                                    }
                                }
                            }
                        ]
                    }
                }));
            });
    }

    /**
     * 创建子进度和次进度
     * @param {object} root - 根进度对象
     * @param {Array} childrenInfo - 子进度信息数组
     */
    function createChildrenAndSubChildren(root, childrenInfo) {
        childrenInfo.forEach((childInfo, index) => {
            const childId = `child_${index + 1}`;
            const childFeatureId = childInfo.featureId;
            const child = createAdvancement(childId, childFeatureId, root);

            // 为每个子进度创建次进度
            childInfo.subChildren.forEach((subChildFeatureId, subIndex) => {
                const subChildId = `subchild_${index + 1}_${subIndex + 1}`;
                createAdvancement(subChildId, subChildFeatureId, child);
            });
        });
    }

    // 创建根进度
    const root1 = createRoot("mryh:structure_hordes", "modern_structures:boat");

    // 根进度1的子进度和次进度信息
    const root1ChildrenInfo = [
        {
            featureId: "modern_structures:boat",
            subChildren: [
                "modern_structures:bus",
                "modern_structures:cherryhouse",
                "modern_structures:dungeon",
                "modern_structures:factory",
                "modern_structures:factory_2",
                "modern_structures:firewatchtower",
                "modern_structures:frozenboat",
                "modern_structures:littlehouse",
                "modern_structures:oildrill",
                "modern_structures:outpost",
                "modern_structures:outpost_2",
                "modern_structures:plainhous_2",
                "modern_structures:plainhouse_1",
                "modern_structures:planting",
                "modern_structures:stable",
                "modern_structures:submarine",
                "modern_structures:trappedtruck",
                "modern_structures:trappedtruck_2"
            ]
        },
        {
            featureId: "zombie_extreme:build_1",
            subChildren: [
                "zombie_extreme:caffe",
                "zombie_extreme:gas_station_1",
                "zombie_extreme:light_house",
                "zombie_extreme:modern_house_1",
                "zombie_extreme:ruin_1",
                "zombie_extreme:ruin_2",
                "zombie_extreme:ruin_3",
                "zombie_extreme:ruin_4",
                "zombie_extreme:ruin_5"
            ]
        },
        {
            featureId: "zombiekit:gathering_camps",
            subChildren: [
                "zombiekit:jungle_shelter",
                "zombiekit:pond",
                "zombiekit:prison",
                "zombiekit:shelter",
                "zombiekit:touring_car",
            ]
        },
        {
            featureId: "repurposed_structures:ancient_city_end",
            subChildren: [
                "repurposed_structures:ancient_city_nether",
                "repurposed_structures:ancient_city_ocean",
                "repurposed_structures:bastion_underground",
                "repurposed_structures:city_nether",
                "repurposed_structures:city_overworld",
                "repurposed_structures:fortress_jungle",
                "repurposed_structures:igloo_grassy",
                "repurposed_structures:igloo_mangrove",
                "repurposed_structures:igloo_mushroom",
                "repurposed_structures:igloo_stone",
                "repurposed_structures:mansion_birch",
                "repurposed_structures:mansion_desert",
                "repurposed_structures:mansion_jungle",
                "repurposed_structures:mansion_mangrove",
                "repurposed_structures:mansion_oak",
                "repurposed_structures:mansion_savanna",
                "repurposed_structures:mansion_snowy",
                "repurposed_structures:mansion_taiga",
                "repurposed_structures:mineshaft_birch",
                "repurposed_structures:mineshaft_crimson",
                "repurposed_structures:mineshaft_dark_forest",
                "repurposed_structures:mineshaft_desert",
                "repurposed_structures:mineshaft_end",
                "repurposed_structures:mineshaft_icy",
                "repurposed_structures:mineshaft_jungle",
                "repurposed_structures:mineshaft_nether",
                "repurposed_structures:mineshaft_ocean",
                "repurposed_structures:mineshaft_savanna",
                "repurposed_structures:mineshaft_stone",
                "repurposed_structures:mineshaft_swamp",
                "repurposed_structures:mineshaft_taiga",
                "repurposed_structures:mineshaft_warped",
                "repurposed_structures:monument_desert",
                "repurposed_structures:monument_icy",
                "repurposed_structures:monument_jungle",
                "repurposed_structures:monument_nether",
                "repurposed_structures:outpost_badlands",
                "repurposed_structures:outpost_birch",
                "repurposed_structures:outpost_crimson",
                "repurposed_structures:outpost_desert",
                "repurposed_structures:outpost_end",
                "repurposed_structures:outpost_giant_tree_taiga",
                "repurposed_structures:outpost_icy",
                "repurposed_structures:outpost_jungle",
                "repurposed_structures:outpost_mangrove",
                "repurposed_structures:outpost_nether_brick",
                "repurposed_structures:outpost_oak",
                "repurposed_structures:outpost_snowy",
                "repurposed_structures:outpost_taiga",
                "repurposed_structures:outpost_warped",
                "repurposed_structures:pyramid_badlands",
                "repurposed_structures:pyramid_dark_forest",
                "repurposed_structures:pyramid_end",
                "repurposed_structures:pyramid_flower_forest",
                "repurposed_structures:pyramid_giant_tree_taiga",
                "repurposed_structures:pyramid_icy",
                "repurposed_structures:pyramid_jungle",
                "repurposed_structures:pyramid_mushroom",
                "repurposed_structures:pyramid_nether",
                "repurposed_structures:pyramid_ocean",
                "repurposed_structures:pyramid_snowy",
                "repurposed_structures:ruined_portal_end",
                "repurposed_structures:ruins_land_cold",
                "repurposed_structures:ruins_land_hot",
                "repurposed_structures:ruins_land_icy",
                "repurposed_structures:ruins_land_warm",
                "repurposed_structures:ruins_nether",
                "repurposed_structures:shipwreck_crimson",
                "repurposed_structures:shipwreck_end",
                "repurposed_structures:shipwreck_nether_bricks",
                "repurposed_structures:shipwreck_warped",
                "repurposed_structures:stronghold_end",
                "repurposed_structures:stronghold_nether",
                "repurposed_structures:temple_nether_basalt",
                "repurposed_structures:temple_nether_crimson",
                "repurposed_structures:temple_nether_soul",
                "repurposed_structures:temple_nether_warped",
                "repurposed_structures:temple_nether_wasteland",
                "repurposed_structures:temple_ocean",
                "repurposed_structures:temple_taiga",
                "repurposed_structures:village_badlands",
                "repurposed_structures:village_bamboo",
                "repurposed_structures:village_birch",
                "repurposed_structures:village_cherry",
                "repurposed_structures:village_crimson",
                "repurposed_structures:village_dark_forest",
                "repurposed_structures:village_giant_taiga",
                "repurposed_structures:village_jungle",
                "repurposed_structures:village_mountains",
                "repurposed_structures:village_mushroom",
                "repurposed_structures:village_oak",
                "repurposed_structures:village_ocean",
                "repurposed_structures:village_swamp",
                "repurposed_structures:village_warped",
                "repurposed_structures:witch_hut_birch",
                "repurposed_structures:witch_hut_dark_forest",
                "repurposed_structures:witch_hut_giant_tree_taiga",
                "repurposed_structures:witch_hut_mangrove",
                "repurposed_structures:witch_hut_oak",
                "repurposed_structures:witch_hut_taiga"
            ]
        },
        {
            featureId: "abandoned_urban:road_4way",
            subChildren: [
                "abandoned_urban:ff_restaurant",
                "abandoned_urban:brick_apartment",
                "abandoned_urban:jungle_apartment",
                "abandoned_urban:park",
                "abandoned_urban:apartments_three",
                "abandoned_urban:bus_stop",
                "abandoned_urban:dead_end",
                "abandoned_urban:stonedebris_2",
                "abandoned_urban:stonedebris_3",
                "abandoned_urban:stonedebris_1",
                "abandoned_urban:wooddebris_3",
                "abandoned_urban:wooddebris_2",
                "abandoned_urban:wooddebris_1",
                "abandoned_urban:trash_1",
                "abandoned_urban:trash_2",
                "abandoned_urban:trash_3",
                "abandoned_urban:trash_4",
                "abandoned_urban:road_corner",
                "abandoned_urban:road_t",
                "abandoned_urban:road_straight",
                "abandoned_urban:military",
                "abandoned_urban:bigrig",
                "abandoned_urban:school_bus",
                "abandoned_urban:bus",
                "abandoned_urban:fire_tower",
                "abandoned_urban:gas_station_loot",
                "abandoned_urban:motel",
                "abandoned_urban:observatory",
                "abandoned_urban:plane_crash",
                "abandoned_urban:train"
            ]
        },
        {
            featureId: "mvs:beach_bar",
            subChildren: [
                "mvs:cartographer_tower",
                "mvs:cathedral",
                "mvs:crystal",
                "mvs:horse_pen",
                "mvs:jungle_tower",
                "mvs:out_house",
                "mvs:railway",
                "mvs:shed",
                "mvs:small_pillager_tower",
                "mvs:small_ship",
                "mvs:stone_fountain",
                "mvs:sunzi_gate",
                "mvs:carts/cart",
                "mvs:carts/large_cart_1",
                "mvs:carts/large_cart_2",
                "mvs:carts/medium_bamboo_cart",
                "mvs:dead_tree/acacia",
                "mvs:dead_tree/birch",
                "mvs:dead_tree/cherry",
                "mvs:dead_tree/dark_oak",
                "mvs:dead_tree/jungle",
                "mvs:dead_tree/mangrove",
                "mvs:dead_tree/oak",
                "mvs:dead_tree/spruce",
                "mvs:houses/azelea_house",
                "mvs:houses/barn",
                "mvs:houses/deepslate_house",
                "mvs:houses/desert_house",
                "mvs:houses/flower_hole",
                "mvs:houses/house",
                "mvs:houses/large_floating_island",
                "mvs:houses/large_warped_tower",
                "mvs:houses/medium_igloo_1",
                "mvs:houses/medium_igloo_2",
                "mvs:houses/small_igloo",
                "mvs:houses/small_swamp_house",
                "mvs:houses/tall_house",
                "mvs:houses/warped_house",
                "mvs:lantern/medium_oak_lantern",
                "mvs:lantern/small_acacia_lantern",
                "mvs:lantern/small_bamboo_lantern",
                "mvs:lantern/small_birch_lantern",
                "mvs:lantern/small_campfire_lantern",
                "mvs:lantern/small_cherry_lantern",
                "mvs:lantern/small_dark_oak_lantern",
                "mvs:lantern/small_jungle_lantern",
                "mvs:lantern/small_mangrove_lantern",
                "mvs:lantern/small_oak_lantern",
                "mvs:lantern/small_spruce_lantern",
                "mvs:log_pile/acacia_log_pile",
                "mvs:log_pile/birch_log_pile",
                "mvs:log_pile/dark_oak_log_pile",
                "mvs:log_pile/jungle_log_pile",
                "mvs:log_pile/oak_log_pile",
                "mvs:log_pile/spruce_log_pile",
                "mvs:nature/acacia_tree",
                "mvs:nature/big_oak_tree",
                "mvs:nature/birch_tree",
                "mvs:nature/boulder",
                "mvs:nature/cherry_tree",
                "mvs:nature/dark_oak_tree",
                "mvs:nature/floating_islands",
                "mvs:nature/jungle_palm_tree",
                "mvs:nature/jungle_tree",
                "mvs:nature/large_mushroom",
                "mvs:nature/mushroom_pond",
                "mvs:nature/oak_tree",
                "mvs:nature/paths",
                "mvs:nature/small_oak_pond",
                "mvs:nature/spruce_tree",
                "mvs:nature/stone_rock",
                "mvs:other_decoration/bee_dome",
                "mvs:other_decoration/bench",
                "mvs:other_decoration/campsite",
                "mvs:other_decoration/crimson_enchanting_table",
                "mvs:other_decoration/desert_pump",
                "mvs:other_decoration/duck",
                "mvs:other_decoration/fire_camp",
                "mvs:other_decoration/fox_hut",
                "mvs:other_decoration/haystack",
                "mvs:other_decoration/horse_campsite",
                "mvs:other_decoration/lamp_chest",
                "mvs:other_decoration/lecturn_garden",
                "mvs:other_decoration/mine_with_campsite",
                "mvs:other_decoration/mushroom_statue",
                "mvs:other_decoration/nether_devil",
                "mvs:other_decoration/pile",
                "mvs:other_decoration/snowy_dog_hut",
                "mvs:other_decoration/snowy_fossil",
                "mvs:other_decoration/stone_bee",
                "mvs:other_decoration/villager_statue",
                "mvs:other_decoration/wheat_grain_bin",
                "mvs:other_decoration/windmill",
                "mvs:other_decoration/wooden_wheat_farm",
                "mvs:other_decoration/end_scraps/end_scraps_1",
                "mvs:other_decoration/end_scraps/end_scraps_2",
                "mvs:other_decoration/end_scraps/end_scraps_3",
                "mvs:other_decoration/end_scraps/end_scraps_4",
                "mvs:ruins/castle_ruins",
                "mvs:ruins/log_ruin",
                "mvs:ruins/ruined_beacon",
                "mvs:ruins/small_ruin",
                "mvs:ruins/statue_ruins",
                "mvs:ruins/stone_pillars",
                "mvs:ruins/tree_monument",
                "mvs:stall/red_stall",
                "mvs:stall/pink_stall",
                "mvs:stall/orange_stall",
                "mvs:stall/blue_stall",
                "mvs:well/well",
                "mvs:well/small_copper_well",
                "mvs:well/small_well",
                "mvs:well/wells/acacia_well",
                "mvs:well/wells/birch_well",
                "mvs:well/wells/dark_oak_well",
                "mvs:well/wells/desert_well",
                "mvs:well/wells/jungle_well",
                "mvs:well/wells/oak_well",
                "mvs:well/wells/rocky_well",
                "mvs:well/wells/snowy_well",
                "mvs:well/wells/spruce_well",
                "mvs:well/rare_well",
                "mvs:well/small_tower_well",
                "mvs:well/wells/end_well",
                "mvs:well/wells/mushroom_well",
                "mvs:well/wells/nether_well"
            ]
        }
        // 在这里添加更多的子进度信息
    ];
    // 为每个根进度创建子进度和次进度
    createChildrenAndSubChildren(root1, root1ChildrenInfo);
});


const Structure_hordes = [
    "mryh:structure_hordes/root",
    "mryh:structure_hordes/child_1",
    "mryh:structure_hordes/child_6",
    "mryh:structure_hordes/subchild_1_1",
    "mryh:structure_hordes/subchild_1_2",
    "mryh:structure_hordes/subchild_1_3",
    "mryh:structure_hordes/subchild_1_4",
    "mryh:structure_hordes/subchild_1_5",
    "mryh:structure_hordes/subchild_1_6",
    "mryh:structure_hordes/subchild_1_7",
    "mryh:structure_hordes/subchild_1_8",
    "mryh:structure_hordes/subchild_1_9",
    "mryh:structure_hordes/subchild_1_10",
    "mryh:structure_hordes/subchild_1_11",
    "mryh:structure_hordes/subchild_1_12",
    "mryh:structure_hordes/subchild_1_13",
    "mryh:structure_hordes/subchild_1_14",
    "mryh:structure_hordes/subchild_1_15",
    "mryh:structure_hordes/subchild_1_16",
    "mryh:structure_hordes/subchild_1_17",
    "mryh:structure_hordes/subchild_1_18",
    "mryh:structure_hordes/subchild_2_1",
    "mryh:structure_hordes/subchild_2_2",
    "mryh:structure_hordes/subchild_2_3",
    "mryh:structure_hordes/subchild_2_4",
    "mryh:structure_hordes/subchild_2_5",
    "mryh:structure_hordes/subchild_2_6",
    "mryh:structure_hordes/subchild_2_7",
    "mryh:structure_hordes/subchild_2_8",
    "mryh:structure_hordes/subchild_2_9",
    "mryh:structure_hordes/subchild_3_1",
    "mryh:structure_hordes/subchild_3_2",
    "mryh:structure_hordes/subchild_3_3",
    "mryh:structure_hordes/subchild_3_4",
    "mryh:structure_hordes/subchild_3_5",
    "mryh:structure_hordes/subchild_4_1",
    "mryh:structure_hordes/subchild_4_2",
    "mryh:structure_hordes/subchild_4_3",
    "mryh:structure_hordes/subchild_4_4",
    "mryh:structure_hordes/subchild_4_5",
    "mryh:structure_hordes/subchild_4_6",
    "mryh:structure_hordes/subchild_4_7",
    "mryh:structure_hordes/subchild_4_8",
    "mryh:structure_hordes/subchild_4_9",
    "mryh:structure_hordes/subchild_4_10",
    "mryh:structure_hordes/subchild_4_11",
    "mryh:structure_hordes/subchild_4_12",
    "mryh:structure_hordes/subchild_4_13",
    "mryh:structure_hordes/subchild_4_14",
    "mryh:structure_hordes/subchild_4_15",
    "mryh:structure_hordes/subchild_4_16",
    "mryh:structure_hordes/subchild_4_17",
    "mryh:structure_hordes/subchild_4_18",
    "mryh:structure_hordes/subchild_4_19",
    "mryh:structure_hordes/subchild_4_20",
    "mryh:structure_hordes/subchild_4_21",
    "mryh:structure_hordes/subchild_4_22",
    "mryh:structure_hordes/subchild_4_23",
    "mryh:structure_hordes/subchild_4_24",
    "mryh:structure_hordes/subchild_4_25",
    "mryh:structure_hordes/subchild_4_26",
    "mryh:structure_hordes/subchild_4_27",
    "mryh:structure_hordes/subchild_4_28",
    "mryh:structure_hordes/subchild_4_29",
    "mryh:structure_hordes/subchild_4_30",
    "mryh:structure_hordes/subchild_4_31",
    "mryh:structure_hordes/subchild_4_32",
    "mryh:structure_hordes/subchild_4_33",
    "mryh:structure_hordes/subchild_4_34",
    "mryh:structure_hordes/subchild_4_35",
    "mryh:structure_hordes/subchild_4_36",
    "mryh:structure_hordes/subchild_4_37",
    "mryh:structure_hordes/subchild_4_38",
    "mryh:structure_hordes/subchild_4_39",
    "mryh:structure_hordes/subchild_4_40",
    "mryh:structure_hordes/subchild_4_41",
    "mryh:structure_hordes/subchild_4_42",
    "mryh:structure_hordes/subchild_4_43",
    "mryh:structure_hordes/subchild_4_44",
    "mryh:structure_hordes/subchild_4_45",
    "mryh:structure_hordes/subchild_4_46",
    "mryh:structure_hordes/subchild_4_47",
    "mryh:structure_hordes/subchild_4_48",
    "mryh:structure_hordes/subchild_4_49",
    "mryh:structure_hordes/subchild_4_50",
    "mryh:structure_hordes/subchild_4_51",
    "mryh:structure_hordes/subchild_4_52",
    "mryh:structure_hordes/subchild_4_53",
    "mryh:structure_hordes/subchild_4_54",
    "mryh:structure_hordes/subchild_4_55",
    "mryh:structure_hordes/subchild_4_56",
    "mryh:structure_hordes/subchild_4_57",
    "mryh:structure_hordes/subchild_4_58",
    "mryh:structure_hordes/subchild_4_59",
    "mryh:structure_hordes/subchild_4_60",
    "mryh:structure_hordes/subchild_4_61",
    "mryh:structure_hordes/subchild_4_62",
    "mryh:structure_hordes/subchild_4_63",
    "mryh:structure_hordes/subchild_4_64",
    "mryh:structure_hordes/subchild_4_65",
    "mryh:structure_hordes/subchild_4_66",
    "mryh:structure_hordes/subchild_4_67",
    "mryh:structure_hordes/subchild_4_68",
    "mryh:structure_hordes/subchild_4_69",
    "mryh:structure_hordes/subchild_4_70",
    "mryh:structure_hordes/subchild_4_71",
    "mryh:structure_hordes/subchild_4_72",
    "mryh:structure_hordes/subchild_4_73",
    "mryh:structure_hordes/subchild_4_74",
    "mryh:structure_hordes/subchild_4_75",
    "mryh:structure_hordes/subchild_4_76",
    "mryh:structure_hordes/subchild_4_77",
    "mryh:structure_hordes/subchild_4_78",
    "mryh:structure_hordes/subchild_4_79",
    "mryh:structure_hordes/subchild_4_80",
    "mryh:structure_hordes/subchild_4_81",
    "mryh:structure_hordes/subchild_4_82",
    "mryh:structure_hordes/subchild_4_83",
    "mryh:structure_hordes/subchild_4_84",
    "mryh:structure_hordes/subchild_4_85",
    "mryh:structure_hordes/subchild_4_86",
    "mryh:structure_hordes/subchild_4_87",
    "mryh:structure_hordes/subchild_4_88",
    "mryh:structure_hordes/subchild_4_89",
    "mryh:structure_hordes/subchild_4_90",
    "mryh:structure_hordes/subchild_4_91",
    "mryh:structure_hordes/subchild_4_92",
    "mryh:structure_hordes/subchild_4_93",
    "mryh:structure_hordes/subchild_4_94",
    "mryh:structure_hordes/subchild_4_95",
    "mryh:structure_hordes/subchild_4_96",
    "mryh:structure_hordes/subchild_4_97",
    "mryh:structure_hordes/subchild_4_98",
    "mryh:structure_hordes/subchild_4_99",
    "mryh:structure_hordes/subchild_4_100",
    "mryh:structure_hordes/subchild_5_1",
    "mryh:structure_hordes/subchild_5_2",
    "mryh:structure_hordes/subchild_5_3",
    "mryh:structure_hordes/subchild_5_4",
    "mryh:structure_hordes/subchild_5_5",
    "mryh:structure_hordes/subchild_5_6",
    "mryh:structure_hordes/subchild_5_7",
    "mryh:structure_hordes/subchild_5_8",
    "mryh:structure_hordes/subchild_5_9",
    "mryh:structure_hordes/subchild_5_10",
    "mryh:structure_hordes/subchild_5_11",
    "mryh:structure_hordes/subchild_5_12",
    "mryh:structure_hordes/subchild_5_13",
    "mryh:structure_hordes/subchild_5_14",
    "mryh:structure_hordes/subchild_5_15",
    "mryh:structure_hordes/subchild_5_16",
    "mryh:structure_hordes/subchild_5_17",
    "mryh:structure_hordes/subchild_5_18",
    "mryh:structure_hordes/subchild_5_19",
    "mryh:structure_hordes/subchild_5_20",
    "mryh:structure_hordes/subchild_5_21",
    "mryh:structure_hordes/subchild_5_22",
    "mryh:structure_hordes/subchild_5_23",
    "mryh:structure_hordes/subchild_5_24",
    "mryh:structure_hordes/subchild_5_25",
    "mryh:structure_hordes/subchild_5_26",
    "mryh:structure_hordes/subchild_5_27",
    "mryh:structure_hordes/subchild_5_28",
    "mryh:structure_hordes/subchild_5_29",
    "mryh:structure_hordes/subchild_5_30",
    "mryh:structure_hordes/subchild_6_1",
    "mryh:structure_hordes/subchild_6_2",
    "mryh:structure_hordes/subchild_6_3",
    "mryh:structure_hordes/subchild_6_4",
    "mryh:structure_hordes/subchild_6_5",
    "mryh:structure_hordes/subchild_6_6",
    "mryh:structure_hordes/subchild_6_7",
    "mryh:structure_hordes/subchild_6_8",
    "mryh:structure_hordes/subchild_6_9",
    "mryh:structure_hordes/subchild_6_10",
    "mryh:structure_hordes/subchild_6_11",
    "mryh:structure_hordes/subchild_6_12",
    "mryh:structure_hordes/subchild_6_13",
    "mryh:structure_hordes/subchild_6_14",
    "mryh:structure_hordes/subchild_6_15",
    "mryh:structure_hordes/subchild_6_16",
    "mryh:structure_hordes/subchild_6_17",
    "mryh:structure_hordes/subchild_6_18",
    "mryh:structure_hordes/subchild_6_19",
    "mryh:structure_hordes/subchild_6_20",
    "mryh:structure_hordes/subchild_6_21",
    "mryh:structure_hordes/subchild_6_22",
    "mryh:structure_hordes/subchild_6_23",
    "mryh:structure_hordes/subchild_6_24",
    "mryh:structure_hordes/subchild_6_25",
    "mryh:structure_hordes/subchild_6_26",
    "mryh:structure_hordes/subchild_6_27",
    "mryh:structure_hordes/subchild_6_28",
    "mryh:structure_hordes/subchild_6_29",
    "mryh:structure_hordes/subchild_6_30",
    "mryh:structure_hordes/subchild_6_31",
    "mryh:structure_hordes/subchild_6_32",
    "mryh:structure_hordes/subchild_6_33",
    "mryh:structure_hordes/subchild_6_34",
    "mryh:structure_hordes/subchild_6_35",
    "mryh:structure_hordes/subchild_6_36",
    "mryh:structure_hordes/subchild_6_37",
    "mryh:structure_hordes/subchild_6_38",
    "mryh:structure_hordes/subchild_6_39",
    "mryh:structure_hordes/subchild_6_40",
    "mryh:structure_hordes/subchild_6_41",
    "mryh:structure_hordes/subchild_6_42",
    "mryh:structure_hordes/subchild_6_43",
    "mryh:structure_hordes/subchild_6_44",
    "mryh:structure_hordes/subchild_6_45",
    "mryh:structure_hordes/subchild_6_46",
    "mryh:structure_hordes/subchild_6_47",
    "mryh:structure_hordes/subchild_6_48",
    "mryh:structure_hordes/subchild_6_49",
    "mryh:structure_hordes/subchild_6_50",
    "mryh:structure_hordes/subchild_6_51",
    "mryh:structure_hordes/subchild_6_52",
    "mryh:structure_hordes/subchild_6_53",
    "mryh:structure_hordes/subchild_6_54",
    "mryh:structure_hordes/subchild_6_55",
    "mryh:structure_hordes/subchild_6_56",
    "mryh:structure_hordes/subchild_6_57",
    "mryh:structure_hordes/subchild_6_58",
    "mryh:structure_hordes/subchild_6_59",
    "mryh:structure_hordes/subchild_6_60",
    "mryh:structure_hordes/subchild_6_61",
    "mryh:structure_hordes/subchild_6_62",
    "mryh:structure_hordes/subchild_6_63",
    "mryh:structure_hordes/subchild_6_64",
    "mryh:structure_hordes/subchild_6_65",
    "mryh:structure_hordes/subchild_6_66",
    "mryh:structure_hordes/subchild_6_67",
    "mryh:structure_hordes/subchild_6_68",
    "mryh:structure_hordes/subchild_6_69",
    "mryh:structure_hordes/subchild_6_70",
    "mryh:structure_hordes/subchild_6_71",
    "mryh:structure_hordes/subchild_6_72",
    "mryh:structure_hordes/subchild_6_73",
    "mryh:structure_hordes/subchild_6_74",
    "mryh:structure_hordes/subchild_6_75",
    "mryh:structure_hordes/subchild_6_76",
    "mryh:structure_hordes/subchild_6_77",
    "mryh:structure_hordes/subchild_6_78",
    "mryh:structure_hordes/subchild_6_79",
    "mryh:structure_hordes/subchild_6_80",
    "mryh:structure_hordes/subchild_6_81",
    "mryh:structure_hordes/subchild_6_82",
    "mryh:structure_hordes/subchild_6_83",
    "mryh:structure_hordes/subchild_6_84",
    "mryh:structure_hordes/subchild_6_85",
    "mryh:structure_hordes/subchild_6_86",
    "mryh:structure_hordes/subchild_6_87",
    "mryh:structure_hordes/subchild_6_88",
    "mryh:structure_hordes/subchild_6_89",
    "mryh:structure_hordes/subchild_6_90",
    "mryh:structure_hordes/subchild_6_91",
    "mryh:structure_hordes/subchild_6_92",
    "mryh:structure_hordes/subchild_6_93",
    "mryh:structure_hordes/subchild_6_94",
    "mryh:structure_hordes/subchild_6_95",
    "mryh:structure_hordes/subchild_6_96",
    "mryh:structure_hordes/subchild_6_97",
    "mryh:structure_hordes/subchild_6_98",
    "mryh:structure_hordes/subchild_6_99",
    "mryh:structure_hordes/subchild_6_100",
    "mryh:structure_hordes/subchild_6_101",
    "mryh:structure_hordes/subchild_6_102",
    "mryh:structure_hordes/subchild_6_103",
    "mryh:structure_hordes/subchild_6_104",
    "mryh:structure_hordes/subchild_6_105",
    "mryh:structure_hordes/subchild_6_106",
    "mryh:structure_hordes/subchild_6_107",
    "mryh:structure_hordes/subchild_6_108",
    "mryh:structure_hordes/subchild_6_109",
    "mryh:structure_hordes/subchild_6_110",
    "mryh:structure_hordes/subchild_6_111",
    "mryh:structure_hordes/subchild_6_112",
    "mryh:structure_hordes/subchild_6_113",
    "mryh:structure_hordes/subchild_6_114",
    "mryh:structure_hordes/subchild_6_115",
    "mryh:structure_hordes/subchild_6_116",
    "mryh:structure_hordes/subchild_6_117",
    "mryh:structure_hordes/subchild_6_118",
    "mryh:structure_hordes/subchild_6_119",
    "mryh:structure_hordes/subchild_6_120",
    "mryh:structure_hordes/subchild_6_121",
    "mryh:structure_hordes/subchild_6_122",
    "mryh:structure_hordes/subchild_6_123",
    "mryh:structure_hordes/subchild_6_124",
    "mryh:structure_hordes/subchild_6_125",
    "mryh:structure_hordes/subchild_6_126"
]

PlayerEvents.advancement(event => {
    const day = Math.floor(event.level.dayTime() / 24000);
    const Structure = event.advancement
    const player = event.player.name.string;
    const hordeType = updateHordeType(day);
    if (Structure_hordes.includes(Structure.id().toString()) && day > 10) {
        event.server.runCommandSilent(`/hordes spawnWave ${player} 30 ${hordeType}`);
    }
});