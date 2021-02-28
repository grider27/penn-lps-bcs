const Employee = require('../lib/Employee.js');

describe("Employee class", () => {
    it("Create an Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Create and set name for Employee using constructor", () => {
        const name = "Gary";
        const employee = new Employee(name);        
        expect(employee.name).toBe(name);
    });

    it("Create and set id for Employee using constructor", () => {
        const id = "0001";
        const name = "Gary";
        const employee = new Employee(name, id);        
        expect(employee.id).toBe(id);
    });

    it("Create and set email for Employee using constructor", () => {
        const id = "0001";
        const email = "gary@gary.com"
        const name = "Gary";
        const employee = new Employee(name, id, email);        
        expect(employee.email).toBe(email);
    });

    it("Can call methods of Employee object", () => {
        const id = "0001";
        const email = "gary@gary.com"
        const name = "Gary";
        const employee = new Employee(name, id, email);        
        expect(employee.getName()).toBe(name);
        expect(employee.getId()).toBe(id);
        expect(employee.getEmail()).toBe(email);
        expect(employee.getRole()).toBe("Employee");
    });
});