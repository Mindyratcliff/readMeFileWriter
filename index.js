const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const mitLicense = require('./utils/MIT.js');
const apacheLicense = require('./utils/apache.js');
const artisticLicense = require('./utils/artistic.js');
const openSoftwareLicense = require('./utils/openSoftware.js');

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
      //WHEN I choose a license for my application from a list of options
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
  ]).then((response) => 
    writeToFile(process.argv[2], response)
  );

// function to write README file
function writeToFile(fileName, data) {
  let licenseChoice = data.license;
  if (licenseChoice == 'MIT'){
    data.license = mitLicense;
  }
  if (licenseChoice == 'Apache 2.0'){
    data.license = apacheLicense;

  }
  if (licenseChoice == 'Artistic 2.0'){
    data.license = artisticLicense;

  }
  if (licenseChoice == 'Open Software License 3.0'){
    data.license = openSoftwareLicense;
  }
  let markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) =>
  err ? console.error(err) : 
  console.log('Success!')
  )
  

};

// function to initialize program
function init() {
  questions();

}

// function call to initialize program
init();
