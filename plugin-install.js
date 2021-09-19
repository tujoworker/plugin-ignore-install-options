const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { version } = require('./package.json')

const file = path.resolve(`./ignore-install-options-${version}.js`)

fs.copyFile('./index.js', file, (error) => {
  if (error) {
    throw error
  }

  exec(`yarn plugin import ${file}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`)
      return // stop here
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return // stop here
    }

    fs.rmSync(file)
  })
})
