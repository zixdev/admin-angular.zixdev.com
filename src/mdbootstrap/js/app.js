/**
  * We'll load jQuery and the Bootstrap jQuery plugin which provides support
  * for JavaScript based Bootstrap features such as modals and tabs.
 *  => jQuery
 *  => Tether
 *  => Bootstrap
 *  => Velocity
 *  => Hemmer Js (needed by side nav)
 */

window['$'] = window['jQuery'] = require('../../../bower_components/jquery/dist/jquery.js');
window['Tether'] = require('../../../bower_components/tether/dist/js/tether.js');
require('../../../bower_components/bootstrap/dist/js/bootstrap.js');
require('./modules/velocity.min');
require('./modules/jquery-easing');

window['Hammer'] = require('./modules/hammer');
require('./modules/jquery.hammer');

/*
 * MDB Modules (extented)
 */
require('./modules/scrolling-nav');
require('./modules/sideNav');
require('./modules/collapsible');
require('./modules/global');

/*
 * MDB Modules
 * Animations
 */
require('./modules/smooth-scroll');
require('./modules/waves');
require('./modules/rotating-cards');
require('./modules/wow');
require('./modules/forms');


$(function () {

    // SideNav Initialization
    $(".button-collapse").sideNav();

    // start wow animations
    window['WOW_INIT'] = new WOW().init();
});
