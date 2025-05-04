let $ModernKineticGunItem = Java.loadClass('com.tacz.guns.item.ModernKineticGunItem');
let $AmmoItem = Java.loadClass('com.tacz.guns.item.AmmoItem');
let $Color = Java.loadClass('java.awt.Color');
let $Random = Java.loadClass('java.util.Random');
let $String = Java.loadClass('java.lang.String');


// 初级枪械
let tacz_Beginner = [
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
    "applied_armorer:niklas_pistol_semi_right",
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
    "mpworld:ise_52b",
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
    "create_armorer:shotgun_db_stone",
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
]
// 中级枪械
let tacz_Intermediate = [
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
    "emxarms:emx_kund50ex",
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
    "create_armorer:smg_auto_crank",
    "emxarms:emx_enforcer",
    "emxarms:emx_scgraves",
    "bluearchive:hoshino",
    "bf1:wex",
    "tacz:aa12",
    "bf1:ef46",
    "cyber_armorer:carnage",
    "cyber_armorer:m2038_the_headsman",
    "helldiver2:sg225_breaker",
    "applied_armorer:moritz_shotgun_sg914",
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
    "mpworld:te_01",
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
    "mpworld:ssg08b",
    "bf1:lewis",
    "bc:ak50",
    "tacz:m249",
    "bf1:mg0815",
    "tacz:rpk",
    "mpworld:ak338l",
    "mpworld:ak338lb",
    "create_armorer:mg_platemag_flywheel",
    "bc:qjz171",
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
]
// 高级枪械
let tacz_Advanced = [
    "emxarms:emx_pulse_al",
    "emxarms:emx_pulse_sc",
    "emxarms:emx_kund50ex_al",
    "emxarms:emx_pulse_dl1",
    "emxarms:emx_pulse_dl2",
    "trisdyna:fl3e_sd",
    "trisdyna:fl3e",
    "trisdyna:fl00",
    "emxarms:emx_expel32se_ba",
    "emxarms:emx_umx32_koei",
    "dawnhunting:tcpl_vector45",
    "emxarms:emx_expel32_lb",
    "gfl2:stm",
    "gfl2:ls06",
    "emxarms:emx_draftsman",
    "emxarms:emx_draftsman_ev",
    "emxarms:emx_draftsman_ev1",
    "helldiver2:sg225ie_breaker",
    "trisdyna:iras",
    "gfl2:mindhunter",
    "trisdyna:fpc211",
    "emxarms:emx_mk951r_ba",
    "emxarms:emx_mk951l_ba",
    "emxarms:emx_rivet_gw",
    "trisdyna:ch104",
    "dawnhunting:tcpl_vector45ar",
    "cyber_armorer:copperhead_psalm",
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
    "emxarms:emx_mk88",
    "bluearchive:hina",
    "emxarms:emx_mg57",
    "emxarms:emx_mk951lmg",
    "emxarms:emx_mg90",
    "applied_armorer:moritz_gernade_gl3",
    "bc:muxing_s",
    "immersive_armorer:chemical_thrower",
    "mpworld:qwhdknife2"
]
// 究级枪械
let tacz_Ultimate = [
    "trisdyna:tris_sf7e_wa",
    "trisdyna:fs2000",
    "trisdyna:tris_sf7e",
    "dawnhunting:1",
    "applied_armorer:moritz_mg_emg_prototype",
    "applied_armorer:moritz_mg_hmg22",
    "bluearchive:nonomi",
    "dawnhunting:hmg456",
    "trisdyna:emx_cf107",
    "emxarms:emx_mg57_yh",
    "trisdyna:emx_cf007",
    "emxarms:emx_sf7b",
    "trisdyna:r117_weedy",
    "bc:muxing",
    "cyber_armorer:mantis_blade",
    "cyber_armorer:mantis_blade_maxtac"
]



