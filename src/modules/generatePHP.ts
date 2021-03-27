const fs = require('fs-extra')

export async function generatePHP(){
  const path = `${process.cwd()}/functions.php`
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
  `
  try {
    await fs.outputFile(path, php)
  } catch (err) {
    console.error(err)
  }
}