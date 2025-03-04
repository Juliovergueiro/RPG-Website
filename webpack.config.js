const path = require('path');

module.exports = {
    entry: './script/index.js',  // Your main JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'script')
    },
    mode: 'development'
};