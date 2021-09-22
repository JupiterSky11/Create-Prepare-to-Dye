import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.IIngredientWithAmount;
import mods.botania.Orechid;

//flour stuffs
craftingTable.removeByName("create:crafting/appliances/dough");
Recipes.addInfusion(<item:create:dough>*2,<item:create:wheat_flour>,<block:minecraft:blue_stained_glass>,1000);
Recipes.addItemExplosion([(<item:create:wheat_flour>*8).weight(50)],[<tag:items:forge:crops/wheat>],1,50);



//removing zinc
// Orechid.removeOreWeight(state as MCBlockState) as void

Orechid.main.removeOreWeight(<blockstate:create:zinc_ore>);
<item:create:zinc_ingot>.removeAndReplace(<item:minecraft:iron_ingot>);

[
    <item:create:zinc_nugget>,
    <item:create:crushed_zinc_ore>,
    <item:create:zinc_block>,
    <item:create:zinc_ore>
].remove();
Recipes.removeMix(<item:create:brass_ingot>);
Recipes.addMix(<item:create:brass_ingot>, "heated",[<tag:items:forge:ingots/copper>,<tag:items:forge:ingots/iron>]);
//andesite alloy
<item:create:andesite_alloy>.removeRecipe();
<item:create:andesite_alloy>.shapeless([
    <item:minecraft:andesite>,<item:minecraft:iron_nugget>,<item:minecraft:andesite>,<item:minecraft:iron_nugget>
]);
<recipetype:create:mixing>.removeRecipe(<item:create:andesite_alloy>);
Recipes.addFluidToItem([<item:create:andesite_alloy>],[<tag:items:forge:ingots>,<tag:items:forge:andesite>],<fluid:contenttweaker:acid>,0.1);
Recipes.addMix(<item:create:andesite_alloy>,"none",[<item:minecraft:iron_nugget>,<item:minecraft:iron_nugget>,<item:minecraft:andesite>]);
Recipes.addMix(<item:create:andesite_alloy>,"none",[<tag:items:forge:nuggets/manasteel>,<item:minecraft:andesite>]);
Recipes.addMix(<item:create:andesite_alloy>,"none",[<tag:items:forge:nuggets/copper>,<item:minecraft:andesite>,<item:minecraft:andesite>]);
Recipes.addTrade([<item:create:andesite_alloy>*2],[<tag:items:forge:nuggets/manasteel>,<tag:items:forge:nuggets/manasteel>,<item:minecraft:andesite>,<item:minecraft:bread>]);
//brass
Recipes.addMix(<item:create:brass_ingot>*3, "heated",[<tag:items:forge:ingots/copper>*2,<tag:items:forge:ingots/iron>*3,<tag:items:forge:ingots/gold>]);
Recipes.removeMix(<item:create:crushed_brass>);
Recipes.addMix(<item:create:crushed_brass>*2, "heated",[<item:create:crushed_copper_ore>*4,<item:create:crushed_iron_ore>]);
Recipes.addMix(<item:create:crushed_brass>*2, "heated",[<item:create:crushed_copper_ore>,<item:create:crushed_iron_ore>,<tag:items:forge:nuggets/manasteel>]);
Recipes.addMix(<item:create:crushed_brass>*2, "heated",[<item:create:crushed_copper_ore>,<tag:items:forge:nuggets/manasteel> * 9]);
Recipes.addTrade([<item:create:crushed_brass>],[<tag:items:forge:ingots/copper>,<item:minecraft:bread>]);
Recipes.addItemExplosion([(<item:minecraft:redstone>*2).weight(25),(<item:create:crushed_brass>*4).weight(75)],[<tag:items:forge:dusts/mana>,<tag:items:create:crushed_ores/iron>,<tag:items:create:crushed_ores/copper>]);

