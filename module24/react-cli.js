const yargs = require('yargs')
const fs = require('fs')
const path = require('path')
const camelCase = require('camelcase')
const chalk = require('chalk')

const errorColor = chalk.red.bold
const successColor = chalk.green.bold

const argv = yargs
    .option('functional', { alias: 'f'})
    .demandOption(['functional'], errorColor('Option should be passed!'))
    .command(['$0 <filename>'], 'Creates react component', {}, (yargs) => {
        const filepath = path.resolve(`${camelCase(yargs.filename)}.js`)
        const res = 
`import React from 'react';

export const ${camelCase(yargs.filename)} = (props) => {
  return (
    <div>${yargs.filename} works</div>
  )
}
`
        fs.writeFile(filepath, res, (err) => {
        if (err) throw err
        console.log(`The file ${camelCase(yargs.filename)}.js has been ${successColor('saved')}!`)
      })
    })
    .demandCommand(1, 'At least 1 command should be passed!')
    .argv