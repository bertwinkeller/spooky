const inquirer = require('inquirer')
const mysql = require('mysql2')
// moster variables
let randNum = Math.floor(Math.random() * 30) + 20

let monsterFighter = ['Frankenstein', 'Werewolf', 'Zombie', 'Mummy', 'Vampire', 'Demon', 'And', 'Alien']

let pullMonster = monsterFighter[Math.floor(Math.random() * 7)]
 
let monsterHealth;


// user variables
let userHp = 100
let  userScore = 0

let menu = () => {
  inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Do you want to fight!? View the leaderboard or run away like a coward',
    choices: ['FIGHT', 'VIEW LEADERBOARD', 'EXIT']
  })
    .then(({ choice }) => {
      switch (choice) {
        case 'FIGHT':
          fightMenu()
          break
        case 'VIEW LEADERBOARD':
          view()
          break
        case 'EXIT':
          process.exit()
          break
      }
    })
    .catch(e => console.log(e))
}
menu()


let fightMenu = () => {
  let monsterHealth = randNum

  inquirer.prompt({
    type: 'confirm',
    name: 'ready',
    message: `
    ------------------------------------------------------------
     Your HP is ${userHp} and score is ${userScore}
     you are fighting ${pullMonster} with a life total of ${randNum} 
     Are you ready to fight?
    -------------------------------------------------------------
    `
  })
    .then(answers => {
      if (answers.ready === true) {
        fight()
      } else {
        process.exit()
      }
    })
}
