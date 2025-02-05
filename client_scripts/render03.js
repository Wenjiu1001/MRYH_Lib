
let $GuiGraphics=Java.loadClass('net.minecraft.client.gui.GuiGraphics')
let $RenderLivingEvent=Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent')
let $AttackEntityEvent=Java.loadClass('net.minecraftforge.event.entity.player.AttackEntityEvent')

let barLink = {};

NativeEvents.onEvent($RenderLivingEvent, e => {
    let { poseStack, entity, multiBuffersource } = e;
    if (!(entity instanceof $LivingEntity)) return;  // 修正 instanceof 检查
    let GuiGraphics = new $GuiGraphics(Client, poseStack, multiBuffersource);
    let hurt_time = entity.persistentData.hurt_time || 20 * 10;
    let level_time = Client.level_time;
    
    if (level_time - hurt_time > 20 * 10) return;
    
    poseStack.pushPose();
    poseStack.translate(0, entity.eyeHeight, 0);  // 修正可能的拼写错误 eyelright -> eyeHeight
    poseStack.rotateY(-Client.player.yRot);
    poseStack.rotateZ(180);
    
    // 添加大括号明确条件作用域
    if (level_time - hurt_time > 20 * 6) {
        poseStack.scale(1 - (level_time - hurt_time - 20 * 6) / (20 * 4), 1, 1);
    }
    
    poseStack.scale(0.02, 0.02, 0.02);
    
    // 血条逻辑
    let bar1 = 88;
    if (barLink[entity.uuid] < 0) {
        delete barLink[entity.uuid];
    }
    if (barLink[entity.uuid] !== undefined) {
        barLink[entity.uuid] -= 0.0003;
    }
    let bar2 = bar1 * (barLink[entity.uuid] || 0);
    
    // 实际血量计算
    let bar3 = bar1 * entity.health / entity.maxHealth;
    if (bar2 < bar3) bar2 = bar3;
    
    // 绘制血条（假设 rgbaColor 已定义）
    GuiGraphics.fill(bar2, -30, bar1, -35, rgbaColor(114, 114, 114, 100));  // 灰色背景
    GuiGraphics.fill(-bar1, -30, -bar2, -35, rgbaColor(114, 114, 114, 100));
    GuiGraphics.fill(bar3, -30, bar2, -35, rgbaColor(200, 200, 200, 100));  // 过渡动画
    GuiGraphics.fill(-bar2, -30, -bar3, -35, rgbaColor(200, 200, 200, 100));
    GuiGraphics.fill(-bar3, -30, bar3, -35, rgbaColor(255, 0, 0, 100));     // 当前血量
    
    poseStack.popPose();
});

NativeEvents.onEvent($AttackEntityEvent, e => {
    let { target } = e;
    target.persistentData.hurt_time = Client.level.time;  // 统一使用 level.time
    barLink[target.uuid] = target.health / target.maxHealth;
});
