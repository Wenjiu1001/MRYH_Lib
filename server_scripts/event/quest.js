const specifiedAdvancementIds = [
    "minecraft:survive/survive1",
    "minecraft:survive/survive10",
    "minecraft:survive/survive20",
    "minecraft:survive/survive30",
    "minecraft:survive/survive40",
    "minecraft:survive/survive50",
    "minecraft:survive/survive60",
    "minecraft:survive/survive70",
    "minecraft:survive/survive80",
    "minecraft:survive/survive90",
    "minecraft:survive/survive100"
];

PlayerEvents.advancement(event => {
    const player=event.player.name.string
    // 检查完成的成就是否在指定的数组中
    if (specifiedAdvancementIds.includes(event.advancement.id().toString())) {
        // 给玩家增加技能点
        event.server.runCommandSilent(`/puffish_skills experience add ${player} general_skills:example 60`);
        // 给玩家发送消息
        event.server.tell('你获得了6个技能点');
    }
});

ItemEvents.pickedUp(event => {
    const player=event.player.name.string
    // 检查玩家是否捡起了特定物品
    if (event.item.id === "spore:cdu") {
        // 给玩家增加游戏阶段
        event.server.runCommandSilent(`/gamephase add ${player} spore`);
        // 给玩家发送消息
        event.server.tell('你获得了spore阶段');
    }
});