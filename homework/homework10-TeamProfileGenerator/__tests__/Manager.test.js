const Manager = require('../lib/Manager.js');

describe("Manager class", () => {
    it("Create an Manager and specifiy phone number", () => {
        const id = "0001";
        const email = "gary@gary.com"
        const name = "Gary";
        const phone = "8181234567";
        const manager = new Manager(name, id, email, phone);  
        expect(manager.officeNumber).toBe(phone);
    });

    it("Can call methods of Manager object", () => {
        const id = "0001";
        const email = "gary@gary.com"
        const name = "Gary";
        const phone = "8181234567";
        const manager = new Manager(name, id, email, phone);     
        expect(manager.getRole()).toBe("Manager");
    });
});