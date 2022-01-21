// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
  } 
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return  `* [License](#license)`

  } 
  else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  if (license !== 'none'){
  return  
  `## License 
  ${license}`
} 
else{
  return '';
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
 ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub](#github)
  * [Email](#email)
  
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ##Badge
  ${renderLicenseBadge(data.license)}
  
  ## Tests 
  ${data.tests}
  
  ## Questions
  ${data.questions}
  
  ## GitHub 
  ${data.user}
  
  ## Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
