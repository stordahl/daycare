import { Answers } from '../types/answers'
const fs = require('fs-extra')

export async function generateCSS({ themeName,  authorName, themeDescription, themeTemplate, version, license, textDomain}:Answers) {
  
  const path = `${process.cwd()}/style.css`
  const css = `/*
  Theme Name:   ${themeName}
  Description:  ${themeDescription}
  Author:       ${authorName}
  Template:     ${themeTemplate}
  Version:      ${version}
  License:      ${license}
  Text Domain:  ${textDomain}
 */
  `
  try {
    await fs.outputFile(path, css)
  } catch (err) {
    console.error(err)
  }
}
