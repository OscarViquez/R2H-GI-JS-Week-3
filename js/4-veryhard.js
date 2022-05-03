'use strict';
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log('Running is fun');
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }

}


class Programmer extends Person {
  constructor(name, job, age, language = []) {
    super(name, job, age);
    this.language = language;
    this.busy = true;
  }


  completeTask() {
    return this.busy = false;
  }

  acceptNewTask() {
    return this.busy = true;
  }

  offerNewTask() {
    return (this.busy ? `${this.name} can not accept any new tasks right now` : `${this.name} would love to take on a new responsibility`);
  }

  learnLanguage(newLang) {
    return this.constructor;

  }

  listLanguages() {
    return this.language;
  }
}

const secondObj = new Programmer('Johno', 'Developer', '22', 'Javascript')
console.log(secondObj.busy);
console.log(secondObj.offerNewTask());
console.log(secondObj.learnLanguage())
