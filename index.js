/**
 * Created with JetBrains WebStorm.
 * User: mschwartz
 * Date: 7/3/13
 * Time: 9:50 AM
 * To change this template use File | Settings | File Templates.
 */

/*global require */

"use strict";

var less = require('lib/less-decaf-1.3.3.js');

function compile(s) {
    var ret;
    new less.Parser().parse(s, function(e, root) {
        ret = root.toCSS();
    });
    return ret;
}

decaf.extend(exports, {
    less: less,
    compile: compile
});
