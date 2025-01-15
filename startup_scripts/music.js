StartupEvents.registry("sound_event",event=>{
    event.create("jiuhu:music.ciallo")
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:ciallo","music_disc")
            .song("jiuhu:music.ciallo",237)
            .tag("music_discs")
})