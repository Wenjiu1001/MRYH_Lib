
StartupEvents.registry("item", event => {
    event.create("mryh:deinfection")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.removeEffect("apocalypsenow:zombification")
            })
        })
    event.create("mryh:descratch")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.removeEffect("apocalypsenow:scratch")
            })
        })
    event.create("mryh:debite")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.removeEffect("apocalypsenow:bite")
            })
        })
    event.create("mryh:deradiationsickness")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.potionEffects.add("zombie_extreme:radiation_protection",)
            })
        })
    event.create("mryh:detoxicity")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.removeEffect("zombie_extreme:toxicity")
            })
        })
    event.create("mryh:degrounded")
        .food(food => {
            food.alwaysEdible() //设置为无需消耗饱食度即可使用
            food.eaten(rebuff => {
                rebuff.player.removeEffect("wegotrunnners:grounded")
            })
        })
})

