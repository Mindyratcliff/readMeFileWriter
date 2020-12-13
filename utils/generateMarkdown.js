// function to generate markdown for README
function generateMarkdown(data) {
  //THEN this is displayed as the title of the README
  //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  return `# ${data.title}
  

   ${data.description}

   ## Table of Contents
    1.) Usage

    2.) Installation

    3.) Credits

    4.) Contributing

    5.) Test Instructions

    6.) License

    7.) Questions/Contact

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

    ##License
    ${data.license}

    ## Questions/Contact 
    ${data.github} 
    ${data.email}



`;
}

module.exports = generateMarkdown;
