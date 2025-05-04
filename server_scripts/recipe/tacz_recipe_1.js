
ServerEvents.recipes(e => {
    // ========== 完整枪械列表 ==========
    // 初级手枪（全部ID）
    let primaryPistols = [
        "applied_armorer:niklas_pistol_semi_pride",
        "immersive_armorer:standard_rail_pistol_mk3",
        "immersive_armorer:standard_rail_pistol_mk2",
        "immersive_armorer:standard_rail_pistol_mk1",
        "helldiver2:p2_peacemaker",
        "bf1:sw_model3",
        "bf1:obrez",
        "immersive_armorer:revolver",
        "immersive_armorer:standard_rail_pistol_mk4",
        "tacz:glock_17",
        "tacz:cz75",
        "tacz:p320",
        "mpworld:qs38",
        "tacz:deagle",
        "mpworld:leftdeagle",
        "tacz:deagle_golden",
        "mpworld:leftdeagle2",
        "tacz:m1911",
        "bf1:kolibri",
        "bf1:syringe",
        "bf1:handgun",
        "create_armorer:pistol_auto_stress",
        "create_armorer:pistol_revolver_torque",
        "immersive_armorer:pistol_9mm",
        "applied_armorer:niklas_pistol_semi_union",
        "applied_armorer:niklas_pistol_semi_right"
    ];

    // 初级冲锋枪（完整ID列表）
    let primarySMGs = [
        "mpworld:ise_52",
        "tacz:vector45",
        "gfl2:suomi",
        "trisdyna:cms92",
        "bluearchive:mika",
        "bf1:smg0818",
        "bluearchive:natsu",
        "helldiver2:smg37_defender",
        "mpworld:ls30d",
        "tacz:p90",
        "tacz:hk_mp5a5",
        "tacz:ump45",
        "gfl2:mourningwhispers",
        "bluearchive:miyako",
        "gfl2:ppsh_41",
        "tacz:uzi",
        "mpworld:ms39",
        "bluearchive:kurumi",
        "mpworld:ise_52c",
        "mpworld:ise_52b"
    ];

    // 初级霰弹枪（完整ID列表）
    let primaryShotguns = [
        "immersive_armorer:pump_shotgun",
        "mpworld:shot",
        "bc:dd",
        "mpworld:m870s",
        "tacz:m870",
        "tacz:db_long",
        "tacz:db_short",
        "bf1:model10",
        "create_armorer:shotgun_pump_bearing",
        "cyber_armorer:m2038",
        "bluearchive:niko",
        "create_armorer:shotgun_db_stone"
    ];

    // 初级步枪（完整ID列表）
    let primaryRifles = [
        "helldiver2:ar23_liberator",
        "bf1:m1916",
        "helldiver2:ar23c_liberator",
        "immersive_armorer:assult_rifle",
        "mpworld:ls22b",
        "tacz:scar_h",
        "mpworld:545p",
        "mpworld:ls22",
        "mpworld:22r",
        "tacz:m16a4",
        "gfl2:g11_5",
        "tacz:m16a1",
        "gfl2:191",
        "tacz:sks_tactical",
        "tacz:type_81",
        "gfl2:wanderingstars",
        "bluearchive:azusa",
        "bluearchive:yukino",
        "mpworld:ls30",
        "helldiver2:ar23p_liberator",
        "bluearchive:toki",
        "bf1:vg15",
        "tacz:scar_l",
        "create_armorer:rifle_assult_crane",
        "mpworld:ls30b",
        "mpworld:ls45",
        "mpworld:ls",
        "tacz:aug",
        "bluearchive:shiroko"
    ];

    let generateRecipes = function (items, materials, recipeType) {
        recipeType = recipeType || 'gun'; // 手动设置默认值
        items.forEach(id => {
            // 构造正确的原始配方ID（格式：modid:type/weapon_id）
            let [modid, weaponId] = id.split(':');
            let originalRecipeId = `${modid}:${recipeType}/${weaponId}`;

            // 1. 先移除原始配方
            e.remove({ id: originalRecipeId });

            // 2. 添加新配方
            e.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: materials,
                result: {
                    type: 'gun',
                    id: id
                }
            })
                .id(originalRecipeId);;
        });
    }

    // ========== 生成所有配方 ==========
    // 手枪（使用统一材料）
    generateRecipes(primaryPistols, [
        { item: { item: 'mryh:low_permession' }, count: 1 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 10 },
        { item: { item: 'minecraft:copper_ingot' }, count: 40 } // 注意copper拼写
    ], 'gun'); // 指定原配方类型

    // 冲锋枪（统一材料）
    generateRecipes(primarySMGs, [
        { item: { item: 'mryh:low_permession' }, count: 1 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:copper_ingot' }, count: 20 },
        { item: { item: 'minecraft:amethyst_shard' }, count: 5 }
    ], 'gun');

    // 霰弹枪（统一材料）
    generateRecipes(primaryShotguns, [
        { item: { item: 'mryh:low_permession' }, count: 1 },
        { item: { item: 'minecraft:iron_ingot' }, count: 30 },
        { item: { item: 'minecraft:gold_ingot' }, count: 5 },
        { item: { item: 'minecraft:copper_ingot' }, count: 40 }
    ], 'gun');

    // 步枪（统一材料）修复钻石拼写
    generateRecipes(primaryRifles, [
        { item: { item: 'mryh:low_permession' }, count: 1 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:copper_ingot' }, count: 20 },
        { item: { item: 'minecraft:diamond' }, count: 5 }
    ], 'gun');
});


