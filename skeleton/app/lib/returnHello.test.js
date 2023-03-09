const hello = require("./returnHello.js");

test("returns a valid English hello", () => {
  expect(hello.generateGreeting("english")).toBe("Hello");
});

test("returns a valid Gurmukhi hello", () => {
  expect(hello.generateGreeting("gurmukhi")).toBe("ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ");
});

test("returns a valid Italian hello", () => {
  expect(hello.generateGreeting("italian")).toBe("Bonjourno");
});

test("returns a valid German hello", () => {
  expect(hello.generateGreeting("german")).toBe("Guten Tag");
});

test("returns a valid French hello", () => {
  expect(hello.generateGreeting("french")).toBe("Bonjour");
});

test("Throws on unknown languages", () => {
  expect(() => {
    hello.generateGreeting("norge");
  }).toThrow(Error("Unknown language norge"));
});
