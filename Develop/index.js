// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
const readmeTemplate = require('./readmeTemplate.js');

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
        choices: ['license', 'options', 'here']
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
    inquirer
.prompt(questions)
.then(data => {
    console.log(data);
    const fileName = `${data.title}`;
    console.log(fileName);
    JSON.stringify(data);
    fs.writeFile(`${fileName}.md`, readmeTemplate(data), err =>
    err ? console.log(err) : console.log('Success!')
  );
})

}
writeToFile();




