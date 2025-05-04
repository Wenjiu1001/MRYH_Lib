
// 指令创建
ServerEvents.commandRegistry(event => {
    let { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal('mryh')
            .requires(src => src.hasPermission(2)) // 确保命令执行者具有足够的权限
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
    { healthMulti: 0.5, attackMulti: 1.0, armorMulti: 1.0, speedMulti: 0.8 },// 求生
    { healthMulti: 1.0, attackMulti: 1.0, armorMulti: 1.0, speedMulti: 1.0 },// 末世
    { healthMulti: 2.0, attackMulti: 1.5, armorMulti: 2.0, speedMulti: 1.2 },// 绝境
    { healthMulti: 3.0, attackMulti: 2.0, armorMulti: 2.0, speedMulti: 1.5 } // 湮灭
];
// 原版难度
let difficultlevelMC = [
    { healthMulti: 0.5, attackMulti: 1.0, armorMulti: 1.0, speedMulti: 0.8 },// 简单
    { healthMulti: 1.0, attackMulti: 1.0, armorMulti: 1.0, speedMulti: 1.0 },// 普通
    { healthMulti: 3.0, attackMulti: 2.0, armorMulti: 2.0, speedMulti: 1.5 } // 困难
]

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
    let diffLevelMC = difficultlevelMC[e.level.difficulty.id - 1]
    let dayeffect = 1 + day / 100 * 2
    let randomfactor = 0.8 + (1.3 - 0.8) * Math.random()
    let fixedEffect = dayeffect * randomfactor
    if (diffLevel.healthMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * diffLevel.healthMulti * diffLevelMC.healthMulti * fixedEffect)
        entity.setHealth(entity.getMaxHealth())
    }
    if (diffLevel.attackMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * diffLevel.attackMulti * diffLevelMC.attackMulti * fixedEffect)
    }
    if (diffLevel.armorMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.armor')) {
        entity.setAttributeBaseValue('minecraft:generic.armor', entity.getAttribute('minecraft:generic.armor').getValue() * diffLevel.armorMulti * diffLevelMC.armorMulti * fixedEffect)
    }
    if (diffLevel.toughnessMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.movement_speed')) {
        entity.setAttributeBaseValue('minecraft:generic.movement_speed', entity.getAttribute('minecraft:generic.movement_speed').getValue() * diffLevel.toughnessMulti * diffLevelMC.speedMulti * fixedEffect)
    }
})
