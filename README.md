[![build status](https://gitlab.com/alex-clapperton/alex-clapperton.gitlab.io/badges/master/build.svg)](https://gitlab.com/alex-clapperton/alex-clapperton.gitlab.io/commits/master)

[![coverage report](https://gitlab.com/alex-clapperton/alex-clapperton.gitlab.io/badges/master/coverage.svg)](https://gitlab.com/alex-clapperton/alex-clapperton.gitlab.io/commits/master)

# Alex Clapperton Website Portfolio

## Folder Structure

The folder structure for this project is pretty simple. All development work is done inside the `src` folder, the `form` folder holds the contact form php script and the `twitter` folder contains the necessary files to create a customized twitter feed for the clients website.

## SCSS Folder Structure

All the **.scss** files are located at `src/scss`. Inside there you will find three folders to help organize the **.scss** files. The `modules` folder contains the global styles for the clients website, such as the typography and color scheme.

The `partials` folder is where the meat of the CSS is constructed and contains all the component and base styles for the clients website, such as the banner.

The `vendor` folder holds all third-party code. This is handy when using prepackaged components developed by other people.

The `main.scss` file is where you will import all the **.scss** files from within the three folders and it is this file that is compiled into the **.css** file.
e.g.
```scss
@import "partials/base";
```

## JavaScript Files

The JavaScript files are located at `src/js` and this is where all JavaScript should be stored. Inside you will find the main `jquery.min.js` library, alongside JavaScript plugins, such as `smoothscroll.js`. You will also find a file called `scripts.js`, which is where you call all your plugins and avoids any JavaScript conflicts.
e.g.
```javascript
// ======================================
//    Hide top header on scroll
// ======================================
function init_top_header_slide() {
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 200) { // this refers to window
          $('.top-header').slideUp();
      }
      else if ($(this).scrollTop() <= 199) {
        $('.top-header').slideDown();
      }
  });
}
```

Each function inside the `scripts.js` file is given a name and is initialized at the bottom of the file. This enables you to either initialize that function on every page, e.g. `init_dummy_link();`, or to enable you to call that function on a particular page.
e.g.
```javascript
if (document.URL.indexOf("contact.html") >= 0) {
  init_contact_map();
  init_contact_form();
}
```

## Pages Folder Structure

The `src/pages` folder contains all the **.html** files which are the web pages for the clients website. For any new page you create for client, it should be stored inside the `pages` folder as a Gulp task will minify the files and move them in the root of the project ready for distribution.

## SVG Icons

Inside the `src/icons` folder you will find all the SVG icons. Any new SVG icon you wish to add should be stored in this folder as there is a gulp task that combines all these icons into a single SVG sprite. The Gulp task will also create a `sprite` folder where you will find the SVG sprite file, a `sprite.scss` file to define the width and height of each SVG icon and a HTML file to show you an example of the compile SVG sprite.

I have created an additional Gulp task called `sprite-shortcut` which will create the SVG sprite and move that sprite into the location `dist/images/icons`, and the task will also move the `sprite.scss` to `src/scss/modules` and renames the file to `_svg-sprite.scss`. So whenever you run your Gulp tasks, for the SVG sprite you just need to run the `sprite-shortcut` task.
