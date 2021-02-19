// packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js');


// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project:',
        validate: (value) => value ? true : "Please enter a proper title for the project"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project:',
        validate: (value) => value ? true : "Please enter a proper description for the project"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions of your project:',
        validate: (value) => value ? true : "Please enter a proper installation instructions for the project"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the examples for use of your project:',
        validate: (value) => value ? true : "Please enter a proper examples for the project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project from the following:',
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0"],
        validate: (value) => value ? true : "Please choose a license for your project"
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter information of any contributors to your project:',
        validate: (value) => value ? true : "Please enter a proper contributors or enter NA "
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter information on how to test your project:',
        validate: (value) => value ? true : "Please enter a proper information on testing or enter NA"
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username:',
        validate: (value) => value ? true : "Please enter a proper information on testing or enter NA"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: (value) => value ? true : "Please enter a proper email address"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successful creation of a README file! Please check the directory")
    );
};

// function to initialize app
function init() {
    inq.prompt(questions).then((data) => {
        //writeToFile("README.md", JSON.stringify(data, null, '\t'));
        writeToFile("README.md", genMD(data));
    });
};

// Function call to initialize app
init();
