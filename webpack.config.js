const path = require('path');

module.exports = {
    entry: "./source/index.js",
    output:{
        path: path.resolve(__dirname, "public"),
        //__dirname : webpack.config.js의 경로
        filename: 'main.js'
        // npx webpack --config webpack.config.js or npx webpack
    }
}