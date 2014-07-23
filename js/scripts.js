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
  player1.initialize("X");//set from interface later
  player2.initialize("O");
  var currentPlayer = player1;//set person who goes first
  $('.whosTurnIsIt').addClass('.player1');

  tttBoard = Object.create(Board);
  tttBoard.initialize();

  $('.gameboard td').click(function(){
    //parent of cell is row. children of row = all 3 cells.
    //get index of current cell within cells of that row
    var col = $(this).parent().children().index($(this));
    //parent goes to row, paremt to tbody. children = all rows.
    //call index of rows with current row = parent of this.
    var row = $(this).parent().parent().children().index($(this).parent());
    if(row === 2){
      if(col === 0){
        tttBoard.spaces[0].mark(currentPlayer.symbol);
      }else if(col === 1){
        tttBoard.spaces[1].mark(currentPlayer.symbol);
      }else if(col === 2){
        tttBoard.spaces[2].mark(currentPlayer.symbol);
      }
    }else if(row === 1){
      if(col === 0){
        tttBoard.spaces[3].mark(currentPlayer.symbol);
      }else if(col === 1){
        tttBoard.spaces[4].mark(currentPlayer.symbol);
      }else if(col === 2){
        tttBoard.spaces[5].mark(currentPlayer.symbol);
      }
    }else if(row === 0){
      if(col === 0){
        tttBoard.spaces[6].mark(currentPlayer.symbol);
      }else if(col === 1){
        tttBoard.spaces[7].mark(currentPlayer.symbol);
      }else if(col === 2){
        tttBoard.spaces[8].mark(currentPlayer.symbol);
      }
    }
    //set symbol on board
    $(this).text(currentPlayer.symbol);
    var winner = tttBoard.whoWon();
    if(winner === 0){
      if(currentPlayer === player1){
        currentPlayer = player2;
        $('.whosTurnIsIt').addClass('.player2');
      } else {
        currentPlayer = player1;
        $('.whosTurnIsIt').addClass('.player1');
      }
    }else if(winner === currentPlayer.symbol){
      $('#winner').text("You win!")
    }else if(winner === "stalemate"){
      $('#winner').text("Nobody wins!")
    }

  });


})
