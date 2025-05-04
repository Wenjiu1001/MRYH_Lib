
let $AnvilUpdateEvent = Java.loadClass("net.minecraftforge.event.AnvilUpdateEvent")

let Y$repairMap = Utils.newMap()
let Y$commonFixMaterial = []
function Y$addRepairItem(item, material, damageCount, xpCost) {
  damageCount = damageCount || 100
  xpCost = xpCost || 1
  Y$repairMap.put(item, { id: material, damageCount: damageCount, xpCost: xpCost })
}
function Y$addCommonFixMaterial(material, damageCount, xpCost) {
  damageCount = damageCount || 0.2
  xpCost = xpCost || 1
  Y$commonFixMaterial.push( { id: material, damageCount: damageCount, xpCost: xpCost })
}

// 忆然: 很简单吧,后面两个可以不填
Y$addRepairItem('spore:living_helmet', 'spore:plated_muscle', 100, 1)
Y$addRepairItem('spore:living_chest', 'spore:plated_muscle', 100, 1)
Y$addRepairItem('spore:living_pants', 'spore:plated_muscle', 100, 1)
Y$addRepairItem('spore:living_bboots', 'spore:plated_muscle', 100, 1)
Y$addRepairItem('spore:inf_helmet','spore:living_core',100,1)
Y$addRepairItem('spore:inf_chest','spore:living_core',100,1)
Y$addRepairItem('spore:inf_up_chest','spore:living_core',100,1)
Y$addRepairItem('spore:inf_pants','spore:living_core',100,1)
Y$addRepairItem('spore:inf_boots', 'spore:living_core',100,1)
Y$addRepairItem('spore:r_elytron','spore:wing_membrane',100,1)
Y$addRepairItem('apocalypsenow:brazilian_army_helmet','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:brazilian_army_chestplate','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:brazilian_army_leggings','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:brazilian_army_boots', 'apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:italian_bersaglieri_army_helmet', 'apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:italian_bersaglieri_army_chestplate','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:italian_bersaglieri_army_leggings','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:italian_bersaglieri_army_boots','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:anarchy_helmet','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:anarchy_chestplate','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:anarchy_leggings','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:anarchy_boots','apocalypsenow:armorplate',100,1)
Y$addRepairItem('apocalypsenow:juggernaut_helmet','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('apocalypsenow:juggernaut_chestplate','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('apocalypsenow:juggernaut_leggings','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('apocalypsenow:juggernaut_boots','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('zombiekit:bomb_helmet','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('zombiekit:bomb_chestplate','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('zombiekit:bomb_leggings','apocalypsenow:reinforced_armor_plate',100,1)
Y$addRepairItem('zombiekit:bomb_boots','apocalypsenow:reinforced_armor_plate',100,1)

// 忆然: 很简单吧,也是后面两个可以不填
Y$addCommonFixMaterial('minecraft:netherite_upgrade_smithing_template')

NativeEvents.onEvent($AnvilUpdateEvent, /**@param {Internal.AnvilUpdateEvent} event */ event => {
  let { left, right } = event
  let Y$common
  // 忆然: 这个，写不写都差不多，没影响
  if (event.player.level.isClientSide()) return
  
  // 忆然: 普通修复判断
  let Y$materialInfo = Y$repairMap.getOrDefault(left.id, { id: "null" })
  if (Y$materialInfo.id == right.id) {
    let { damageCount, xpCost } = Y$materialInfo
    // 忆然: 计算要修的耐久
    let repairDamage = Math.min(left.damageValue, right.count * damageCount)
    // 忆然: 计算材料的消耗
    let materialCost = Math.ceil(repairDamage / damageCount)
    // 忆然: 计算修完后的耐久度
    let currentDamageValue = left.damageValue - repairDamage
    let outputItem = left.copy()
    outputItem.setDamageValue(currentDamageValue)
    event.setOutput(outputItem)
    // 忆然: 材料消耗
    event.setMaterialCost(materialCost)
    // 忆然: 经验消耗
    event.setCost(xpCost * materialCost)
  }

  // 忆然: 通用修复判断
  else if((Y$common = Y$commonFixMaterial.find(value => value.id == right.id))&&left.isDamaged()){
    let { damageCount, xpCost } = Y$common

    // 忆然: 和上面唯一不同的地方,根据最大耐久重新获取修复量
    damageCount *= left.maxDamage

    let repairDamage = Math.min(left.damageValue, right.count * damageCount)
    let materialCost = Math.ceil(repairDamage / damageCount)
    let currentDamageValue = left.damageValue - repairDamage
    let outputItem = left.copy()
    outputItem.setDamageValue(currentDamageValue)
    event.setOutput(outputItem)
    event.setMaterialCost(materialCost)
    event.setCost(xpCost * materialCost)

  }
})