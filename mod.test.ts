import { assertEquals } from './deps.ts'
import isNumber from './mod.ts'

Deno.test("with number", () => {
    const a = 12;
    const b = -12;
    const c = 12.54;
    const d = -12.54;
    const e = "12";
    assertEquals(isNumber(a), true)
    assertEquals(isNumber(b), true)
    assertEquals(isNumber(c), true)
    assertEquals(isNumber(d), true)
    assertEquals(isNumber(e), true)
})


Deno.test("with string", () => {
    const a = "foo";
    assertEquals(isNumber(a), false)
})

Deno.test("with an object and array", () => {
    const a = { number: 168 };
    const b = [186, "number", "16"];
    assertEquals(isNumber(a), false)
    assertEquals(isNumber(b), false)
})

Deno.test("with NaN and Infinity", () => {
    const a = NaN;
    const b = Infinity;
    assertEquals(isNumber(a), false)
    assertEquals(isNumber(b), false)
})

Deno.test("with null and undefined", () => {
    const a = null;
    const b = undefined;
    assertEquals(isNumber(a), false)
    assertEquals(isNumber(b), false)
})