"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCSS = void 0;
const fs = require('fs-extra');
function generateCSS({ themeName, authorName, themeDescription, themeTemplate, version, license, textDomain }) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${process.cwd()}/style.css`;
        const css = `/*
  Theme Name:   ${themeName}
  Description:  ${themeDescription}
  Author:       ${authorName}
  Template:     ${themeTemplate}
  Version:      ${version}
  License:      ${license}
  Text Domain:  ${textDomain}
 */
  `;
        try {
            yield fs.outputFile(path, css);
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.generateCSS = generateCSS;
//# sourceMappingURL=generateCSS.js.map