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
exports.generatePHP = void 0;
const fs = require('fs-extra');
function generatePHP() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = `${process.cwd()}/functions.php`;
        const php = `<?php
  add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
    function my_theme_enqueue_styles() {
        wp_enqueue_style( 'child-style', get_stylesheet_uri(),
            array( 'parenthandle' ), 
            wp_get_theme()->get('Version') // this only works if you have Version in the style header
        );
    }

    /*
      If the parent theme loads its style using a function starting with get_stylesheet, 
      such as get_stylesheet_directory() and get_stylesheet_directory_uri(), comment out 
      the block above & uncomment the block below
    */

  /* add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
    function my_theme_enqueue_styles() {
        $parenthandle = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
        $theme = wp_get_theme();
        wp_enqueue_style( $parenthandle, get_template_directory_uri() . '/style.css', 
            array(),  // if the parent theme code has a dependency, copy it to here
            $theme->parent()->get('Version')
        );
        wp_enqueue_style( 'child-style', get_stylesheet_uri(),
            array( $parenthandle ),
            $theme->get('Version') // this only works if you have Version in the style header
        );
    } */
  `;
        try {
            yield fs.outputFile(path, php);
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.generatePHP = generatePHP;
//# sourceMappingURL=generatePHP.js.map