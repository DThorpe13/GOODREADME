function generateMarkdown(info) {

  
  console.log(info.license);

  let licenseForBadge = (info.license)
  console.log(licenseForBadge);

  // create variable string for badge image
  const badge = `https://img.shields.io/badge/License-${licenseForBadge}-brightgreen`;
  console.log(badge);


  const questions =

    `![License badge](${badge})

    ## Title

    ${info.title}

    ## Description 

    ${info.description}

    ## Table of Contents

      * [Installation](#installation)
    
      * [Usage](#usage)

      * [Contributing](#contibuting)

      * [Tests](#tests)

    ## Installation

    ${info.installation}

    ## Usage

    ${info.usage}

    ## License

    ${info.license}

    ## Contributing

    ${info.contributing}

    ## Tests 

    ${info.tests}

    ## Questions?

    Please use the contact information below if you would like to reach me with any questions.


    GitHub Username: ${info.username}

    GitHub Profile: github.com/${info.username}

    Email: ${info.email}

    `

    return questions;
}

module.exports = generateMarkdown;