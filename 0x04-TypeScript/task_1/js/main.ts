interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allows for any additional attribute to be added
}

class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes?: {[key: string]: any}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    if (additionalAttributes) {
      Object.keys(additionalAttributes).forEach(key => {
        this[key] = additionalAttributes[key];
      });
    }
  }
}

// Example usage
const teacher1 = new TeacherClass('Jane', 'Doe', true, 'New York', { yearsOfExperience: 10 });
const teacher2 = new TeacherClass('Bob', 'Smith', false, 'Los Angeles', { contract: true });

console.log(teacher1); // { firstName: 'Jane', lastName: 'Doe', fullTimeEmployee: true, yearsOfExperience: 10, location: 'New York' }
console.log(teacher2); // { firstName: 'Bob', lastName: 'Smith', fullTimeEmployee: false, location: 'Los Angeles', contract: true }
