ServerEvents.recipes(event => {
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
    event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})
  }) //Remove's currently bugged functional storage drawers for modded woods. Use framed drawers instead.