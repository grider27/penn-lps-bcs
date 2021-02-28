// external dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// local dependencies
const questions = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genHTML = require('./src/generateHTML.js');
const staff = [];

// employee type question
function getEmployeeType() {
    inquirer.prompt(questions.employeeType)
        .then((selection) => {
            switch (selection.employee) {
                case "Manager":
                    getManager();
                    break;
                case "Engineer":
                    getEngineer();
                    break;
                case "Intern":
                    getIntern();
                    break;
                case "Done":
                    generateHTML();
                    break;
            }
        });
}

// capture manager details
function getManager() {
    inquirer.prompt(questions.managerDetails)
        .then((details) => {
            let manager = new Manager(details.name, details.id, details.email, details.officeNumber);
            staff.push(manager)
        })
        .then(() => {
            getEmployeeType();
        })
}

// capture manager details
function getIntern() {
    inquirer.prompt(questions.internDetails)
        .then((details) => {
            let intern = new Intern(details.name, details.id, details.email, details.school);
            staff.push(intern)
        })
        .then(() => {
            getEmployeeType();
        })
}

// capture engineer details
function getEngineer() {
    inquirer.prompt(questions.engineerDetails)
        .then((details) => {
            let engineer = new Engineer(details.name, details.id, details.email, details.github);
            staff.push(engineer)
        })
        .then(() => {
            getEmployeeType();
        })
}

// generate final html
function generateHTML() {
    fs.writeFileSync("./dist/index.html",genHTML(staff));
    console.log("Successful creation of a HTML file! Please check the directory under dist folder");
}

// function to initialize app
function init() {
    console.log(`Welcome to Team Profile Generator!`);
    console.log(`Let me ask you a few questions to get your started:`);
    getEmployeeType();
};

// Function call to initialize app
init();