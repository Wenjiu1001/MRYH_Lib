StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_01")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.effect("minecraft:luck",20*9999,0,1)
            foodBuilder.effect("minecraft:speed",20*9999,0,1)
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give("64x minecraft:bread")
                    player.give('32x minecraft:melon_slice')
                    player.give('2x scalinghealth:heart_crystal')
                    player.give('apocalypsenow:survival_knife')
                    player.give('sophisticatedbackpacks:backpack')
                    player.give(Item.of('tacz:ammo', 120, '{AmmoId:"tacz:45acp"}'))
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:12,GunFireMode:"SEMI",GunId:"mpworld:qs38",HasBulletInBarrel:1b}'))
                    player.give('apocalypsenow:police_helmet')
                    player.give('apocalypsenow:police_chestplate')
                    player.give('apocalypsenow:police_leggings')
                    player.give('apocalypsenow:police_boots')
                }
            })
        })
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_02")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.effect("minecraft:resistance",20*9999,0,1)
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give("3x minecraft:bread")
                    player.give('6x minecraft:melon_slice')
                    player.give('scalinghealth:heart_crystal')
                    player.give('sophisticatedbackpacks:copper_backpack')
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}'))
                    player.give(Item.of('tacz:ammo', 480, '{AmmoId:"tacz:762x39"}'))
                    player.give('apocalypsenow:u_sarmy_helmet')
                    player.give('apocalypsenow:u_sarmy_chestplate')
                    player.give('apocalypsenow:u_sarmy_leggings')
                    player.give('apocalypsenow:u_sarmy_boots')
                    player.give(Item.of('minecraft:potion', '{Potion:"minecraft:long_swiftness"}'))
                    player.give(Item.of('minecraft:potion', '{Potion:"goblintraders:extended_invisibility"}'))
                }
            })
        })
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_03")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give('apocalypsenow:fire_figther_helmet')
                    player.give('apocalypsenow:fire_figther_chestplate')
                    player.give('apocalypsenow:fire_figther_leggings')
                    player.give('apocalypsenow:fire_figther_boots')
                    player.give('apocalypsenow:fire_axe')
                    player.give(Item.of('minecraft:potion', 64, '{Potion:"minecraft:water",Purity:3}'))
                    player.give('artifacts:eternal_steak')
                    player.give('4x scalinghealth:heart_crystal')
                    player.give('sophisticatedbackpacks:gold_backpack')
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:2,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}'))
                    player.give(Item.of('tacz:ammo', 36, '{AmmoId:"tacz:12g"}'))
                    player.give(Item.of('zombiekit:netherite_crowbar', '{Damage:0}'))
                }
            })
        })
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_04")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.effect("minecraft:luck",20*9999,1,1)
            foodBuilder.effect("minecraft:speed",20*9999,0,1)
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give('sophisticatedbackpacks:diamond_backpack')
                    player.give('cookingforblockheads:cow_jar')
                    player.give('immersive_aircraft:airship')
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"tacz:deagle",HasBulletInBarrel:1b}'))
                    player.give(Item.of('tacz:ammo', 48, '{AmmoId:"tacz:50ae"}'))
                    player.give('16x farmersdelight:honey_glazed_ham')
                    player.give('64x farmersdelight:melon_popsicle')
                    player.give('4x minecraft:golden_apple')
                    player.give('16x minecraft:golden_carrot')
                }
            })
        })
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_05")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.effect("minecraft:health_boost",20*9999,2,1)
            foodBuilder.effect("minecraft:speed",20*9999,0,1)
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"SEMI",GunId:"tacz:deagle_golden",HasBulletInBarrel:1b}'))
                    player.give(Item.of('tacz:ammo', 48, '{AmmoId:"tacz:357mag"}'))
                    player.give('3x minecraft:enchanted_golden_apple')
                    player.give('16x minecraft:golden_apple')
                    player.give('32x minecraft:golden_carrot')
                    player.give(Item.of('minecraft:potion', 32, '{Potion:"minecraft:water",Purity:3}'))
                    player.give('scalinghealth:power_crystal')
                    player.give('3x scalinghealth:heart_crystal')
                    player.give('sophisticatedbackpacks:backpack')
                    player.give('8x apocalypsenow:antibiotics')
                    player.give('8x zombiekit:miracle')
                    player.give(Item.of('minecraft:splash_potion', 16, '{Potion:"minecraft:strong_healing"}'))
                }
            })
        })
})

StartupEvents.registry("item",event=>{
    event.create("jiuhu:now_06")
        .food(foodBuilder=>{
            foodBuilder.hunger(198)
            foodBuilder.saturation(0.5)
            foodBuilder.alwaysEdible()
            foodBuilder.fastToEat()
            foodBuilder.effect("minecraft:luck",20*9999,0,1)
            foodBuilder.eaten(foodEaten=>{
                /**
                 * @type {$player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null){
                    player.give(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:19,GunFireMode:"AUTO",GunId:"tacz:vector45",HasBulletInBarrel:1b}'))
                    player.give(Item.of('tacz:ammo_box', 2,'{AmmoCount:360,AmmoId:"tacz:45acp",Level:1}'))
                    player.give('2x scalinghealth:heart_crystal')
                    player.give('zombie_extreme:magnetic_card')
                    player.give('zombie_extreme:black_ops_magnetic_card')
                    player.give('32x minecraft:bread')
                    player.give(Item.of('minecraft:potion', 8, '{Potion:"minecraft:water",Purity:3}'))
                    player.give('6x scalinghealth:heart_crystal')
                    player.give('2x scalinghealth:power_crystal')
                }
            })
        })
})