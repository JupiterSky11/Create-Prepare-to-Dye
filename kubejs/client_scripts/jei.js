// priority: 0

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);
if (global.itemsToHide == undefined) {
  global.itemsToHide = [
    "botania:conjuration_catalyst",
    "botania:alchemy_catalyst",
    "ae2:pattern_access_terminal",
    "ae2:matter_cannon",
    "ae2:item_storage_cell_1k",
    "ae2:magenta_smart_cable",
    "ae2:item_cell_housing",
    "ae2:1k_crafting_storage",
    "ae2:white_covered_dense_cable",
    "ae2:chiseled_quartz_stairs",
    "ae2:nether_quartz_hoe",
    "ae2:cable_anchor",
    "ae2:pink_covered_dense_cable",
    "ae2:orange_paint_ball",
    "ae2:brown_covered_dense_cable",
    "ae2:spatial_anchor",
    "ae2:quartz_pillar_wall",
    "ae2:portable_item_cell_64k",
    "ae2:memory_card_cyan",
    "ae2:black_paint_ball",
    "ae2:memory_card_red",
    "ae2:wireless_crafting_terminal",
    "ae2:fluix_shovel",
    "ae2:fluix_pickaxe",
    "ae2:red_smart_cable",
    "ae2:memory_card_black",
    "ae2:logic_processor_press",
    "ae2:sky_stone_small_brick",
    "ae2:small_quartz_bud",
    "ae2:blue_smart_cable",
    "ae2:smooth_quartz_slab",
    "ae2:light_gray_smart_dense_cable",
    "ae2:fluix_crystal",
    "ae2:portable_fluid_cell_256k",
    "ae2:lime_smart_cable",
    "ae2:drive",
    "ae2:mysterious_cube",
    "ae2:smooth_quartz_wall",
    "ae2:green_covered_dense_cable",
    "ae2:guide",
    "ae2:quartz_slab",
    "ae2:debug_item_gen",
    "ae2:light_blue_lumen_paint_ball",
    "ae2:256k_crafting_storage",
    "ae2:color_applicator",
    "ae2:energy_acceptor",
    "ae2:green_smart_cable",
    "ae2:brown_paint_ball",
    "ae2:formation_plane",
    "ae2:quartz_vibrant_glass",
    "ae2:yellow_glass_cable",
    "ae2:blue_smart_dense_cable",
    "ae2:cell_component_4k",
    "ae2:blue_lumen_paint_ball",
    "ae2:engineering_processor_press",
    "ae2:fluid_storage_cell_4k",
    "ae2:red_glass_cable",
    "ae2:memory_card_light_gray",
    "ae2:cyan_covered_dense_cable",
    "ae2:portable_fluid_cell_1k",
    "ae2:medium_quartz_bud",
    "ae2:cut_quartz_slab",
    "ae2:red_lumen_paint_ball",
    "ae2:portable_fluid_cell_4k",
    "ae2:charged_staff",
    "ae2:dark_monitor",
    "ae2:nether_quartz_axe",
    "ae2:view_cell",
    "ae2:cable_interface",
    "ae2:sky_stone_small_brick_stairs",
    "ae2:smooth_sky_stone_wall",
    "ae2:printed_logic_processor",
    "ae2:portable_item_cell_16k",
    "ae2:fluix_covered_dense_cable",
    "ae2:black_smart_cable",
    "ae2:conversion_monitor",
    "ae2:speed_card",
    "ae2:yellow_smart_dense_cable",
    "ae2:interface",
    "ae2:cell_component_16k",
    "ae2:smooth_sky_stone_chest",
    "ae2:smooth_sky_stone_slab",
    "ae2:ender_dust",
    "ae2:chest",
    "ae2:debug_card",
    "ae2:item_storage_cell_64k",
    "ae2:memory_card_blue",
    "ae2:black_glass_cable",
    "ae2:certus_quartz_shovel",
    "ae2:spatial_storage_cell_16",
    "ae2:charged_certus_quartz_crystal",
    "ae2:energy_card",
    "ae2:fluid_cell_housing",
    "ae2:crafting_pattern",
    "ae2:fluix_block",
    "ae2:purple_glass_cable",
    "ae2:pink_lumen_paint_ball",
    "ae2:quantum_entangled_singularity",
    "ae2:lime_lumen_paint_ball",
    "ae2:fluid_storage_cell_1k",
    "ae2:green_glass_cable",
    "ae2:energy_level_emitter",
    "ae2:name_press",
    "ae2:gray_covered_cable",
    "ae2:smooth_quartz_block",
    "ae2:light_blue_paint_ball",
    "ae2:lime_paint_ball",
    "ae2:nether_quartz_cutting_knife",
    "ae2:yellow_smart_cable",
    "ae2:redstone_p2p_tunnel",
    "ae2:yellow_lumen_paint_ball",
    "ae2:quartz_glass",
    "ae2:memory_card_white",
    "ae2:semi_dark_monitor",
    "ae2:item_storage_cell_256k",
    "ae2:certus_quartz_dust",
    "ae2:sky_stone_brick_wall",
    "ae2:chipped_budding_quartz",
    "ae2:black_smart_dense_cable",
    "ae2:certus_quartz_axe",
    "ae2:debug_eraser",
    "ae2:certus_quartz_pickaxe",
    "ae2:sky_stone_brick_stairs",
    "ae2:purple_covered_dense_cable",
    "ae2:black_covered_dense_cable",
    "ae2:portable_fluid_cell_16k",
    "ae2:portable_item_cell_1k",
    "ae2:debug_phantom_node",
    "ae2:white_smart_cable",
    "ae2:cable_bus",
    "ae2:portable_fluid_cell_64k",
    "ae2:basic_card",
    "ae2:flawed_budding_quartz",
    "ae2:orange_smart_cable",
    "ae2:green_lumen_paint_ball",
    "ae2:cut_quartz_wall",
    "ae2:gray_paint_ball",
    "ae2:quartz_fixture",
    "ae2:chiseled_quartz_wall",
    "ae2:fluix_sword",
    "ae2:crafting_unit",
    "ae2:pink_paint_ball",
    "ae2:16k_crafting_storage",
    "ae2:fluix_slab",
    "ae2:light_blue_covered_cable",
    "ae2:memory_card_lime",
    "ae2:spatial_io_port",
    "ae2:blue_paint_ball",
    "ae2:spatial_storage_cell_128",
    "ae2:light_p2p_tunnel",
    "ae2:nether_quartz_shovel",
    "ae2:magenta_glass_cable",
    "ae2:cyan_paint_ball",
    "ae2:light_gray_paint_ball",
    "ae2:charger",
    "ae2:lime_smart_dense_cable",
    "ae2:certus_quartz_cutting_knife",
    "ae2:network_tool",
    "ae2:smooth_quartz_stairs",
    "ae2:purple_smart_dense_cable",
    "ae2:gray_covered_dense_cable",
    "ae2:fluix_smart_dense_cable",
    "ae2:light_gray_covered_dense_cable",
    "ae2:light_blue_smart_dense_cable",
    "ae2:damaged_budding_quartz",
    "ae2:crafting_card",
    "ae2:certus_quartz_crystal",
    "ae2:sky_stone_block",
    "ae2:fluix_stairs",
    "ae2:memory_card_green",
    "ae2:smooth_sky_stone_block",
    "ae2:cyan_covered_cable",
    "ae2:matrix_frame",
    "ae2:light_gray_glass_cable",
    "ae2:blue_covered_cable",
    "ae2:fluix_dust",
    "ae2:fe_p2p_tunnel",
    "ae2:sky_stone_wall",
    "ae2:fluix_covered_cable",
    "ae2:cut_quartz_stairs",
    "ae2:meteorite_compass",
    "ae2:brown_glass_cable",
    "ae2:debug_energy_gen",
    "ae2:green_covered_cable",
    "ae2:memory_card_magenta",
    "ae2:cyan_glass_cable",
    "ae2:magenta_lumen_paint_ball",
    "ae2:wireless_booster",
    "ae2:light_detector",
    "ae2:certus_quartz_hoe",
    "ae2:portable_item_cell_256k",
    "ae2:orange_covered_dense_cable",
    "ae2:entropy_manipulator",
    "ae2:cut_quartz_block",
    "ae2:calculation_processor_press",
    "ae2:dense_energy_cell",
    "ae2:debug_replicator_card",
    "ae2:brown_smart_cable",
    "ae2:export_bus",
    "ae2:light_gray_smart_cable",
    "ae2:red_paint_ball",
    "ae2:quartz_brick_stairs",
    "ae2:controller",
    "ae2:quartz_bricks",
    "ae2:yellow_covered_cable",
    "ae2:me_p2p_tunnel",
    "ae2:gray_smart_cable",
    "ae2:certus_quartz_sword",
    "ae2:light_gray_lumen_paint_ball",
    "ae2:cyan_smart_cable",
    "ae2:capacity_card",
    "ae2:quartz_wall",
    "ae2:monitor",
    "ae2:biometric_card",
    "ae2:magenta_covered_cable",
    "ae2:sky_stone_tank",
    "ae2:blank_pattern",
    "ae2:crafting_accelerator",
    "ae2:fluix_pearl",
    "ae2:64k_crafting_storage",
    "ae2:quantum_link",
    "ae2:calculation_processor",
    "ae2:cell_component_64k",
    "ae2:brown_lumen_paint_ball",
    "ae2:spatial_cell_component_2",
    "ae2:red_covered_cable",
    "ae2:paint",
    "ae2:inscriber",
    "ae2:creative_item_cell",
    "ae2:purple_paint_ball",
    "ae2:memory_card",
    "ae2:crafting_monitor",
    "ae2:magenta_smart_dense_cable",
    "ae2:fuzzy_card",
    "ae2:red_smart_dense_cable",
    "ae2:yellow_paint_ball",
    "ae2:fluid_storage_cell_16k",
    "ae2:nether_quartz_sword",
    "ae2:level_emitter",
    "ae2:flawless_budding_quartz",
    "ae2:sky_stone_stairs",
    "ae2:orange_smart_dense_cable",
    "ae2:printed_silicon",
    "ae2:inverter_card",
    "ae2:quartz_block",
    "ae2:wireless_access_point",
    "ae2:brown_smart_dense_cable",
    "ae2:fluid_p2p_tunnel",
    "ae2:debug_cube_gen",
    "ae2:purple_lumen_paint_ball",
    "ae2:light_blue_covered_dense_cable",
    "ae2:molecular_assembler",
    "ae2:quantum_ring",
    "ae2:orange_covered_cable",
    "ae2:red_covered_dense_cable",
    "ae2:magenta_paint_ball",
    "ae2:spatial_storage_cell_2",
    "ae2:stonecutting_pattern",
    "ae2:4k_crafting_storage",
    "ae2:sky_stone_small_brick_wall",
    "ae2:engineering_processor",
    "ae2:chiseled_quartz_slab",
    "ae2:lime_glass_cable",
    "ae2:sky_stone_chest",
    "ae2:item_p2p_tunnel",
    "ae2:gray_lumen_paint_ball",
    "ae2:portable_item_cell_4k",
    "ae2:pink_smart_cable",
    "ae2:quartz_growth_accelerator",
    "ae2:memory_card_pink",
    "ae2:cyan_smart_dense_cable",
    "ae2:cell_component_1k",
    "ae2:facade",
    "ae2:processing_pattern",
    "ae2:sky_stone_small_brick_slab",
    "ae2:void_card",
    "ae2:fluix_hoe",
    "ae2:gray_smart_dense_cable",
    "ae2:fluix_glass_cable",
    "ae2:quartz_brick_slab",
    "ae2:pink_smart_dense_cable",
    "ae2:white_smart_dense_cable",
    "ae2:nether_quartz_pickaxe",
    "ae2:item_storage_cell_4k",
    "ae2:gray_glass_cable",
    "ae2:cable_pattern_provider",
    "ae2:chiseled_quartz_block",
    "ae2:wireless_receiver",
    "ae2:quartz_fiber",
    "ae2:quartz_cluster",
    "ae2:pink_covered_cable",
    "ae2:debug_chunk_loader",
    "ae2:light_blue_glass_cable",
    "ae2:blue_glass_cable",
    "ae2:matter_ball",
    "ae2:large_quartz_bud",
    "ae2:quartz_brick_wall",
    "ae2:black_covered_cable",
    "ae2:purple_smart_cable",
    "ae2:cell_workbench",
    "ae2:orange_glass_cable",
    "ae2:smooth_sky_stone_stairs",
    "ae2:white_paint_ball",
    "ae2:yellow_covered_dense_cable",
    "ae2:vibration_chamber",
    "ae2:import_bus",
    "ae2:pattern_provider",
    "ae2:certus_quartz_wrench",
    "ae2:spatial_cell_component_16",
    "ae2:equal_distribution_card",
    "ae2:memory_card_gray",
    "ae2:light_blue_smart_cable",
    "ae2:silicon_press",
    "ae2:memory_card_brown",
    "ae2:creative_fluid_cell",
    "ae2:fluix_axe",
    "ae2:wireless_terminal",
    "ae2:memory_card_purple",
    "ae2:creative_energy_cell",
    "ae2:nether_quartz_wrench",
    "ae2:quartz_stairs",
    "ae2:light_gray_covered_cable",
    "ae2:white_covered_cable",
    "ae2:singularity",
    "ae2:formation_core",
    "ae2:cyan_lumen_paint_ball",
    "ae2:not_so_mysterious_cube",
    "ae2:purple_covered_cable",
    "ae2:green_smart_dense_cable",
    "ae2:sky_stone_brick_slab",
    "ae2:logic_processor",
    "ae2:brown_covered_cable",
    "ae2:fluid_storage_cell_256k",
    "ae2:cell_component_256k",
    "ae2:sky_dust",
    "ae2:spatial_pylon",
    "ae2:printed_calculation_processor",
    "ae2:orange_lumen_paint_ball",
    "ae2:memory_card_light_blue",
    "ae2:quartz_pillar_stairs",
    "ae2:blue_covered_dense_cable",
    "ae2:debug_meteorite_placer",
    "ae2:lime_covered_cable",
    "ae2:crank",
    "ae2:magenta_covered_dense_cable",
    "ae2:spatial_cell_component_128",
    "ae2:pink_glass_cable",
    "ae2:smithing_table_pattern",
    "ae2:item_storage_cell_16k",
    "ae2:redstone_card",
    "ae2:printed_engineering_processor",
    "ae2:green_paint_ball",
    "ae2:wrapped_generic_stack",
    "ae2:lime_covered_dense_cable",
    "ae2:memory_card_yellow",
    "ae2:io_port",
    "ae2:cable_energy_acceptor",
    "ae2:advanced_card",
    "ae2:annihilation_plane",
    "ae2:pattern_encoding_terminal",
    "ae2:white_lumen_paint_ball",
    "ae2:sky_stone_brick",
    "ae2:fluid_storage_cell_64k",
    "ae2:tiny_tnt",
    "ae2:sky_stone_slab",
    "ae2:quartz_pillar_slab",
    "ae2:condenser",
    "ae2:security_station",
    "ae2:black_lumen_paint_ball",
    "ae2:fluix_wall",
    "ae2:white_glass_cable",
    "ae2:annihilation_core",
    "ae2:memory_card_orange",
    "ae2:quartz_pillar",
    "create:tree_fertilizer",
    "create:propeller",
    "create:whisk",
    "create:brass_hand",
    "create:golden_sheet",
    "create:electron_tube",
    "feeding_trough",
    "quark:mushroom_trapped_chest",
    "quark:dark_oak_trapped_chest",
    "quark:acacia_trapped_chest",
    "quark:jungle_trapped_chest",
    "quark:birch_trapped_chest",
    "quark:spruce_trapped_chest",
    "quark:dark_oak_chest",
    "quark:acacia_chest",
    "quark:jungle_chest",
    "quark:birch_chest",
    "quark:spruce_chest",
    "quark:oak_chest",
    "quark:oak_trapped_chest",
    "quark:white_rune",
    "quark:orange_rune",
    "quark:magenta_rune",
    "quark:light_blue_rune",
    "quark:yellow_rune",
    "quark:lime_rune",
    "quark:pink_rune",
    "quark:gray_rune",
    "quark:light_gray_rune",
    "quark:cyan_rune",
    "quark:purple_rune",
    "quark:blue_rune",
    "quark:brown_rune",
    "quark:green_rune",
    "quark:red_rune",
    "quark:black_rune",
    "quark:rainbow_rune",
    "quark:blank_rune",
    "quark:clear_shard",
    "quark:dirty_shard",
    "quark:white_shard",
    "quark:orange_shard",
    "quark:magenta_shard",
    "quark:light_blue_shard",
    "quark:yellow_shard",
    "quark:lime_shard",
    "quark:pink_shard",
    "quark:gray_shard",
    "quark:light_gray_shard",
    "quark:cyan_shard",
    "quark:purple_shard",
    "quark:blue_shard",
    "quark:brown_shard",
    "quark:green_shard",
    "quark:red_shard",
    "quark:black_shard",
    "quark:music_disc_drips",
    "quark:music_disc_ocean",
    "quark:music_disc_rain",
    "quark:music_disc_wind",
    "quark:music_disc_fire",
    "quark:music_disc_clock",
    "quark:music_disc_crickets",
    "quark:music_disc_chatter",
    "quark:chute",
    "quark:forgotten_hat",
    "shulker_shell",
    "botania:elementium_ingot",
    "botania:elementium_block",
    "botania:elementium_nugget",
    "botania:elementium_shears",
    "botania:elementium_sword",
    "botania:elementium_axe",
    "botania:elementium_hoe",
    "botania:elementium_shovel",
    "botania:elementium_pickaxe",
    "botania:elementium_boots",
    "botania:elementium_leggings",
    "botania:elementium_chestplate",
    "botania:elementium_helmet",
    "botania:livingwood_bow",
    "botania:crafting_halo",
    "botania:pebble",
    "botania:living_root",
    "botania:red_strin",
  ];
}
JEIEvents.hideItems((event) => {
  global.itemsToHide.forEach((item) => {
    event.hide(item);
    console.log("hiding " + item);
  });
});
// onEvent('jei.remove.categories', event => {
// 	global.categoriesToHide.forEach(cat => {
// 		event.remove(cat)
// 	});
// })
