function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        };

        toString() {
            return (super.toString()).slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return (super.toString()).slice(0, -1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}



let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
let t = new Teacher('Simeon', 'asd@asd.com', 'Python');
let s = new Student('Simeon2', 'asd2@asd.com', 'JS');

console.log(p.toString()); // 'Person (name: Pesho, email: Pesho@pesh.com)')
console.log(t.toString()); // 'Teacher (name: Simeon, email: asd@asd.com', subject: Python)
console.log(s.toString()); // 'Student (name: Simeon2, email: asd2@asd.com, course: JS)