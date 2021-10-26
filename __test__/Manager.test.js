const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("returns managers name", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("returns managers email", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("returns managers id", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.getId()).toEqual(manager.id);
});

test("returns managers office number", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test("returns the manager role", () => {
  const manager = new Manager("Dave", "email@email.com", 1, 1);

  expect(manager.getRole()).toBe("Manager");
});
