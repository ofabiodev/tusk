import { it, assert } from "poku";
import { patch } from "../src";

it("should patch a method and call the patched implementation", () => {
    const obj = {
        greet: (name: string) => `Hello, ${name}!`
    }

    patch(obj, "greet", function(original, name) {
        return original(name).toUpperCase()
    });

    const result = obj.greet("World");
    assert.strictEqual(
        result,
        "HELLO, WORLD!",
    );
})

it("should patch a method on a prototype", () => {
    class Person {
        greet(name: string) {
            return `Hello, ${name}!`;
        }
    }

    patch(Person.prototype, "greet", function(original, name) {
        return original(name).toUpperCase()
    });

    const person = new Person();
    const result = person.greet("World");
    assert.strictEqual(
        result,
        "HELLO, WORLD!",
    );
});

it("should throw an error when patching a non-functon property", () => {
    const invalidObj = {
        name: "Alice",
    }

    try {
        patch(invalidObj, "name", (original) => original);
        assert.fail("Expected an error but none was thrown")
    } catch (err) {
        assert.ok(
            err instanceof TypeError,
        )
    }
});

it("shoud patch a method and preserve `this` context", () => {
    const contextObj = {
        value: 10,
        getValue() {
            return this.value;
        },
    };

    patch(contextObj, "getValue", function(original) {
        return original.call(this) * 2
    });

    const result = contextObj.getValue();
    assert.strictEqual(
        result,
        20
    )
})