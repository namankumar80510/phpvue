# Vue js + PHP Template

**PURPOSE:** Using Vue js with PHP to develop SPAs

**NOTE**: There is a lot to work on and fix before I recommend using this template. But it is still usable.

- **Backend**: PHP (REST API)
- **Frontend**: Vue js

## Installation

- clone repo or use the template: <https://github.com/namankumar80510/phpvue>
  - **direct link**: <https://github.com/new?template_name=phpvue&template_owner=namankumar80510>
- run `composer install` to install PHP dependencies inside `./api`
- run `npm install` to install JS dependencies inside `./frontend` (or bun install, deno install, etc.)
- serve `./public/index.php` using PHP server or any other server (nginx, apache, caddy, etc.)
- run `npm run build` to build assets (don't forget to remove index.html from the ./public/dist/ folder)
