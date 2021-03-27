"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require('inquirer');
const fs = require('fs');
const generateTheme_1 = __importDefault(require("./modules/generateTheme"));
const existingCSS = fs.existsSync('style.css');
const existingFunctions = fs.existsSync('functions.php');
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
        .then((answers) => {
        answers.overwrite ? generateTheme_1.default() : console.log("Goodbye! 👋 ");
    });
}
else {
    generateTheme_1.default();
}
//# sourceMappingURL=index.js.map