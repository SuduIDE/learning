const yosay = require('yosay')

function say(message) {
    console.log(yosay("I say: " + message))
}

module.exports = {
    say
}