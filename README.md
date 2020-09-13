# is-number
![](https://img.shields.io/github/workflow/status/ddgtr/is-number/Deno)

The legendary is-number library for Deno.

# Examples

```
import isNumber from 'https://github.com/ddgtr/is-number/raw/master/mod.ts'

isNumber(16) // true
isNumber(-16) // true
isNumber(-16.5) // true
isNumber(16.5) // true
isNumber("16") // true

isNumber("foo") // false
isNumber(["foo"]) // false
isNumber(function(foo) {}) // false
isNumber(NaN) // false
isNumber(Infinity) // false
isNumber(+[]) // false
```