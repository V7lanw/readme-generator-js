const renderLicenseBadge = (license) => {
  if (license !== "None") {
    let licenseURLCode = license.replaceAll(" ", "%20");
    return `![GitHub license](https://img.shields.io/badge/license-${licenseURLCode}-blue.svg)`;
  }
  return "";
};

const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `\n\n* [License](#license)`;
  }
  return "";
};

const renderLicenseSection = (license) => {
  switch (license) {
    case 'None':
      return "None";
      break;
    case 'Apache License 2.0':
      return 'Apache License 2.0\n\n+ Commercial use';
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.Title}

${renderLicenseBadge(data.License)}

## Description

${data.Description}

### Table of Contents

* [Installation](#installation)

* [Usage](#usage)${renderLicenseLink(data.License)}

* [Contributions](#contributions)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\` bash
${data.Installation}
\`\`\`

## Usage

${data.Usage}

## License

${renderLicenseSection(data.License)}

## Contributions

${data.Contributions}

## Tests

To test all cases, run the following command:

\`\`\` bash
${data.Tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly (${data.Email}).

You can find more of my work at [${data.GitHub}'s niches](https://github.com/${data.GitHub}?tab=repositories).
`;
}

export default generateMarkdown;
