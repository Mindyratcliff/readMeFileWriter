// function to generate markdown for README
function generateMarkdown(data) {
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

    ## Questions/Contact 
    ${data.github} 
    ${data.email}



`;
}

module.exports = generateMarkdown;
