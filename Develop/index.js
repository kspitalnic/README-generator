// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        type: 'list',
        message: 'Select the appropriate licesne for this project:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'BSD 3', 'none']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Write a questions section:'
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log('Success!'));

}


function init(){
    inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    writeToFile('Readme.md', generateMarkdown(answers));
})
}
init();


