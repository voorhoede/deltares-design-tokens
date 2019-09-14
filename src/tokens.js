const lightColors = require('./colors-light')

const getColorTokens = (category, colors) => Object.entries(colors)
    .map(([name, value]) => ({ type: 'color', category, name, value }))

module.exports = {
    props: [
        ...getColorTokens('light', lightColors)
    ]
}