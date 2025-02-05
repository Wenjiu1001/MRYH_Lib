let   让 $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem")
let   让 $Color = Java.loadClass("java.awt.Color")

function   函数 rgbaColor(R, G, B, A) {
    return   返回 new   新 $Color   美元的颜色(R / 255, G / 255, B / 255, A / 100).getRGB();
}

let   让 bleedcount = 0;
let   让 infectioncount = 0

NetworkEvents.dataReceived('mryh:infectioncount', event   事件 => {
    const   常量 data = event.data   数据;
    infectioncount = data.getInt('infectioncount');
});

NetworkEvents.dataReceived('mryh:bleedcount'   “mryh: bleedcount”, event   事件 => {
    const   常量 data = event.data   数据;
    bleedcount = data.getInt('bleedcount'   “bleedcount”);
});
/*
RenderJSEvents.AddGuiRender(e => {RenderJSEvents。AddGuiRender（e => {）
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
        c.guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](c.guiGraphics['拉带(net.minecraft.client.gui.Font、以浮动、浮点数、整数、boolean)”)(
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
        c.guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](c.guiGraphics['拉带(net.minecraft.client.gui.Font、以浮动、浮点数、整数、boolean)”)(
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
