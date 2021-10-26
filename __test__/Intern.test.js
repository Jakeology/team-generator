const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toEqual(expect.any(String));
});

test("returns interns name", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("returns interns email", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("returns interns id", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.getId()).toEqual(intern.id);
});

test("returns interns school", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("returns the intern role", () => {
  const intern = new Intern("Dave", "email@email.com", 1, "Harvard");

  expect(intern.getRole()).toBe("Intern");
});
