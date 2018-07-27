switch (process.env.NODE_ENV){
    case 'local':
    console.log('---- LOCAL ----');
    module.exports = require('./config/webpack.dev.js');
    break

}