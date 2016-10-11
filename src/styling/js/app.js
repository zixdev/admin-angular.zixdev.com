/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs.
 *  => jQuery
 *  => Tether
 *  => Bootstrap
 */

window['$'] = window['jQuery'] = window['jquery'] = require('jquery');
window['Tether'] = require('../../../bower_components/tether/dist/js/tether.js');
require('../../../bower_components/bootstrap/dist/js/bootstrap.js');
require('../../../bower_components/metisMenu/dist/metisMenu.js');
require('jquery-slimscroll');
window['Dropzone'] = require('dropzone');
require('./setup');
