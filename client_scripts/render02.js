let $ScreenEvent$Render$Post = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Render$Post')
let $ScreenEvent$Init$Post = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Init$Post')
let $Button = Java.loadClass('net.minecraft.client.gui.components.Button')
let $LecternScreen = Java.loadClass('net.minecraft.client.gui.screens.inventory.LecternScreen')
let $InventoryScreen = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen')
let $ScreenEvent$Render$Pre = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Render$Pre')

let SlotRenderIndex = 0
/** @type {Array<{"mainhand": Special.Item, "head": Special.Item, "feet": Special.Item, "chest": Special.Item, "legs": Special.Item, "offhand": Special.Item}>} */
let SlotRenderList = [
    { "chest": 'minecraft:golden_chestplate', 'mainhand': 'minecraft:trident' },
    { "chest": 'minecraft:diamond_chestplate' },
    { "chest": 'apocalypsenow:biohazard_chestplate', 'mainhand': 'minecraft:crossbow' }
]
let ItemInSlot = { "mainhand": '', "head": '', "feet": '', "chest": '', "legs": '', "offhand": '' }

// 屏幕渲染前事件（设置背景）
NativeEvents.onEvent($ScreenEvent$Render$Pre, e => {
    if (e.screen instanceof $LecternScreen && Client.player.containerMenu.containerId == 101) {
        e.screen.resize(Client, -200, 0)
        e.guiGraphics.fill(0, 0, Client.window.guiScaledWidth, Client.window.guiScaledHeight, rgbaColors(0, 0, 0, 35))
    }
})

// 屏幕渲染后事件（绘制玩家模型/文本）
NativeEvents.onEvent($ScreenEvent$Render$Post, e => {
    let { screen, guiGraphics, mouseX, mouseY } = e
    if (screen instanceof $LecternScreen && Client.player.containerMenu.containerId == 101) {
        let playerX = Client.window.guiScaledWidth / 2
        let playerY = 200
        let playerSize = 40
        let player = Client.player

        // 临时更换玩家装备用于展示
        for (let key in ItemInSlot) {
            ItemInSlot[key] = player.getItemBySlot(key)
            if (SlotRenderList[SlotRenderIndex][key] == undefined)
                player.setItemSlot(key, 'air')
            else
                player.setItemSlot(key, SlotRenderList[SlotRenderIndex][key])
        }

        // 渲染玩家模型
        $InventoryScreen.renderEntityInInventoryFollowsMouse(
            guiGraphics,
            playerX, playerY,
            playerSize,
            playerX - mouseX, playerY - playerSize * 2 * 0.8 - mouseY,
            player
        )

        let drawString = (text, x, y, shadow, color) => {
            guiGraphics['drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)'](
                Client.font, text, // 字体与渲染字符
                x, y, // 渲染位置
                color || -1, // RGBA
                shadow || false // 是否绘制文字阴影
            )
        }
        drawString(`生命值:★★★☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 50)
        drawString(`攻击值:★★☆☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 34)
        drawString(`防御值:☆☆☆☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 18)
        drawString(`韧性值:★☆☆☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 2)
        drawString(`生命值:${player.maxHealth}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 50)
        drawString(`攻击值:${player.getAttributeValue('generic.attack_damage')}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 34)
        drawString(`防御值:${player.getAttributeValue('generic.armor')}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 18)
        drawString(`韧性值:${player.getAttributeValue('generic.armor_toughness')}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 2)
        // 还原玩家装备
        for (let key in ItemInSlot) {
            player.setItemSlot(key, ItemInSlot[key])
        }
    }
})

// 屏幕初始化事件（添加按钮）
NativeEvents.onEvent($ScreenEvent$Init$Post, e => {
    if (e.screen instanceof $LecternScreen && Client.player.containerMenu.containerId == 101) {
        // 清除原有控件
        e.getListenersList().toArray().forEach(v => e.removeListener(v))

        // 计算中心坐标
        let W = Client.window.guiScaledWidth / 2
        let H = Client.window.guiScaledHeight / 2

        // 按钮创建方法
        let addCommonWidget = (text, x, y, w, h, action) => {
            e.screen.addRenderableWidget(
                $Button.builder(Component.of(text), action)
                    .bounds(x, y, w, h)
                    .build()
            )
        }

        // 添加操作按钮
        addCommonWidget('退出', W - 25, H + 66, 50, 20, () => Client.screen.onClose())
        addCommonWidget('<', W - 88, H + 66, 25, 20, () => {
            SlotRenderIndex = (SlotRenderIndex - 1 + SlotRenderList.length) % SlotRenderList.length
        })
        addCommonWidget('>', W + 63, H + 66, 25, 20, () => {
            SlotRenderIndex = (SlotRenderIndex + 1) % SlotRenderList.length
        })

        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 16, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 16 + 16, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 16 + 16 + 16, 16, 16, () => { })
    }
})

// RGBA颜色转换工具
function rgbaColors(R, G, B, A) {
    return new $Color(R / 255, G / 255, B / 255, A / 100).getRGB()
}



