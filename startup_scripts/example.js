let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
let $ItemAttributeModifierEvent = Java.loadClass('net.minecraftforge.event.ItemAttributeModifierEvent')
let $UUid = Java.loadClass('java.util.UUID')
let $EquipmentSlotType = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

/**
 * @type {Record<string,{attribute:Special.Attribute,value:number,operation:$AttributeModifier$Operation_}[]>}
 */

let customAttribute = {
    'strength': [
        { attribute: "minecraft:generic.attack_damage", value: 2, operation: "addition" }
    ],
    'speed': [
        { attribute: "minecraft:generic.attack_speed", value: 2, operation: "multiply_base" },
        { attribute: "minecraft:generic.attack_damage", value: 1, operation: "addition" }
    ]
};

/**
 * @type {Record<string,{attribute:Special.Attribute,value:number,operation:$AttributeModifier$Operation_}[]>}
 */

let customAttribute_armor = {
    'durability': [
        { attribute: "minecraft:generic.max_health", value: 10, operation: "addition" }
    ],
    'defense': [
        { attribute: "minecraft:generic.armor", value: 2, operation: "addition" }
    ]
};

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', (event) => {
    let itemStack = event.getItemStack();
    let slotType = event.getSlotType();

    let nbt = itemStack.nbt;
    if (nbt != null && nbt.mryh_attribute != undefined) {
        let custom = customAttribute[nbt.mryh_attribute];
        if (custom != undefined) {
            console.log('测试')
            if (slotType == $EquipmentSlotType.MAINHAND) {
                custom.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.randomUUID(),
                            'customAttribute',
                            attr.value,
                            attr.operation
                        ));
                }))
            }
        } else {
            console.error(`未找到该自定义属性${nbt.mryh_attribute}`);
        }
    }
    if (nbt != null && nbt.mryh_attribute_armor_feet != undefined) {
        let custom_armor_feet = customAttribute_armor[nbt.mryh_attribute_armor_feet];
        if (custom_armor_feet != undefined) {
            console.log('测试')
            if (slotType == $EquipmentSlotType.FEET) {
                custom_armor_feet.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.randomUUID(),
                            'customAttribute_armor',
                            attr.value,
                            attr.operation
                        ));
                }))
            }
        } else {
            console.error(`未找到该自定义属性${nbt.mryh_attribute_armor_feet}`);
        }
    }
    if (nbt != null && nbt.mryh_attribute_armor_chest != undefined) {
        let custom_armor_chest = customAttribute_armor[nbt.mryh_attribute_armor_chest];
        if (custom_armor_chest != undefined) {
            console.log('测试')
            if (slotType == $EquipmentSlotType.CHEST) {
                custom_armor_chest.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.randomUUID(),
                            'customAttribute_armor',
                            attr.value,
                            attr.operation
                        ));
                }))
            }
        } else {
            console.error(`未找到该自定义属性${nbt.mryh_attribute_armor_chest}`);
        }
    }
    if (nbt != null && nbt.mryh_attribute_armor_legs != undefined) {
        let custom_armor_legs = customAttribute_armor[nbt.mryh_attribute_armor_legs];
        if (custom_armor_legs != undefined) {
            console.log('测试')
            if (slotType == $EquipmentSlotType.LEGS) {
                custom_armor_legs.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.randomUUID(),
                            'customAttribute_armor',
                            attr.value   价值,
                            attr.operation   操作
                        ));
                }))
            }
        } else   其他 {
            console.error(`未找到该自定义属性${nbt.mryh_attribute_armor_legs}`);
        }
    }
    if   如果 (nbt != null && nbt.mryh_attribute_armor_head != undefined) {
        let   让 custom_armor_head = customAttribute_armor[nbt.mryh_attribute_armor_head];
        if   如果 (custom_armor_head != undefined) {
            console.log('测试')
            if   如果 (slotType == $EquipmentSlotType.HEAD   头) {
                custom_armor_head.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new   新 $AttributeModifier(
                            $UUid.randomUUID(),
                            'customAttribute_armor',
                            attr.value   价值,
                            attr.operation   操作
                        ));
                }))
            }
        } else {
            console.error(`未找到该自定义属性${nbt.mryh_attribute_armor_head}`);
        }
    }
});



/*
else if (nbt != null && nbt.customAttribute_armor != undefined) {
    console.log('测试')
    if ([$EquipmentSlotType.CHEST, $EquipmentSlotType.HEAD, $EquipmentSlotType.LEGS, $EquipmentSlotType.FEET].includes(slotType)) {
        let custom_armor = customAttribute_armor[nbt.customAttribute_armor];
        if (custom_armor != undefined) {
            custom_armor.forEach((attr => {
                event.addModifier(attr.attribute,
                    new $AttributeModifier(
                        $UUid.randomUUID(),
                        'customAttribute',
                        attr.value,
                        attr.operation
                    ));
            }));
        }
    }
} 
    */
