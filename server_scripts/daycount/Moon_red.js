LevelEvents.tick(event => {
    // 当前天数
    const day = Math.floor(event.level.dayTime() / 24000);
    const day2 = day + 5;
    const dayTick = event.level.dayTime() % 24000
    // 每天显示天数
    if (dayTick == 0) {
        event.server.runCommandSilent(`/title @a title {"text":"第${day}天","color":"yellow","bold":true}`)
        event.server.runCommandSilent(`/title @a subtitle {"text":"活下去!","color":"red","italic":true}`)
    }
    // 每5天显示迎战尸潮
    if (day % 5 == 0 && dayTick == 12400) {
        event.server.runCommandSilent(`/title @a title {"text":"迎战尸潮","color":"yellow","bold":true}`)
    }
    // 每隔5天的血月
    if (day % 5 == 0 && dayTick == 13000) {
        event.server.runCommandSilent(`/enhancedcelestials setLunarEvent #enhancedcelestials:blood_moon`)
    }
    // 预告下一次血月
    if (day % 5 == 0 && dayTick == 500) {
        event.server.runCommandSilent(`/title @a title {"text":"血月降临","color":"yellow","bold":true}`)
        event.server.runCommandSilent(`/title @a subtitle {"text":"下一次第${day2}天","color":"red","italic":true}`)
    }
})
