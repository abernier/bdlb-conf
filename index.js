var fs = require('fs');
var ini = require('ini');

var defaults = ini.parse(fs.readFileSync(__dirname + '/defaults.ini', 'utf-8'));

var rc = require('rc');

module.exports = rc('bdlb', defaults);
