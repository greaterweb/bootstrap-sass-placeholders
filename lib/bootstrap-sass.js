'use strict';

var fs = require('fs');
var path = require('path');

var assetsSrc = path.resolve('node_modules/bootstrap-sass/assets');
var fontsSrc = path.join(assetsSrc, 'fonts');
var imagesSrc = path.join(assetsSrc, 'images');
var javascriptsSrc = path.join(assetsSrc, 'javascripts');
var stylesheetsSrc = path.join(assetsSrc, 'stylesheets');

module.exports = {
    assetsSrc: assetsSrc,
    fontsSrc: fontsSrc,
    imagesSrc: imagesSrc,
    javascriptsSrc: javascriptsSrc,
    stylesheetsSrc: stylesheetsSrc
};
