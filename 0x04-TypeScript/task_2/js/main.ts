interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));






//Creating Functions Specific to employees
interface Employee {
  name: string;
  title: string;
}

interface Director extends Employee {
  department: string;
}

interface Teacher extends Employee {
  subject: string;
}

function isDirector(employee: Employee): employee is Director {
  return (employee as Director).department !== undefined;
}

function executeWork(employee: Employee) {
  if (isDirector(employee)) {
    workDirectorTasks(employee);
  } else {
    workTeacherTasks(employee);
  }
}

function workDirectorTasks(director: Director) {
  console.log(`${director.name} is managing the ${director.department} department.`);
}

function workTeacherTasks(teacher: Teacher) {
  console.log(`${teacher.name} is teaching ${teacher.subject}.`);
}
