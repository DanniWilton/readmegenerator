//using a command-line application to generate a readme file
//what do you want to do? create a README
//Questions include: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//Description section 
//Installation section -installation instructions
//Usage section -usage info
//Contributing section -contribution guidelines -how to contribute, guidelines The [Contributor Covenant](https://www.contributor-covenant.org/)
//Tests -test instructions
// license for application and badge that is applied to the top of the readme 
// question section -add github username and link to profile, email
//when click table of contents, taken to corresponding section of readme






// TODO: Include packages needed for this application
const fs =  require("fs");
const inquirer = require("inquirer");
const createReadMe = require("./utils/generateMarkdown.js");

const licenses = [
    'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'
]

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of your application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for how to use your application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'This application is unlicensed'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Would like other developers to contribute? If yes, do you have your own guidelines for contribution?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide examples on how you tested your application'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter github username, a link to your github profile and your email.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("YAY! Your README.md file has been created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let markdown = createReadMe(answers, licenses);
        writeToFile('README.md', markdown)
    })
    .catch((error) => {
        if(error.isError) {
            console.log('Prompt error');
        } else {
            console.log('Unknown error occured:', error);
        }
    });
};

// Function call to initialize app
init();
