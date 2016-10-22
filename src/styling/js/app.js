/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs.
 *  => jQuery
 *  => Tether
 *  => Bootstrap
 */

window['$'] = window['jQuery'] = window['jquery'] = require('jquery');
// window['Tether'] = require('../../../bower_components/tether/dist/js/tether.js');
require('bootstrap-sass');
require('metismenu');
require('jquery-slimscroll');
window['Dropzone'] = require('dropzone');
require('./setup');
