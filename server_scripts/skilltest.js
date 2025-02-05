let $SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
let $LecternMenu = Java.loadClass('net.minecraft.world.inventory.LecternMenu')
let $Stats = Java.loadClass('net.minecraft.stats.Stats')

let initProfessionInfo = {
    skillpoint: 0,//技能点
    profession: null,//职业
    level: 1,//等级
    xp: 0,//经验值
    skill: {//技能
        health: 0,
        attack: 0,
        armor: 0,
        speed: 0
    }
};


NetworkEvents.dataReceived('customProfessionSystem', e => {
    let { player, data } = e;
    let { ProfessionInfo } = player.persistentData;
    let { skill } = ProfessionInfo;
    let modify = false;

    for (let key in data) {
        if (key == 'addhealth') {
            if (!ProfessionInfo.skillpoint > 0) return
            skill.health++
            ProfessionInfo.skillpoint--;
            player.modifyAttribute('generic.max_health', 'addedhealth', skill.health, 'addition');
            modify = true;
        }
        if (key == 'addattack') {
            if (!ProfessionInfo.skillpoint > 0) return
            skill.attack++
            ProfessionInfo.skillpoint--;
            player.modifyAttribute('generic.attack_damage', 'addedattack', skill.attack, 'addition');
            modify = true;
        }
        if (key == 'addarmor') {
            if (!ProfessionInfo.skillpoint > 0) return
            skill.armor++
            ProfessionInfo.skillpoint--;
            player.modifyAttribute('generic.armor', 'addedarmor', skill.armor, 'addition');
            modify = true;
        }
        if (key == 'addspeed') {
            if (!ProfessionInfo.skillpoint > 0) return
            skill.speed++
            ProfessionInfo.skillpoint--;
            player.modifyAttribute('generic.movement_speed', 'addedspeed', skill.speed, 'addition');
            modify = true;
        }
        if (key == 'debug') {
            ProfessionInfo.skillpoint++;
            modify = true;
        }
        if (key == 'clear') {
            player.persistentData.ProfessionInfo = initProfessionInfo;

            // 清除加成次数记录
            skill.health = 0
            skill.attack = 0
            skill.armor = 0
            skill.speed = 0

            player.modifyAttribute('generic.max_health', 'addedhealth', 0, 'addition');
            player.modifyAttribute('generic.attack_damage', 'addedattack', 0, 'addition');
            player.modifyAttribute('generic.armor', 'addedarmor', 0, 'addition');
            player.modifyAttribute('generic.movement_speed', 'addedspeed', 0, 'addition');

            modify = true;
        }
    }

    if (modify) {
        e.player.sendData('customProfessionSystem', player.persistentData.ProfessionInfo);
    }
});

PlayerEvents.chat(e => {
    let info = e.component.getString();
    /**
     * @type {Internal.ServerPlayer} 
     */
    let player = e.player;
    player.statsCounter.setValue(e.player, $Stats.TIME_SINCE_REST, 0);

    if (!info.startsWith("open")) return;

    let id = Number(info.substring(4));
    e.player.openMenu(
        new $SimpleMenuProvider(
            () => new $LecternMenu(id),
            ''
        )
    );

    e.player.persistentData.ProfessionInfo = e.player.persistentData.ProfessionInfo || initProfessionInfo;
    let ProfessionInfo = e.player.persistentData.ProfessionInfo;
    e.player.sendData('customProfessionSystem', ProfessionInfo);
    e.cancel();
});

