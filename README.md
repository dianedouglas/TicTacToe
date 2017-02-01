# _Pastel Colored Tic-Tac-Toe!_

#### _An Object-Oriented JavaScript project which lets 2 people play Tic-Tac-Toe and keep score._

#### By Diane Douglas and Amoreena Hagedorn

## Description

#### [Play it!](https:dianedouglas.github.io/TicTacToe)

This is a game Amoreena Hagedorn and I prototyped during our time as students at Epicodus as an exercise in Test Driven Development and Object Oriented programming. We started by writing out specs describing the behavior of the game and then made each one pass as a way to lead us through the project, increasing in complexity one goal at a time. 

I'm particularly happy with the conceptual structure of this project. We have two Player objects, a Board object representing the Tic Tac Toe grid itself, and a Space object which holds properties for its X and Y coordinates. The Board object holds an array of 9 space objects. Beyond the usual initialization methods, each Space has a method to mark it with either an X or an O, and the Board has a method for checking who has won on any given turn (if anyone). This made conceptual sense to me.

Later, I refactored to add features for keeping track of player names and scores through multiple games, as well as fixing small details like not allowing players to mark the same space twice.

## Setup/Installation Requirements

To load this site locally:

1. Clone or download this repository. 
2. Open `index.html` in your browser.
3. To run tests, open `specs/spec-runner.html` in your browser.

## Support and contact details

Please feel free to fork this repository and submit pull requests back. You can also contact me here:

* Email: diane.douglas1@gmail.com
* My Website: [www.MelodicCode.com](http://www.melodiccode.com)

## Technologies Used

* JavaScript
* Mocha/chai
* Of course, good 'ol HTML and CSS :)