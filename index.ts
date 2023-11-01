#! user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string
    power: number = 100
    constructor(name: string) {
        this.name = name
    }
    powerDecrease() {
        let power = this.power - 25
        this.power = power
    }
    powerIncrease() {
        this.power = 100
    }
}
class Opponent {
    name: string
    power: number = 100
    constructor(name: string) {
        this.name = name
    }
    powerDecrease() {
        let power = this.power - 25
        this.power = power
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: (chalk.bgMagenta.yellow.bold("Please Enter Your Name"))
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: (chalk.red.bgBlue.bold("Please Select your Apponent")),
    choices: ["Akuma", "Chun-li", "E. Honda", "Blanka"]
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do {
    //Akuma
    if (opponent.select == "Akuma") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.powerDecrease()
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`))
                if (p1.power <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.powerDecrease()
                console.log(chalk.bold.green(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.red(`${o1.name} power is ${o1.power}`))
                if (o1.power <= 0) {
                    console.log(chalk.green.bold("You win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.powerIncrease()
            console.log(chalk.bold.italic.green(`Your Power is up your health is ${p1.power}`))
        };


        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"))
        };
    }
    //Chun-li
    if (opponent.select == "Chun-li") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.powerDecrease()
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`))
                if (p1.power <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.powerDecrease()
                console.log(chalk.bold.green(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.red(`${o1.name} power is ${o1.power}`))
                if (o1.power <= 0) {
                    console.log(chalk.green.bold("You win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.powerIncrease()
            console.log(chalk.bold.italic.green(`Your Power is up your health is ${p1.power}`))
        };


        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"))
        };
    }
    //E-Honda
    if (opponent.select == "E. Honda") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.powerDecrease()
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`))
                if (p1.power <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.powerDecrease()
                console.log(chalk.bold.green(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.red(`${o1.name} power is ${o1.power}`))
                if (o1.power <= 0) {
                    console.log(chalk.green.bold("You win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.powerIncrease()
            console.log(chalk.bold.italic.green(`Your Power is up your health is ${p1.power}`))
        };


        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"))
        };
    }
    //Blanka
    if (opponent.select == "Blanka") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: (chalk.red.bold("Please Select The Action")),
            choices: ["Fight", "Power-up", "Save Your Life"]
        });
        if (ask.opt == "Fight") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.powerDecrease()
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`))
                if (p1.power <= 0) {
                    console.log(chalk.red.bold("You loose Better Luck Next Time"))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.powerDecrease()
                console.log(chalk.bold.green(`${p1.name} power is ${p1.power}`))
                console.log(chalk.bold.red(`${o1.name} power is ${o1.power}`))
                if (o1.power <= 0) {
                    console.log(chalk.green.bold("You win"))
                    process.exit()
                }
            }
        }
        if (ask.opt == "Power-up") {
            p1.powerIncrease()
            console.log(chalk.bold.italic.green(`Your Power is up your health is ${p1.power}`))
        };


        if (ask.opt == "Save Your Life") {
            console.log(chalk.red.bold("You loose Better Luck Next Time"))
        };
    }
}
while (true)
