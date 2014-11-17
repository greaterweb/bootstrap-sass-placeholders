'use strict';

var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');

var bootstrap = require('../lib/bootstrap-sass');

var imagesSrc = bootstrap.imagesSrc;
var imagesDest = path.resolve('assets/images');

fs.remove(imagesDest, function (err) {
    assert.ifError(err);
    fs.copy(imagesSrc, imagesDest, function (err) {
        assert.ifError(err);
        console.log('Bootstrap image files copied to destination');
    });
});
