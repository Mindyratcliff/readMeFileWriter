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
        //installation instructions
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions.',
    },
    {
        //usage information
      type: 'input',
      name: 'usage',
      message: 'Please enter the usage information.',
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
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
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
