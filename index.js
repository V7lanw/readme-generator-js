import fs from "fs";
import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username? 🐱‍💻  \n    "
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address? ✉️  \n    "
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project's name? (CAPITALIZE IT!) 📐🔬⚙️  \n    "
    },
    {
        type: "input",
        name: "Description",
        message: "Please describe your project briefly? 📝  \n    "
    },
    {
        type: "list",
        name: "License",
        message: "Which is the license of your project? ®️  \n    ",
        choices:
            [
                'None',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
    },
    {
        type: "input",
        name: "Installation",
        message: "What command should be run to install all dependencies? 🏗️  \n    ",
        default: "npm install ..."
    },
    {
        type: "input",
        name: "Tests",
        message: "What command should be run to test all mock cases? 🏗️  \n    ",
        default: "npm test ..."
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the objective of this project? 🎯 \n  and how to play with your project code? 🕹️  \n    ",
        default: "This project is about ...\nTo run it, install dependencies first with \`npm install\` ...\nthen type\n\n\`\`\` bash\nnpm ./index.js\n\`\`\`\n\nand follow the steps in CLI ..."
    },
    {
        type: "input",
        name: "Contributions",
        message: "What is the future development plan of this project? 🏗️ \n  and how to engage with your project code? 🛠️  \n    ",
        default: "npm install ... then npm test ..."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile("README.markdown", generateMarkdown({ ...response }));
    });
}

// function call to initialize program
init();