ServerEvents.recipes(e => {
    // ========== 中级枪械列表 ==========
    // 中级手枪
    let mediumPistols = [
        "emxarms:emx_pulse",
        "cyber_armorer:yukimura_genjiroh",
        "cyber_armorer:yukimura_skippy",
        "cyber_armorer:yukimura",
        "cyber_armorer:unity_cheetah",
        "cyber_armorer:unity_her_majesty",
        "cyber_armorer:unity",
        "applied_armorer:niklas_pistol_double_win_win",
        "bluearchive:noa",
        "cyber_armorer:3516",
        "helldiver2:authorized_gun",
        "helldiver2:p19_redeemer",
        "emxarms:emx_mac100",
        "emxarms:emx_pulsex2",
        "emxarms:emx_kund50",
        "bluearchive:ayane",
        "emxarms:emx_mac50",
        "emxarms:emx_tknife",
        "emxarms:emx_kund50ex"
    ];

    // 中级冲锋枪
    let mediumSMGs = [
        "emxarms:emx_expel32se",
        "gfl2:lioncubs",
        "emxarms:emx_umx32",
        "bluearchive:fuuka",
        "cyber_armorer:g58_dian",
        "cyber_armorer:saratoga",
        "bf1:vp1915",
        "cyber_armorer:g58_dian_yinglong",
        "emxarms:emx_expel32",
        "applied_armorer:niklas_smg_freedom",
        "immersive_armorer:standard_rail_smg_mk1",
        "create_armorer:smg_auto_crank"
    ];

    // 中级霰弹枪
    let mediumShotguns = [
        "emxarms:emx_enforcer",
        "emxarms:emx_scgraves",
        "bluearchive:hoshino",
        "bf1:wex",
        "tacz:aa12",
        "bf1:ef46",
        "cyber_armorer:carnage",
        "cyber_armorer:m2038_the_headsman",
        "helldiver2:sg225_breaker",
        "applied_armorer:moritz_shotgun_sg914"
    ];
    // 中级步枪
    let mediumRifles = [
        "emxarms:emx_umx57h",
        "bluearchive:serika",
        "tacz:hk_g3",
        "cyber_armorer:ajax",
        "cyber_armorer:copperhead",
        "tacz:mk14",
        "applied_armorer:niklas_lever_vigenere",
        "emxarms:emx_mk951l",
        "gfl2:g36",
        "gfl2:skulla",
        "gfl2:416a5",
        "gfl2:95_5",
        "emxarms:emx_mk951r",
        "emxarms:emx_umx57",
        "tacz:m4a1",
        "mpworld:sc15",
        "tacz:ak47",
        "tacz:qbz_95",
        "bluearchive:momoi",
        "gfl2:97",
        "mpworld:ls30c",
        "cyber_armorer:ajax_moron_labe",
        "applied_armorer:moritz_rifle_ar77",
        "cyber_armorer:ajax_pit_bull",
        "emxarms:emx_rivet",
        "tacz:hk416d",
        "mpworld:te_01"
    ];

    // 中级狙击枪
    let mediumSnipers = [
        "bf1:tg1918",
        "tacz:m107",
        "tacz:m95",
        "create_armorer:sniper_semi_clockwork",
        "mpworld:mas49",
        "tacz:ai_awp",
        "mpworld:ssg08",
        "bf1:martini",
        "immersive_armorer:railgun",
        "tacz:m700",
        "helldiver2:r63_diligence",
        "helldiver2:r63cs_diligence",
        "bf1:man_m95",
        "mpworld:ssg08b"
    ];

    // 中级机枪
    let mediumMGs = [
        "bf1:lewis",
        "bc:ak50",
        "tacz:m249",
        "bf1:mg0815",
        "tacz:rpk",
        "mpworld:ak338l",
        "mpworld:ak338lb",
        "create_armorer:mg_platemag_flywheel",
        "bc:qjz171"
    ];

    // 中级重型火力
    let mediumHeavy = [
        "bf1:mhgl",
        "helldiver2:jar5_dominator",
        "create_armorer:special_melee_wrench",
        "create_armorer:special_melee_atomic",
        "applied_armorer:special_melee_task_manager",
        "bf1:f_faust",
        "tacz:m320",
        "helldiver2:r36_eruptor",
        "bc:spg9",
        "tacz:rpg7"
    ];

    // ========== 材料配置 ==========
    // 手枪材料（第一个材料组）
    let pistolMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 5 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:copper_ingot' }, count: 20 },
        { item: { item: 'minecraft:diamond' }, count: 10 }
    ];

    // 冲锋枪材料（第二个材料组）
    let smgMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 8 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:copper_ingot' }, count: 20 },
        { item: { item: 'minecraft:glowstone_dust' }, count: 10 }
    ];

    // 霰弹枪材料（第三个材料组）
    let shotgunMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 8 },
        { item: { item: 'minecraft:iron_ingot' }, count: 30 },
        { item: { item: 'minecraft:gold_ingot' }, count: 5 },
        { item: { item: 'minecraft:emerald' }, count: 20 }
    ];

    // 步枪材料（第四个材料组）
    let rifleMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 10 },
        { item: { item: 'minecraft:diamond' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 15 },
        { item: { item: 'minecraft:gunpowder' }, count: 60 }
    ];

    // 狙击枪材料（第五个材料组）
    let sniperMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 14 },
        { item: { item: 'minecraft:iron_ingot' }, count: 50 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:copper_ingot' }, count: 20 },
        { item: { item: 'minecraft:echo_shard' }, count: 20 }
    ];

    // 机枪材料（第六个材料组）
    let mgMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 16 },
        { item: { item: 'minecraft:iron_ingot' }, count: 60 },
        { item: { item: 'minecraft:gold_ingot' }, count: 40 },
        { item: { item: 'minecraft:quartz' }, count: 200 }
    ];

    // 重型火力材料（第七个材料组）
    let heavyMaterials = [
        { item: { item: 'mryh:medium_permession' }, count: 1 },
        { item: { item: 'netherite_scrap' }, count: 16 },
        { item: { item: 'minecraft:blaze_powder' }, count: 20 },
        { item: { item: 'mcore:steel_ingot' }, count: 10 },
        { item: { item: 'minecraft:iron_ingot' }, count: 20 },
        { item: { item: 'minecraft:gold_ingot' }, count: 20 },
        { item: { item: 'minecraft:diamond' }, count: 20 }
    ];

    // ========== 配方生成函数 ==========
    let generateRecipes = function (items, materials, recipeType) {
        recipeType = recipeType || 'gun';
        items.forEach(id => {
            let [modid, weaponId] = id.split(':');
            let originalRecipeId = `${modid}:${recipeType}/${weaponId}`;
            e.remove({ id: originalRecipeId });
            e.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: materials,
                result: { type: 'gun', id: id }
            })
                .id(originalRecipeId);;
        });
    };

    // ========== 生成所有中级配方 ==========
    generateRecipes(mediumPistols, pistolMaterials);
    generateRecipes(mediumSMGs, smgMaterials);
    generateRecipes(mediumShotguns, shotgunMaterials);
    generateRecipes(mediumRifles, rifleMaterials);
    generateRecipes(mediumSnipers, sniperMaterials);
    generateRecipes(mediumMGs, mgMaterials);
    generateRecipes(mediumHeavy, heavyMaterials);
    // 非常规配方id
    e.remove({ id: "bc:gun/qjz171_2" })
});


