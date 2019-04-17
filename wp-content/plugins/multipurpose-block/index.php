<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.thedotstore.com/
 * @since             1.0.0
 * @package           MultiPurpose_Block
 *
 * @wordpress-plugin
 * Plugin Name:       Multipurpose Gutenberg Block
 * Plugin URI:        https://www.thedotstore.com/
 * Description:       Single block containing multiple elements, It will enhance your website visibility and your needs. With this, you will change page layout (Fixed, Semi), set All Background Property (like  color, overlay, opacity, gradient style), set different Border, set height, width and set All Padding Property.
 * Version:           1.1
 * Author:            Thedotstore
 * Author URI:        https://profiles.wordpress.org/dots
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       multipurpose-block
 */
// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Register Style & Script for Frontend & Backend.
 */
function multipurpose_block_editor_assets()
{
    if ( is_admin() ) {
        // Scripts.
        wp_enqueue_script(
            'multipurpose_block_js', // Unique handle.
            plugins_url( 'js/block.build.js', __FILE__ ), // block.js: We register the block here.
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ) // Dependencies, defined above.
        );

        // Styles.
        wp_enqueue_style(
            'multipurpose_block_editor_css', // Handle.
            plugins_url( 'css/editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ) // Dependency  to include the CSS after it.
        );
    }

    if ( !is_admin() ) {
        wp_enqueue_style(
            'multipurpose_block_frontend_css', // Unique handle.
            plugins_url( 'css/style.css', __FILE__ ) // style.css: This file styles the block both in the editor and on the frontend.
        //array( 'wp-blocks' ) // Dependencies, defined above.
        );
    }

    register_block_type( 'md/multipurpose-gutenberg-block', array(
        'editor_script' => 'multipurpose_block_js',
        'editor_style' => 'multipurpose_block_editor_css',
        'style' => 'multipurpose_block_frontend_css'
    ));
    $attr = "abd";
    ?>
    <a class="<?php echo $attr; ?>">abc</a>

<?php
}

add_action( 'enqueue_block_assets', 'multipurpose_block_editor_assets' );

/**
 * Register Block Category
 *
 * @param $default_categories
 * @return array
 */
function multipurpose_block_add_new_block_category( $default_categories )
{
    $default_categories[] = array(
        'slug' => 'mdelement',
        'title' => esc_html( 'MultiPurpose Block Element', 'multipurpose-block'),
    );
    return $default_categories;
}

add_filter( 'block_categories', 'multipurpose_block_add_new_block_category', 10, 2 );