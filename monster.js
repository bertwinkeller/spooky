

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
          fight()
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