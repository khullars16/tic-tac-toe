import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  playerOne = 'Enter Names To Start The Game';
  playerTwo = 'Enter Names To Start The Game';
  isStarted = false;
  itemArray: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}

  handleClick(itemNumber: number) {
    if (this.isStarted) {
      if (this.winMessage) {
        return this.toastr.success(this.winMessage);
      }

      if (this.itemArray[itemNumber] === 'empty') {
        this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
        this.isCross = !this.isCross;
      } else {
        return this.toastr.info('already filled');
      }

      this.checkIsWinner();
    }
  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
    this.isStarted = false;
    this.playerOne = 'Enter Names To Start The Game';
    this.playerTwo = 'Enter Names To Start The Game';
  };

  checkIsWinner = () => {
    if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2]
    ) {
      if (this.itemArray[0] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[5] &&
      this.itemArray[3] === this.itemArray[4]
    ) {
      if (this.itemArray[3] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8]
    ) {
      if (this.itemArray[6] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[0] === this.itemArray[6]
    ) {
      if (this.itemArray[0] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7]
    ) {
      if (this.itemArray[1] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8]
    ) {
      if (this.itemArray[2] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8]
    ) {
      if (this.itemArray[0] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6]
    ) {
      if (this.itemArray[2] == 'circle') {
        this.winMessage = `Game Over ${this.playerOne} won`;
      } else {
        this.winMessage = `Game Over ${this.playerTwo} won`;
      }
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[1] !== 'empty' &&
      this.itemArray[2] !== 'empty' &&
      this.itemArray[3] !== 'empty' &&
      this.itemArray[4] !== 'empty' &&
      this.itemArray[5] !== 'empty' &&
      this.itemArray[6] !== 'empty' &&
      this.itemArray[7] !== 'empty' &&
      this.itemArray[8] !== 'empty'
    ) {
      this.winMessage = `Game Draw Nobody Wins`;
    }
  };

  startGame(firstPlayer, secondPlayer) {
    if (firstPlayer.value == '' || secondPlayer.value == '') {
      alert('Enter players name to start');
    } else {
      this.playerOne = firstPlayer.value;
      this.playerTwo = secondPlayer.value;
      this.isStarted = true;
    }
  }
}
