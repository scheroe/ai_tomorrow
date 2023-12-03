<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'bqwN:gdAdX.)GzK{53(=[a&MO,X0:pBDG>X,cDTIo39[|OmW`|Q/w<MyiE2bCrMN' );
define( 'SECURE_AUTH_KEY',   ',^Ex>Mgom.2LkIZ;/XE(~+VF(aHk]?H#L_U;6DZ{g1Vb);G-$q?aL4jQWwN_10gB' );
define( 'LOGGED_IN_KEY',     'oCDga/`nP=w/1a;_bmqDI DoTl+ws0zR}6tM(^ObW0a*EMaLGDv|*/1^[-=2NC{P' );
define( 'NONCE_KEY',         'SFEbO oT1hfN<> 9F$hc!16}v3>#{U6far?LDs8^!a#a-B*ye$: $.b.F@! T/pk' );
define( 'AUTH_SALT',         '.z)0N[wd1l0E@<%WVk^>q?>^yk^Dj@m!Rk2hm+I>6)NKlaO:Grm @p<&5];85hm6' );
define( 'SECURE_AUTH_SALT',  'N?jOE:I{oi9d]z5jAhb}/3u;,ebdAh&p2DBzR3xV[}%gW[{}/Al>wp 2js/aA(&#' );
define( 'LOGGED_IN_SALT',    '<Mz L!a_i1W9eC !KByk[/EO#]<j]`4|^Lp_(x8+J5~$0nGJv{U V}#%I5C6r#Aa' );
define( 'NONCE_SALT',        'Z6fRZR4  &dfvJGPkFR*BnaMKxkO`x$+F67+TM)%rFQ&o,1XVH4*y5m<Q-qVkY3>' );
define( 'WP_CACHE_KEY_SALT', 'LJyfs?<%k0o}[,O0*iH,cNlkM>?*r(kokRE0a~|EO!|V<7}<@K&MYEcj(XPs^ts9' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
