StartupEvents.registry("sound_event", event => {
    event.create("jiuhu:music.ciallo")
    event.create("mryh:music.horde_spawn")
})

StartupEvents.registry("item", event => {
    event.create("jiuhu:ciallo", "music_disc")
        .song("jiuhu:music.ciallo", 237)
        .tag("music_discs")
})
