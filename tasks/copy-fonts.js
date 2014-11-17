'use strict';

var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');

var bootstrap = require('../lib/bootstrap-sass');

var fontsSrc = bootstrap.fontsSrc;
var fontsDest = path.resolve('assets/fonts');

fs.remove(fontsDest, function (err) {
    assert.ifError(err);
    fs.copy(fontsSrc, fontsDest, function (err) {
        assert.ifError(err);
        console.log('Bootstrap font files copied to destination');
    });
});
