const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

console.log("Please build your team");


function managerInformation() {
    return inquirer.prompt([
      {
        type: "input",
        message: "what is your manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your manager's ID",
        name: "ID",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your manager's office number",
        name: "number",
      },
  ]); 
}; 


function engineerInformation() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your engineer's ID",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your engineer's GitHub username",
      name: "number",
    },
  ]); 
}; 


function internInformation() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your intern's ID",
      name: "ID",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your intern's school",
      name: "number",
    },
  ]); 
}; 