function chars(string) {
    return string.length;
}

function words(string) {
    return string
        .split(' ')
        .filter(word => (word !== '-' && word !== '?' && word !== '!' && word !== ',' && word !== '.'))
        .length;
}

module.exports = { chars, words };