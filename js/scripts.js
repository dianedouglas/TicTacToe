var Player = {
  symbol: "",
  initialize: function(XO){
    this.symbol = XO;
  }
}

var Space = {
  xCoordinate: 0,
  yCoordinate: 0,
  markedBy: 0,
  initialize: function(coordinate1, coordinate2) {
    this.xCoordinate = coordinate1;
    this.yCoordinate = coordinate2;
    this.markedBy = 0;
  },
  mark: function(XO) {
    this.markedBy = XO;
  }
}

var Board = {
  spaces : [],
  initialize: function() {
    for(var i = 0; i < 9; i++){
      var currentSpace = Object.create(Space);
      currentSpace.initialize((i % 3), (i / 3));
      this.spaces[i] = currentSpace;
    }
  },
  whoWon: function(){
    //check horizontal combinations.
    for(var i = 0; i < 3; i++){
      if(this.spaces[i].markedBy === this.spaces[i+1].markedBy && this.spaces[i+1].markedBy === this.spaces[i+2].markedBy && this.spaces[i].markedBy !== 0){
        return this.spaces[i].markedBy;
      }
      else if(this.spaces[i].markedBy === this.spaces[i+3].markedBy && this.spaces[i+3].markedBy === this.spaces[i+6] && this.spaces[i].markedBy !== 0){
        return this.spaces[i].markedBy;
      }
      else if(this.spaces[i].markedBy === this.spaces[i+2].markedBy && this.spaces[i+2].markedBy === this.spaces[i+4] && this.spaces[i].markedBy !== 0){
        return this.spaces[i].markedBy;
      }
      else if(this.spaces[i].markedBy === this.spaces[i+4].markedBy && this.spaces[i+4].markedBy === this.spaces[i+8] && this.spaces[i].markedBy !== 0){
        return this.spaces[i].markedBy;
      }
      else{
        var containsBlanks = false;
        for (var i = 0; i < 9; i++) {
          if(this.spaces[i].markedBy === 0) {
            containsBlanks = true;
          }
        }
        if(containsBlanks) {
          return 0;
        } else {
          return "stalemate";
        }
      }

    }
  }
}

var player1;
var player2;
var tttBoard;

$(document).ready(function(){
  //setup the game
  player1 = Object.create(Player);
  player2 = Object.create(Player);
  player1.initialize("X");
  player2.initialize("O");
  tttBoard = Object.create(Board);
  tttBoard.initialize();

//players take turns making moves.  every turn:
tttBoard.spaces[0].mark(player1.symbol);
tttBoard.whoWon();


})
