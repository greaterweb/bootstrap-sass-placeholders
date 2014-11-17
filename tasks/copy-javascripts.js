'use strict';

var path = require('path');
var fs = require('fs-extra');
var assert = require('assert');

var bootstrap = require('../lib/bootstrap-sass');

var javascriptsSrc = bootstrap.javascriptsSrc;
var javascriptsDest = path.resolve('assets/javascripts');

fs.remove(javascriptsDest, function (err) {
    assert.ifError(err);
    fs.copy(javascriptsSrc, javascriptsDest, function (err) {
        assert.ifError(err);
        console.log('Bootstrap javascript files copied to destination');
    });
});
