const Engineer = require('../lib/Engineer.js');

describe("Engineer class", () => {
    it("Create an Engineer and specifiy github username", () => {
        const id = "0002";
        const email = "gary@gary.com"
        const name = "Gary";
        const username = "apple";
        const engineer = new Engineer(name, id, email, username);  
        expect(engineer.github).toBe(username);
    });

    it("Can call methods of Engineer object", () => {
        const id = "0002";
        const email = "gary@gary.com"
        const name = "Gary";
        const username = "apple";
        const engineer = new Engineer(name, id, email, username);     
        expect(engineer.getRole()).toBe("Engineer");
        expect(engineer.getGithub()).toBe(username);
    });
});