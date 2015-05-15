module.exports = {
    attributes: {
        sports: 'string',
        upperValue: 'float',
        lowerValue: 'float',

        mark: {
            type: 'integer',
            enum: [1, 2, 3, 4, 5]
        },
        gender: 'boolean',
        description: 'string',
        measure: 'string'
    }
}
