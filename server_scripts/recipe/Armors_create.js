// 序列组装
ServerEvents.recipes(event => {
	// 使用变量存储过渡物品可以使代码更易读
	let inter = 'create:incomplete_precision_mechanism'
	/*
		// 物品序列
		event.recipes.create
			.sequenced_assembly(
				// 输出物品
				[
					Item.of('').withChance(1), // 这将是JEI中显示的结果物品
					Item.of('').withChance(0.15), // 其余物品将成为废料
					Item.of('').withChance(0.05)
				],
				// 输入物品
				'',
				[
					// 序列步骤
					event.recipes.createPressing(inter, inter),
					event.recipes.createDeploying(inter, [inter, '']),
					event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
					event.recipes.createDeploying(inter, [inter, '']),
					event.recipes.createCutting(inter, inter),
					event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
				])
			// 序列时显示中间物品
			.transitionalItem(inter)
			// 设置过渡物品和循环次数
			.loops(1)
	*/



	// 外骨骼
	event.remove({ output: 'zombiekit:exo_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:exo_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_skeleton_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_experimental_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:juggernaut_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:energy_rod']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:sleeping_pills']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:ghast_eye']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:gods_crown']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)

	event.remove({ output: 'zombiekit:exo_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:exo_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_skeleton_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_experimental_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:juggernaut_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:energy_rod']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:ethereal_wings']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:explosion_proof_jacket']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:sigil_of_baphomet']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:callus']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:gods_crown']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombiekit:exo_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:exo_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_skeleton_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_experimental_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:juggernaut_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:bulletproof_insert']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:energy_rod']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:wooden_stick']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:gods_crown']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombiekit:exo_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:exo_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_skeleton_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_experimental_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:juggernaut_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:terminus_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:bulletproof_insert']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:energy_rod']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:speed_force']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:gods_crown']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:nelumbo']),
				event.recipes.createDeploying(inter, [inter, 'nameless_trinkets:dark_nelumbo']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 主宰
	event.remove({ output: 'apocalypsenow:juggernaut_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:juggernaut_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:juggernaut_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:juggernaut_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:juggernaut_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:juggernaut_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:juggernaut_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:juggernaut_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:energy_battery']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 拆弹小队
	event.remove({ output: 'apocalypsenow:bombsquad_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:bombsquad_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bombsquad_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:bombsquad_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:bombsquad_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bombsquad_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:bombsquad_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:bombsquad_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bombsquad_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:bombsquad_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:bombsquad_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bombsquad_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createDeploying(inter, [inter, 'zombie_extreme:filter']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 防爆
	event.remove({ output: 'zombiekit:bomb_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:bomb_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bomb_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:echo_shard']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:magma_cream']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombiekit:bomb_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:bomb_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bomb_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:echo_shard']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:magma_cream']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombiekit:bomb_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:bomb_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bomb_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:echo_shard']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:magma_cream']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombiekit:bomb_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombiekit:bomb_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:bomb_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_mythical_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:retaliation_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:echo_shard']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:magma_cream']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'endrem:magical_eye']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 外骨骼
	event.remove({ output: 'zombie_extreme:exo_suit_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:exo_suit_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_suit_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:exo_suit_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:exo_suit_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_suit_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:exo_suit_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:exo_suit_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_suit_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:exo_suit_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:exo_suit_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:exo_suit_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 巨人
	event.remove({ output: 'zombie_extreme:juggernaut_suit_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:juggernaut_suit_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_suit_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:juggernaut_suit_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:juggernaut_suit_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_suit_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:juggernaut_suit_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:juggernaut_suit_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_suit_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'zombie_extreme:juggernaut_suit_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('zombie_extreme:juggernaut_suit_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:juggernaut_suit_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 凤翅明光铠
	event.remove({ output: 'max_armory:mingguang_armor_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('max_armory:mingguang_armor_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:mingguang_armor_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'max_armory:mingguang_armor_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('max_armory:mingguang_armor_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:mingguang_armor_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'max_armory:lamellar_armor_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('max_armory:lamellar_armor_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:mingguang_armor_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'max_armory:lamellar_armor_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('max_armory:lamellar_armor_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:mingguang_armor_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 将军
	event.remove({ output: 'apocalypsenow:army_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:army_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:army_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:army_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:army_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:army_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:army_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:army_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:army_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:army_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:army_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:army_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)


	// 特别行动
	event.remove({ output: 'apocalypsenow:spec_ops_helmet' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:spec_ops_helmet').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:spec_ops_helmet_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:helmet_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_helmet']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:spec_ops_chestplate' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:spec_ops_chestplate').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:spec_ops_chest_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:chest_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_chestplate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:spec_ops_leggings' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:spec_ops_leggings').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:spec_ops_leggings_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:leggings_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_leggings']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
	event.remove({ output: 'apocalypsenow:spec_ops_boots' })
	event.recipes.create
		.sequenced_assembly(
			// 输出物品
			[
				Item.of('apocalypsenow:spec_ops_boots').withChance(1), // 这将是JEI中显示的结果物品

			],
			// 输入物品
			'mryh:spec_ops_boots_permit',
			[
				// 序列步骤
				event.recipes.createDeploying(inter, [inter, 'mryh:boots_advanced_blueprint']),
				event.recipes.createPressing(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'apocalypsenow:un_armor_boots']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'mryh:unified_dimension_armor_plate']),
				event.recipes.createDeploying(inter, [inter, 'zombiekit:special_ceramics']),
				event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
				event.recipes.createDeploying(inter, [inter, 'minecraft:nether_star']),
				event.recipes.createCutting(inter, inter),
				event.recipes.createDeploying(inter, [inter, 'createaddition:capacitor']),
				event.recipes.createDeploying(inter, [inter, 'mryh:combined_seal']).keepHeldItem()
			])
		// 序列时显示中间物品
		.transitionalItem(inter)
		// 设置过渡物品和循环次数
		.loops(1)
})


// 动力合成
ServerEvents.recipes(event => {
	/*
		event.remove({ output: '' })
	event.recipes.create.mechanical_crafting('',
			[
				' DDD ',
				'DCBCD',
				'DBABD',
				'DCBCD',
				' DDD '
			],
			{
				A: '',
				B: '',
				C: '',
				D: ''
			})
	*/

	// 中国陆军
	event.remove({ output: 'apocalypsenow:chinese_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:chinese_army_helmet',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:helmet_advanced_blueprint',
			B: 'apocalypsenow:reinforced_armor_plate',
			C: 'apocalypsenow:china_tag',
			D: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:chinese_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:chinese_army_chestplate',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:chest_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:china_tag',
			D: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:chinese_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:chinese_army_leggings',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:leggings_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:china_tag',
			D: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:chinese_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:chinese_army_boots',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:boots_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:china_tag',
			D: 'minecraft:wooden_hoe'
		})


	// 俄罗斯陆军
	event.remove({ output: 'apocalypsenow:russian_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:russian_army_helmet',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'ECECE',
			' DDD '
		],
		{
			A: 'mryh:helmet_advanced_blueprint',
			B: 'apocalypsenow:reinforced_armor_plate',
			C: 'minecraft:diamond',
			D: 'apocalypsenow:russian_tag',
			E: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:russian_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:russian_army_chestplate',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:chest_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:russian_tag',
			D: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:russian_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:russian_army_leggings',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:leggings_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:russian_tag',
			D: 'apocalypsenow:armorplate'
		})
	event.remove({ output: 'apocalypsenow:russian_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:russian_army_boots',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:boots_advanced_blueprint',
			B: 'apocalypsenow:polyester',
			C: 'apocalypsenow:russian_tag',
			D: 'minecraft:snow_block'
		})


	// 美国陆军
	event.remove({ output: 'apocalypsenow:usa_armor_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:usa_armor_helmet',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'ECECE',
			' DDD '
		],
		{
			D: 'apocalypsenow:reinforced_armor_plate',
			C: 'minecraft:diamond',
			B: 'apocalypsenow:usa_tag',
			E: 'apocalypsenow:armorplate',
			A: 'mryh:helmet_advanced_blueprint'
		})
	event.remove({ output: 'apocalypsenow:usa_armor_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:usa_armor_chestplate',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			D: 'apocalypsenow:polyester',
			C: 'apocalypsenow:usa_tag',
			B: 'apocalypsenow:armorplate',
			A: 'mryh:chest_advanced_blueprint'
		})
	event.remove({ output: 'apocalypsenow:usa_armor_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:usa_armor_leggings',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			D: 'apocalypsenow:polyester',
			C: 'apocalypsenow:usa_tag',
			B: 'apocalypsenow:armorplate',
			A: 'mryh:leggings_advanced_blueprint'
		})
	event.remove({ output: 'apocalypsenow:usa_armor_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:usa_armor_boots',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			D: 'apocalypsenow:polyester',
			C: 'apocalypsenow:usa_tag',
			B: 'apocalypsenow:money',
			A: 'mryh:boots_advanced_blueprint'
		})


	// 活体
	event.remove({ output: 'spore:inf_helmet' })
	event.recipes.create.mechanical_crafting('spore:inf_helmet',
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'mryh:helmet_advanced_blueprint',
			B: 'spore:living_helmet',
			C: 'spore:plated_helmet'
		})
	event.remove({ output: 'spore:inf_chest' })
	event.recipes.create.mechanical_crafting('spore:inf_chest',
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'mryh:chest_advanced_blueprint',
			B: 'spore:living_chest',
			C: 'spore:plated_chest'
		})
	event.remove({ output: 'spore:inf_pants' })
	event.recipes.create.mechanical_crafting('spore:inf_pants',
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'mryh:leggings_advanced_blueprint',
			B: 'spore:living_pants',
			C: 'spore:plated_pants'
		})
	event.remove({ output: 'spore:inf_boots' })
	event.recipes.create.mechanical_crafting('spore:inf_boots',
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'mryh:boots_advanced_blueprint',
			B: 'spore:living_boots',
			C: 'spore:plated_boots'
		})


	// 甲质
	event.remove({ output: 'spore:plated_helmet' })
	event.recipes.create.mechanical_crafting('spore:plated_helmet',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:helmet_advanced_blueprint',
			B: 'spore:spine_fragment',
			C: 'pore:armor_fragment',
			D: 'spore:armor_plate'
		})
	event.remove({ output: 'spore:plated_chest' })
	event.recipes.create.mechanical_crafting('spore:plated_chest',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:chest_advanced_blueprint',
			B: 'spore:spine',
			C: 'spore:armor_fragment',
			D: 'spore:armor_plate'
		})
	event.remove({ output: 'spore:plated_pants' })
	event.recipes.create.mechanical_crafting('spore:plated_pants',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:leggings_advanced_blueprint',
			B: 'spore:spine_fragment',
			C: 'spore:armor_fragment',
			D: 'spore:armor_plate'
		})
	event.remove({ output: 'spore:plated_boots' })
	event.recipes.create.mechanical_crafting('spore:plated_boots',
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'mryh:boots_advanced_blueprint',
			B: 'spore:armor_fragment',
			C: 'spore:armor_plate'
		})


	// 血肉
	event.remove({ output: 'spore:living_helmet' })
	event.recipes.create.mechanical_crafting('spore:living_helmet',
		[
			' DDD ',
			'DCECD',
			'DEAED',
			'DCBCD',
			' DDD '
		],
		{
			A: 'mryh:helmet_advanced_blueprint',
			B: 'spore:cerebrum',
			C: 'spore:nerves',
			D: 'spore:mutated_fiber',
			E: 'spore:plated_muscle'
		})
	event.remove({ output: 'spore:living_chest' })
	event.recipes.create.mechanical_crafting('spore:living_chest',
		[
			' DDD ',
			'DCBCD',
			'DBABD',
			'DCECD',
			' DFD '
		],
		{
			A: 'mryh:chest_advanced_blueprint',
			B: 'spore:altered_spleen',
			C: 'spore:alveolic_sack',
			D: 'spore:plated_muscle',
			E: 'spore:living_core',
			F: 'spore:innards'
		})
	event.remove({ output: 'spore:living_pants' })
	event.recipes.create.mechanical_crafting('spore:living_pants',
		[
			'     ',
			' CBC ',
			' BAB ',
			' CBC ',
			'     '
		],
		{
			A: 'mryh:leggings_advanced_blueprint',
			B: 'spore:plated_muscle',
			C: 'spore:tendons'
		})
	event.remove({ output: 'spore:living_boots' })
	event.recipes.create.mechanical_crafting('spore:living_boots',
		[
			'     ',
			' CBC ',
			' BAB ',
			' CBC ',
			'     '
		],
		{
			A: 'mryh:boots_advanced_blueprint',
			B: 'spore:plated_muscle',
			C: 'spore:tendons'
		})

	// 加拿大陆军
	event.remove({ output: 'apocalypsenow:canadian_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:canadian_army_helmet',
		[
			'DLD',
			'DSD',
			' E '
		],
		{
			L: 'apocalypsenow:reinforced_armor_plate',
			S: 'apocalypsenow:canada_tag',
			D: 'apocalypsenow:armorplate',
			E: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:canadian_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:canadian_army_chestplate',
		[
			'LOL',
			'LSL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:canada_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:canadian_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:canadian_army_leggings',
		[
			'LSL',
			'LOL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:canada_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:canadian_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:canadian_army_boots',
		[
			'LOL',
			'SES',
			'   '
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:canada_tag',
			S: 'minecraft:quartz_block',
			E: 'mryh:boots_intermediate_blueprint'
		})


	// 墨西哥陆军
	event.remove({ output: 'apocalypsenow:mexican_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:mexican_army_helmet',
		[
			'DLD',
			'DSD',
			' E '
		],
		{
			L: 'apocalypsenow:reinforced_armor_plate',
			S: 'apocalypsenow:mexican_tag',
			D: 'apocalypsenow:armorplate',
			E: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:mexican_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:mexican_army_chestplate',
		[
			'LOL',
			'LSL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:mexican_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:mexican_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:mexican_army_leggings',
		[
			'LSL',
			'LOL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:mexican_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:mexican_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:mexican_army_boots',
		[
			'LOL',
			'SES',
			'   '
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:mexican_tag',
			S: 'minecraft:bone',
			E: 'mryh:boots_intermediate_blueprint'
		})


	// 日本陆军
	event.remove({ output: 'apocalypsenow:japanese_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:japanese_army_helmet',
		[
			'DLD',
			'DSD',
			' E '
		],
		{
			L: 'apocalypsenow:reinforced_armor_plate',
			S: 'apocalypsenow:japan_tag',
			D: 'apocalypsenow:armorplate',
			E: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:japanese_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:japanese_army_chestplate',
		[
			'LOL',
			'LSL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:japan_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:japanese_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:japanese_army_leggings',
		[
			'LSL',
			'LOL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:japan_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:japanese_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:japanese_army_boots',
		[
			'LOL',
			'SES',
			'   '
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:japan_tag',
			S: 'minecraft:bone',
			E: 'mryh:boots_intermediate_blueprint'
		})


	// 意大利陆军
	event.remove({ output: 'apocalypsenow:italian_bersaglieri_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:italian_bersaglieri_army_helmet',
		[
			'LOL',
			'DSD',
			' E '
		],
		{
			L: 'apocalypsenow:reinforced_armor_plate',
			O: 'minecraft:diamond',
			S: 'apocalypsenow:italian_tag',
			D: 'apocalypsenow:armorplate',
			E: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:italian_bersaglieri_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:italian_bersaglieri_army_chestplate',
		[
			'LOL',
			'LSL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:italian_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:italian_bersaglieri_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:italian_bersaglieri_army_leggings',
		[
			'LSL',
			'LOL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:italian_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:italian_bersaglieri_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:italian_bersaglieri_army_boots',
		[
			'LOL',
			'SES',
			'   '
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:italian_tag',
			S: 'minecraft:emerald',
			E: 'mryh:boots_intermediate_blueprint'
		})


	// 巴西陆军
	event.remove({ output: 'apocalypsenow:brazilian_army_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:brazilian_army_helmet',
		[
			'LOL',
			'DSD',
			' E '
		],
		{
			L: 'apocalypsenow:reinforced_armor_plate',
			O: 'minecraft:diamond',
			S: 'apocalypsenow:brazilian_tag',
			D: 'apocalypsenow:armorplate',
			E: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:brazilian_army_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:brazilian_army_chestplate',
		[
			'LOL',
			'LSL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:brazilian_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:brazilian_army_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:brazilian_army_leggings',
		[
			'LSL',
			'LOL',
			'LEL'
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:brazilian_tag',
			S: 'apocalypsenow:armorplate',
			E: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:brazilian_army_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:brazilian_army_boots',
		[
			'LOL',
			'SES',
			'   '
		],
		{
			L: 'apocalypsenow:polyester',
			O: 'apocalypsenow:brazilian_tag',
			S: 'minecraft:emerald',
			E: 'mryh:boots_intermediate_blueprint'
		})


	// 守卫者
	event.remove({ output: 'zombiekit:standard_tactical_helmet' })
	event.recipes.create.mechanical_crafting('zombiekit:standard_tactical_helmet',
		[
			"aca",
			"aba",
			"a a"
		],
		{
			a: 'zombiekit:plastics',
			b: 'minecraft:sponge',
			c: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:standard_tactical_chestplate' })
	event.recipes.create.mechanical_crafting('zombiekit:standard_tactical_chestplate',
		[
			"a a",
			"aba",
			"aca"
		],
		{
			a: 'zombiekit:cloth',
			b: 'zombiekit:special_steel_sheet',
			c: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:standard_tactical_leggings' })
	event.recipes.create.mechanical_crafting('zombiekit:standard_tactical_leggings',
		[
			"aca",
			"b b",
			"a a"
		],
		{
			a: 'zombiekit:cloth',
			b: 'zombiekit:special_steel_sheet',
			c: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:standard_tactical_boots' })
	event.recipes.create.mechanical_crafting('zombiekit:standard_tactical_boots',
		[
			"aca",
			"b b"
		],
		{
			a: 'minecraft:leather',
			b: 'zombiekit:rubber',
			c: 'mryh:boots_intermediate_blueprint'
		})


	// 破坏者
	event.remove({ output: 'apocalypsenow:anarchy_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:anarchy_helmet',
		[
			"cac",
			"bdb",
			" b "
		],
		{
			a: 'minecraft:white_dye',
			b: 'apocalypsenow:plastic',
			c: 'apocalypsenow:plasticplate',
			d: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:anarchy_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:anarchy_chestplate',
		[
			"aba",
			"ada",
			"aca"
		],
		{
			a: 'minecraft:leather',
			b: 'minecraft:black_dye',
			c: 'minecraft:iron_nugget',
			d: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:anarchy_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:anarchy_leggings',
		[
			"bdb",
			"aca",
			"a a"
		],
		{
			a: 'minecraft:leather',
			b: 'minecraft:black_dye',
			c: 'minecraft:iron_nugget',
			d: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:anarchy_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:anarchy_boots',
		[
			"aca",
			"b b"
		],
		{
			a: 'minecraft:yellow_dye',
			b: 'minecraft:leather',
			c: 'mryh:boots_intermediate_blueprint'
		})


	// 巡查者
	event.remove({ output: 'apocalypsenow:jet_pilot_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:jet_pilot_helmet',
		[
			"ada",
			"aba",
			"c c"
		],
		{
			a: 'minecraft:iron_ingot',
			b: 'minecraft:glass_pane',
			c: 'apocalypsenow:electrical_scrap',
			d: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:jet_pilot_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:jet_pilot_chestplate',
		[
			"a a",
			"bcb",
			"aaa"
		],
		{
			a: 'apocalypsenow:polyester',
			b: 'apocalypsenow:foam',
			c: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:jet_pilot_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:jet_pilot_leggings',
		[
			"aba",
			"bcb",
			"a a"
		],
		{
			a: 'apocalypsenow:polyester',
			b: 'apocalypsenow:foam',
			c: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:jet_pilot_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:jet_pilot_boots',
		[
			"aca",
			"b b"
		],
		{
			a: 'apocalypsenow:foam',
			b: 'apocalypsenow:polyester',
			c: 'mryh:boots_intermediate_blueprint'
		})


	// 探险者
	event.remove({ output: 'zombiekit:skiing_helmet' })
	event.recipes.create.mechanical_crafting('zombiekit:skiing_helmet',
		[
			"aaa",
			"beb",
			"c d"
		],
		{
			a: 'zombiekit:rubber',
			b: 'zombiekit:plastics',
			c: 'minecraft:glass',
			d: 'zombiekit:cloth',
			e: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:skiing_chestplate' })
	event.recipes.create.mechanical_crafting('zombiekit:skiing_chestplate',
		[
			"b b",
			"bab",
			"bcb"
		],
		{
			a: 'minecraft:sponge',
			b: 'zombiekit:cloth',
			c: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:skiing_leggings' })
	event.recipes.create.mechanical_crafting('zombiekit:skiing_leggings',
		[
			"bcb",
			"bab",
			"b b"
		],
		{
			a: 'minecraft:sponge',
			b: 'zombiekit:cloth',
			c: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'zombiekit:skiing_boots' })
	event.recipes.create.mechanical_crafting('zombiekit:skiing_boots',
		[
			"aca",
			"b b"
		],
		{
			a: 'zombiekit:cloth',
			b: 'zombiekit:rubber',
			c: 'mryh:boots_intermediate_blueprint'
		})


	// 拾荒者
	event.remove({ output: 'apocalypsenow:forestguard_helmet' })
	event.recipes.create.mechanical_crafting('apocalypsenow:forestguard_helmet',
		[
			'bcb',
			'aaa'
		],
		{
			a: 'minecraft:rabbit_hide',
			b: 'minecraft:lime_dye',
			c: 'mryh:helmet_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:forestguard_chestplate' })
	event.recipes.create.mechanical_crafting('apocalypsenow:forestguard_chestplate',
		[
			'ada',
			'bbb',
			'cbc'
		],
		{
			a: 'minecraft:rabbit_hide',
			b: 'apocalypsenow:cloth',
			c: 'minecraft:lime_dye',
			d: 'mryh:chest_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:forestguard_leggings' })
	event.recipes.create.mechanical_crafting('apocalypsenow:forestguard_leggings',
		[
			'aba',
			'bdb',
			'c c'
		],
		{
			a: 'minecraft:rabbit_hide',
			b: 'apocalypsenow:cloth',
			c: 'minecraft:lime_dye',
			d: 'mryh:leggings_intermediate_blueprint'
		})
	event.remove({ output: 'apocalypsenow:forestguard_boots' })
	event.recipes.create.mechanical_crafting('apocalypsenow:forestguard_boots',
		[
			'aca',
			'b b'
		],
		{
			a: 'minecraft:rabbit_hide',
			b: 'minecraft:leather',
			c: 'mryh:boots_intermediate_blueprint'
		})
})