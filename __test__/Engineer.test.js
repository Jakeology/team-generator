const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toEqual(expect.any(String));
});

test("returns engineers name", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("returns engineers email", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("returns engineers id", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.getId()).toEqual(engineer.id);
});

test("returns engineers github", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("returns the engineer role", () => {
  const engineer = new Engineer("Dave", "email@email.com", 1, "davesgithub");

  expect(engineer.getRole()).toBe("Engineer");
});
