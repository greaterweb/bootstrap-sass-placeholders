'use strict';

var path = require('path');
var glob = require('glob');
var fs = require('fs-extra')
var assert = require('assert');

var bootstrap = require('../lib/bootstrap-sass');

var stylesheetsSrc = bootstrap.stylesheetsSrc;
var stylesheetsDest = path.resolve('assets/stylesheets');

glob(path.join(stylesheetsSrc, '**/*.scss'), function(err, files) {
    assert.ifError(err);
    files.forEach(function(file) {
        // get file name
        // check for a converter file with the same name
        console.log(file);
    });
});
