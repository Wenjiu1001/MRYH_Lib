// 监听玩家右键点击物品的事件
ItemEvents.rightClicked((event) => {
    // 获取被使用的物品ID
    const itemID = event.item.id;
    // 设置禁止使用的物品ID列表
    const forbiddenItems = [
        'minecraft:milk_bucket',
        'minecraft:milk_bottle',
        'ecologics:coconut_slice'
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
    const itemID = event.item.id
    // 设置使用的物品ID列表
    const itemlist = [
      'touhou_little_maid:favorability_tool_add',
      "touhou_little_maid:favorability_tool_reduce"
    ]
    // 检查物品的ID是否为特定物品的ID
    if (itemlist.includes(itemID)) {
        // 减少物品数量
        event.item.shrink(1);
    }
});

