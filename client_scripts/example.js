let $Color = Java.loadClass("java.awt.Color")

function rgbaColor(R, G, B, A) { return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB() }

let bleedcount=0

NetworkEvents.dataReceived('mryh:bleedcount', event => {
    const data = event.data;
    bleedcount = data.getInt('bleedcount');
});

/*
RenderJSEvents.AddGuiRender(e => {
    e.addRender(c => {
        var x = c.window.guiScaledWidth / 2;
        var y = c.window.guiScaledHeight / 2;
        c.guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, `${bleedcount}`, // 字体与渲染字符
            x, y, // 渲染位置
            rgbaColor(255, 0, 255, 50), // RGBA
            true // 是否绘制文字阴影
        )
    })
})
    */
