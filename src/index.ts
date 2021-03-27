#!/usr/bin/env node
const inquirer = require('inquirer')
const fs = require('fs')
import generateTheme from './modules/generateTheme'

const existingCSS = fs.existsSync('style.css')
const existingFunctions = fs.existsSync('functions.php')

if (existingCSS || existingFunctions) {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'It looks like you already have a child theme in this directory. Would you like to overwrite it?',
        default: false
      }
    ])
    .then(( answers:any ) => {
      answers.overwrite ? generateTheme() : console.log("Goodbye! 👋 ")
    })
} else {
  generateTheme()
}



