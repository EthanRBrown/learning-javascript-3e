# Learning JavaScript, 3rd Edition
## Chapter 2: JavaScript Development Tools

This chapter introduces popular tools for JavaScript development, including npm, Babel, Git, and ESlint.

* npm configuration is in `package.json`
* Gulp configuration is in `gulpfile.js`
* ESLint configuration is in `.eslintrc`
* Babel configuration is in `.babelrc`
* Sample program demonstrating ES6 features is in `es6/test.js` (run `gulp` to transcompile to ES5, then run `node dist/test.js` to execute)

### Supplemental note: upgrading Npm

npm versions sometimes change more frequently than Node versions, so even if you have the latest version of Node (which includes npm), you may not have the latest version of npm (type `npm -v` to see which version you have).  I recommend upgrading your version of npm (especially if you currently have version 2.x).  Fortunately, this is very easy: just run:

OSX/Linux:

    $ sudo npm install -g npm

Windows:

    > npm install -g npm
