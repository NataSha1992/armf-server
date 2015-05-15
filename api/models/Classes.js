module.exports = {
    attributes: {
        name: 'string',
        people: {
            collection: 'pupils',
            via: 'study'
        }
    }
}
