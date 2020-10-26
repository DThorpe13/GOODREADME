const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const responses = [
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Choose a title for your project.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What does this project do?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'List steps for installation.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information on this project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select on of the following licenses for your project.',
    choices: ['Apache 2.0', 'ISC', 'MIT', 'Mozilla Public 2.0', 'No license']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'State if you are open to contributions and what your requirements are for accepting them.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Give users explicit instructions on how to run all necessary tests.'
  },
]

function writeIt(file, data) {
  fs.writeFile(file, data, err => {
    if (err) throw err
  })
}

const writeFileAsync = util.promisify(writeIt);

async function init() {
  try {
    
    const info = await inquirer.prompt(responses);

    
    const markdown = generateMarkdown(info);

    
    await writeFileAsync('README.md', markdown);

  } catch (err) {
    console.log(err);
  }
};

init();
