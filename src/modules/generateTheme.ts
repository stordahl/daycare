import { generateCSS } from './generateCSS'
import { generatePHP } from './generatePHP'
import { Answers } from '../types/answers'
const inquirer = require('inquirer')
const path = require('path')

const generateTheme = () => {
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'themeName',
        message: '🍼 What would you like to name your child theme?',
        default: path.basename(process.cwd())
      },
      {
        type: 'text',
        name: 'authorName',
        message: '👶 Who is the Author of this child theme?',
        default: 'Author Name'
      },
      {
        type: 'text',
        name: 'themeDescription',
        message: '📝 Provide a Description for your theme',
        default: 'A simple description for my child theme'
      },
      {
        type: 'text',
        name: 'themeTemplate',
        message: '🧩 What is the template theme this child theme is using?',
        default: 'parent-theme'
      },
      {
        type: 'text',
        name: 'version',
        message: '🗂️  Set a version for your child theme',
        default: '1.0.0'
      },
      {
        type: 'list',
        name: 'license',
        message: '🗃️ What license would you like to give your Child Theme?',
        choices: [
          'GNU General Public License v2 or later',
          'MIT',
          'ISC',
          'Mozilla Public License v2'
        ],
        default: 'GNU General Public License v2 or later'
      },
      {
        type: 'text',
        name: 'textDomain',
        message: '🌐 Set the Text Domain for your child theme',
        default: path.basename(process.cwd())
      },
    ])
    .then((answers:Answers) => {
      Promise.all([
        generateCSS(answers),
        generatePHP()
      ])
      console.log('✨ child theme created ✨')
    })
}

export default generateTheme
