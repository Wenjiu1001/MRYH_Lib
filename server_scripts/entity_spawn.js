
//==================================逻辑=================================
let $Zombie = Java.loadClass('net.minecraft.world.entity.monster.Zombie')

EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
    /*
    let player = entity.getLevel().getNearestPlayer(entity, 64)
    if (!player) return
    */
    if (event.level.difficulty.id !== 3) return;
    /*
    if (Math.random() > 0.02) return
    */
    if (!entity instanceof $Zombie) return
    let selectedTerms = getRandomTerms()

    entity.persistentData.put('term', selectedTerms.map(t => t.type))
    let customName = selectedTerms.map(term => term.name)
    let name =entity.name.name
    entity.setCustomName([customName, Text.gray('感染体'),Text.green(name)]);
    entity.setCustomNameVisible(true);

    selectedTerms.forEach(term => {
        switch (term.type) {
            case "flesh_blood_mixture":
                entity.setAttributeBaseValue('generic.max_health', entity.getAttributeBaseValue('generic.max_health') * 3);
                entity.health = entity.getMaxHealth();
                entity.setAttributeBaseValue('generic.attack_damage', entity.getAttributeBaseValue('generic.attack_damage') * 0.3);
                break;
            case "forayer":
                entity.setAttributeBaseValue('generic.movement_speed', entity.getAttributeBaseValue('generic.movement_speed') * 1.2);
                entity.setAttributeBaseValue('generic.attack_damage', entity.getAttributeBaseValue('generic.attack_damage') * 1.5);
                break;
        }
    });
})

function getRandomTerms() {
    if (!TermTypeMap || TermTypeMap.length <= 0) {
        return [];
    }
    let randomCount = Math.floor(Math.random() * TermTypeMap.length) + 1;
    let shuffled = TermTypeMap.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
}
//==================================逻辑=================================

//==================================词条=================================
let TermTypeMap = [
    {
        type: 'flesh_blood_mixture',
        name: Text.gold('血肉'),
        desc: Text.gray('怪物产生时，自带多重血肉加护，但是攻击力较低')
    },
    {
        type: 'forayer',
        name: Text.blue('突袭'),
        desc: Text.gray('怪物产生时，获得额外速度，并且具备较强攻击力')
    },
    {
        type: 'erosion',
        name: Text.black('腐蚀'),
        desc: Text.gray('怪物攻击时，有一定概率造成额外的护甲损伤')
    },
    {
        type: 'sacrifice',
        name: Text.red('牺牲'),
        desc: Text.gray('攻击目标时，伤害转化为百分比伤害')
    },
    {
        type: 'descent',
        name: Text.darkGreen('降临'),
        desc: Text.gray('怪物吸引祂的注视，有一定概率免疫本次伤害')
    },
    {
        type: 'evolution',
        name: Text.yellow('进化'),
        desc: Text.gray('怪物血量减少时，攻击力会持续增加，最高四倍')
    }
]
//==================================词条=================================

//==================================怪物=================================
/**
 * @param {Internal.LivingHurtEvent_} event 
 * @returns 
 */
function TermPlayerHurtByOthers(event) {
    let entity = event.source.actual
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('term')) return
    let typeList = entity.persistentData.get('term')
    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in TermPlayerHurtevents) {
            TermPlayerHurtevents[typeName](event)
        }
    });
}

/**
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent):void>}
 */
let TermPlayerHurtevents = {
    'erosion': function (event) {
        /**
         * @type {Internal.LivingEntity}
         */
        let player = event.entity
        if (player.getEquipment("head") || player.getEquipment("head").damaged < player.getEquipment("head").maxDamage * 0.7) {
            player.damageEquipment("head", 15)
        }
        if (player.getEquipment("chest") || player.getEquipment("chest").damaged < player.getEquipment("chest").maxDamage * 0.7) {
            player.damageEquipment("chest", 20)
        }
        if (player.getEquipment("legs") || player.getEquipment("legs").damaged < player.getEquipment("legs").maxDamage * 0.7) {
            player.damageEquipment("legs", 18)
        }
        if (player.getEquipment("feet") || player.getEquipment("feet").damaged < player.getEquipment("feet").maxDamage * 0.7) {
            player.damageEquipment("feet", 15)
        }
        if (player.getEquipment("mainhand") || player.getEquipment("mainhand").damaged < player.getEquipment("mainhand").maxDamage * 0.7) {
            player.damageEquipment("mainhand", 20)
        }
        if (player.getEquipment("offhand") || player.getEquipment("head").damaged < player.getEquipment("offhand").maxDamage * 0.7) {
            player.damageEquipment("offhand", 20)
        }
        player.tell('救命啊！有人打我！')
    },
    'sacrifice': function (event) {
        /**
         * @type {Internal.LivingEntity}
         */
        let player = event.entity
        let armor = player.armorValue
        console.log(armor)
        if (player.health > player.maxHealth * 0.1 || armor > 80) {
            player.setHealth(player.health - Math.ceil(player.maxHealth * 0.02))
        } else if (player.health > player.maxHealth * 0.1 || armor <= 80 || armor > 20) {
            player.setHealth(player.health - Math.ceil(player.maxHealth * 0.05))
        } else if (player.health <= player.maxHealth * 0.1) {
            player.kill()
        }
        event.amount = 0
        player.tell('我血呢？？？')
    }
}

//==================================怪物=================================

//==================================玩家=================================
/**
 * @param {Internal.LivingHurtEvent_} event 
 * @returns 
 */
function TermEntityHurtByPlayers(event) {
    let entity = event.entity
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('term')) return
    let typeList = entity.persistentData.get('term')

    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in TermEntityHurtevents) {
            TermEntityHurtevents[typeName](event)
        }
    });
}

/**
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent):void>}
 */
let TermEntityHurtevents = {
    'descent': function (event) {
        if (Math.random() < 0.2) {
            event.amount = 0
            event.source.player.tell('不是哥们儿？你开了？')
        }
    },
    'evolution': function (event) {
        /**
         * @type {Internal.LivingEntity}
         */
        let entity = event.entity
        let health = entity.health
        let maxhealth = entity.maxhealth
        let attack = entity.getAttributeBaseValue("generic.attack_damage")
        if (!entity.nbt.getInt('evolution')) {
            entity.persistentData.putInt('evolution', 0)
        }
        if (health / maxhealth <= 0.8 || health / maxhealth > 0.6 || entity.nbt.getInt('evolution') == 0) {
            entity.persistentData.putInt('evolution', 1)
            entity.setAttributeBaseValue('generic.attack_damage', attack * 1.1)
        }
        if (health / maxhealth <= 0.6 || health / maxhealth > 0.4 || entity.nbt.getInt('evolution') == 1) {
            entity.persistentData.putInt('evolution', 2)
            entity.setAttributeBaseValue('generic.attack_damage', attack * 1.2)
        }
        if (health / maxhealth <= 0.4 || health / maxhealth > 0.2 || entity.nbt.getInt('evolution') == 2) {
            entity.persistentData.putInt('evolution', 3)
            entity.setAttributeBaseValue('generic.attack_damage', attack * 1.3)
        }
        if (health / maxhealth <= 0.2 || health / maxhealth > 0.1 || entity.nbt.getInt('evolution') == 3) {
            entity.persistentData.putInt('evolution', 3)
            entity.setAttributeBaseValue('generic.attack_damage', attack * 1.5)
        }
        event.source.player.tell('哪儿来的狂战？')
    }
}
//==================================玩家=================================
