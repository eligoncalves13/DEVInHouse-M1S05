class Person {
  #name;
  #birthYear;
  #interests;
  #age;
  constructor(name, birthYear, interests) {
    this.#name = name;
    this.#birthYear = birthYear;
    this.#interests = interests;
    this.#age = new Date().getFullYear() - birthYear;
  }

  get name(){
    return this.#name;
  }

  get birthYear(){
    return this.#birthYear;
  }

  get interests(){
    return this.#interests;
  }

  get age(){
    return this.#age;
  }
  
  sayHello() {
    return `Hello! My name is ${ this.#name } and I am interested in ${ this.#interests.join(', ') }.`
  }
  
  sayGoodbye() {
    return `Goodbye!`;
  }
}

class Teacher extends Person{
  #subject;
  constructor(name, birthYear, interests, subject) {
    super(name, birthYear, interests);
    this.#subject = subject;
  }
  
  sayHello() {
    return `Hello! My name is ${ this.name } and I teach ${ this.#subject }`;
  }
}

class Student extends Person{
  #grades;
  #average;
  constructor(name, birthYear, interests, grades) {
    super(name, birthYear, interests);
    this.#grades = grades;
  }
  
  calculateAverageGrade() {
    const averageGrade = Math.round((this.#grades.reduce((sum, curGrade) => sum + curGrade)) / this.#grades.length);
    
    this.#average = averageGrade;

    return averageGrade;
  }

  sayHello(){
    return `Hello! My name is ${ this.name }, i'm ${ this.age} years old and my average grade is ${this.#average}`
  }
}

const student = new Student("Joana", 1985, ['reading', 'watching movies'], [9, 3, 10]);
console.log(student.calculateAverageGrade());
console.log(student.sayHello());

const teacher = new Teacher("Marcus", 1972, ['yoga', 'cooking'], 'math');
console.log(teacher.sayHello());
