export default function createIteratorObject(report) {
  let employees = [];
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees = employees.concat(report.allEmployees[department]);
    }
  }
  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        const result = { value: employees[index], done: false };
        index += 1;
        return result;
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
