Less CSS Module
===============

See <a target="_new" href="http://lesscss.org">lesscss.org</a> for full documentation on Less CSS capabilities and syntax.

Typical use will be something like:

```javascript
var less = require('less').compile;

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

console.log(less(source));
```
