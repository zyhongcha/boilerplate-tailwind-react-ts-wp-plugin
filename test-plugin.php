<?php
/*
 * Plugin Name: Test Plugin Tailwind + React
 * Author: Zyhongcha
 * Author URI: https://github.com/zyhongcha
 * Version: 0.0.1
 * Description: Test Plugin
 * Text-Domain: test-plugin
 */

if (!defined('ABSPATH')) : exit(); endif; // No direct access allowed.
define('DIR_PATH', trailingslashit(plugin_dir_path(__FILE__)));


add_action('admin_enqueue_scripts', 'load_scripts');
function load_scripts()
{
    wp_enqueue_style('tailwindcss', plugins_url('./dist/tailwind.css', __FILE__));
    wp_enqueue_script('react-app', plugins_url('./dist/index.js', __FILE__), null, null, true);
}


require_once DIR_PATH . 'php/class-admin-menu.php';
