const Programmer = require("./programmer.js"); //access programmer.js

class Team {
    constructor(project) {
    this.name = project;
    this.programmers = [];
}

newProgrammer (name, position, age, language) {
    let newProgrammer = new Programmer(name, position, age, language);
    newProgrammer.printInfo();
    this.programmers.push(newProgrammer); 
};
programmerTotal() {
  return this.programmers.length;
};
}
module.exports = Team;