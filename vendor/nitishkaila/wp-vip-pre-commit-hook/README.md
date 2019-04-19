# wp-vip-pre-commit-hook

This package is usefull to WordPress projects with git pre commit hook.

This package will install PHPCS with the WordPress and VIP Coding Standard. The PHP linting and PHPCS run using git pre commit hook when you commit the project code.

By default `WordPressVIPMinimum` coding standard will run. If you wish to run your custom coding standard then you will need to place the `phpcs.ruleset.xml` or `phpcs.xml.dist` file in your project.

# Installation

Run following command to install the composer package

`composer require nitishkaila/wp-vip-pre-commit-hook:dev-master`