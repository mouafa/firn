#!/usr/bin/env node

const manar = require('./main2')
const log = require('./src/lib/log')

var program = require('commander')

program
  .version('0.1.0')
  .arguments('<url>')
  .option('-c, --config [path]', 'Remove recursively')
  .option('-u, --update', 'Update specefic Shots')
  .option('-a, --all', 'Update all Shots')
  .action(function(url, config) {
    if (!url.startsWith('http')) url = `https://${url}`

    console.log('url ', url)
    console.log('config ', program.config)
    manar(url)
      .then(e => {
        log('👍 ALL GOOD')
      })
      .catch(e => {
        log('😦 Oh No! ', e)
        process.exit(1)
      })
  })

program.parse(process.argv)
