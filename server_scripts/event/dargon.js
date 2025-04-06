
let dragonMovementTimer = 0; // 计时器变量

LevelEvents.tick(e => {
    e.level.entities.forEach(entity => {
        // 只处理末影龙实体
        if (entity.type !== 'minecraft:ender_dragon') return;

        // 每帧计时器递增
        dragonMovementTimer++;

        // 每 5 秒（5 * 20 ticks）触发一次
        if (dragonMovementTimer >= 5 * 20) {
            dragonMovementTimer = 0; // 重置计时器

            // 检查末影龙的 Y 轴位置
            if (entity.y > 150 || entity.y < 60) {
                entity.setPosition(entity.x, 70, entity.z);
            }
        }
    });
});
