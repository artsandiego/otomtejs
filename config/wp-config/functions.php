<?php

/* 
* widget setup
*/
function oto_widget() {
  $args = array(
    'name'          => 'Main Widget',
    'id'            => 'oto_widget',
    'before_widget' => '<div id="oto_widget">',
    'after_widget'  => '</div>',
    'before_title'  => '<h2 class="oto_widget_title">',
		'after_title'   => '</h2>',
  );
  register_sidebar($args);
}
add_action('widgets_init', 'oto_widget');

/* 
* thumbnail setup
*/
add_theme_support('post-thumbnails');

/* 
* menu support
*/
function oto_menu() {
  register_nav_menus(
    array(
      'header' => 'Header',
      'footer' => 'Footer'
    )
  );
}
add_action('after_setup_theme', 'oto_menu');

