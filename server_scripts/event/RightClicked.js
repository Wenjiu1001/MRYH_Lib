// 监听玩家右键点击物品的事件
ItemEvents.rightClicked((event) => {
    // 获取被使用的物品ID
    let itemID = event.item.id;
    // 设置禁止使用的物品ID列表
    let forbiddenItems = [
        'minecraft:milk_bucket',
        'minecraft:milk_bottle',
        'ecologics:coconut_slice',
        'farmrtsdelight:hot_cocoa'
    ];
    // 检查物品ID是否在禁止列表中
    if (forbiddenItems.includes(itemID)) {
        // 取消事件，禁止使用这些物品
        event.cancel();
    }
});

// 监听物品右键点击事件
ItemEvents.firstRightClicked((event) => {
    // 获取被使用的物品ID
    let itemID = event.item.id
    // 设置使用的物品ID列表
    let itemlist = [
      'touhou_little_maid:favorability_tool_add',
      "touhou_little_maid:favorability_tool_reduce"
    ]
    // 检查物品的ID是否为特定物品的ID
    if (itemlist.includes(itemID)) {
        // 减少物品数量
        event.item.shrink(1);
    }
});

// 监听方块右键事件
BlockEvents.rightClicked(event => {
    // 获取玩家手中的物品ID和被右键的方块ID
    let itemID = event.player.getItem()
    let blockID = event.getBlock()

    // 检查是否是打火石和黑曜石
    if (itemID == 'minecraft:flint_and_steel' && blockID == 'minecraft:obsidian') {
        // 获取玩家
        let player = event.getPlayer();

        // 如果玩家存在，则发送提示信息
        if (player) {
            // 发送聊天信息到玩家
            player.tell('下界通道已被摧毁');
        }
    }
});
