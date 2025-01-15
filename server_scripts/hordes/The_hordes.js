
// 会引起尸潮的特殊物品（例：CDU）
const specialItems = [
    "spore:cdu"
    // 可以在这里添加更多特殊物品
];

// 标记每个特殊物品是否已经触发过尸潮
const blockMarks = new Array(specialItems.length).fill(false);
// 用注册到访结构进度来代替访问结构
const specialStructures = [
    "dungeons_arise:find_abandoned_temple",
    "dungeons_arise:find.aviary",
    "dungeons_arise:find_bandit_towers",
    "dungeons_arise:find_bandit_village",
    "dungeons_arise:find_bathhouse",
    "dungeons_arise:find_ceryneian_hind",
    "dungeons_arise:find_coliseum",
    "dungeons_arise:find_fishing_hut",
    "dungeons_arise:find_foundry",
    "dungeons_arise:find_giant_mushroom",
    "dungeons_arise:find_greenwood_pub",
    "dungeons_arise:find_heavenly_challenger",
    "dungeons_arise:find_heavenly_conqueror",
    "dungeons_arise:find_heavenly_rider",
    "dungeons_arise:find_illager_campsite",
    "dungeons_arise:find_illager_corsair_or_illager_galley",
    "dungeons_arise:find_illager_fort",
    "dungeons_arise:find_illager_windmill",
    "dungeons_arise:find_infested_temple",
    "dungeons_arise:find_infested_temple_map",
    "dungeons_arise:find_keep_karaja",
    "dungeons_arise:find_lighthouse",
    "dungeons_arise:find_mechanical_nest",
    "dungeons_arise:find_merchant_campsite",
    "dungeons_arise:find_mining_system",
    "dungeons_arise:find_monasteries",
    "dungeons_arise:find_mushroom_house",
    "dungeons_arise:find_mushroom_mines",
    "dungeons_arise:find_mushroom_village",
    "dungeons_arise:find_plague_asylum",
    "dungeons_arise:find_scorched_mines",
    "dungeons_arise:find_shiraz_palace",
    "dungeons_arise:find_small_blimp",
    "dungeons_arise:find_small_prairie_house",
    "dungeons_arise:find_thornborn_towers",
    "dungeons_arise:find_typhon",
    "dungeons_arise:find_undead_pirate_ship",
    "dungeons_arise:find_wishing_well",
    "dungeons_arise:find_wda_root",
    "dungeons_arise:wda_root"
]
// 更新hordeType的函数
function updateHordeType(day) {
    if (day < 5) {
        return "hordes:default";
    } else if (day < 15) {
        return "hordes:hordes10";
    } else if (day < 25) {
        return "hordes:hordes20";
    } else if (day < 35) {
        return "hordes:hordes30";
    } else if (day < 45) {
        return "hordes:hordes40";
    } else if (day < 55) {
        return "hordes:hordes50";
    } else if (day < 65) {
        return "hordes:hordes60";
    } else if (day < 75) {
        return "hordes:hordes70";
    } else if (day < 85) {
        return "hordes:hordes80";
    } else if (day < 95) {
        return "hordes:hordes90";
    } else {
        return "hordes:hordes100";
    }
}

LevelEvents.tick(event => {
    const day = Math.floor(event.level.dayTime() / 24000);
    const dayTick = event.level.dayTime() % 24000;

    // 夜晚时间从13000刻到23990刻
    const isNightTime = dayTick >= 13000 && dayTick <= 23990;

    // 每五天触发一次尸潮
    if (isNightTime && day % 5 === 0) {
        const hordeType = updateHordeType(day);

        // 直接触发尸潮
        if (dayTick === 13000) {
            event.server.runCommandSilent(`/hordes spawnWave @r 40 ${hordeType}`);
        }
        if (dayTick === 16000) {
            event.server.runCommandSilent(`/hordes spawnWave @r 50 ${hordeType}`);
        }
        if (dayTick === 19000) {
            event.server.runCommandSilent(`/hordes spawnWave @r 60 ${hordeType}`);
        }
        if (dayTick === 22000) {
            event.server.runCommandSilent(`/hordes spawnWave @r 70 ${hordeType}`);
        }
    }

    if (!isNightTime && day > 10) {
        let a = 0; // 初始化a的值
        for (let i = 0; i < 13000; i++) { // 总共执行13000次
            if (Math.random() < 0.1) { // 以20%的概率执行
                a += 1; // 增加a的值
                if (a === 10000) { // 如果a达到10000
                    const hordeType = updateHordeType(day);
                    event.server.runCommandSilent(`/hordes spawnWave @r 50 ${hordeType}`); // 执行命令
                    a = 0; // 重置a的值
                    event.server.tell('很不幸！随机尸潮爆发了！')
                }
            }
        }
    }
});


BlockEvents.broken(event => {
    const day = Math.floor(event.level.dayTime() / 24000);
    const item = event.block.id;
    const hordeType = updateHordeType(day);
    const player = event.player.name.string;

    // 检查被破坏的物品是否在特殊物品数组中，并且游戏天数大于10
    const itemIndex = specialItems.indexOf(item);
    if (itemIndex !== -1 && day > 10 && !blockMarks[itemIndex]) {
        event.server.runCommandSilent(`/hordes spawnWave ${player} 50 ${hordeType}`);
        event.server.runCommandSilent(`/title ${player} title {"text":"你惊动了尸潮！","color":"red","bold":true}`);
        blockMarks[itemIndex] = true; // 标记该物品已触发尸潮
    }
});


PlayerEvents.advancement(event => {
    const day = Math.floor(event.level.dayTime() / 24000);
    const Structure = event.advancement
    const player = event.player.name.string;
    const hordeType = updateHordeType(day);
    if (specialStructures.includes(Structure.id().toString()) && day > 10) {
        event.server.runCommandSilent(`/hordes spawnWave ${player} 30 ${hordeType}`);
    }
});


