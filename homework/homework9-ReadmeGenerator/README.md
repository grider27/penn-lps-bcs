# Node.js: Professional README Generator

## Description 
  
Create a command-line application that runs with Node.js that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Check out the [`SampleREADME.md`](SampleREADME.md) in this repo as an example. 


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)
  

## Installation

*Steps required to install project and how to get the development environment running:*

To generate your own README, first run `npm install` in order to install the following npm package dependencies
  * [`inquirer`](https://www.npmjs.com/package/inquirer)

The application itself can be invoked with `node index.js`.


## Usage 

*Instructions and examples for use:*

![Demo of README-generator](demo.gif)

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project. The application will generate markdown with a table of contents for the README. The application uses `fs.writeFile` is used to generate your project's README.md file. Check out the [`SampleREADME.md`](SampleREADME.md) as an example.


## License

MIT License

---

## Questions?

* Please submit any questions at my [GitHub profile](https://github.com/grider27)

* Also, you can reach me via email @ grider27@gmail.com