RenderJSEvents.RegisterItemDecorations(event => {
    event.registerForAllItem('gun', c => {
        if (c.itemStack.item instanceof $ModernKineticGunItem) {
            let gunItem = c.itemStack;
            let gunId = gunItem.item.getGunId(gunItem).toString();
            // 确定枪械等级

            if (tacz_Beginner.includes(gunId)){
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation("mryh:textures/item/tacz_level01.png"),
                    0, 0,       // 绘制位置
                    170,        // Z轴层级
                    0, 0,        // 纹理起始坐标
                    16, 16,      // 绘制尺寸
                    16, 16       // 纹理实际尺寸
                );
                c.guiGraphics.pose().popPose();
            }
            if (tacz_Intermediate.includes(gunId)) {
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation("mryh:textures/item/tacz_level02.png"),
                    0, 0,       // 绘制位置
                    170,        // Z轴层级
                    0, 0,        // 纹理起始坐标
                    16, 16,      // 绘制尺寸
                    16, 16       // 纹理实际尺寸
                );
                c.guiGraphics.pose().popPose();
            }
            if (tacz_Advanced.includes(gunId)) {
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation("mryh:textures/item/tacz_level03.png"),
                    0, 0,       // 绘制位置
                    170,        // Z轴层级
                    0, 0,        // 纹理起始坐标
                    16, 16,      // 绘制尺寸
                    16, 16       // 纹理实际尺寸
                );
                c.guiGraphics.pose().popPose();
            }
            if (tacz_Ultimate.includes(gunId)) {
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation("mryh:textures/item/tacz_level04.png"),
                    0, 0,       // 绘制位置
                    170,        // Z轴层级
                    0, 0,        // 纹理起始坐标
                    16, 16,      // 绘制尺寸
                    16, 16       // 纹理实际尺寸
                );
                c.guiGraphics.pose().popPose();
            }
        }

        // 处理弹药物品的渲染
        if (!(c.itemStack.item instanceof $AmmoItem)) return;
        let ammoItem = c.itemStack
        for (let gunitem of getAllGuns()) {
            if (ammoItem.item.isAmmoOfGun(gunitem, ammoItem)) {
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.fill(0, 0, 16, 16,getColorWithRGBA(100, 100, 200, 80) )
                c.guiGraphics.pose().popPose();
            }
        }
    });
});

// 获取玩家库存中的所有枪械
function getAllGuns() {
    let guns = []
    Client.player.inventory.getAllItems().forEach(item => {
        if (item.item instanceof $ModernKineticGunItem)
            guns.push(item)
    })
    return guns
}

function getColorWithRGBA(R, G, B, A) {
    return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB()
}
/*
// 初级枪械
let tacz_Beginner = [

]
// 中级枪械
let tacz_Intermediate = [

]
// 高级枪械
let tacz_Advanced = [

]
// 究级枪械
let tacz_Ultimate = [

]

// 注册物品装饰渲染事件
RenderJSEvents.RegisterItemDecorations(event => {
    event.registerForAllItem('gun', c => {
        // 处理枪械物品的渲染
        if (c.itemStack.item instanceof $ModernKineticGunItem) {
            let gunitem = c.itemStack
            if(枪械id包含在初级){
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation('mryh:textures/gui/tacz_level01.png'),
                    0, 0, 350,
                    0, 0,
                    16, 16,
                    64, 64
                )
                c.guiGraphics.pose().popPose();
            }
            if(枪械id包含在中级){
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation('mryh:textures/gui/tacz_level02.png'),
                    0, 0, 350,
                    0, 0,
                    16, 16,
                    64, 64
                )
                c.guiGraphics.pose().popPose();
            }
            if(枪械id包含在高级){
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation('mryh:textures/gui/tacz_level03.png'),
                    0, 0, 350,
                    0, 0,
                    16, 16,
                    64, 64
                )
                c.guiGraphics.pose().popPose();
            }
            if(枪械id包含在究级){
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                c.guiGraphics.blit(
                    ResourceLocation('mryh:textures/gui/tacz_level04.png'),
                    0, 0, 350,
                    0, 0,
                    16, 16,
                    64, 64
                )
                c.guiGraphics.pose().popPose();
            }
        }

        // 处理弹药物品的渲染
        if (!(c.itemStack.item instanceof $AmmoItem)) return;
        let ammoItem = c.itemStack
        for (let gunitem of getAllGuns()) {
            if (ammoItem.item.isAmmoOfGun(gunitem, ammoItem)) {
                c.guiGraphics.pose().pushPose();
                c.guiGraphics.pose().translate(c.xOffset, c.yOffset, 0);
                /*
                c.guiGraphics.fill(0, 0, 16, 16, getGunColor(gunitem));
                *
                c.guiGraphics.pose().popPose();
            }
        }
    });
});
*/
/*
// 根据枪械ID生成随机颜色
function getGunColor(gunitem) {
    return new $Random($String.valueOf(gunitem.item.getGunId(gunitem)).hashCode()).nextInt();
}
*/