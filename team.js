const Programmer = require("./programmer.js"); //access programmer.js

class Team {
    constructor(project) {
    this.name = project;
    this.programmers = [];
}

newProgrammer (name, position, age, language) {
    let newProgrammer = new Programmer(name, position, age, language);
    newProgrammer.printStats();
    this.programmers.push(newProgrammer); 
};
programmerCount() {
  return this.programmers.length;
};
}
module.exports = Team;