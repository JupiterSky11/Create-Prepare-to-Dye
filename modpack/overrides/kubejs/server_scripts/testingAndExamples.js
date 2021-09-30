settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logErroringRecipes = true

console.info('initiating create scripts...')
onEvent('recipes', event => {
    event.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'minecraft:potion',
            "type": "forge:nbt",
            "nbt": {
                "Potion": "minecraft:harming"
            }
        },
        "output": {
            "item": 'minecraft:white_concrete',
            "count": 6
        },
        "mana": 24000,
        "catalyst": {
            "type": "state",
            "name": "minecraft:furnace",
            "properties": {
                "lit": "true",
                facing: 'north'
            }
        }
    })

    if (feature('Adapting flour and dough recipes')) {
        event.remove({ id: 'create:crafting/appliances/dough' })
    }
    //examples
    addMixing('1x white_concrete', '5x #forge:stone')
    addMixing(Item.of('2x minecraft:white_concrete'), Ingredient.of('2x #forge:stone'))
    addMixing(Item.of('3x minecraft:white_concrete'), {
        "tag": "forge:stone",
        "amount": 42
    })
    addMixing(['4x minecraft:white_concrete', {
        "item": "minecraft:gray_concrete",
        "count": 4
    }], ['minecraft:gray_concrete', 'minecraft:stick'])
    addCrushing(['1x minecraft:white_concrete', {
        "item": "minecraft:gray_concrete",
        "count": 4,
        "chance": "0.3"
    }, Item.of('minecraft:stick').withChance(0.4)], ['minecraft:gray_concrete', 'minecraft:stick'])
    addMixing('5x minecraft:white_concrete%5', '5x #forge:stone') //shouldn't work, but shouldn't break
    addCrushing('2x minecraft:white_concrete %5', '5x #forge:stone')
    addInfusion('white_concrete', 'gray_concrete')
    addInfusion('2x white_concrete', 'gray_concrete', 10000, 'minecraft:furnace')
    addInfusion('3x white_concrete', 'stick', 10000, 'minecraft:furnace[lit=true]')
    addInfusion('3x white_concrete', 'stick', 10000, '#forge:cobblestone')
    addAltar('54x minecraft:white_concrete', ['create:wheat_flour', '#forge:stone'])
    addPurify('minecraft:furnace[lit=true]', '#forge:stone')
    // addCrushing('minecraft:white_concrete %50',)

    // addInfusion('2x minecraft:white_concrete','minecraft:gray_concrete')
    // addInfusion('2x minecraft:white_concrete','2x minecraft:gray_concrete')
    // addInfusion('2x minecraft:white_concrete','#forge:stone')
    // addInfusion('2x minecraft:white_concrete','2x #forge:stone')
    // addMixing('minecraft:white_concrete','2x minecraft:gray_concrete')
    // addCrushing(Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'),'#forge:stone')
    // addInfusion(Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), '#forge:stone')
    // addCrushing('2x minecraft:white_concrete%25',Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'))
    // addCrushing('2x minecraft:white_concrete%65',{
    //     "item": 'minecraft:potion',
    //     "type": "forge:nbt",
    //     "nbt": {
    //         "Potion": "minecraft:harming"
    //     }
    // })
    // addCrushing({
    //     "item": 'minecraft:white_concrete',
    //     "count": 6
    // },'minecraft:gray_concrete')
    // addInfusion('54x minecraft:white_concrete', Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'))
    // addInfusion('54x minecraft:white_concrete', Item.of('minecraft:enchanted_book', { StoredEnchantments: [{ lvl: 1, id: "minecraft:sweeping" }] }))
    // addInfusion('54x minecraft:white_concrete', '#forge:stone')
    // addInfusion('minecraft:white_concrete', '2x minecraft:oak_leaves', 2000, 'minecraft:furnace@lit=false,facing=north')
    // addPurify('minecraft:white_concrete', '#forge:stone');
    // addElvenTrade(['12x minecraft:white_concrete', 'minecraft:gray_concrete'], ['#forge:stone', 'create:wheat_flour'])
    // addElvenTrade('4x minecraft:white_concrete', '#forge:stone')
    // addApothecary('minecraft:white_concrete', ['minecraft:gray_concrete', '#forge:stone'])
    // addTerraPlate('minecraft:white_concrete', 'minecraft:gray_concrete', 1)
    // addCrushing('minecraft:white_concrete', 'minecraft:gray_concrete')
    // addCrushing('22x minecraft:white_concrete %4', '#forge:stone', 3000)
    // addCrushing(Item.of('6x minecraft:white_concrete').withChance(0.32).item, '#forge:stone', 3000)
    // addCrushing('4x minecraft:white_concrete %25', '#forge:stone', 3000)
    // addCutting('minecraft:white_concrete', '#forge:stone', 3000)
    // addMilling(['minecraft:white_concrete', 'minecraft:white_concrete %25'], 'minecraft:gray_concrete', 3000)
    // addMixing('minecraft:white_concrete', '4x #forge:stone', temperature.heated)
    // addMixing('minecraft:white_concrete', '4x minecraft:gray_concrete', temperature.heated)
    // addDeploying('minecraft:white_concrete', '#forge:stone', 'minecraft:gray_concrete')
    // addDeploying('minecraft:white_concrete', '#forge:stone', 'create:wheat_flour', 2000)
    // addDeploying('minecraft:white_concrete', '#forge:stone', Item.of('minecraft:potion', '{Potion:"minecraft:harming"}'), 2000)
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', Fluid.of('minecraft:water', 250))
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', {
    //     "fluid": "create:potion",
    //     "nbt": {
    //         "Bottle": "REGULAR",
    //         "Potion": "minecraft:strength"
    //     },
    //     "amount": 25
    // })
    // addFilling('minecraft:white_concrete', 'minecraft:gray_concrete', '125 x ~minecraft:lava')
    // '250 mb fluid:forge:milk'
})

onEvent('item.tags', event => {
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

