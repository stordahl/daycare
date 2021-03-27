"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateCSS_1 = require("./generateCSS");
const generatePHP_1 = require("./generatePHP");
const inquirer = require('inquirer');
const path = require('path');
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
            message: '🗂️ Set a version for your child theme',
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
        .then((answers) => {
        console.log('🖨️  creating files...');
        Promise.all([
            generateCSS_1.generateCSS(answers),
            generatePHP_1.generatePHP()
        ]);
    })
        .then(() => {
        console.log('✨ child theme created ✨');
    });
};
exports.default = generateTheme;
//# sourceMappingURL=generateTheme.js.map