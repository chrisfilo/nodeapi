'use strict';
const _ = require('lodash');
const chalk = require('chalk');
const opts = require('nomnom')
    .option('development', {
        abbr: 'dev',
        flag: true,
        help: 'Run with process.env.COINS_ENV set to \'development\''
    })
    .option('release', {
        abbr: 'rel',
        flag: true,
        help: 'Run with process.env.COINS_ENV set to \'release\''
    })
    .option('production', {
        abbr: 'prd',
        flag: true,
        help: 'Run with process.env.COINS_ENV set to \'production\''
    })
    .option('coinstac', {
        abbr: 'c',
        flag: true,
        help: 'Enable COINSTAC routes and plugins'
    })
    .option('without-new-relic', {
        abbr: 'w',
        flag: true,
        help: 'Do not start new relic agent'
    })
    .parse();

_.each(opts, (val, opt) => {
    if (_.contains(['development', 'release', 'production'], opt) && val) {
        process.env.COINS_ENV = opt;
    }
});

console.log(chalk.blue(`Running with COINS_ENV: ${process.env.COINS_ENV}`));

module.exports = opts;
