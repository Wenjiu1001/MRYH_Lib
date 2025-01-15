PlayerEvents.tick(event => {
    // 当前天数
    const day = Math.floor(event.level.dayTime() / 24000);
    const player=event.player.name.string
    //一百天成就
    switch (day) {
        case 0: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive1`)
            break;
        case 10: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive10`)
            break;
        case 20: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive20`)
            break;
        case 30: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive30`)
            break;
        case 40: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive40`)
            break;
        case 50: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive50`)
            break;
        case 60: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive60`)
            break;
        case 70: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive70`)
            break;
        case 80: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive80`)
            break;
        case 90: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive90`)
            break;
        case 100: event.server.runCommandSilent(`/advancement grant ${player} only minecraft:survive/survive100`)
            break;
        default:

    }
})

PlayerEvents.loggedIn((event) => {
    event.server.runCommandSilent('/gamerule keepInventory true')
    event.server.runCommandSilent('/gamerule hordeMultiplying false')
})