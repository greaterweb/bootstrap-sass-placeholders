'use strict';

var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');

var bootstrap = require('../lib/bootstrap-sass');

var stylesheetsSrc = bootstrap.stylesheetsSrc;
var stylesheetsDest = path.resolve('assets/stylesheets');

fs.remove(stylesheetsDest, function (err) {
    assert.ifError(err);
    fs.copy(stylesheetsSrc, stylesheetsDest, function (err) {
        assert.ifError(err);
        console.log('Bootstrap stylesheet files copied to destination');
    });
});
