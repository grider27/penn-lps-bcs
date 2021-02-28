const Intern = require('../lib/Intern.js');

describe("Intern class", () => {
    it("Create an Intern and specifiy school", () => {
        const id = "0003";
        const email = "gary@gary.com"
        const name = "Gary";
        const school = "PENN";
        const intern = new Intern(name, id, email, school);  
        expect(intern.school).toBe(school);
    });

    it("Can call methods of Intern object", () => {
        const id = "0003";
        const email = "gary@gary.com"
        const name = "Gary";
        const school = "PENN";
        const intern = new Intern(name, id, email, school);      
        expect(intern.getRole()).toBe("Intern");
        expect(intern.getSchool()).toBe(school);
    });
});