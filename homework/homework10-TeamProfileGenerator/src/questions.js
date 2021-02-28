const employeeType = [
    {
        type: 'list',
        name: 'employee',
        message: 'Please choose the type of employee to enter or select Done if you are ready to generate HTML page:',
        choices: ["Manager", "Engineer", "Intern","Done"],
        validate: (value) => value ? true : "Please choose a valid option!"
    },
]

module.exports = {employeeType};