

module.exports = {
    TYPES:                      require('./types'),
    DefaultBlockRenderMap:      require('./blockRenderMap'),

    insertTable:                require('./insertTable'),
    insertRow:                  require('./insertRow'),
    insertColumn:               require('./insertColumn'),

    removeRow:                  require('./removeRow'),
    removeColumn:               require('./removeColumn'),

    getTableForSelection:       require('./getTableForSelection'),
    getPositionForSelection:    require('./getPositionForSelection'),
    hasSelectionInTable:        require('./hasSelectionInTable'),

    handleKeyCommand:           require('./handleKeyCommand')
};