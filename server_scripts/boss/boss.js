// BossBar Utils
const BossBarUtils = {
    /**
     * @type {Internal.CustomBossEvents}
     */
    _getManager() {
        return Utils.server.getCustomBossEvents();
    },
    /**
     * Create a new BossBar
     * @param {string} id BossBar's identifier
     * @param {Internal.Component} displayName BossBar's display name
     * @param {Internal.ServerPlayer} [player] Optional player parameter for updating the component
     * @returns {Internal.CustomBossEvent}
     * @throws {Error} if the BossBar already exists with the same identifier.
     */
    create(id, displayName, player) {
        /**
         * @type {Internal.CustomBossEvents}
         */
        const manager = this._getManager();
        const resourceLocation = Utils.id(id);

        if (manager.get(resourceLocation) != null) {
            throw new Error(`BossBar ${id} already exists!`);
        }
        const ComponentUtils = Java.loadClass("net.minecraft.network.chat.ComponentUtils");
        const updatedName = player
            ? ComponentUtils.updateForEntity(player.createCommandSourceStack(), displayName, player, 0)
            : displayName;

        return manager.create(resourceLocation, updatedName);
    },
    /**
     * Remove the BossBar by its identifier
     * @param {string} id BossBar's identifier
     */
    remove(id) {
        const manager = this._getManager();
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.removeAllPlayers();
            manager.remove(bossBar);
        }
    },
    /**
     * Get the BossBar by its identifier
     * @param {string} id BossBar's identifier
     * @returns {Internal.CustomBossEvent|null}
     */
    get(id) {
        return this._getManager().get(Utils.id(id));
    },
    /**
     * Set the visibility of the BossBar
     * @param {string} id BossBar's identifier
     * @param {boolean} visible Visibility to set
     */
    setVisible(id, visible) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.setVisible(visible);
        }
    },
    /**
     * Set the progress value of the BossBar
     * @param {string} id BossBar's identifier
     * @param {number} value Progress value to set
     */
    setValue(id, value) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.setValue(value);
        }
    },
    /**
     * Set the maximum value of the BossBar
     * @param {string} id BossBar's identifier
     * @param {number} max Maximum value to set
     */
    setMax(id, max) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.setMax(max);
        }
    },
    /**
     * Set the color of the BossBar
     * @param {string} id BossBar's identifier
     * @param {string} color Color to set ('pink'|'blue'|'red'|'green'|'yellow'|'purple'|'white')
     */
    setColor(id, color) {
        const bossBar = this.get(id);
        if (bossBar) {
            const BossBarColor = Java.loadClass("net.minecraft.world.BossEvent$BossBarColor");
            bossBar.setColor(BossBarColor.valueOf(color.toUpperCase()));
        }
    },
    /**
     * Set the style of the BossBar
     * @param {string} id BossBar's identifier
     * @param {string} style Style to set ('progress'|'notched_6'|'notched_10'|'notched_12'|'notched_20')
     */
    setStyle(id, style) {
        const bossBar = this.get(id);
        if (bossBar) {
            const BossBarOverlay = Java.loadClass("net.minecraft.world.BossEvent$BossBarOverlay");
            bossBar.setOverlay(BossBarOverlay.valueOf(style.toUpperCase()));
        }
    },
    /**
     * Set the name of the BossBar
     * @param {string} id BossBar's identifier
     * @param {Internal.Component} name Name to set
     * @param {Internal.ServerPlayer} [player] Optional player parameter for updating the component
     */
    setName(id, name, player) {
        const bossBar = this.get(id);
        if (bossBar) {
            const ComponentUtils = Java.loadClass("net.minecraft.network.chat.ComponentUtils");
            const updatedName = player
                ? ComponentUtils.updateForEntity(player.createCommandSourceStack(), name, player, 0)
                : name;
            bossBar.setName(updatedName);
        }
    },
    /**
     * Set the players that can see the BossBar
     * @param {string} id BossBar's identifier
     * @param {Internal.ServerPlayer[]} players Players to set
     */
    setPlayers(id, players) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.setPlayers(players);
        }
    },
    /**
     * Add a player to the BossBar's visible list
     * @param {string} id BossBar's identifier
     * @param {Internal.ServerPlayer} player Player to add
     */
    addPlayer(id, player) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.addPlayer(player);
        }
    },
    /**
     * remove a player from the BossBar's visible list
     * @param {string} id BossBar's identifier
     * @param {Internal.ServerPlayer} player Player to remove
     */
    removePlayer(id, player) {
        const bossBar = this.get(id);
        if (bossBar) {
            bossBar.removePlayer(player);
        }
    }
};
// Example