ServerEvents.recipes(e => {
    // ========== 高级枪械列表 ==========

    // 高级手枪
    let highPistols = [
        "emxarms:emx_pulse_al",
        "emxarms:emx_pulse_sc",
        "emxarms:emx_kund50ex_al",
        "emxarms:emx_pulse_dl1",
        "emxarms:emx_pulse_dl2",
        "trisdyna:fl3e_sd",
        "trisdyna:fl3e",
        "trisdyna:fl00"
    ];

    // 高级冲锋枪
    let highSMGs = [
        "emxarms:emx_expel32se_ba",
        "emxarms:emx_umx32_koei",
        "dawnhunting:tcpl_vector45",
        "emxarms:emx_expel32_lb",
        "gfl2:stm",
        "gfl2:ls06"
    ];

    // 高级霰弹枪
    let highShotguns = [
        "emxarms:emx_draftsman",
        "emxarms:emx_draftsman_ev",
        "emxarms:emx_draftsman_ev1",
        "helldiver2:sg225ie_breaker",
        "trisdyna:iras",
        "gfl2:mindhunter",
        "trisdyna:fpc211"
    ];

    // 高级步枪
    let highRifles = [
        "emxarms:emx_mk951r_ba",
        "emxarms:emx_mk951l_ba",
        "emxarms:emx_rivet_gw",
        "trisdyna:ch104",
        "dawnhunting:tcpl_vector45ar",
        "cyber_armorer:copperhead_psalm"
    ];

    // 高级狙击枪
    let highSnipers = [
        "cyber_armorer:grad_overwatch",
        "cyber_armorer:grad_05",
        "cyber_armorer:grad_sparky",
        "cyber_armorer:grad",
        "gfl2:bittercaramel",
        "gfl2:forestelves",
        "bluearchive:otogi",
        "applied_armorer:moritz_sniper_semi_k30",
        "cyber_armorer:grad_borzaya",
        "emxarms:emx_pmg90",
        "emxarms:emx_pmg90eos",
        "emxarms:emx_mk88"
    ];
    // 高级机枪
    let highMGs = [
        "bluearchive:hina",
        "emxarms:emx_mg57",
        "emxarms:emx_mk951lmg",
        "emxarms:emx_mg90"
    ];

    // 高级重型火力
    let highHeavy = [
        "mpworld:qwhdknife",
        "applied_armorer:moritz_gernade_gl3",
        "bc:muxing_s",
        "immersive_armorer:chemical_thrower",
        "mpworld:qwhdknife2"
    ];

    // ========== 材料配置 ==========

    // 高级手枪材料（第一个材料组）
    let highPistolMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 5 },
        { item: { item: 'minecraft:nether_star' }, count: 2 },
        { item: { item: 'minecraft:diamond' }, count: 40 }
    ];

    // 高级冲锋枪材料（第二个材料组）
    let highSMGMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 6 },
        { item: { item: 'minecraft:nether_star' }, count: 3 },
        { item: { item: 'mcore:titanium_ingot' }, count: 50 }
    ];

    // 高级霰弹枪材料（第三个材料组）
    let highShotgunMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 5 },
        { item: { item: 'minecraft:nether_star' }, count: 3 },
        { item: { item: 'zombie_extreme:ignot_titan' }, count: 50 }
    ];

    // 高级步枪材料（第四个材料组）
    let highRifleMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 10 },
        { item: { item: 'minecraft:nether_star' }, count: 4 },
        { item: { item: 'minecraft:ghast_tear' }, count: 50 }
    ];

    // 高级狙击枪材料（第五个材料组）
    let highSniperMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 14 },
        { item: { item: 'minecraft:nether_star' }, count: 5 },
        { item: { item: 'minecraft:dragon_breath' }, count: 50 }
    ];

    // 高级机枪材料（第六个材料组）
    let highMGMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 15 },
        { item: { item: 'minecraft:nether_star' }, count: 6 },
        { item: { item: 'spore:living_core' }, count: 30 }
    ];

    // 高级重型火力材料（第七个材料组）
    let highHeavyMaterials = [
        { item: { item: 'mryh:high_permession' }, count: 1 },
        { item: { item: 'minecraft:netherite_upgrade_smithing_template' }, count: 14 },
        { item: { item: 'minecraft:nether_star' }, count: 8 },
        { item: { item: 'minecraft:blaze_rod' }, count: 100 }
    ];

    // ========== 配方生成函数 ==========

    let generateRecipes = function (items, materials, recipeType) {
        recipeType = recipeType || 'gun';
        items.forEach(id => {
            let [modid, weaponId] = id.split(':');
            let originalRecipeId = `${modid}:${recipeType}/${weaponId}`;
            e.remove({ id: originalRecipeId });
            e.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: materials,
                result: { type: 'gun', id: id }
            })
                .id(originalRecipeId);;
        });
    };

    // ========== 生成所有高级配方 ==========

    generateRecipes(highPistols, highPistolMaterials);
    generateRecipes(highSMGs, highSMGMaterials);
    generateRecipes(highShotguns, highShotgunMaterials);
    generateRecipes(highRifles, highRifleMaterials);
    generateRecipes(highSnipers, highSniperMaterials);
    generateRecipes(highMGs, highMGMaterials);
    generateRecipes(highHeavy, highHeavyMaterials);
});


