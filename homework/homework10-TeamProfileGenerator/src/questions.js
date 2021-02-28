const employeeType = [
    {
        type: 'list',
        name: 'employee',
        message: 'Please choose the type of employee to enter or select Done if you are ready to generate HTML page:',
        choices: ["Manager", "Engineer", "Intern", "Done"],
        validate: (value) => value ? true : "Please choose a valid option!"
    },
]

const managerDetails = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
        validate: (value) => value ? true : "Please enter a valid name"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's employee ID?",
        validate: (value) => value ? true : "Please enter a valid ID"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
        validate: (value) => value ? true : "Please enter a valid email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office phone number?",
        validate: (value) => value ? true : "Please enter a valid office number"
    },
]

const internDetails = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
        validate: (value) => value ? true : "Please enter a valid name"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's employee ID?",
        validate: (value) => value ? true : "Please enter a valid ID"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email?",
        validate: (value) => value ? true : "Please enter a valid email"
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's School name?",
        validate: (value) => value ? true : "Please enter a valid School name"
    },
]

const engineerDetails = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
        validate: (value) => value ? true : "Please enter a valid name"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineers's employee ID?",
        validate: (value) => value ? true : "Please enter a valid ID"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?",
        validate: (value) => value ? true : "Please enter a valid email"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineers's github username?",
        validate: (value) => value ? true : "Please enter a valid username"
    },
]

module.exports = {
    employeeType,
    managerDetails,
    engineerDetails,
    internDetails
};