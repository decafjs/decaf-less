/**
 * Created with JetBrains WebStorm.
 * User: mschwartz
 * Date: 7/3/13
 * Time: 9:24 AM
 * To change this template use File | Settings | File Templates.
 */

var less = require('..');

//console.dir(less.Parser);

var source = [
'@base: #f938ab;',
'',
'.box-shadow(@style, @c) when (iscolor(@c)) {',
'    box-shadow:         @style @c;',
'    -webkit-box-shadow: @style @c;',
'    -moz-box-shadow:    @style @c;',
'}',
'.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {',
'.box-shadow(@style, rgba(0, 0, 0, @alpha));',
'}',
'.box {',
'    color: saturate(@base, 5%);',
'    border-color: lighten(@base, 30%);',
'    div { .box-shadow(0 0 5px, 30%) }',
'}'
].join('\n');

console.dir(less.compile(source));

