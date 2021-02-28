// external dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// local dependencies
const questions = require('./src/questions');
//const Manager = require('./lib/Manager');
//const Engineer = require('./lib/Engineer');
//const Intern = require('./lib/Intern');
//const genHTML = require('./src/generateHTML.js');

// function to initialize app
function init() {
    console.log(`Welcome to Team Profile Generator!`);
    console.log(`Let me ask you a few questions to get your started:`);
    inquirer.prompt(questions.employeeType).then((selection) => {
        console.log("questions fired");
        fs.writeFile("test.txt", JSON.stringify(selection, null, '\t'), (err) =>
            err ? console.log(err) : console.log("Successful creation of a README file! Please check the directory")
        );
    });

};

// Function call to initialize app
init();