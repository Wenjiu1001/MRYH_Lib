let $ScreenEvent$Init$Post = Java.loadClass("net.minecraftforge.client.event.ScreenEvent$Init$Post")
let $Button = Java.loadClass("net.minecraft.client.gui.components.Button")
let $InventoryScreen = Java.loadClass("net.minecraft.client.gui.screens.inventory.InventoryScreen")
let $Color = Java.loadClass("java.awt.Color")
function RGBA(r, g, b, a) {
  return $Color(r / 255, g / 255, b / 255, a / 100).getRGB()
}
function findKeyName(keyName) {
  return Client.options.keyMappings.find(v => v.name.includes(keyName)).getKey().getDisplayName().getString()
}
function findKeyModifierName(keyName) {
  return Client.options.keyMappings.find(v => v.name.includes(keyName)).getKeyModifier().toString()
}
function getKeyBinding(keyName) {
  let KeyModifier = findKeyModifierName(keyName)
  let KeyName = findKeyName(keyName)
  if (KeyModifier == "NONE") {
    return KeyName
  } else {
    KeyModifier == "CONTROL" && (KeyModifier = "CTRL")
    return KeyModifier + " + " + KeyName
  }
}

mryhConfig.put("invScreen", true)
if (mryhConfig.getOrDefault("invScreen", true)) {
  NativeEvents.onEvent($ScreenEvent$Init$Post,/**@param {Internal.ScreenEvent$Init$Post} event */event => {
    if ((event.screen instanceof $InventoryScreen) && mryhConfig.getOrDefault("invScreen", true)) {
      event.screen.addRenderableWidget(
        $Button.builder("我已了解", () => {
          mryhConfig.put("invScreen", false)
          JsonIO.write("kubejs/mryh.json", mryhConfig)
          Client.setScreen(new $InventoryScreen(Client.player))
        }
        ).bounds(Client.window.guiScaledWidth / 2 - 33, event.screen.guiTop - 45, 66, 20)
          .build()
      )
    }
  })
  RenderJSEvents.onScreenPostRender(event => {
    if ((event.screen instanceof $InventoryScreen) && mryhConfig.getOrDefault("invScreen", true)) {
      let GSW = Client.window.guiScaledWidth
      let GSH = Client.window.guiScaledHeight
      let GSWH = GSW / 2
      let GSHH = GSH / 2

      event.poseStack.translate(0, 0, -1)
      event.fill(0, 0, GSW, GSH, RGBA(0, 0, 0, 40))
      event.poseStack.translate(0, 0, 1)

      curios: {
        event.poseStack.pushPose()
        event.poseStack.translate(event.screen.guiLeft, event.screen.guiTop, 0)
        let lineClolor = RGBA(255, 2, 0, 100)
        event.guiGraphics.renderOutline(25, 7, 16, 16, lineClolor)
        event.vLine(event.poseStack, 25 + 8, 7, -10, lineClolor)
        let info = "这是饰品栏"
        event.drawString(info, 25 + 8, -10 - 8, lineClolor)
        event.hLine(25 + 8, 25 + 8 + Client.font.width(info), -10, lineClolor)
        event.poseStack.popPose()
      }

      jeiCommon: {
        event.poseStack.pushPose()
        event.poseStack.translate(GSW - 277, 60, 0)

        let lineClolor = RGBA(255, 2, 0, 100)
        let info = "这是jei界面                       "
        event.drawString(info, 0, -10, lineClolor)
        event.drawString(`对着物品按[${getKeyBinding('key.jei.bookmark')}]加入书签`, 0, 2, lineClolor)
        event.drawString(`对着物品按[${getKeyBinding('key.jei.showUses')}]查看用途`, 0, 11, lineClolor)
        event.drawString(`对着物品按[${getKeyBinding('key.jei.showRecipe')}]查看来源`, 0, 20, lineClolor)
        event.poseStack.translate(Client.font.width(info) + 12, 0, 0)
        event.hLine(-Client.font.width(info) - 12, 0, 0, lineClolor)
        event.poseStack.translate(1, 1, 0)
        event.poseStack.rotateZ(45 * 3)
        event.hLine(8, 0, 0, lineClolor)
        event.poseStack.rotateZ(45 * 2)
        event.hLine(8, 0, 0, lineClolor)
        event.poseStack.popPose()
      }

      ftb: {
        event.poseStack.pushPose()
        event.poseStack.translate(GSWH, 0, 0)
        let lineClolor = RGBA(255, 144, 255, 100)
        let info = "斧头帮任务(不看任务的豆沙了)"
        event.guiGraphics.renderOutline(17 - GSWH, 0, 18, 18, lineClolor)
        event.hLine(18 + 17 - GSWH, Client.font.width(info) / 2 + 18 + 3, 3, lineClolor)
        event.drawString(info, 18 + 3 - Client.font.width(info) / 2, 4, lineClolor)
        event.poseStack.popPose()
      }
    }
  })
}