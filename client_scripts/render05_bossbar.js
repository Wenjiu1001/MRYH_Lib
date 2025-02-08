
let $LivingDamageEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDamageEvent')
let $LivingHealEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingHealEvent')
let $CustomizeGuiOverlayEvent$BossEventProgress = Java.loadClass('net.minecraftforge.client.event.CustomizeGuiOverlayEvent$BossEventProgress')
let $LivingDeathEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingDeathEvent');


//=============================
//BossBar渲染
//=============================
let BossBarLink = { uuid: '', health: 1, bar: 1 }
let BossBarChage = []
let barWidht = 10000
NativeEvents.onEvent($LivingDamageEvent, e => {
    let { source: { actual, immediate }, entity, amount } = e
    if ((actual && actual.isPlayer()) || (immediate && immediate.isPlayer())) {
        if ((actual && actual.username == Client.player.username) || (immediate && immediate.username == Client.player.username)) {
            let health = (entity.health - amount) / entity.maxHealth
            BossBarLink.health = health < 0 ? 0 : health
            BossBarChage.push({ type: 'D', amount: amount.toFixed(2), time: 120, x: BossBarLink.health })
            if (BossBarLink.uuid != entity.uuid) {
                BossBarLink.bar = BossBarLink.health
                BossBarLink.uuid = entity.uuid
            }
        }
    }
})
NativeEvents.onEvent($LivingHealEvent, e => {
    let { entity,amount } = e
    if (entity.uuid == BossBarLink.uuid) {
        let health = (entity.health + amount) / entity.maxHealth
        BossBarLink.health = health > 1 ? 1 : health
        BossBarChage.push({type:'H',amount:amount.toFixed(2),time:120,x:BossBarLink.health})
    }
})
NativeEvents.onEvent($LivingDeathEvent, e => {
    let { entity } = e;
    if (entity.uuid == BossBarLink.uuid) {
        BossBarLink = { uuid: '', health: 1, bar: 1 }
    }
});
NativeEvents.onEvent($RenderGuiEvent$Post, e => {
    if (!BossBarLink.uuid) return
    let { guiGraphics } = e
    /**@type {$PoseStack_} */
    let poseStack = guiGraphics.pose()
    poseStack.pushPose()
    poseStack.translate(Client.window.guiScaledWidth / 2, 10, 0)
    //灰条
    guiGraphics.fill(-1 - barWidht / 100, 9, 1 + barWidht / 100, 16, rgbaColor(114, 114, 114, 100))
    //进行缩放用来获得更流畅的动画
    poseStack.scale(0.02, 1, 1)
    poseStack.translate(-barWidht / 2, 0, 0)
    //白条 绿条
    {
        poseStack.pushPose()
        poseStack.translate(BossBarLink.health * barWidht, 0, 1)
        if (BossBarLink.health < BossBarLink.bar) {
            BossBarLink.bar -= 0.001
            if (BossBarLink.bar < BossBarLink.health) BossBarLink.bar = BossBarLink.health
            guiGraphics.fill(0, 10, (-BossBarLink.health + BossBarLink.bar) * barWidht, 15, rgbaColors(255, 255, 255, 100))
        }
        if (BossBarLink.health > BossBarLink.bar) {
            BossBarLink.bar += 0.0001
            if (BossBarLink.bar > BossBarLink.health) BossBarLink.bar = BossBarLink.health
            guiGraphics.fill(0, 10, (-BossBarLink.health + BossBarLink.bar) * barWidht, 15, rgbaColors(0, 255, 0, 100))
        }
        poseStack.popPose()
    }
//红条
    guiGraphics.fill(0, 10, BossBarLink.health * barWidht, 15, rgbaColors(243,12,65,100))
    BossBarChage.forEach((v,i)=>{
        poseStack.pushPose()
        poseStack.scale(1/0.02, 1, 1)
        if(v.type=='D')
        guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, '-'+v.amount,
            v.x*barWidht / 50-Client.font.width('-'+v.amount)/2, 18-v.time/60,
            rgbaColor(235,16,32,v.time*1),
            false
        )
        if(v.type=='H')
            guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
                Client.font, '+'+v.amount,
                v.x*barWidht / 50-Client.font.width('+'+v.amount)/2, 0+v.time/60,
                rgbaColor(50,214,32,v.time*1),
                false
            )
        if(BossBarChage[i].time--<0)
            BossBarChage.shift()
        poseStack.popPose()
    })
    poseStack.popPose()
})

function rgbaColors(R, G, B, A) {
    return new $Color(checkNumberRange(R / 255), checkNumberRange(G / 255), checkNumberRange(B / 255), checkNumberRange(A / 100)).getRGB()
}