// Bootstrap wants jQuery global =(
var $ = require('jquery');
global.jQuery = require('jquery');
window.$ = $;

var Popper = require('popper.js');

require('bootstrap');


