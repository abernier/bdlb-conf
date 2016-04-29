#!/usr/bin/env node
var properties = require('tea-properties');
var argv = require('optimist')
      .usage('Get config value.\nUsage: $0 <key>')

      .demand(1)

      .argv
    ;

var conf = require('..');

var key = argv._[0] || "";

value = properties.get(conf, key);
if (!value) {
	console.error("key '%s' not found", key);
	process.exit(1);
	return;
}

console.log(value);