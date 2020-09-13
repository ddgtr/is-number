# is-number

The legendary is-number library for Deno.

# Examples

```
import isNumber from 'https://github.com/ddgtr/is-number/raw/master/mod.ts'

isNumber(16) // true
isNumber(-16) // true
isNumber(-16.5) // true
isNumber(16.5) // true
isNumber("foo") // false
isNumber("16") // false
isNumber(["foo"]) // false
```