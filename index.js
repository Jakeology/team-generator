const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

function teamMenu() {
  function getManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the team manager's id?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerEmail,
          answers.managerId,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        getTeam();
      });
  }
}

function getTeam() {}