//cooper recipes
Recipes.addDeploy([<item:create:copper_nugget>],<item:minecraft:gold_nugget>,<item:minecraft:redstone>);
var goldMaker = <recipetype:create:sequenced_assembly>.builder("seq_copper_gold")
    .transitionTo(<item:minecraft:gold_ingot>.withTag({"gold in process": 1 as int}))
    .require(<item:minecraft:gold_ingot>)
    .loops(4)
    .addOutput(<item:create:copper_ingot>, 9)
    .addOutput(<item:minecraft:brick>, 1)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:redstone>));
<recipetype:create:sequenced_assembly>.addRecipe(goldMaker);
Recipes.shaped({
    <item:create:copper_ore>: [
        [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>],
        [<tag:items:forge:dusts/redstone>, <tag:items:forge:ores>, <tag:items:forge:dusts/redstone>],
        [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>]
    ]
});
Recipes.addItemExplosion([<item:create:copper_ore>.weight(5),<item:minecraft:stone>.weight(3)],[<tag:items:forge:ores>*8,<tag:items:forge:dusts/redstone>],8);

<item:create:copper_ore>.addTip("Does not naturally occur, has to be crafted");
Recipes.addMix(<item:create:copper_ore>*3,"heated",[<tag:items:forge:dusts/redstone>*9,<tag:items:forge:ores>,<tag:items:forge:stone>]);
// <recipetype:pneumaticcraft:pressure_chamber>.addRecipe("redstone_copper_pressure", [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8],[<item:create:copper_ore>*5,<item:minecraft:stone> *3] , 2.5);
// Recipes.addPressureChamber(
//     [<item:create:copper_ore>*5,<item:minecraft:stone> *3],
//     [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8], 2.5
// ); 

<recipetype:create:milling>.removeByName("create:milling/sand");
<recipetype:create:milling>.removeByName("create:milling/diorite");
Recipes.addMilling([
    <item:create:limesand>,
    <item:create:limesand> % 50,
],<tag:items:forge:sand/colorless>);

for millRecipe in <recipetype:create:milling>.getAllRecipes(){
    if (millRecipe.output.amount == 1){
        Recipes.addMilling([millRecipe.output*2],millRecipe.ingredients[0], 100);
        <recipetype:create:milling>.removeByName(millRecipe.id);
    }
}
///
// //temp recipe for porting from zinc
// Recipes.addCrushing([
//     <item:minecraft:gold_nugget> % 50,
//     <item:minecraft:iron_nugget> % 25,
//     <item:create:copper_nugget> % 25,
//     <item:minecraft:andesite> % 10
// ],<tag:items:forge:ingots/zinc>);

//replase pwdered obsidian
<item:create:powdered_obsidian>.remove();
<recipetype:create:mixing>.removeByName("create:mixing/chromatic_compound");
Recipes.addMix(<item:create:chromatic_compound>,("superheated"),[<item:minecraft:obsidian>*3,<item:minecraft:glowstone_dust>*3,<item:create:polished_rose_quartz>]);
Recipes.addAltar(<item:create:chromatic_compound>,[<item:minecraft:obsidian>,<item:create:polished_rose_quartz>*2]);

// sweetroll stole
var sweetroll = <recipetype:create:sequenced_assembly>.builder("sweetbread")
     .transitionTo(<item:minecraft:bread>.withTag({"bread in process": 1 as int}))
     .require(<item:minecraft:bread>)
     .loops(1)
     .addOutput(<item:create:sweet_roll>, 1)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:sugar>))
     .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:minecraft:milk> * 250))
     .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:sugar>));
<recipetype:create:sequenced_assembly>.addRecipe(sweetroll);

<recipetype:create:filling>.removeByName("create:filling/sweet_roll");

Recipes.addCrushing([<item:create:rose_quartz>%80,<item:minecraft:black_dye>%80,<item:minecraft:rose_bush>%80],<item:minecraft:wither_rose>);

<item:create:tree_fertilizer>.remove(); //it's lame