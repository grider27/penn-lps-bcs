// Engineer class with extends of Employee properties

// pull in Employee class require
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // name, id, email for Employee constructor
        super(name, id, email);
        // Engineer specific below
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Engineer;
