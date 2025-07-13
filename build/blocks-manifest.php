<?php
// This file is generated. Do not modify it manually.
return array(
	'users-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multidots/users-block',
		'version' => '0.1.0',
		'title' => 'Users Block',
		'category' => 'widgets',
		'icon' => 'admin-users',
		'description' => 'Dynamic block scaffolded with the Create Block tool to generate a list of selected user roles.',
		'example' => array(
			
		),
		'attributes' => array(
			'role' => array(
				'type' => 'string',
				'default' => 'author'
			),
			'numberOfUsers' => array(
				'type' => 'number',
				'default' => 8
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'textdomain' => 'users-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
