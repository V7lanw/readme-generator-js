const renderLicenseBadge = function (license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge()}
  `;
}

export default generateMarkdown;
