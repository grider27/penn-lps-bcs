// Manager class with extends of Employee properties

// pull in Employee class require
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // name, id, email for Employee constructor
        super(name, id, email);
        // Manager specific below
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

}

module.exports = Manager;