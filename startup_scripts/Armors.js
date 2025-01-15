ItemEvents.modification(event => {
    /*
        // 支持任意有伤害的工具，例如铲子，镐子
        event.modify("mincraft:diamond_sword", item => {
            // 攻击伤害
            item.setAttackDamage(50);
            // 注意: 空手攻击速度是4. 你需要添加一个负数来降低攻击速度
            item.setAttackSpeed(4);
        });
    
        // 仅支持镐子， 斧子，铲子等等的挖掘工具
        event.modify("mincraft:diamond_shovel", item => {
            // 挖掘速度
            item.setDigSpeed(100);
        });
    */
   
    // 仅支持盔甲
    // 实验性外骨骼
    event.modify("zombiekit:exo_helmet", item => {
        item.setArmorProtection(30); // 盔甲值
        item.setArmorToughness(8); // 盔甲韧性
        item.setArmorKnockbackResistance(5); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:exo_chestplate", item => {
        item.setArmorProtection(45); // 盔甲值
        item.setArmorToughness(8); // 盔甲韧性
        item.setArmorKnockbackResistance(5); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:exo_leggings", item => {
        item.setArmorProtection(35); // 盔甲值
        item.setArmorToughness(8); // 盔甲韧性
        item.setArmorKnockbackResistance(5); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:exo_boots", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(8); // 盔甲韧性
        item.setArmorKnockbackResistance(5); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 特殊作战单位
    event.modify("apocalypsenow:juggernaut_helmet", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:juggernaut_chestplate", item => {
        item.setArmorProtection(30); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:juggernaut_leggings", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:juggernaut_boots", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 灾害处理部门
    event.modify("apocalypsenow:bombsquad_helmet", item => {
        item.setArmorProtection(17); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:bombsquad_chestplate", item => {
        item.setArmorProtection(28); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:bombsquad_leggings", item => {
        item.setArmorProtection(20); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:bombsquad_boots", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(10); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 强化清理部门
    event.modify("zombiekit:bomb_helmet", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:bomb_chestplate", item => {
        item.setArmorProtection(30); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:bomb_leggings", item => {
        item.setArmorProtection(28); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:bomb_boots", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 机械哨兵
    event.modify("zombie_extreme:exo_suit_helmet", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(2); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:exo_suit_chestplate", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:exo_suit_leggings", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:exo_suit_boots", item => {
        item.setArmorProtection(7); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 巨人
    event.modify("zombie_extreme:juggernaut_suit_helmet", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(2); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:juggernaut_suit_chestplate", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:juggernaut_suit_leggings", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombie_extreme:juggernaut_suit_boots", item => {
        item.setArmorProtection(7); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 凤翅、明光铠
    event.modify("max_armory:mingguang_armor_helmet", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(2); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("max_armory:mingguang_armor_chestplate", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("max_armory:lamellar_armor_leggings", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("max_armory:lamellar_armor_boots", item => {
        item.setArmorProtection(7); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 将军
    event.modify("apocalypsenow:army_helmet", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(2); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:army_chestplate", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:army_leggings", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:army_boots", item => {
        item.setArmorProtection(7); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 特别行动
    event.modify("apocalypsenow:spec_ops_helmet", item => {
        item.setArmorProtection(10); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(2); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:spec_ops_chestplate", item => {
        item.setArmorProtection(25); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:spec_ops_leggings", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:spec_ops_boots", item => {
        item.setArmorProtection(7); // 盔甲值
        item.setArmorToughness(5); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 中国陆军
    event.modify("apocalypsenow:chinese_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:chinese_army_chestplate", item => {
        item.setArmorProtection(17); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:chinese_army_leggings", item => {
        item.setArmorProtection(13); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:chinese_army_boots", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 俄罗斯陆军
    event.modify("apocalypsenow:russian_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:russian_army_chestplate", item => {
        item.setArmorProtection(17); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:russian_army_leggings", item => {
        item.setArmorProtection(13); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:russian_army_boots", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 美国陆军
    event.modify("apocalypsenow:usa_armor_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:usa_armor_chestplate", item => {
        item.setArmorProtection(17); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:usa_armor_leggings", item => {
        item.setArmorProtection(13); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:usa_armor_boots", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 加拿大陆军
    event.modify("apocalypsenow:canadian_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:canadian_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:canadian_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:canadian_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 墨西哥陆军
    event.modify("apocalypsenow:mexican_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:mexican_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:mexican_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:mexican_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 日本陆军
    event.modify("apocalypsenow:japanese_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:japanese_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:japanese_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:japanese_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 意大利陆军
    event.modify("apocalypsenow:italian_bersaglieri_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:italian_bersaglieri_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:italian_bersaglieri_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:italian_bersaglieri_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 巴西陆军
    event.modify("apocalypsenow:brazilian_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:brazilian_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:brazilian_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:brazilian_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 英国陆军
    event.modify("apocalypsenow:british_army_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:british_army_chestplate", item => {
        item.setArmorProtection(15); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:british_army_leggings", item => {
        item.setArmorProtection(11); // 盔甲值
        item.setArmorToughness(4); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:british_army_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(10); // 盔甲韧性
        item.setArmorKnockbackResistance(3); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 守卫者
    event.modify("zombiekit:standard_tactical_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:standard_tactical_chestplate", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:standard_tactical_leggings", item => {
        item.setArmorProtection(9); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:standard_tactical_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 破坏者
    event.modify("apocalypsenow:anarchy_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:anarchy_chestplate", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:anarchy_leggings", item => {
        item.setArmorProtection(9); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:anarchy_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 喷气飞行员
    event.modify("apocalypsenow:jet_pilot_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:jet_pilot_chestplate", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:jet_pilot_leggings", item => {
        item.setArmorProtection(9); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:jet_pilot_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 探险者
    event.modify("zombiekit:skiing_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:skiing_chestplate", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:skiing_leggings", item => {
        item.setArmorProtection(9); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("zombiekit:skiing_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });

    // 拾荒者
    event.modify("apocalypsenow:forestguard_helmet", item => {
        item.setArmorProtection(5); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:forestguard_chestplate", item => {
        item.setArmorProtection(12); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:forestguard_leggings", item => {
        item.setArmorProtection(9); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
    event.modify("apocalypsenow:forestguard_boots", item => {
        item.setArmorProtection(4); // 盔甲值
        item.setArmorToughness(3); // 盔甲韧性
        item.setArmorKnockbackResistance(1); // 击退抗性
        item.setMaxDamage(800);// 最大耐久度
    });
});
