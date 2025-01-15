/*
PlayerEvents.respawned((event) => {
    event.player.potionEffects.add('minecraft:weakness', 600, 0, false, false);
})
    */


PlayerEvents.respawned((event) => {
    // 定义一个包含效果的数组
    const effectsIds = [
        'minecraft:weakness',
        'minecraft:slowness', 
        'minecraft:hunger',
        'minecraft:mining_fatigue',
        'minecraft:glowing',
        'cgm:deafened',
        'undead_revamp2:flyingsppedup',
        'spore:uneasy',
        'spore:starvation',
    ];

    // 定义一个包含效果持续时间的数组
    const effectsDurations = [
        200, 400, 600,
    ];

    // 定义一个包含效果等级的数组
    const effectsAmplifiers = [
        0, 1, 2,
    ];

    // 随机选择两个不同的效果ID
    const randomEffectId1 = effectsIds[Math.floor(Math.random() * effectsIds.length)];
    const randomEffectId2 = effectsIds.find(id => id !== randomEffectId1 && Math.random() > 0.5) || effectsIds[Math.floor(Math.random() * effectsIds.length)];

    // 随机选择两个效果的持续时间和等级
    const randomDuration1 = effectsDurations[Math.floor(Math.random() * effectsDurations.length)];
    const randomDuration2 = effectsDurations[Math.floor(Math.random() * effectsDurations.length)];
    const randomAmplifier1 = effectsAmplifiers[Math.floor(Math.random() * effectsAmplifiers.length)];
    const randomAmplifier2 = effectsAmplifiers[Math.floor(Math.random() * effectsAmplifiers.length)];

    // 给予玩家两个随机选择的效果
    event.player.potionEffects.add(randomEffectId1, randomDuration1, randomAmplifier1, false, false);
    event.player.potionEffects.add(randomEffectId2, randomDuration2, randomAmplifier2, false, false);
});
