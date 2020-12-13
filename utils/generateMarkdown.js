// function to generate markdown for README
function generateMarkdown(data) {
  //THEN this is displayed as the title of the README
  //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  return `# ${data.title}
  

${data.description}

## Table of Contents
1.) [Usage](#usage)

2.) [Installation](#installation)

3.) [Credits](#credits)

4.) [Contributing](#contributing)

5.) [Test Instructions](#test-instructions)

6.) [Questions/Contact](#questions/contact)

7.) [License](#license)


## Usage
${data.usage}

## Installation 
${data.installation}

## Credits
${data.credit}

## Contributing 
${data.contribution}

## Test Instructions 
${data.test}

## Questions/Contact 
${data.name}
${data.github}
${data.email}

## License
${data.license}





`;
}

module.exports = generateMarkdown;
