
RenderJSEvents.RegisterItemDecorations(e => {
    e.registerForAllItem('render_0', c => {
        if (c.itemStack.nbt != null) {
            let iconMap = {
                'inferior': 'inferior.png',
                'common': 'common.png',
                'rare': 'rare.png',
                'artifact': 'artifact.png',
                'legendary': 'legendary.png',
                'epic': 'epic.png',
                'inferior_armor': 'inferior.png',
                'common_armor': 'common.png',
                'rare_armor': 'rare.png',
                'artifact_armor': 'artifact.png',
                'legendary_armor': 'legendary.png',
                'epic_armor': 'epic.png'
            };

            let attributes = [
                'mryh_attribute',
                'mryh_attribute_armor_head',
                'mryh_attribute_armor_chest',
                'mryh_attribute_armor_legs',
                'mryh_attribute_armor_feet'
            ];

            for (let key of attributes) {
                let attributeValue = c.itemStack.nbt.getString(key);
                if (attributeValue && iconMap[attributeValue]) {
                    let iconName = iconMap[attributeValue];
                    c.guiGraphics.blit(
                        ResourceLocation(`mryh:textures/gui/${iconName}`), // 资源路径
                        c.xOffset, c.yOffset, // 渲染左上角的坐标
                        0, // 深度/优先级
                        0, 0, // 材质裁剪开始位置
                        16, 16, // 显示大小
                        16, 16 // 设置材质大小
                    );
                }
            }
        }
    });
});
