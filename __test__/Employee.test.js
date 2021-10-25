const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Dave", "email@email.com", 1);

  expect(employee.name).toBe("Dave");
  expect(employee.email).toBe("email@email.com");
  expect(employee.id).toEqual(expect.any(Number));
});

test("get employees name value", () => {
  const employee = new Employee("Dave", "email@email.com", 1);

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("get employees email value", () => {
  const employee = new Employee("Dave", "email@email.com", 1);

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get employees id value", () => {
  const employee = new Employee("Dave", "email@email.com", 1);

  expect(employee.getId()).toEqual(employee.id);
});
