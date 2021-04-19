<?php
/**
 * Create a new admin menu page
 */
class AdminMenu
{

    public function __construct()
    {
        add_action('admin_menu', [$this, 'create_admin_menu']);
    }

    public function create_admin_menu()
    {
        $capability = 'manage_options';
        $slug = 'test_menu_page';
        $dashicon = 'dashicons-search';
        add_menu_page(
            __( 'test123', 'test123' ),
            __( 'test123', 'test123' ),
            $capability,
            $slug,
            [ $this, 'render_react' ],
            $dashicon
        );
    }


    public function render_react()
    {
        echo '<div class="wrap"><div id="plugin-root"></div></div>';
    }
}
new AdminMenu();
