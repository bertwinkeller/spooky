const inquirer = require('inquirer')
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'spooky_db'
});

// moster variables


let monsterFighter = ['Frankenstein', 'Werewolf', 'Zombie', 'Mummy', 'Vampire', 'Demon', 'And', 'Alien']

let pullMonster = monsterFighter[Math.floor(Math.random() * 7)]
let monHealth;
const monsterHealth = _ => {
  let randNum = Math.floor(Math.random() * 30) + 20
  monHealth = randNum
  return monHealth
}


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
          connection.execute(
            'SELECT * FROM `scores`',
            function (err, id) {
                console.log(id);
                process.exit()
            }
        );
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
  monsterHealth()

  inquirer.prompt({
    type: 'confirm',
    name: 'ready',
    message: `
    ------------------------------------------------------------
     Your HP is ${userHp} and score is ${userScore}
     you are fighting ${pullMonster} with a life total of ${monHealth} 
     Are you ready to fight?
    -------------------------------------------------------------
    `
  })
    .then(answers => {
      if (answers.ready === true) {
        fightActions()
      } else {
        process.exit()
      }
    })
}

const fightActions = _ => {
  inquirer.prompt([
      {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ['Attack', 'Run away']
      }
  ]).then( choice => {
      switch(choice.choice){
          case 'Attack': fight()
          break;
          case 'Run away': recordMenu()
          break;
      }
  })
  }
  
  let score = 0
  const fight = _ => {
  let marker = Math.floor((Math.random() * 99) + 1)
  let damage = Math.floor((Math.random() * 14) + 1)
  
  
  if(marker >= 50){
      userHp -= damage
      console.log(`Damage taken to user: ${damage}`)
      console.log(`User Health: ${userHp}`)
      console.log(`Monster Health: ${monHealth}`)
      userHp <= 0 ? recordMenu() : fightActions()
  
      
  }else{
      monHealth -= damage
      console.log(`Damage dealt to monster: ${damage}`)
      console.log(`User Health: ${userHp}`)
      console.log(`Monster Health: ${monHealth}`)
      monHealth <= 0 ? (score += 1, userHp += 20, fightMenu()) : fightActions()
     
  
  }
  }
  
  
 
  
   const recordMenu = _ => {
      inquirer.prompt({
          type: 'input',
          name: 'userName',
          message: 'What is your Username?'
      })
      .then(({userName}) => {
          connection.query(`INSERT INTO scores (name, score) VALUES (?, ?)`, [userName, score], (e,data) => {
              if(e){
              console.log(e)
              } 
              connection.execute(
                'SELECT * FROM `scores`',
                function (err, id) {
                    console.log(id);
                    process.exit()
                }
            );

      })
  
   })
   }