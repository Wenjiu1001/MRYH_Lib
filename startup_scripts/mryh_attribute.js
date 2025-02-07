let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
let $ItemAttributeModifierEvent = Java.loadClass('net.minecraftforge.event.ItemAttributeModifierEvent')
let $UUid = Java.loadClass('java.util.UUID')
let $EquipmentSlotType = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

/**
 * @type {Record<string,{attribute:Special.Attribute,value:number,operation:$AttributeModifier$Operation_}[]>}
 */

let customAttribute = {
    'inferior': [
        { attribute: "puffish_attributes:player.melee_damage", value: -1, operation: "addition" },
        { attribute: "minecraft:generic.attack_speed", value: -0.1, operation: "multiply_base" }
    ],
    'common': [
        { attribute: "puffish_attributes:player.melee_damage", value: 1, operation: "addition" }
    ],
    'rare': [
        { attribute: "puffish_attributes:player.melee_damage", value: 1, operation: "addition" },
        { attribute: "minecraft:generic.attack_speed", value: 0.1, operation: "addition" }
    ],
    'artifact': [
        { attribute: "puffish_attributes:player.melee_damage", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.attack_speed", value: 0.1, operation: "multiply_base" }
    ],
    'legendary': [
        { attribute: "puffish_attributes:player.melee_damage", value: 0.05, operation: "multiply_base" },
        { attribute: "minecraft:generic.attack_speed", value: 0.2, operation: "multiply_base" }
    ],
    'epic': [
        { attribute: "puffish_attributes:player.melee_damage", value: 0.1, operation: "multiply_base" },
        { attribute: "minecraft:generic.attack_speed", value: 0.3, operation: "multiply_base" }
    ]
};

/**
 * @type {Record<string,{attribute:Special.Attribute,value:number,operation:$AttributeModifier$Operation_}[]>}
 */

let customAttribute_armor = {
    'inferior_armor': [
        { attribute: "minecraft:generic.max_health", value: -2, operation: "addition" },
        { attribute: "minecraft:generic.armor", value: -0.1, operation: "multiply_base" }
    ],
    'common_armor': [
        { attribute: "minecraft:generic.max_health", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.armor", value: 1, operation: "addition" }
    ],
    'rare_armor': [
        { attribute: "minecraft:generic.max_health", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.armor", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.armor_toughness", value: 0.1, operation: "multiply_base" }
    ],
    'artifact_armor': [
        { attribute: "minecraft:generic.max_health", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.armor", value: 0.2, operation: "multiply_base" },
        { attribute: "minecraft:generic.armor_toughness", value: 0.1, operation: "multiply_base" },
        { attribute: "minecraft:generic.luck", value: 1, operation: "addition" }
    ],
    'legendary_armor': [
        { attribute: "minecraft:generic.max_health", value: 2, operation: "addition" },
        { attribute: "minecraft:generic.armor", value: 0.2, operation: "multiply_base" },
        { attribute: "minecraft:generic.armor_toughness", value: 0.2, operation: "multiply_base" },
        { attribute: "puffish_attributes:player.melee_damage", value: 4, operation: "addition" }
    ],
    'epic_armor': [
        { attribute: "minecraft:generic.max_health", value: 0.2, operation: "multiply_base" },
        { attribute: "minecraft:generic.armor", value: 0.2, operation: "multiply_base" },
        { attribute: "minecraft:generic.armor_toughness", value: 0.2, operation: "multiply_base" },
        { attribute: "puffish_attributes:player.melee_damage", value: 0.1, operation: "multiply_base" }
    ]
};

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', (event) => {
    let itemStack = event.getItemStack();
    let slotType = event.getSlotType();

    let nbt = itemStack.nbt;
    if (nbt != null && nbt.mryh_attribute != undefined) {
        let custom = customAttribute[nbt.mryh_attribute];
        if (custom != undefined) {
            if (slotType == $EquipmentSlotType.MAINHAND) {
                custom.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.nameUUIDFromBytes([127,0,0,0,1]),
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
                            $UUid.nameUUIDFromBytes([127,0,0,0,2]),
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
            if (slotType == $EquipmentSlotType.CHEST) {
                custom_armor_chest.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.nameUUIDFromBytes([127,0,0,0,3]),
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
            if (slotType == $EquipmentSlotType.LEGS) {
                custom_armor_legs.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.nameUUIDFromBytes([127,0,0,0,4]),
                            'customAttribute_armor',
                            attr.value,
                            attr.operation
                        ));
                }))
            }
        } else {
            console.error(`未找到该自定义属性${nbt.mryh_attribute_armor_legs}`);
        }
    }
    if (nbt != null && nbt.mryh_attribute_armor_head != undefined) {
        let custom_armor_head = customAttribute_armor[nbt.mryh_attribute_armor_head];
        if (custom_armor_head != undefined) {
            if (slotType == $EquipmentSlotType.HEAD) {
                custom_armor_head.forEach((attr => {
                    event.addModifier(attr.attribute,
                        new $AttributeModifier(
                            $UUid.nameUUIDFromBytes([127,0,0,0,5]),
                            'customAttribute_armor',
                            attr.value,
                            attr.operation
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
