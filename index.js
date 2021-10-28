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
          validate: (managerName) => {
            if (managerName) {
              return true;
            }
            return "Please enter a valid name.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          validate: (managerEmail) => {
            const validEmail = managerEmail.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the team manager's id?",
          validate: (managerId) => {
            const validNum = managerId.match(/^[0-9]+$/);
            if (validNum) {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          validate: (managerOfficeNumber) => {
            const validNum = managerOfficeNumber.match(/^[0-9]+$/);
            if (validNum) {
              return true;
            }
            return "Please enter a valid office number.";
          },
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

  function getTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addTeamMember",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Finish adding team members"],
        },
      ])
      .then((choice) => {
        switch (choice.addTeamMember) {
          case "Engineer":
            getEngineer();
            break;
          case "Intern":
            getIntern();
            break;
          default:
            generateTeam();
        }
      });
  }

  function getEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (engineerName) => {
            if (engineerName) {
              return true;
            }
            return "Please enter a valid name.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: (engineerEmail) => {
            const validEmail = engineerEmail.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
          validate: (engineerId) => {
            const validNum = engineerId.match(/^[0-9]+$/);
            if (validNum) {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's github?",
          validate: (engineerGithub) => {
            if (engineerGithub) {
              return true;
            }
            return "Please enter a valid github username.";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerEmail,
          answers.engineerId,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        getTeam();
      });
  }

  function getIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (internName) => {
            if (internName) {
              return true;
            }
            return "Please enter a valid name.";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          validate: (internEmail) => {
            const validEmail = internEmail.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            }
            return "Please enter a valid email.";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
          validate: (internId) => {
            const validNum = internId.match(/^[0-9]+$/);
            if (validNum) {
              return true;
            }
            return "Please enter a valid id.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school did the intern attend?",
          validate: (internSchool) => {
            if (internSchool) {
              return true;
            }
            return "Please enter a valid school name.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(answers.internName, answers.internEmail, answers.internId, answers.internSchool);
        teamMembers.push(intern);
        getTeam();
      });
  }

  function generateTeam() {
    if (!fs.existsSync("./dist")) {
      fs.mkdirSync("./dist");
    }
    fs.copyFileSync("./src/style.css", "./dist/style.css");
    fs.writeFileSync("./dist/index.html", pageTemplate(teamMembers), "utf-8");
  }

  getManager();
}

teamMenu();
