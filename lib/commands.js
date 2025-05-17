import chalk from "chalk";

export function handleCommand(cmd) {
    switch(cmd) {
        case 'About':
            console.log(chalk.cyan(
                `Hi, I'm Aayesha Nomani!
                SDE II at Amazon | Building DevNomad
                Passionate about scalable software solutions.
                More at: https://devnomadPortfolio.vercel.app/`
            ));
            break;
        
        case 'Skills':
            console.log(chalk.magenta(`
                Skills:
                - Languages: Java, Python, C++, Kotlin, JavaScript, TypeScript
                - Frameworks: SpringBoot, React, Angular, Flutter
                - DevOps: Docker, Kubernetes, CI/CD, AWS CDK
                - Methodologies: Scrum, Kanban`
            ));
            break;

        case 'Projects':
            console.log(chalk.green(
                `Projects:
                - DevNomad CLI: Terminal based portfolio
                - AwS Q: GenAI chat application
                - Amazon DashCart: Smart cart with real-time navigation
                - School ERP: Comprehensive school management system`
            ));
            break;

        case 'Contact':
            console.log(chalk.yellow(
                `Contact:
                - Email: aayeshanomani@gmail.com
                - Github: github.com/aayeshanomani`
            ));
            break;

        case 'Exit':
            console.log(chalk.gray(`
                \nThanks for visiting! Have a great day!`));
                process.exit();

        default:
            console.log(chalk.red(
                `Unknown command.`
            ));
    }
}