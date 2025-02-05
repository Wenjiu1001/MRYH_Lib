/*
ItemEvents.rightClicked(e => {
    let player = e.player;
    let itemId = e.item.id;

    if (player) {
        // 使用 Curios API 查找玩家是否装备了指定的物品
        let equippedCurio = $CuriosApi.getCuriosHelper().findEquippedCurio(Item.of(itemId), player);

        // 检查是否找到了装备的 Curios 饰品
        if (equippedCurio.isPresent()) {
            let curioStack = equippedCurio.get();
            console.log(`找到装备的 Curios 饰品: ${curioStack}`);
        } else {
            console.log(`玩家没有装备 ${itemId} 作为 Curios 饰品`);
        }
    }
})
    */