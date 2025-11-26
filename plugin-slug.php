<?php
/**
 * Plugin Name:       [Plugin Name]
 * Description:       [Plugin Description]
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      8.3
 * Author:            [Plugin Author]
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       plugin-slug
 *
 * @package           plugin-slug
 */

if (!defined('ABSPATH')) {
	exit(); // Exit if accessed directly.
}

/**
 * Registers the block(s) using a `blocks-manifest.php` file.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 */
function plugin_slug_register_blocks() {
	$build_dir = __DIR__ . '/build';
	$manifest = $build_dir . '/blocks-manifest.php';

	if (
		function_exists('wp_register_block_types_from_metadata_collection') &&
		file_exists($manifest)
	) {
		wp_register_block_types_from_metadata_collection($build_dir, $manifest);
	}
}
add_action('init', 'plugin_slug_register_blocks');
