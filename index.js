const inquirer = require('inquirer');
const fs = require('fs');

// GIVEN a command-line application that accepts user input
const questions  = () =>
  inquirer.prompt([
    {
        //WHEN I enter my project title
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        //WHEN I enter a description, 
      type: 'input',
      name: 'description',
      message: 'Please describe your project.',
    },
    {
      //usage information
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage information.',
    },
    {
        //installation instructions
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions.',
    },
    {
      //credits
    type: 'input',
    name: 'credit',
    message: 'Please provide credit to resources used.',
    },
    {
        //contribution guidelines
      type: 'input',
      name: 'contribution',
      message: 'Please enter the contribution guidelines.',
    },
    {
        //test instructions
      type: 'input',
      name: 'test',
      message: 'Please enter the test instructions.',
    },
    {
      //license options
    type: 'list',
    name: 'license',
    message: 'Which license do you want to include?',
    choices: ['MIT', 'Unlicense', 'Apache 2.0', 'Artistic 2.0', 'Open Software License 3.0'],
  },
    {
        //WHEN I enter my GitHub username
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        //WHEN I enter my email address
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ]);

//THEN this is displayed as the title of the README

//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README

//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//THEN this is added to the section of the README entitled Questions,
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
