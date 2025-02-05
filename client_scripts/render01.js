let $RenderGuiEvent$Post = Java.loadClass('net.minecraftforge.client.event.RenderGuiEvent$Post');
let $GLFW = Java.loadClass('org.lwjgl.glfw.GLFW');
let $Color = Java.loadClass('java.awt.Color');
let $Minecraft = Java.loadClass('net.minecraft.client.Minecraft');

let minecraft = $Minecraft.getInstance();
let COLORS = {
    BACKGROUND: rgbaColor(255, 255, 255, 30), // 默认背景颜色
    PRESSED: rgbaColor(114, 114, 114, 60)     // 按下时的默认颜色（未使用）
};

let KEYS = [
    { key: 'KEY_W', display: 'W', x: 0, y: 0, color: null }, // 添加 color 字段
    { key: 'KEY_A', display: 'A', x: -25, y: 25, color: null },
    { key: 'KEY_S', display: 'S', x: 0, y: 25, color: null },
    { key: 'KEY_D', display: 'D', x: 25, y: 25, color: null }
];

NativeEvents.onEvent($RenderGuiEvent$Post, e => {
    let guiGraphics = e.guiGraphics;
    let poseStack = guiGraphics.pose();
    poseStack.pushPose();

    // 动态计算位置：左侧，偏移50像素
    let windowHeight = minecraft.getWindow().getGuiScaledHeight();
    poseStack.translate(50, windowHeight / 4 + 100, 100); // X=50，Y根据窗口高度动态计算

    KEYS.forEach(config => {
        KeyRender(guiGraphics, poseStack, config, config.x, config.y, config.display);
    });

    poseStack.popPose();
});

function KeyRender(guiGraphics, poseStack, keyConfig, x, y, displayKey) {
    // 检测按键状态
    let isKeyDown = keyConfig.key.startsWith('KEY_') && Client.isKeyDown($GLFW[`GLFW_${keyConfig.key}`]);
    let isMousePressed = keyConfig.key.endsWith('Pressed') && Client.mouseHandler[keyConfig.key];

    // 如果按键被按下，生成随机颜色
    if (isKeyDown || isMousePressed) {
        if (!keyConfig.color) { // 避免重复生成
            keyConfig.color = generateRandomColor();
        }
    } else {
        keyConfig.color = null; // 松开时重置颜色
    }

    // 绘制背景（使用颜色或默认背景）
    let bgColor = keyConfig.color || COLORS.BACKGROUND;
    guiGraphics.fill(x, y, x + 20, y + 20, bgColor);

    // 绘制标签
    poseStack.translate(0, 0, 1);
    guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
        minecraft.font, displayKey,
        x + 10 - minecraft.font.width(displayKey) / 2, y + 6,
        -1, false
    );
    poseStack.translate(0, 0, -1);
}

// 生成随机颜色的函数
function generateRandomColor() {
    let R = Math.floor(Math.random() * 255); // 随机红色分量
    let G = Math.floor(Math.random() * 255); // 随机绿色分量
    let B = Math.floor(Math.random() * 255); // 随机蓝色分量
    return rgbaColor(R, G, B, 60); // 透明度固定为60
}

// 将RGBA值转换为颜色整数
function rgbaColor(R, G, B, A) {
    return new $Color(
        checkNumberRange(R / 255, 0, 1),
        checkNumberRange(G / 255, 0, 1),
        checkNumberRange(B / 255, 0, 1),
        checkNumberRange(A / 100, 0, 1)
    ).getRGB();
}

// 确保数值在指定范围内
function checkNumberRange(number, min, max) {
    min = min !== undefined ? min : 0;
    max = max !== undefined ? max : 1;
    return Math.min(Math.max(number, min), max);
}




/*
NativeEvents.onEvent($RenderGuiEvent$Post, e => {
    let thisGuiGraphics = e.guiGraphics
    let thisPoseStack = thisGuiGraphics.pose()
    thisPoseStack.pushPose()
    thisPoseStack.scale
    thisPoseStack.translate(50, Client.window.height / 4 - 90, 1000)
    let KeyRender = (/**@type {String} *key, x, y, displayKey) => {
        displayKey = displayKey || key
        thisGuiGraphics.fill(x, y, x + 20, y + 20, rgbaColor(255, 255, 255, 30))
        thisPoseStack.translate(0, 0, 1)
        thisGuiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
            Client.font, displayKey,//字体与渲染字符
            x + 10 - Client.font.width(displayKey) / 2, y + 6,//渲染位置
            -1,//RGBA
            false//是否绘制文字阴影
        )
        thisPoseStack.translate(0, 0, -1)
        if (key.indexOf('KEY_') != -1 && Client.isKeyDown($GLFW[`GLFW_${key}`]))
            thisGuiGraphics.fill(x, y, x + 20, y + 20, rgbaColor(114, 114, 114, 60))
        if (key.indexOf('Pressed') != -1 && Client.mouseHandler[key])
            thisGuiGraphics.fill(x, y, x + 20, y + 20, rgbaColor(114, 114, 114, 60))
    }
    
    KeyRender('leftPressed', -25, -25,'L')
    KeyRender('middlePressed', 0, -25,'M')
    KeyRender('rightPressed', 25, -25,'R')
    KeyRender('KEY_W', 0, 0,'W')
    KeyRender('KEY_A', -25, 25,'A')
    KeyRender('KEY_S', 0, 25,'S')
    KeyRender('KEY_D', 25, 25,'D')
    thisPoseStack.popPose()
})
*/