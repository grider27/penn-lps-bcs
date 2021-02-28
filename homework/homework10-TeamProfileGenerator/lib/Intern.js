// Intern class with extends of Employee properties

// pull in Employee class require
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // name, id, email for Employee constructor
        super(name, id, email);
        // Intern specific below
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Intern;