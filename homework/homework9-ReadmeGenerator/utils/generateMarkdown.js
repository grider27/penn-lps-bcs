// function that returns a license badge based on which license is entered
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break;
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break;
    case "Apache License 2.0":
      return "[![License: GPL v3](https://img.shields.io/badge/license-Apache-blue)]"
      break;
  }

}
// function that returns the license link
function renderLicenseLink(license) {

  switch (license) {
    case "MIT":
      return "(https://mit-license.org/)"
      break;
    case "GNU GPLv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "Apache License 2.0":
      return "(https://www.apache.org/licenses/LICENSE-2.0)"
      break;
  }

}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  *Steps required to install project and how to get the development environment running:*

  ${data.installation}

  ## Usage

  *Instructions and examples for use:*

  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  License: ${data.license}
  [Link]${renderLicenseLink(data.license)}

  ## Tests

  *Tests for application and how to run them:*

  ${data.test}

  ## Questions

  * Please submit any questions at my [GitHub profile](https://github.com/${data.github})

  * Also, you can reach me via email @ ${data.email}. 

`;
}

module.exports = generateMarkdown;
