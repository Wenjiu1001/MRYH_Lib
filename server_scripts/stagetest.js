


// 指令创建
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal('mryh')
            .requires(src => src.hasPermission(2)) // 确保命令执行者具有足够的权限
            .then(Commands.literal('stages')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('arg1', Arguments.NBT_COMPOUND.create(event))
                        .executes(ctx => {
                            let nbtCompound = Arguments.NBT_COMPOUND.getResult(ctx, 'arg1');
                            let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'));
                            let addStages = nbtCompound.addStages;
                            let removeStages = nbtCompound.removeStages;

                            // 清除所有现有阶段
                            player.stages.clear();

                            if (addStages) {
                                for (let i = 0; i < addStages.length; i++) {
                                    player.stages.add(addStages[i]);
                                }
                            }
                            if (removeStages) {
                                for (let i = 0; i < removeStages.length; i++) {
                                    player.stages.remove(removeStages[i]);
                                }
                            }
                            ctx.source.player.tell(`已为玩家 ${player.name} 更新阶段。`);
                            return 1;
                        })
                    )
                )
            )
            .then(Commands.literal('query')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .executes(ctx => {
                        let playerName = Arguments.PLAYER.getResult(ctx, 'player');
                        let player = ctx.source.server.getPlayer(playerName);
                        let name = ctx.source.player.name;
                        if (!player) {
                            ctx.source.player.tell(`查询不到玩家：${name}`);
                            return 0;
                        }
                        let stages = player.stages.getAll().toArray();
                        stages.sort(); // 对阶段进行排序
                        if (stages.length === 0) {
                            ctx.source.player.tell(`玩家 ${name} 没有阶段。`);
                        } else {
                            ctx.source.player.tell(`玩家 ${name} 拥有以下阶段：\n` + stages.join("，"));
                        }
                        return 1;
                    })
                )
            )
    );
    event.register(
        Commands.literal('mryh')
            .requires(src => src.hasPermission(2))
            .then(Commands.literal('difficult')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('arg1', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            let diffLevelNum = Arguments.INTEGER.getResult(ctx, 'arg1');
                            let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'))

                            let oriDiffStage = player.stages.getAll().toArray().find(ele => ele.startsWith('difficult_level_'))
                            if (oriDiffStage) {
                                player.stages.remove(oriDiffStage)
                            }
                            player.stages.add('difficult_level_' + diffLevelNum)
                            return 1
                        }
                        )
                    )
                )
            )
    )
});

// 属性变化数组
let difficultLevelDef = [
    { healthMulti: 1, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 1.2, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 1.4, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 1.6, attackMulti: 1.2, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 1.8, attackMulti: 1.2, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 2, attackMulti: 1.5, armorMulti: 1.2, toughnessMulti: 1.2 },
    { healthMulti: 2.5, attackMulti: 1.5, armorMulti: 1.2, toughnessMulti: 1.2 },
    { healthMulti: 3, attackMulti: 2, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 4, attackMulti: 2.5, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 5, attackMulti: 3, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 8, attackMulti: 3.5, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 10, attackMulti: 4, armorMulti: 3, toughnessMulti: 3 }
];

// 实体生成逻辑
EntityEvents.spawned(e => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = e.entity
    let day = Math.floor(e.level.dayTime() / 24000);
    if (!entity) return
    let player = entity.getLevel().getNearestPlayer(entity, 240)
    if (!player) return
    if (!entity.isLiving() || !(entity.isMonster())) return
    if (entity.persistentData.contains('diffLevel')) return
    let diffStage = player.stages.getAll().toArray().find(ele => ele.startsWith('difficult_level_'));
    if (!diffStage) {
        entity.persistentData.putInt('diffLevel', 1)
        return
    }
    let diffLevelNum = diffStage.match('difficult_level_(\\d+)')[1]
    let diffLevel = difficultLevelDef[diffLevelNum - 1]
    entity.persistentData.putInt('diffLevel', diffLevelNum)
    let dayeffect = 1 + day / 100 * 2
    let randomfactor = 0.8 + (1.3 - 0.8) * Math.random()
    let fixedEffect = dayeffect * randomfactor
    if (diffLevel.healthMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * diffLevel.healthMulti * fixedEffect)
        entity.setHealth(entity.getMaxHealth())
    }
    if (diffLevel.attackMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * diffLevel.attackMulti * fixedEffect)
    }
    if (diffLevel.armorMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.armor')) {
        entity.setAttributeBaseValue('minecraft:generic.armor', entity.getAttribute('minecraft:generic.armor').getValue() * diffLevel.armorMulti * fixedEffect)
    }
    if (diffLevel.toughnessMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.armor_toughness')) {
        entity.setAttributeBaseValue('minecraft:generic.armor_toughness', entity.getAttribute('minecraft:generic.armor_toughness').getValue() * diffLevel.toughnessMulti * fixedEffect)
    }
})
