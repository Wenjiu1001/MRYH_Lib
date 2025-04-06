
// 枪械数据调整
TaCZServerEvents.gunDataLoad((event) => {
    let id = event.getId().toString();
    let json = JSON.parse(event.getStdJson());
    //===============================================初级枪械=========================================
    //***************手枪****************
    if (id === "applied_armorer:niklas_pistol_semi_pride_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:standard_rail_pistol_mk3_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:standard_rail_pistol_mk2_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8 },
            { distance: 36, damage: 7.5 },
            { distance: 50, damage: 7 },
            { distance: 9999, damage: 6.5 }
        ];
        // 射速
        json.rpm = 320;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:standard_rail_pistol_mk1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.5 },
            { distance: 36, damage: 13 },
            { distance: 50, damage: 12.5 },
            { distance: 9999, damage: 12 }
        ];
        // 射速
        json.rpm = 230;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 6;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:p2_peacemaker_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 4.5 },
            { distance: 36, damage: 4 },
            { distance: 50, damage: 3.5 },
            { distance: 9999, damage: 3 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:sw_model3_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 163;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:obrez_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7.5 },
            { distance: 36, damage: 7 },
            { distance: 50, damage: 6.5 },
            { distance: 9999, damage: 6 }
        ];
        // 射速
        json.rpm = 275;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:revolver_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:standard_rail_pistol_mk4_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:glock_17_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 17;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:cz75_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 4.5 },
            { distance: 36, damage: 4 },
            { distance: 50, damage: 3.5 },
            { distance: 9999, damage: 3 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 16;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:p320_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 450;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 11;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:qs38_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 450;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 13;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:deagle_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 250;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:leftdeagle_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 5.5 },
            { distance: 36, damage: 5 },
            { distance: 50, damage: 4.5 },
            { distance: 9999, damage: 4 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 14;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:deagle_golden_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 340;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:leftdeagle2_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m1911_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8 },
            { distance: 36, damage: 7.5 },
            { distance: 50, damage: 7 },
            { distance: 9999, damage: 6.5 }
        ];
        // 射速
        json.rpm = 370;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:kolibri_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 290;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:handgun_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10 },
            { distance: 36, damage: 9.5 },
            { distance: 50, damage: 9 },
            { distance: 9999, damage: 8.5 }
        ];
        // 射速
        json.rpm = 325;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:pistol_auto_stress_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 4.5 },
            { distance: 36, damage: 4 },
            { distance: 50, damage: 3.5 },
            { distance: 9999, damage: 3 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:pistol_revolver_torque_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15 },
            { distance: 36, damage: 14.5 },
            { distance: 50, damage: 14 },
            { distance: 9999, damage: 13.5 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:pistol_9mm_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:niklas_pistol_semi_union_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 480;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 17;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:niklas_pistol_semi_right_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7 },
            { distance: 36, damage: 6.5 },
            { distance: 50, damage: 6 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 17;
        return event.setJson(JSON.stringify(json));
    }
    //***************冲锋枪**************
    if (id === "mpworld:ise_52_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:vector45_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7.5 },
            { distance: 36, damage: 7 },
            { distance: 50, damage: 6.5 },
            { distance: 9999, damage: 6 }
        ];
        // 射速
        json.rpm = 1100;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 19;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:suomi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:cms92_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 80;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:mika_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:smg0818_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 5.5 },
            { distance: 36, damage: 5 },
            { distance: 50, damage: 4.5 },
            { distance: 9999, damage: 4 }
        ];
        // 射速
        json.rpm = 770;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 70;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:natsu_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8 },
            { distance: 36, damage: 7.5 },
            { distance: 50, damage: 7 },
            { distance: 9999, damage: 6.5 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:smg37_defender_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 520;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.15;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls30d_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:p90_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 5.5 },
            { distance: 36, damage: 5 },
            { distance: 50, damage: 4.5 },
            { distance: 9999, damage: 4 }
        ];
        // 射速
        json.rpm = 710;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:hk_mp5a5_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 820;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.15;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:ump45_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 660;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:mourningwhispers_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7.5 },
            { distance: 36, damage: 7 },
            { distance: 50, damage: 6.5 },
            { distance: 9999, damage: 6 }
        ];
        // 射速
        json.rpm = 1100;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 19;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:miyako_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 5.5 },
            { distance: 36, damage: 5 },
            { distance: 50, damage: 4.5 },
            { distance: 9999, damage: 4 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 71;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:ppsh_41_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:uzi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8 },
            { distance: 36, damage: 7.5 },
            { distance: 50, damage: 7 },
            { distance: 9999, damage: 6.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ms39_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 450;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:kurumi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 7.5 },
            { distance: 36, damage: 7 },
            { distance: 50, damage: 6.5 },
            { distance: 9999, damage: 6 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ise_52c_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ise_52b_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.5 },
            { distance: 9999, damage: 5 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }
    //***************霰弹枪**************
    if (id === "immersive_armorer:pump_shotgun_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 40.5 },
            { distance: 36, damage: 40 },
            { distance: 50, damage: 39.5 },
            { distance: 9999, damage: 39 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:shotgun_db_stone_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 26.5 },
            { distance: 36, damage: 26 },
            { distance: 50, damage: 25.5 },
            { distance: 9999, damage: 25 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.33;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.7;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:shot_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 26.5 },
            { distance: 36, damage: 26 },
            { distance: 50, damage: 25.5 },
            { distance: 9999, damage: 25 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.33;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.7;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bc:dd_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.35;
        // 弹容量
        json.ammo_amount = 2;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:m870s_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 180;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m870_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 36.5 },
            { distance: 36, damage: 36 },
            { distance: 50, damage: 35.5 },
            { distance: 9999, damage: 35 }
        ];
        // 射速
        json.rpm = 180;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.33;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:db_long_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 250;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.33;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:db_short_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.33;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:model10_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 205;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:shotgun_pump_bearing_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 32.5 },
            { distance: 36, damage: 32 },
            { distance: 50, damage: 31.5 },
            { distance: 9999, damage: 31 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:m2038_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.33;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:niko_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.1;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }
    //***************步枪****************
    if (id === "helldiver2:ar23_liberator_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 640;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "bluearchive:shiroko_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 640;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "bf1:m1916_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 25.5 },
            { distance: 36, damage: 25 },
            { distance: 50, damage: 24.5 },
            { distance: 9999, damage: 24 }
        ];
        // 射速
        json.rpm = 250;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:ar23c_liberator_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.5 },
            { distance: 36, damage: 16 },
            { distance: 50, damage: 15.5 },
            { distance: 9999, damage: 15 }
        ];
        // 射速
        json.rpm = 320;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:assult_rifle_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.1 },
            { distance: 36, damage: 13.6 },
            { distance: 50, damage: 13.1 },
            { distance: 9999, damage: 12.6 }
        ];
        // 射速
        json.rpm = 640;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls22b_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:scar_h_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 570;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:545p_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls22_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:22r_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 28.5 },
            { distance: 36, damage: 28 },
            { distance: 50, damage: 27.5 },
            { distance: 9999, damage: 27 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 6;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m16a4_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.55;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:g11_5_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m16a1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:191_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 500;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:sks_tactical_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 510;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:type_81_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 630;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.32;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:wanderingstars_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:azusa_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:yukino_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.7 },
            { distance: 36, damage: 9.5 },
            { distance: 50, damage: 9 },
            { distance: 9999, damage: 8.5 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.35;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls30_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:ar23p_liberator_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 670;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:toki_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.4 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:vg15_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 560;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:scar_l_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:rifle_assult_crane_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11.5 },
            { distance: 36, damage: 11 },
            { distance: 50, damage: 10.5 },
            { distance: 9999, damage: 10 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls30b_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 8.5 },
            { distance: 36, damage: 8 },
            { distance: 50, damage: 7.5 },
            { distance: 9999, damage: 7 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls45_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:aug_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 9.5 },
            { distance: 36, damage: 9 },
            { distance: 50, damage: 8.5 },
            { distance: 9999, damage: 8 }
        ];
        // 射速
        json.rpm = 710;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 28;
        return event.setJson(JSON.stringify(json));
    }
    //===============================================中级枪械=========================================
    //***************手枪****************
    if (id === "emxarms:emx_pulse_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 18;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:yukimura_genjiroh_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:yukimura_skippy_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 520;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:yukimura_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 500;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:unity_cheetah_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:unity_her_majesty_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 4;
        // 弹容量
        json.ammo_amount = 9;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:unity_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 360;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:niklas_pistol_double_win_win_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.5 },
            { distance: 36, damage: 13 },
            { distance: 50, damage: 12.5 },
            { distance: 9999, damage: 12 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 34;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:noa_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 120;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 3;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:3516_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 450;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:authorized_gun_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:p19_redeemer_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mac100_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pulsex2_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.7;
        // 弹容量
        json.ammo_amount = 18;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_kund50_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.5 },
            { distance: 36, damage: 13 },
            { distance: 50, damage: 12.5 },
            { distance: 9999, damage: 12 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:ayane_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 640;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 14;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mac50_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_tknife_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 270;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.65;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_kund50ex_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }
    //***************冲锋枪**************
    if (id === "emxarms:emx_expel32se_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "applied_armorer:niklas_smg_freedom_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "immersive_armorer:standard_rail_smg_mk1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "create_armorer:smg_auto_crank_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:niklas_smg_freedom_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 11 },
            { distance: 36, damage: 10.5 },
            { distance: 50, damage: 10 },
            { distance: 9999, damage: 9.5 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "gfl2:lioncubs_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.5 },
            { distance: 36, damage: 13 },
            { distance: 50, damage: 12.5 },
            { distance: 9999, damage: 12 }
        ];
        // 射速
        json.rpm = 920;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_umx32_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.4 },
            { distance: 36, damage: 12.9 },
            { distance: 50, damage: 12.4 },
            { distance: 9999, damage: 11.9 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:fuuka_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12.5 },
            { distance: 36, damage: 12 },
            { distance: 50, damage: 11.5 },
            { distance: 9999, damage: 11 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.25;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:g58_dian_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12 },
            { distance: 36, damage: 11.5 },
            { distance: 50, damage: 11 },
            { distance: 9999, damage: 10.5 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:saratoga_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 12 },
            { distance: 36, damage: 11.5 },
            { distance: 50, damage: 11 },
            { distance: 9999, damage: 10.5 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:vp1915_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 38;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:g58_dian_yinglong_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 14.5 },
            { distance: 36, damage: 14 },
            { distance: 50, damage: 13.5 },
            { distance: 9999, damage: 13 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_expel32_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 13.7 },
            { distance: 36, damage: 13.2 },
            { distance: 50, damage: 12.7 },
            { distance: 9999, damage: 12.2 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.45;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 24;
        return event.setJson(JSON.stringify(json));
    }
    //***************霰弹枪**************
    if (id === "emxarms:emx_enforcer_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 41.5 },
            { distance: 36, damage: 41 },
            { distance: 50, damage: 40.5 },
            { distance: 9999, damage: 40 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.35;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:moritz_shotgun_sg914_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 41.5 },
            { distance: 36, damage: 41 },
            { distance: 50, damage: 40.5 },
            { distance: 9999, damage: 40 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.35;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:sg225_breaker_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 41.5 },
            { distance: 36, damage: 41 },
            { distance: 50, damage: 40.5 },
            { distance: 9999, damage: 40 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.35;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_scgraves_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 40.5 },
            { distance: 36, damage: 40 },
            { distance: 50, damage: 39.5 },
            { distance: 9999, damage: 39 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.35;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:hoshino_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 45.5 },
            { distance: 36, damage: 45 },
            { distance: 50, damage: 44.5 },
            { distance: 9999, damage: 44 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.1;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:wex_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 4.5 },
            { distance: 36, damage: 4 },
            { distance: 50, damage: 3.5 },
            { distance: 9999, damage: 3 }
        ];
        // 射速
        json.rpm = 666;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.8;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 130;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:aa12_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 35.5 },
            { distance: 36, damage: 35 },
            { distance: 50, damage: 34.5 },
            { distance: 9999, damage: 34 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.33;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:ef46_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 666;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:carnage_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:m2038_the_headsman_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 35.5 },
            { distance: 36, damage: 35 },
            { distance: 50, damage: 34.5 },
            { distance: 9999, damage: 34 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }
    //***************步枪****************
    if (id === "emxarms:emx_umx57h_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.85;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:serika_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:97_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:hk_g3_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 22.5 },
            { distance: 36, damage: 22 },
            { distance: 50, damage: 21.5 },
            { distance: 9999, damage: 21 }
        ];
        // 射速
        json.rpm = 520;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:ajax_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.85;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:copperhead_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 17.5 },
            { distance: 36, damage: 17 },
            { distance: 50, damage: 16.5 },
            { distance: 9999, damage: 16 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.7;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:mk14_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.5 },
            { distance: 36, damage: 16 },
            { distance: 50, damage: 15.5 },
            { distance: 9999, damage: 15 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 24;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:niklas_lever_vigenere_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 24.5 },
            { distance: 36, damage: 24 },
            { distance: 50, damage: 23.5 },
            { distance: 9999, damage: 23 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.35;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mk951l_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 720;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:g36_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.8 },
            { distance: 36, damage: 16.5 },
            { distance: 50, damage: 16 },
            { distance: 9999, damage: 15.5 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:skulla_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.35;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.45;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:416a5_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:95_5_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mk951r_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.8 },
            { distance: 36, damage: 16.5 },
            { distance: 50, damage: 16 },
            { distance: 9999, damage: 15.5 }
        ];
        // 射速
        json.rpm = 720;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 36;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_umx57_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 820;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.95;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m4a1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 17.5 },
            { distance: 36, damage: 17 },
            { distance: 50, damage: 16.5 },
            { distance: 9999, damage: 16 }
        ];
        // 射速
        json.rpm = 810;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:sc15_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 19.5 },
            { distance: 36, damage: 19 },
            { distance: 50, damage: 18.5 },
            { distance: 9999, damage: 18 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 28;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:ak47_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 19.5 },
            { distance: 36, damage: 19 },
            { distance: 50, damage: 18.5 },
            { distance: 9999, damage: 18 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.35;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:qbz_95_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 17.5 },
            { distance: 36, damage: 17 },
            { distance: 50, damage: 16.5 },
            { distance: 9999, damage: 16 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:momoi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.8 },
            { distance: 36, damage: 16.5 },
            { distance: 50, damage: 16 },
            { distance: 9999, damage: 15.5 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:97_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ls30c_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.8 },
            { distance: 36, damage: 16.5 },
            { distance: 50, damage: 16 },
            { distance: 9999, damage: 15.5 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:ajax_moron_labe_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.85;
        // 弹容量
        json.ammo_amount = 28;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:moritz_rifle_ar77_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:ajax_pit_bull_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_rivet_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.8 },
            { distance: 36, damage: 16.5 },
            { distance: 50, damage: 16 },
            { distance: 9999, damage: 15.5 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:hk416d_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:te_01_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 19.5 },
            { distance: 36, damage: 19 },
            { distance: 50, damage: 18.5 },
            { distance: 9999, damage: 18 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 18;
        return event.setJson(JSON.stringify(json));
    }
    //***************狙击枪**************
    if (id === "bf1:tg1918_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.9;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m107_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 6;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m95_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 54.5 },
            { distance: 36, damage: 54 },
            { distance: 50, damage: 53.5 },
            { distance: 9999, damage: 53 }
        ];
        // 射速
        json.rpm = 151;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.75;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:sniper_semi_clockwork_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.45;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:mas49_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:ai_awp_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 55.5 },
            { distance: 36, damage: 55 },
            { distance: 50, damage: 54.5 },
            { distance: 9999, damage: 54 }
        ];
        // 射速
        json.rpm = 171;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ssg08_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:martini_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 2;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:railgun_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 80.5 },
            { distance: 36, damage: 80 },
            { distance: 50, damage: 79.5 },
            { distance: 9999, damage: 79 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m700_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 55.5 },
            { distance: 36, damage: 55 },
            { distance: 50, damage: 54.5 },
            { distance: 9999, damage: 54 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 6;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:r63_diligence_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 8;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:r63cs_diligence_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:man_m95_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 54.5 },
            { distance: 36, damage: 54 },
            { distance: 50, damage: 53.5 },
            { distance: 9999, damage: 53 }
        ];
        // 射速
        json.rpm = 278;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ssg08b_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 6;
        return event.setJson(JSON.stringify(json));
    }
    //***************机枪****************
    if (id === "bf1:lewis_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 47;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "bc:qjz171_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 47;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "bc:ak50_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 33.5 },
            { distance: 36, damage: 33 },
            { distance: 50, damage: 32.5 },
            { distance: 9999, damage: 32 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.7;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m249_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 19.5 },
            { distance: 36, damage: 19 },
            { distance: 50, damage: 18.5 },
            { distance: 9999, damage: 18 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 75;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:mg0815_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 100;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:rpk_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.3;
        // 弹容量
        json.ammo_amount = 100;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ak338l_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:ak338lb_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 680;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:mg_platemag_flywheel_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 65;
        return event.setJson(JSON.stringify(json));
    }
    //***************重火力**************
    if (id === "bf1:mhgl_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 150.5 },
            { distance: 36, damage: 150 },
            { distance: 50, damage: 149.5 },
            { distance: 9999, damage: 149 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:jar5_dominator_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 500;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.8;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:special_melee_wrench_data") {
        // 攻击
        json.melee.default.damage = 20
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20 },
            { distance: 9999, damage: 20 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "create_armorer:special_melee_atomic_data") {
        // 攻击
        json.melee.default.damage = 20
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20 },
            { distance: 9999, damage: 20 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:special_melee_task_manager_data") {
        // 攻击
        json.melee.default.damage = 20
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20 },
            { distance: 9999, damage: 20 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bf1:f_faust_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 2;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:m320_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 150.5 },
            { distance: 36, damage: 150 },
            { distance: 50, damage: 149.5 },
            { distance: 9999, damage: 149 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:r36_eruptor_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 10.5 },
            { distance: 36, damage: 10 },
            { distance: 50, damage: 9.5 },
            { distance: 9999, damage: 9 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bc:spg9_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 150.5 },
            { distance: 36, damage: 150 },
            { distance: 50, damage: 149.5 },
            { distance: 9999, damage: 149 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1
        return event.setJson(JSON.stringify(json));
    }

    if (id === "tacz:rpg7_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 150.5 },
            { distance: 36, damage: 150 },
            { distance: 50, damage: 149.5 },
            { distance: 9999, damage: 149 }
        ];
        // 射速
        json.rpm = 150;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1
        return event.setJson(JSON.stringify(json));
    }
    //===============================================高级枪械=========================================
    //***************手枪****************
    if (id === "emxarms:emx_pulse_al_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.2;
        // 弹容量
        json.ammo_amount = 16;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pulse_sc_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 28;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_kund50ex_al_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.42;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pulse_dl1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 18.5 },
            { distance: 36, damage: 18 },
            { distance: 50, damage: 17.5 },
            { distance: 9999, damage: 17 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.75;
        // 弹容量
        json.ammo_amount = 25;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pulse_dl2_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 17.5 },
            { distance: 36, damage: 17 },
            { distance: 50, damage: 16.5 },
            { distance: 9999, damage: 16 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.52;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:fl3e_sd_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.15;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:fl3e_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 700;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:fl00_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 650;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.05;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 120;
        return event.setJson(JSON.stringify(json));
    }
    //***************冲锋枪**************
    if (id === "emxarms:emx_expel32se_ba_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 16.5 },
            { distance: 36, damage: 16 },
            { distance: 50, damage: 15.5 },
            { distance: 9999, damage: 15 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 32;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_umx32_koei_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 1000;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.45;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "dawnhunting:tcpl_vector45_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 1000;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_expel32_lb_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 20.5 },
            { distance: 36, damage: 20 },
            { distance: 50, damage: 19.5 },
            { distance: 9999, damage: 19 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 20;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:stm_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:ls06_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 15.5 },
            { distance: 36, damage: 15 },
            { distance: 50, damage: 14.5 },
            { distance: 9999, damage: 14 }
        ];
        // 射速
        json.rpm = 920;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }
    //***************霰弹枪**************
    if (id === "emxarms:emx_draftsman_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 280;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_draftsman_ev_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 12;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_draftsman_ev1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 280;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 14;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "helldiver2:sg225ie_breaker_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.2;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:iras_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.1;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:mindhunter_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.15;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 7;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:fpc211_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 65.5 },
            { distance: 36, damage: 65 },
            { distance: 50, damage: 64.5 },
            { distance: 9999, damage: 64 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.4;
        // 弹容量
        json.ammo_amount = 15;
        return event.setJson(JSON.stringify(json));
    }
    //***************步枪****************
    if (id === "emxarms:emx_mk951r_ba_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 720;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mk951l_ba_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 28.5 },
            { distance: 36, damage: 28 },
            { distance: 50, damage: 27.5 },
            { distance: 9999, damage: 27 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 35;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_rivet_gw_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 740;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 36;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:ch104_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 28.5 },
            { distance: 36, damage: 28 },
            { distance: 50, damage: 27.5 },
            { distance: 9999, damage: 27 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 100;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "dawnhunting:tcpl_vector45ar_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 25.5 },
            { distance: 36, damage: 25 },
            { distance: 50, damage: 24.5 },
            { distance: 9999, damage: 24 }
        ];
        // 射速
        json.rpm = 820;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.7;
        // 弹容量
        json.ammo_amount = 40;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:copperhead_psalm_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 29.5 },
            { distance: 36, damage: 29 },
            { distance: 50, damage: 28.5 },
            { distance: 9999, damage: 28 }
        ];
        // 射速
        json.rpm = 660;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 45;
        return event.setJson(JSON.stringify(json));
    }
    //***************狙击枪**************
    if (id === "cyber_armorer:grad_overwatch_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:grad_05_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 120.5 },
            { distance: 36, damage: 120 },
            { distance: 50, damage: 119.5 },
            { distance: 9999, damage: 119 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 3;
        // 弹容量
        json.ammo_amount = 2;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:grad_sparky_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 3;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:grad_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 2;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:bittercaramel_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 85.5 },
            { distance: 36, damage: 85 },
            { distance: 50, damage: 84.5 },
            { distance: 9999, damage: 84 }
        ];
        // 射速
        json.rpm = 310;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "gfl2:forestelves_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 550;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 10;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:otogi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 110.5 },
            { distance: 36, damage: 110 },
            { distance: 50, damage: 109.5 },
            { distance: 9999, damage: 109 }
        ];
        // 射速
        json.rpm = 100;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 14;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:moritz_sniper_semi_k30_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 240;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.9;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 5;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:grad_borzaya_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 3;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pmg90_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_pmg90eos_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mk88_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 100.5 },
            { distance: 36, damage: 100 },
            { distance: 50, damage: 99.5 },
            { distance: 9999, damage: 99 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.8;
        // 弹容量
        json.ammo_amount = 4;
        return event.setJson(JSON.stringify(json));
    }
    //***************机枪****************
    if (id === "bc:qjz171_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 25.5 },
            { distance: 36, damage: 25 },
            { distance: 50, damage: 24.5 },
            { distance: 9999, damage: 24 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 80;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:hina_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 25.5 },
            { distance: 36, damage: 25 },
            { distance: 50, damage: 24.5 },
            { distance: 9999, damage: 24 }
        ];
        // 射速
        json.rpm = 950;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.35;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.6;
        // 弹容量
        json.ammo_amount = 100;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mg57_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 35.5 },
            { distance: 36, damage: 35 },
            { distance: 50, damage: 34.5 },
            { distance: 9999, damage: 34 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 80;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mk951lmg_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 45.5 },
            { distance: 36, damage: 45 },
            { distance: 50, damage: 44.5 },
            { distance: 9999, damage: 44 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.4;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.55;
        // 弹容量
        json.ammo_amount = 75;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mg90_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 55.5 },
            { distance: 36, damage: 55 },
            { distance: 50, damage: 54.5 },
            { distance: 9999, damage: 54 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.3;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.65;
        // 弹容量
        json.ammo_amount = 30;
        return event.setJson(JSON.stringify(json));
    }
    //***************重火力**************
    if (id === "mpworld:qwhdknife_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:moritz_gernade_gl3_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        json.bullet.explosion.damage = 100
        json.bullet.explosion.radius = 10
        // 射速
        json.rpm = 180;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 3;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bc:muxing_s_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 200.5 },
            { distance: 36, damage: 200 },
            { distance: 50, damage: 199.5 },
            { distance: 9999, damage: 199 }
        ];
        json.bullet.explosion.damage = 100
        json.bullet.explosion.radius = 10
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "immersive_armorer:chemical_thrower_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 30.5 },
            { distance: 36, damage: 30 },
            { distance: 50, damage: 29.5 },
            { distance: 9999, damage: 29 }
        ];
        // 射速
        json.rpm = 960;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 50;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "mpworld:qwhdknife2_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        json.melee.default.damage = 45
        json.melee.distance = 4
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }
    //===============================================究级枪械=========================================
    //***************狙击枪**************
    if (id === "trisdyna:tris_sf7e_wa_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 350.5 },
            { distance: 36, damage: 350 },
            { distance: 50, damage: 349.5 },
            { distance: 9999, damage: 349 }
        ];
        // 射速
        json.rpm = 200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 13;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:fs2000_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 200.5 },
            { distance: 36, damage: 200 },
            { distance: 50, damage: 199.5 },
            { distance: 9999, damage: 199 }
        ];
        // 射速
        json.rpm = 300;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 18;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:tris_sf7e_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 250.5 },
            { distance: 36, damage: 250 },
            { distance: 50, damage: 249.5 },
            { distance: 9999, damage: 249 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 9;
        return event.setJson(JSON.stringify(json));
    }
    if (id === "dawnhunting:1_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 250.5 },
            { distance: 36, damage: 250 },
            { distance: 50, damage: 249.5 },
            { distance: 9999, damage: 249 }
        ];
        // 射速
        json.rpm = 350;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 9;
        return event.setJson(JSON.stringify(json));
    }
    //***************机枪****************
    if (id === "applied_armorer:moritz_mg_emg_prototype_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 65.5 },
            { distance: 36, damage: 65 },
            { distance: 50, damage: 64.5 },
            { distance: 9999, damage: 64 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5;
        // 弹容量
        json.ammo_amount = 160;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "applied_armorer:moritz_mg_hmg22_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 60.5 },
            { distance: 36, damage: 60 },
            { distance: 50, damage: 59.5 },
            { distance: 9999, damage: 59 }
        ];
        // 射速
        json.rpm = 850;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.9;
        // 弹容量
        json.ammo_amount = 200;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bluearchive:nonomi_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 40.5 },
            { distance: 36, damage: 40 },
            { distance: 50, damage: 39.5 },
            { distance: 9999, damage: 39 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.25;
        // 弹容量
        json.ammo_amount = 500;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "dawnhunting:hmg456_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 40.5 },
            { distance: 36, damage: 40 },
            { distance: 50, damage: 39.5 },
            { distance: 9999, damage: 39 }
        ];
        // 射速
        json.rpm = 900;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 200;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:emx_cf107_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 55.5 },
            { distance: 36, damage: 55 },
            { distance: 50, damage: 54.5 },
            { distance: 9999, damage: 54 }
        ];
        // 射速
        json.rpm = 950;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 400;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_mg57_yh_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 55.5 },
            { distance: 36, damage: 55 },
            { distance: 50, damage: 54.5 },
            { distance: 9999, damage: 54 }
        ];
        // 射速
        json.rpm = 750;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 150;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "trisdyna:emx_cf007_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 40.5 },
            { distance: 36, damage: 40 },
            { distance: 50, damage: 39.5 },
            { distance: 9999, damage: 39 }
        ];
        // 射速
        json.rpm = 1000;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.6;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.2;
        // 弹容量
        json.ammo_amount = 700;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "emxarms:emx_sf7b_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.5 },
            { distance: 36, damage: 50 },
            { distance: 50, damage: 49.5 },
            { distance: 9999, damage: 49 }
        ];
        // 射速
        json.rpm = 800;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0.5;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2.5;
        // 弹容量
        json.ammo_amount = 180;
        return event.setJson(JSON.stringify(json));
    }
    //***************重火力**************
    if (id === "trisdyna:r117_weedy_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 50.7 },
            { distance: 36, damage: 50.7 },
            { distance: 50, damage: 49.7 },
            { distance: 9999, damage: 49.7 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 200;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "bc:muxing_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 500.5 },
            { distance: 36, damage: 500 },
            { distance: 50, damage: 499.5 },
            { distance: 9999, damage: 499 }
        ];
        // 射速
        json.rpm = 600;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 1;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 2;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:mantis_blade_data") {
        // 攻击
        json.melee.default.damage = 80
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 80 },
            { distance: 9999, damage: 80 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }

    if (id === "cyber_armorer:mantis_blade_maxtac_data") {
        // 攻击
        json.melee.default.damage = 80
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 80 },
            { distance: 9999, damage: 80 }
        ];
        // 射速
        json.rpm = 1200;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1;
        // 弹容量
        json.ammo_amount = 1;
        return event.setJson(JSON.stringify(json));
    }
})






/*
    // 检查当前 ID 是否属于手枪
    if (id === "_data") {
        // 攻击
        json.bullet.extra_damage.damage_adjust = [
            { distance: 14, damage: 6.5 },
            { distance: 36, damage: 6 },
            { distance: 50, damage: 5.8 },
            { distance: 9999, damage: 5.5 }
        ];
        // 射速
        json.rpm = 400;
        // 穿透
        json.bullet.extra_damage.armor_ignore = 0;
        // 爆头
        json.bullet.extra_damage.head_shot_multiplier = 1.5
        // 弹容量
        json.ammo_amount = 17;
        return event.setJson(JSON.stringify(json));
    }
*/
