if (feature("diesel generators are not dyesel generators")) {
  // createdieselgenerators:diesel_engine_fuel_[slow/fast]_[strong/weak]_[slow/fast]_burn
  ServerEvents.tags("fluid", (event) => {
    event.add(
      "createdieselgenerators:diesel_engine_fuel_slow_weak_fast_burn",
      "milk"
    );
  });
}

if (feature("Remove createdieselgenerators things we dont need")) {
  removeItems([
    "createdieselgenerators:chemical_sprayer",
    "createdieselgenerators:chemical_sprayer_lighter",
    "createdieselgenerators:chip_wood_block",
    "createdieselgenerators:chip_wood_slab",
    "createdieselgenerators:chip_wood_stairs",
    "createdieselgenerators:engine_piston",
    "createdieselgenerators:engine_silencer",
    "createdieselgenerators:lighter",
    "createdieselgenerators:oil_scanner",
    "createdieselgenerators:large_diesel_engine",
    "createdieselgenerators:pumpjack_bearing",
    "createdieselgenerators:pumpjack_head",
    "createdieselgenerators:pumpjack_crank",
    "createdieselgenerators:canister",
    "createdieselgenerators:asphalt_block",
    "createdieselgenerators:asphalt_slab",
    "createdieselgenerators:asphalt_stairs",
    "createdieselgenerators:kelp_handle",
    "createdieselgenerators:kelp_handle",
  ]);
}

if (feature('add recipes for createdieselgenerators')) {
  addShaped('createdieselgenerators:diesel_engine', [' b ','sfs',' c '],{
    b: 'create:brass_casing',
    c: 'create:copper_casing',
    s: 'create:shaft',
    f: 'minecraft:furnace',
  })
}

if (feature('Ethanol')) {
  removeRecipe({id: 'createdieselgenerators:basin_fermenting/fermentable'})
  //createdieselgenerators:ethanol
  addFermenting(['100mb kubejs:fermented_goop'], ['minecraft:bone_meal', '#forge:fermentable'], 800)

  addFermenting(['200mb kubejs:fermented_goop', '4x minecraft:white_dye'], ['2x minecraft:bone_meal', '250mb milk'])

  addDistillation(['10mb createdieselgenerators:ethanol', '10mb water'], ['20mb kubejs:fermented_goop'], 40,  temperature.heated)

}