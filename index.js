var rc = require('rc');

var defaults = require('./defaults.json');
var conf = rc('bdlb', defaults);

if (!('env' in conf)) {
	conf.env = process.env.NODE_ENV || 'dev';
}

module.exports = conf;