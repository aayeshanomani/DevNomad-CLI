import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from 'inquirer';
import { handleCommand } from "../lib/commands.js";

console.clear();

figlet('DevNomad CLI', (err, data) => {
    console.log(gradient.pastel.multiline(data));
    console.log('Welcome to the DevNomad CLI!');
    startPrompt();
})

function startPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'Choose an option:',
            choices: ['About', 'Skills', 'Projects', 'Contact', 'Exit'],
        },
    ]).then((answers) => {
        handleCommand(answers.command);
        if (answers.command !== 'Exit') {
            startPrompt();
        }
    })
}