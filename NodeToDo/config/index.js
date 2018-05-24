var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds135290.mlab.com:35290/nodetodosample'
        //mongodb://<dbuser>:<dbpassword>@ds135290.mlab.com:35290/nodetodosample
    }
}