PlayerEvents.tick(event => {
    // 获取服务器玩家列表第一个
    const player = event.server.playerList.players.first;

    // 获取玩家的坐标
    const x = Math.floor(player.position().x())
    const y = Math.floor(player.position().y())
    const z = Math.floor(player.position().z())

    // 设置时间
    const time = event.level.dayTime()
    const day = Math.floor(time / 24000);
    const dayTick = event.level.dayTime() % 24000;

    // 生成实体信息
    const e = event.level.createEntity("minecraft:husk")
    // 检查是否是第0天，并且当前tick数为6000
    if (day == 0 && dayTick == 6000) {
        // 设置实体位置
        e.setPosition(x, y, z);
        // 设置了显示名字
        e.setCustomName(Component.of('测试boss'));
        // 添加tag
        e.addTag('test_tag')
        // 是否为地表
        if (e.getBlock().canSeeSky) {
            // 生成实体
            e.spawn();
            // 给玩家添加标签
            player.addTag('test_tags')
            // 导出日志
            event.server.tell(`玩家列表第一个玩家坐标：(${x}, ${y}, ${z})处,降临了一个测试boss`);
        }
    }
});

// 实体生成事件
EntityEvents.spawned('minecraft:husk', event => {

    // 检查自定义名字是否为“测试boss”
    if (event.entity.tags.contains('test_tag')) {
        // 创建一个新的BossBar
        BossBarUtils.create('test:my_boss', Component.of('测试boss').red(), event.player);

        // 设置BossBar属性
        BossBarUtils.setValue('test:my_boss', 100);
        BossBarUtils.setMax('test:my_boss', 100);
        BossBarUtils.setColor('test:my_boss', 'red');
        BossBarUtils.setStyle('test:my_boss', 'notched_10');
        /**
         * @type {Internal.LivingEntity} 
         **/
        const LivingEntity = event.entity

        LivingEntity.setAttributeBaseValue('minecraft:generic.max_health', 100)

        LivingEntity.setHealth(event.entity.getMaxHealth())

        LivingEntity.setAttributeBaseValue('minecraft:generic.scale', 2)
    }

});

/*
PlayerEvents.tick((event) => {
    if (event.entity.tags.contains('test_tags')) {
        // 将生成BossBar的玩家添加到BossBar的可见列表中
        BossBarUtils.addPlayer('test:my_boss', event.player);
    }
    if (!event.entity.tags.contains('test_tags')) {
        // 将生成BossBar的玩家bossBar的可见列表中移除
        BossBarUtils.removePlayer('test:my_boss', event.player);
    }
})

EntityEvents.hurt((event) => {
    if (event.entity.tags.contains('test_tag')) {
        // 获取实体的当前生命值和最大生命值
        let currentHealth = event.entity.health;
        let maxHealth = event.entity.getMaxHealth();

        // 计算BossBar的进度值，进度值是当前生命值除以最大生命值
        let progress = currentHealth / maxHealth;

        // 获取BossBar的标识符
        let bossBarId = 'test:my_boss';

        // 更新BossBar的进度值
        BossBarUtils.setValue(bossBarId, progress * 100);
        console.log(`当前血量${event.entity.health}`);
        console.log(`最大血量${event.entity.getMaxHealth()}`);
        console.log(`造成伤害${event.getDamage()}`);
    }
})


// 实体死亡事件
EntityEvents.death('minecraft:husk', event => {
    // 检查自定义名字是否为“测试boss”
    if (event.entity.tags.contains('test_tag')) {
        // 移除BossBar
        BossBarUtils.remove('test:my_boss');
    }
});
*/