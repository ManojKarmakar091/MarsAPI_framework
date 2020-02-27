var inireaders = function () {
    try {
        var filename = '../Config/testConfig.ini'
        var iniparser = require('./node_modules/iniparser');
        var config = iniparser.parseSync(filename)

        this.configer = () => {
            return config;
        }
    }
    catch (Error) {
        console.log(filename + ": File not found");
    };

}

    module.exports = new inireaders(); 