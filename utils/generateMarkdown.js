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

    ## ${data.usage}

    ## ${data.installation}

    ## ${data.credit}

    ## ${data.contribution}

    ## ${data.test}


`;
}

module.exports = generateMarkdown;
