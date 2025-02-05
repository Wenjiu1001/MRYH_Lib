RenderJSEvents.RegisterItemDecorations(e => {
    e.registerForAllItem('render_0', c => {
        if (c.itemStack.nbt != null) {
            let attribute = c.itemStack.nbt.getString('mryh_attribute'); // 获取NBT数据中的mryh_attribute字段
            if (attribute == 'strength') {
                c.guiGraphics.blit(
                    ResourceLocation('mryh:textures/gui/rare.png'), // 资源路径
                    c.xOffset, c.yOffset, // 渲染左上角的坐标
                    0, // 深度/优先级
                    0, 0, // 材质裁剪开始位置
                    16, 16, // 显示大小
                    16, 16 // 设置材质大小
                );
            }
        }
    });
});

