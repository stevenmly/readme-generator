// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project. (Required)'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions for your project. (Required)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project. (Required)'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines for your project (Required)'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter tests for your project (Required)'
        }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
