ServerEvents.recipes(event => {
  event.custom({
    "type": "touhou_little_maid:altar_crafting",
    "output": {
      "type": "minecraft:item",
      "nbt": {
        "Item": {
          "id": "touhou_little_maid:favorability_tool_add",
          "Count": 1
        }
      }
    },
    "power": 2,
    "ingredients": [
      {
        "item": 'create:honeyed_apple'
      },
      {
        "item": 'create:honeyed_apple'
      },
      {
        "item": 'create:honeyed_apple'
      },
      {
        "item": 'create:honeyed_apple'
      },
      {
        "item": "minecraft:blaze_rod"
      },
      {
        "item": 'create:honeyed_apple'
      }
    ]
  });
  event.custom({
    "type": "touhou_little_maid:altar_crafting",
    "output": {
      "type": "minecraft:item",
      "nbt": {
        "Item": {
          "id": "touhou_little_maid:favorability_tool_reduce",
          "Count": 1
        }
      }
    },
    "power": 0.2,
    "ingredients": [
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:apple"
      },
      {
        "item": "minecraft:gold_ingot"
      },
      {
        "item": "minecraft:apple"
      }
    ]
  });
  event.custom({
    "type": "touhou_little_maid:altar_crafting",
    "output": {
      "type": "minecraft:item",
      "nbt": {
        "Item": {
          "id": 'touhou_little_maid:smart_slab_empty',
          "Count": 1
        }
      }
    },
    "power": 0.2,
    "ingredients": [
      {
        "item": 'touhou_little_maid:favorability_tool_add'
      },
      {
        "item": 'minecraft:paper'
      },
      {
        "item": 'mryh:medium_permession'
      },
      {
        "item": 'touhou_little_maid:ultramarine_orb_elixir'
      },
      {
        "item": 'touhou_little_maid:camera'
      },
      {
        "item": 'touhou_little_maid:wireless_io'
      }
    ]
  })
});
//删除原有高级枪械子弹合成方式
/*TaCZStartupEvents.recipeLoad((event) => {
  let output = [
    Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31"}'),
    Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31rip"}')
  ]
  output.forEach((item) => {
    return event.removeRecipe({ item });
  })
});*/
