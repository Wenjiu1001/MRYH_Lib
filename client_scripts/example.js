let $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem")
let $Color = Java.loadClass("java.awt.Color")

function rgbaColor(R, G, B, A) {
    return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB();
}

let bleedcount = 0;
let infectioncount = 0

NetworkEvents.dataReceived('mryh:infectioncount', event => {
    const data = event.data;
    infectioncount = data.getInt('infectioncount');
});

NetworkEvents.dataReceived('mryh:bleedcount', event => {
    const data = event.data;
    bleedcount = data.getInt('bleedcount');
});
/*
RenderJSEvents.AddGuiRender(e => {
    e.addRender(c => {
        var x = c.window.guiScaledWidth / 8;
        var y = c.window.guiScaledHeight / 9.5;
        let displayinfection;
        if (infectioncount === 0) {
            displayinfection = "当前无感染";
        } else if (infectioncount < 100) {
            displayinfection = "感染进度" + infectioncount + "%";
        } else {
            displayinfection = "已感染";
        }
        c.guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, displayinfection, // 字体与渲染字符
            x, y, // 渲染位置
            rgbaColor(255, 0, 255, 50), // RGBA
            true // 是否绘制文字阴影
        );
    });
    e.addRender(c => {
        var x = c.window.guiScaledWidth / 8;
        var y = c.window.guiScaledHeight / 6.5;
        let displaybleed;
        if (bleedcount === 0) {
            displaybleed = "当前无流血";
        } else if (bleedcount < 100) {
            displaybleed = "流血程度" + bleedcount + "%";
        } else {
            displaybleed = "已严重流血";
        }
        c.guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, displaybleed, // 字体与渲染字符
            x, y, // 渲染位置
            rgbaColor(255, 0, 255, 50), // RGBA
            true // 是否绘制文字阴影
        );
    });
});
*/


RenderJSEvents.AddGuiRender(e=>{
    e.addRender(c=>{
        var x = c.window.guiScaledWidth / 8;
        var y = c.window.guiScaledHeight / 9.2;
        let infection=infectioncount*(12/100)
        c.guiGraphics.blit(
            ResourceLocation('mryh:textures/gui/infection2.png'), //资源路径
            x, y, //渲染左上角的坐标
            0,//深度/优先级
            0, 0, //材质裁剪开始位置
            12, 12, //显示大小
            12, 12//设置材质大小
        )
        c.guiGraphics.blit(
            ResourceLocation('mryh:textures/gui/infection1.png'), //资源路径
            x,y, //渲染左上角的坐标
            0,//深度/优先级
            0, 0, //材质裁剪开始位置
            infection, 12, //显示大小
            12, 12//设置材质大小
        )
    })
    e.addRender(c=>{
        var x = c.window.guiScaledWidth / 6;
        var y = c.window.guiScaledHeight / 9.2;
        let bleed=bleedcount*(12/100)
        c.guiGraphics.blit(
            ResourceLocation('mryh:textures/gui/bleed1.png'), //资源路径
            x, y, //渲染左上角的坐标
            0,//深度/优先级
            0, 0, //材质裁剪开始位置
            12, 12, //显示大小
            12, 12//设置材质大小
        )
        c.guiGraphics.blit(
            ResourceLocation('mryh:textures/gui/bleed2.png'), //资源路径
            x,y, //渲染左上角的坐标
            0,//深度/优先级
            0, 0, //材质裁剪开始位置
            12, bleed, //显示大小
            12, 12//设置材质大小
        )
    })
})
