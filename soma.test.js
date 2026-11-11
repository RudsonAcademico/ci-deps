import {test} from "node:test";
import assert from "node:assert";
import {soma} from "./soma.js";

test("somar 1 e 1 para dar 2", () => {
    assert.equal(soma(1, 1), 2);
});

test("somar 1000000 e 1000000 para dar 2000000" , () => {
    assert.equal(soma(1000000, 1000000), 2000000);
});