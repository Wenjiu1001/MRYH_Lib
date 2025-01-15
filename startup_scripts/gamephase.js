StartupEvents.postInit(e => {
    // 使玩家拥有阶段
    //void addPhase(ServerPlayer player, String phase);

    // 使玩家失去阶段
    //void removePhase(ServerPlayer player, String phase);

    // 使玩家失去所有阶段
    //void clearPhase(ServerPlayer player);

    // 测试玩家是否拥有某阶段
    //boolean hasPhase(ServerPlayer player, String phase);

    // 为物品设置阶段限制
    //void addItemRestriction(String phase, ItemStack ...item);

    // 为模组内的所有物品设置阶段限制
    //void addItemModRestriction(String phase, String ...mod);

    // 为物品取消阶段限制
    //void removeItemRestriction(String phase, ItemStack ...item);

    // 为模组内的所有物品取消阶段限制
    //void removeItemModRestriction(String phase, String ...mod);

    // 为维度设置阶段限制
    //void addDimensionRestriction(String phase, ResourceLocation ...dimension);

    // 为维度取消阶段限制
    //void removeDimensionRestriction(String phase, ResourceLocation ...dimension);

    //GamePhase.addItemRestriction("wool", "minecraft:white_wool");
    //GamePhase.addItemModRestriction("ae", "ae2");
    //GamePhase.addDimensionRestriction("end", "minecraft:the_end");
    GamePhase.addItemRestriction("spore","minecraft:skeleton_skull");
    GamePhase.addItemRestriction("spore","minecraft:wither_skeleton_skull");
    GamePhase.addItemRestriction("spore","minecraft:player_head");
    GamePhase.addItemRestriction("spore","minecraft:zombie_head");
    GamePhase.addItemRestriction("spore","minecraft:creeper_head");
    GamePhase.addItemRestriction("spore","minecraft:piglin_head");
    //0.52崩溃排除
    GamePhase.addItemRestriction("rebug","artifacts:chorus_totem");
    GamePhase.addItemRestriction("rebug","minecraft:totem_of_undying");
    GamePhase.addItemRestriction("rebug","nameless_trinkets:broken_ankh");
    GamePhase.addItemRestriction("rebug","touhou_little_maid:magic_protect_bauble");
    //维度
});