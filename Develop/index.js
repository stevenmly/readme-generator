// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name of your project!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project. (Required)'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of project should your license have?',
            choices: ["MIT", "Apache", "GPL" ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be used to install your dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about the repo?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?'
        }
];

// Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        else {
          console.log('Your README.md file has been created!')
        };
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        return renderLicenseBadge(data);
    })
    .then(data => {
        return renderLicenseLink(data);
    })
    .then(data => {
        return renderLicenseSection(data);
    })
    .then(data => {
        writeToFile("./dist/README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
