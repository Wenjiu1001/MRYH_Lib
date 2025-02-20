/**
 * @param {Internal.LivingHurtEvent_} event 
 * @param {$LivingEntityHurtEventJS_} event
 * @returns
 */
// 处理非玩家造成的伤害
global.HurtCoreByOther = event => {
    event.entity.invulnerableTime = 10 + 1;
    TermPlayerHurtByOthers(event)
};

/** 
 * @param {Internal.LivingHurtEvent_} event 
 */
global.HurtCoreByPlayer = event => {
    event.entity.invulnerableTime = 10 + 1;
    /*
    let Damage = event.getSource().getType().toString();
    */
    handleDamageByPlayer(event);
    TermEntityHurtByPlayers(event)
};
