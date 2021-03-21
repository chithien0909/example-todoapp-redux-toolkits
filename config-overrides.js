const { alias } = require("react-app-rewire-alias")
const path = require('path')
module.exports = function overide(config) {
    alias({
        '@src': __dirname + "/src",
        '@components': __dirname + "/src/components",
        '@app': __dirname + "/src/app",
        '@features': __dirname + "/src/features",
    })(config)

    return config
} 