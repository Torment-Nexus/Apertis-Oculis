ServerEvents.recipes(event => {
    //Remove the default recipe
    event.remove({id: 'explorerscompass:explorers_compass'})
    event.shaped('1x explorerscompass:explorerscompass',[
        'CEC',
        'LRL',
        'NLN']
        ,{
            C: 'minecraft:cobweb',
            E: 'minecraft:end_rod',
            L: 'minecraft:lodestone',
            R: 'minecraft:recovery_compass',
            N: 'minecraft:netherite_ingot'
        }
    )
  })