
let $GuiGraphics = Java.loadClass('net.minecraft.client.gui.GuiGraphics')
let $RenderLivingEvent$Post = Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent$Post')
let $AttackEntityEvent = Java.loadClass('net.minecraftforge.event.entity.player.AttackEntityEvent')
let $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
let $LivingHurtEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHurtEvent')

let barLink = {}
let hurtTimeLink = {}
NativeEvents.onEvent($RenderLivingEvent$Post, e => {
    let { poseStack, entity, multiBufferSource} = e
    if (!entity instanceof $LivingEntity) return
    let hurt_time = hurtTimeLink[entity.uuid] || 20 * 10
    let level_time = Client.level.time
    if (level_time - hurt_time > 20 * 10) {//在1攻击0秒后不进行渲染
        delete hurtTimeLink[entity.uuid]
        return
        }

    let GuiGraphics = new $GuiGraphics(Client, poseStack, multiBufferSource)
    poseStack.pushPose()
    poseStack.translate(0, entity.eyeHeight, 0)
    poseStack.rotateY(-Client.player.yRotO)
    poseStack.rotateZ(180)
    poseStack.scale(0.02, 0.02, 0.02)
    if (level_time - hurt_time > 20 * 6)//在6秒后的4秒内缩小血条到消失
        poseStack.scale(1 - (level_time - hurt_time - 20 * 6) / (20 * 4), 1, 1)

    //血条底色
    let bar1 = 88 * Math.log(40 + entity.health) / 10
    //临时血条
    if (barLink[entity.uuid] < 0)
        delete barLink[entity.uuid]
    if (barLink[entity.uuid] != undefined)
        barLink[entity.uuid] -= 0.0003
    let bar2 = bar1 * barLink[entity.uuid] || 0
    //真血条
    let bar3 = bar1 * entity.health / entity.maxHealth
    if (bar2 < bar3) bar2 = bar3

    GuiGraphics.fill(bar2, -30, bar1, -35, rgbaColor(114, 114, 114, 100))
    GuiGraphics.fill(-bar1, -30, -bar2, -35, rgbaColor(114, 114, 114, 100))
    GuiGraphics.fill(bar3, -30, bar2, -35, rgbaColor(200, 200, 200, 100))
    GuiGraphics.fill(-bar2, -30, -bar3, -35, rgbaColor(200, 200, 200, 100))
    GuiGraphics.fill(-bar3, -30, bar3, -35, rgbaColor(255, 0, 0, 100))

    poseStack.popPose()
})
NativeEvents.onEvent($LivingHurtEvent,e=>{
    if(e.source.immediate.player||e.source.player){
    hurtTimeLink[e.entity.uuid] = Client.level.time
    barLink[e.entity.uuid] = e.entity.health / e.entity.maxHealth
}
})