/*
let $ScreenEvent$Render$Post = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Render$Post')
let $ScreenEvent$Init$Post = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Init$Post')
let $Button = Java.loadClass('net.minecraft.client.gui.components.Button')
let $LecternScreen = Java.loadClass('net.minecraft.client.gui.screens.inventory.LecternScreen')
let $InventoryScreen = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen')
let $ScreenEvent$Render$Pre = Java.loadClass('net.minecraftforge.client.event.ScreenEvent$Render$Pre')

let SlotRenderIndex = 0
/** @type {Array<{"mainhand": Special.Item, "head": Special.Item, "feet": Special.Item, "chest": Special.Item, "legs": Special.Item, "offhand": Special.Item}>} *
let SlotRenderList = [
    { "chest": 'minecraft:golden_chestplate', 'mainhand': 'minecraft:trident' },
    { "chest": 'minecraft:diamond_chestplate' },
    { "chest": 'apocalypsenow:biohazard_chestplate', 'mainhand': 'minecraft:crossbow' }
]
let ItemInSlot = { "mainhand": '', "head": '', "feet": '', "chest": '', "legs": '', "offhand": '' }

NativeEvents.onEvent($ScreenEvent$Render$Pre, e => {
    if (e.screen instanceof $LecternScreen && Client.player.containerMenu.containerId == 101) {
        e.screen.resize(Client, -200, 0)
        e.guiGraphics.fill(0, 0, Client.window.guiScaledWidth, Client.window.guiScaledHeight, rgbaColors(0, 0, 0, 35))
    }
})

NativeEvents.onEvent($ScreenEvent$Render$Post, e => {
    let { screen, guiGraphics, mouseX, mouseY } = e
    if (screen instanceof $LecternScreen && Client.player.containerMenu.containerId == 101) {
        let playerX = Client.window.guiScaledWidth / 2
        let playerY = 200
        let playerSize = 40
        let player = Client.player
        for (let key in ItemInSlot) {
            ItemInSlot[key] = player.getItemBySlot(key)
            if (SlotRenderList[SlotRenderIndex][key] == undefined)
                player.setItemSlot(key, 'air')
            else
                player.setItemSlot(key, SlotRenderList[SlotRenderIndex][key])
        }
        $InventoryScreen.renderEntityInInventoryFollowsMouse(
            guiGraphics,
            playerX, playerY, //模型中下
            playerSize, //模型大小
            playerX - mouseX, playerY - playerSize * 2 * 0.8 - mouseY, //鼠标坐标
            player
        )
        let drawString = (text, x, y, shadow, color) => {
            guiGraphics['drawString(net.minecraft.client.gui.Font, java.lang.String, float, float, int, boolean)'](
                Client.font, text, // 字体与渲染字符
                x, y, // 渲染位置
                color || -1, // RGBA
                shadow || false // 是否绘制文字阴影
            )
        }

        drawString(`生命值:★★★☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 50)
        drawString(`攻击值:★★★★★`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 50 + 8 + 8)
        drawString(`防御值:★★☆☆☆`, Client.window.guiScaledWidth / 2 + 50, Client.window.guiScaledHeight / 2 - 50 + 8 + 8 + 8 + 8)
        drawString(`生命值:${Client.player.maxHealth}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 50)
        drawString(`攻击值:${Client.player.getAttributeValue('generic.attack_damage')}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 50 + 8 + 8)
        drawString(`防御值:${Client.player.getAttributeValue('generic.armor') + (Client.player.getAttributeValue('generic.armor_toughness'))}`, Client.window.guiScaledWidth / 2 - 90, Client.window.guiScaledHeight / 2 - 50 + 8 + 8 + 8 + 8)
        for (let key in ItemInSlot) {
            player.setItemSlot(key, ItemInSlot[key])
        }
    }
})

NativeEvents.onEvent($ScreenEvent$Init$Post, e => {
    if (e.screen instanceof ScreenerScreen && Client.player.containerMenu.containerId == 101) {
        e.getListenersList().toArray().forEach(v => {
            e.removeListener(v)
        })
        let W = Client.window.guiScaledWidth / 2
        let H = Client.window.guiScaledHeight / 2
        let addCommonWidget = (Text, X, Y, SizeX, SizeY, Action) => {
            e.screen.addRenderableWidget(
                $Button.builder(Text, Action)
                    .bounds(X, Y, SizeX, SizeY)
                    .build()
            )
        }
        addCommonWidget(Component.of('退出'), W - 25, H + 66, 50, 20, () => Client.screen.onClose())
        addCommonWidget(Component.of('<'), W - 25 / 2 - 88, H + 66, 25, 20, () => {
            if (--SlotRenderIndex < 0)
                SlotRenderIndex = SlotRenderList.length - 1
        })
        addCommonWidget(Component.of('>'), W - 25 / 2 + 88, H + 66, 25, 20, () => {
            if (++SlotRenderIndex > SlotRenderList.length - 1)
                SlotRenderIndex = 0
        })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 8, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 8 + 8, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 8 + 8 + 8, 16, 16, () => { })
        addCommonWidget(Component.of('+'), W - 110, H - 50 - 4 + 8 + 8 + 8 + 8, 16, 16, () => {
            Client.tell(`ID ${Client.player.containerMenu.containerId}`)
        })
    }
})



function rgbaColors(R, G, B, A) {
    return new $Color(checkNumberRange(R / 255), checkNumberRange(G / 255), checkNumberRange(B / 255), checkNumberRange(A / 100)).getRGB()
}
*/