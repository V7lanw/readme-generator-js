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
  const commercialUsePermissions = "- [Commercial use](https://choosealicense.com/appendix/#commercial-use): 🟢 The licensed material and derivatives may be used for commercial purposes.";
  const distributionPermissions = "- [Distribution](https://choosealicense.com/appendix/#distribution): 🟢 The licensed material may be distributed.";
  const modificationPermissions = "- [Modification](https://choosealicense.com/appendix/#modifications): 🟢 The licensed material may be modified.";
  const patentUsePermissions = "- [Patent use](https://choosealicense.com/appendix/#patent-use): 🟢 This license provides an express grant of patent rights from contributors.";
  const patentUseLimitations = "- [Patent use](https://choosealicense.com/appendix/#patent-use): 🔴 This license explicitly states that it does NOT grant any rights in the patents of contributors.";
  const privateUsePermissions = "- [Private use](https://choosealicense.com/appendix/#private-use): 🟢 The licensed material may be used and modified in private.";
  const discloseSourceConditions = "- [Disclose source](https://choosealicense.com/appendix/#disclose-source): 🔵 Source code must be made available when the licensed material is distributed.";
  const licenseAndCopyrightNoticeConditions = "- [License and copyright notice](https://choosealicense.com/appendix/#include-copyright): 🔵 A copy of the license and copyright notice must be included with the licensed material.";
  const licenseAndCopyrightNoticeForSourceConditions = "- [License and copyright notice for source](https://choosealicense.com/appendix/#include-copyright): 🔵 A copy of the license and copyright notice must be included with the licensed material in source form, but is not required for binaries.";
  const networkUseIsDistributionConditions = "- [Network use is distribution](https://choosealicense.com/appendix/#network-use-disclose): 🔵 Users who interact with the licensed material via network are given the right to receive a copy of the source code.";
  const sameLicenseConditions = "- [Same license](https://choosealicense.com/appendix/#same-license): 🔵 Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.";
  const sameLicenseFileConditions = "- [Same license (file)](https://choosealicense.com/appendix/#same-license): 🔵 Modifications of existing files must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used.";
  const sameLicenseLibraryConditions = "- [Same license (library)](https://choosealicense.com/appendix/#same-license): 🔵 Modifications must be released under the same license when distributing the licensed material. In some cases a similar or related license may be used, or this condition may not apply to works that use the licensed material as a library.";
  const stateChangesConditions = "- [State changes](https://choosealicense.com/appendix/#document-changes): 🔵 Changes made to the licensed material must be documented.";
  const liabilityLimitations = "- [Liability](https://choosealicense.com/appendix/#liability): 🔴 This license includes a limitation of liability.";
  const trademarkUseLimitations = "- [Trademark use](https://choosealicense.com/appendix/#trademark-use): 🔴 This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any implicit trademark rights.";
  const warrantyLimitations = "- [Warranty](https://choosealicense.com/appendix/#warranty): 🔴 This license explicitly states that it does NOT provide any warranty.";
  switch (license) {
    case 'None':
      return "None";
      break;
    case 'Apache License 2.0':
      return `Apache License 2.0\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${patentUsePermissions}\n${privateUsePermissions}\n${licenseAndCopyrightNoticeConditions}\n${stateChangesConditions}\n${liabilityLimitations}\n${trademarkUseLimitations}\n${warrantyLimitations}`;
      break;
    case 'GNU General Public License v3.0':
      return `GNU General Public License v3.0\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${patentUsePermissions}\n${privateUsePermissions}\n${discloseSourceConditions}\n${licenseAndCopyrightNoticeConditions}\n${sameLicenseConditions}\n${stateChangesConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'MIT License':
      return `MIT License\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${privateUsePermissions}\n${licenseAndCopyrightNoticeConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      return `BSD 2-Clause "Simplified" License\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${privateUsePermissions}\n${licenseAndCopyrightNoticeConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      return `BSD 3-Clause "New" or "Revised" License\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${privateUsePermissions}\n${licenseAndCopyrightNoticeConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'Boost Software License 1.0':
      return `Boost Software License 1.0\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${privateUsePermissions}\n${licenseAndCopyrightNoticeForSourceConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return `Creative Commons Zero v1.0 Universal\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${patentUseLimitations}\n${privateUsePermissions}\n${liabilityLimitations}\n${trademarkUseLimitations}\n${warrantyLimitations}`;
      break;
    case 'Eclipse Public License 2.0':
      return `Eclipse Public License 2.0\n\n${commercialUsePermissions}\n${distributionPermissions}\n${modificationPermissions}\n${patentUsePermissions}\n${privateUsePermissions}\n${discloseSourceConditions}\n${licenseAndCopyrightNoticeConditions}\n${sameLicenseConditions}\n${liabilityLimitations}\n${warrantyLimitations}`;
      break;
    case 'GNU Affero General Public License v3.0':
      return 'GNU Affero General Public License v3.0';
      break;
    case 'GNU General Public License v2.0':
      return 'GNU General Public License v2.0';
      break;
    case 'GNU Lesser General Public License v2.1':
      return 'GNU Lesser General Public License v2.1';
      break;
    case 'Mozilla Public License 2.0':
      return 'Mozilla Public License 2.0';
      break;
    case 'The Unlicense':
      return 'The Unlicense';
      break;
    default:
      return "If all of the options in GitHub cannot satisfy your taste, ref [choose a license](https://choosealicense.com/appendix/) and check typos when copy and paste."
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
