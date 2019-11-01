# Monster RPG

Your task is to build an rpg game where a user can battle famous spooky monsters for points and rank on a leaderboard.

Technologies Needed:
* NodeJS
* Inquirer NPM
* MySQL2 NPM
* MySQL Database

### Data Needed

- JS Array of Monsters
  - Each monster should have a name and an hp such that: hp > 20 && hp <= 50
  - There should be at least one of each of the following monsters: Frankenstein, Werewolf, Zombie, Mummy, Vampire, Demon, and Alien
  - This array does NOT need to be stored in your MySQL Database

- MySQL Database and Table
  - Create a database
  - Create a table for the user leaderboard
  - The table should have a column for the user's name and a column for the user's score

#### The Main Menu

- Start by creating an inquirer prompt to ask the user what they want to do. The choices should be 'Fight', 'View Leaderboard', and 'Exit Game'. Use `process.exit()` to leave the game if they choose 'Exit'. If the user chooses 'View Leaderboard' take them to the Leaderboard Menu (described later). If the user chooses 'Fight' throw them to the First Fight Menu.

#### The First Fight Menu

- Once the user enters the First Fight Menu, start the user's hp at 100 points and their overall score in the game at 0. Choose a random monster from your monster array for them to battle, and display its stats for the user to see. Once done, move the user to the fight menu.

#### The Fight Menu

- Create an inquirer prompt to ask the user what they want to do. The choices should be 'Attack', or 'Run Away'. If the user chooses 'Run Away' then send them to the Record Menu (described later). If the user chooses 'Attack' do the following steps:

  1. Choose a random number between 1 & 100, we'll call that the marker
  2. Choose a random number between 1 & 15, we'll call that the damage
  3. If the marker is less than or equal to 50, subtract the damage from the user's hp
  4. If the marker is greater than 50, subtract the damage from the monster's hp
  5. Display the damage done so the user can see the current status
  6. If the user's hp <= 0 then send them to the Record Menu (described later)
  7. If the monster's hp <= 0 then increase their score by 1, give them 20 more hp, and send them to the First Fight Menu to begin a new round
  8. If both the user and monster still have health, send the user recursively back to the Fight Menu

- NOTE: Keep sending the user into new battles with new monsters so long as their health remains above 0.

#### The Record Menu

- Create an inquirer prompt to ask the user what their name is. Once you have the user's name, send it along with their score to be stored in your MySQL Database. Once their score has been recorded, send them to the Leaderboard Menu.

#### The Leaderboard Menu

- Query your MySQL Database for the stored leaderboard data. Make sure that, in this query, you order it by score from greatest to least, and limit the results to only the top 10 (both the ordering and the limiting can be done within the MySQL query itself). Display the final data, then send the user to the Main Menu
