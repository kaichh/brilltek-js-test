const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] },
];

// 1. Count Employees Number by Factory
const countEmployeesByFactory = factories.map(({ name, employees }) => ({
  name,
  count: employees.length,
}));

// 2. Count Factories Number by Employee
const countFactoriesByEmployee = (factories) => {
  result = [];
  factories.forEach((factory) => {
    factory.employees.forEach((employee) => {
      if (!result.some((item) => item.employee === employee)) {
        result.push({ employee, count: 0 });
      }
      result.find((item) => item.employee === employee).count++;
    });
  });
  return result;
};

// 3. Order employees list by alphabetical order
const orderEmployeesAlphabetically = factories.map(({ name, employees }) => ({
  name,
  employees: employees.sort(),
}));

console.log(
  "1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]"
);
console.log(countEmployeesByFactory);
console.log("\n");

console.log(
  "2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]"
);
console.log(countFactoriesByEmployee(factories));
console.log("\n");

console.log(
  "3. Order employees list by alphabetical order // => [ {name: 'BR1', employees: ['Alice', 'Bob', 'Jessie', 'John', 'Karen']}, ... ]"
);
console.log(orderEmployeesAlphabetically);
console.log("\n");
