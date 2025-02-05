function tryCatch(fun, args) {
    try {
        // 尝试执行传入的函数fun，并传入参数args
        fun(args)
    } catch (error) {
        // 如果在执行fun函数时发生错误，捕获错误并打印到控制台
        console.error(error)
    }
}

/**
 * @param {$LivingEntityHurtEventJS_} event - 事件对象
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
    if (event.source.player) {
        global.HurtCoreByPlayer(event);
    } else {
        global.HurtCoreByOther(event);
    }
});

