let $LivingEquipmentChangeEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent")
let $ModernKineticGunItem = Java.loadClass('com.tacz.guns.item.ModernKineticGunItem')
let $FireMode = Java.loadClass("com.tacz.guns.api.item.gun.FireMode")
NativeEvents.onEvent($LivingEquipmentChangeEvent,/**@param {Internal.LivingEquipmentChangeEvent} event */event => {
  let stack = event.getTo()
  //获取物品如果开火模式为未知则设置为自动
  if (stack.item instanceof $ModernKineticGunItem && stack.item.getFireMode(stack) == $FireMode.UNKNOWN) {
    stack.item.setFireMode(stack, $FireMode.AUTO)
  }
})
