import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isNumber from './mod.ts'

Deno.test("with positive integer number", () => {
    const a = 12;
    assertEquals(isNumber(a), true)
})

Deno.test("with negative integer number", () => {
    const a = -12;
    assertEquals(isNumber(a), true)
})

Deno.test("with positive float number", () => {
    const a = 12.54;
    assertEquals(isNumber(a), true)
})

Deno.test("with negative float number", () => {
    const a = -12.54;
    assertEquals(isNumber(a), true)
})

Deno.test("with number in string", () => {
    const a = "134";
    assertEquals(isNumber(a), true)
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