ServerEvents.recipes(e => {
    // ========== 究极枪械列表 ==========

    // 究极狙击枪
    let ultimateSnipers = [
        "trisdyna:tris_sf7e_wa",
        "trisdyna:fs2000",
        "trisdyna:tris_sf7e",
        "dawnhunting:1"
    ];

    // 究极机枪
    let ultimateMGs = [
        "applied_armorer:moritz_mg_emg_prototype",
        "applied_armorer:moritz_mg_hmg22",
        "bluearchive:nonomi",
        "dawnhunting:hmg456",
        "trisdyna:emx_cf107",
        "emxarms:emx_mg57_yh",
        "trisdyna:emx_cf007",
        "emxarms:emx_sf7b"
    ];

    // 究极重型火力
    let ultimateHeavy = [
        "trisdyna:r117_weedy",
        "bc:muxing",
        "cyber_armorer:mantis_blade",
        "cyber_armorer:mantis_blade_maxtac"
    ];

    // ========== 材料配置 ==========

    // 究极狙击枪材料（第一个材料组）
    let ultimateSniperMaterials = [
        { item: { item: 'mryh:ultimate_permession' }, count: 1 },
        { item: { item: 'spore:mutated_heart' }, count: 50 },
        { item: { item: 'spore:hardened_bind' }, count: 50 },
        { item: { item: 'minecraft:nether_star' }, count: 10 },
        { item: { item: 'minecraft:dragon_breath' }, count: 100 }
    ];

    // 究极机枪材料（第二个材料组）
    let ultimateMGMaterials = [
        { item: { item: 'mryh:ultimate_permession' }, count: 1 },
        { item: { item: 'spore:mutated_heart' }, count: 50 },
        { item: { item: 'spore:hardened_bind' }, count: 50 },
        { item: { item: 'minecraft:nether_star' }, count: 10 },
        { item: { item: 'minecraft:dragon_breath' }, count: 100 }
    ];

    // 究极重型火力材料（第三个材料组）
    let ultimateHeavyMaterials = [
        { item: { item: 'mryh:ultimate_permession' }, count: 1 },
        { item: { item: 'spore:mutated_heart' }, count: 50 },
        { item: { item: 'spore:hardened_bind' }, count: 50 },
        { item: { item: 'minecraft:nether_star' }, count: 10 },
        { item: { item: 'minecraft:dragon_breath' }, count: 100 }
    ];

    // ========== 配方生成函数 ==========

    let generateRecipes = function (items, materials, recipeType) {
        recipeType = recipeType || 'gun';
        items.forEach(id => {
            let [modid, weaponId] = id.split(':');
            let originalRecipeId = `${modid}:${recipeType}/${weaponId}`;
            e.remove({ id: originalRecipeId });
            e.custom({
                type: 'tacz:gun_smith_table_crafting',
                materials: materials,
                result: { type: 'gun', id: id }
            })
                .id(originalRecipeId);
        });
    };

    // ========== 生成所有究极配方 ==========

    generateRecipes(ultimateSnipers, ultimateSniperMaterials);
    generateRecipes(ultimateMGs, ultimateMGMaterials);
    generateRecipes(ultimateHeavy, ultimateHeavyMaterials);

    // 删除配方
    e.remove({ id: 'mpworld:attachments/knife2' })
    e.remove({ id: 'mpworld:attachments/knife' })
    e.remove({ id: 'emxarms:ammo/339x57fmj' })
    e.remove({ id: 'emxarms:ammo/339x57x' })
    e.remove({ id: 'emxarms:ammo/339x57' })
    e.remove({ id: 'emxarms:ammo/402x31rip' })
    e.remove({ id: 'emxarms:ammo/1045x103belt' })
    e.remove({ id: 'emxarms:ammo/410x57ap' })
    e.remove({ id: 'emxarms:ammo/x16sg' })
    e.remove({ id: 'emxarms:ammo/emx_tediore' })
    e.remove({ id: 'emxarms:ammo/402x31fmj' })
    e.remove({ id: 'emxarms:ammo/402x31' })
    e.remove({ id: 'emxarms:ammo/1045x103' })
    e.remove({ id: 'emxarms:ammo/x16he' })
    e.remove({ id: 'emxarms:ammo/emx_rem' })
    e.remove({ id: 'bc:gun/muxing_s2' })
    e.remove({ id: 'mpworld:gun/wth' })
});
