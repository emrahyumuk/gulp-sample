# Gulp Sample (Concat, Rename, Uglify, Gzip)

#### Check for Node and npm
Make sure that you've installed Node and npm before attempting to install gulp.

```sh
node --version
```
```sh
npm --version
```

#### Install the `gulp` command

```sh
npm install --global gulp-cli
```

#### Create a `package.json`
If you don't have a package.json, create one. If you need help, run an `npm init` which will walk you through giving it a name, version, description, etc.


#### Install `gulp` and other gulp packages in your devDependencies

Run this command in your project directory:

```sh
npm install --save-dev gulp gulp-concat gulp-rename gulp-uglify gulp-gzip
```

#### Create a `gulpfile`

In your project directory, create a file named `gulpfile.js` in your project root with these contents:

```js
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

var jsFiles = 'js/*.js';
var jsDest = 'dist';

gulp.task('default', function() {
    return gulp.src(jsFiles)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(gzip())
    .pipe(gulp.dest(jsDest));
});
```

#### Test it out

Run the gulp command in your project directory:

```sh
gulp
```
