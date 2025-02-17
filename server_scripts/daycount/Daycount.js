
PlayerEvents.tick(event => {
    let player = event.player;
    let playerName = player.name.string;
    let currentDay = Math.floor(event.level.dayTime() / 24000);

    // 假设 player 持久化数据中存储了上次获得成就的天数
    let lastDayGranted = player.persistentData.get("last_day_granted") || -1;

    // 如果 currentDay 比 lastDayGranted 大，说明需要发放成就
    if (currentDay > lastDayGranted) {
        // 遍历从 lastDayGranted + 1 到 currentDay 的所有天数
        for (let day = lastDayGranted + 1; day <= currentDay; day++) {
            // 发放成就
            event.server.runCommandSilent(`/advancement grant ${playerName} only minecraft:survive/survive${day}`);
        }

        // 更新 player 的持久化数据
        player.persistentData.putInt("last_day_granted", currentDay);
    }
});

PlayerEvents.loggedIn((event) => {
    event.server.runCommandSilent('/gamerule keepInventory true')
    event.server.runCommandSilent('/gamerule hordeMultiplying false')
})
