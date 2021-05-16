// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Game {
  /**
   * Sets up the game
   * @param {string} player1Name The name of player 1
   * @param {string} player2Name The name of player 2
   */
  constructor(player1Name = 'pl1', player2Name = 'pl2') {
    this.theEnd = false;

    this.player1 = {
      name: player1Name,
      health: 100
    };

    this.player2 = {
      name: player2Name,
      health: 100
    };
  }

  /**
   * Starts the game and logs out the status of players
   */
  start() {
    this.reset();
    while (!this.theEnd) {
      this.pl1AttackPl2();
      this.pl2Heal();
      this.pl2AttackPl1();
      this.pl1Heal();
      this.playerStatus();
      this.checkTheEnd();
    }
    this.declareWinner();
  }

  /**
   * Console log the winner of the battle
   */
  declareWinner() {
    if (this.theEnd == true && this.player1.health <= 0) {
      console.log(this.player2.name + ' WINS!');
    } else if (this.theEnd == true && this.player2.health <= 0) {
      console.log(this.player1.name + ' WINS!');
    } else {
      console.log("Can't declare winner yet!");
    }
  }

  /**
   * If player 1 or player 2 health is below 0
   * Mark theEnd true, to stop the game
   */
  checkTheEnd() {
    if (this.player1.health <= 0 || this.player2.health <= 0) {
      this.theEnd = true;
    } else {
      console.log('THE ROUND IS STILL GOING!');
    }
  }

  /**
   * Console log the name and health of both players
   * Ex: Player 1: 100 | Player 2: 50
   */
  playerStatus() {
    console.log(
      'Player 1: ' + this.player1.name + ',' + ' Health: ' + this.player1.health
    );
    console.log(
      'Player 2: ' + this.player2.name + ',' + ' Health: ' + this.player2.health
    );
  }

  /**
   * Reset health of player 1 and player 2 to 100
   * Reset theEnd to false
   */
  reset() {
    this.player1.health = 100;
    this.player2.heath = 100;
    this.theEnd = false;
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 2
   */
  pl1AttackPl2() {
    let p1Atk = Math.floor(Math.random() * 10) + 1;
    this.player2.health = this.player2.health - p1Atk;
    console.log(
      this.player1.name +
        ' attacks ' +
        this.player2.name +
        ' for ' +
        p1Atk +
        ' damage!'
    );
  }

  /**
   * Generate a random number between 1 and 10 using Math.random()
   * Use that number to decrease health from player 1
   */
  pl2AttackPl1() {
    let p2Atk = Math.floor(Math.random() * 10) + 1;

    this.player1.health = this.player1.health - p2Atk;
    console.log(
      this.player2.name +
        ' attacks ' +
        this.player1.name +
        ' for ' +
        p2Atk +
        ' damage!'
    );
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 1
   */
  pl1Heal() {
    let p1Heal = Math.floor(Math.random() * 5) + 1;

    this.player1.health = this.player1.health + p1Heal;

    console.log(this.player1.name + ' heals for ' + p1Heal + 'HP');
  }

  /**
   * Generate a random number between 1 and 5 using Math.random()
   * Use that number to increase health of player 2
   */
  pl2Heal() {
    let p2Heal = Math.floor(Math.random() * 5) + 1;

    this.player2.health = this.player2.health + p2Heal;

    console.log(this.player2.name + ' heals for ' + p2Heal + 'HP');
  }
}

// Initialize the class here
// Call the start function of the game

let round1 = new Game('Lance', 'Daniel');
round1.start();
