// server
let $LivingEquipmentChangeEvent = Java.loadClass("net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent")
NativeEvents.onEvent($LivingEquipmentChangeEvent,/**@param {Internal.LivingEquipmentChangeEvent} event */event => {
    let stack = event.getTo()
    if (stack.getEnchantmentLevel("mryh:unbreakable") > 0) {
        stack.setDamageValue(0)
        stack.nbt.putBoolean("Unbreakable", true)
    }
})

ItemEvents.firstLeftClicked(e => {
    e.player.inventory.allItems.forEach(item => {
        console.log(item.toString())
    })
})