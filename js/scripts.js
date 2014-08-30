var Player = {
  symbol: "",
  name: "",
  initialize: function(XO, name){
    this.symbol = XO;
    this.name = name;
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
    if(this.markedBy){
      return "already_marked";
    }else{
      this.markedBy = XO;
      return true;
    }
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
    for(var i = 0; i < 9; i+=3){
      if(((this.spaces[i].markedBy === this.spaces[i+1].markedBy) && (this.spaces[i+1].markedBy === this.spaces[i+2].markedBy)) && (this.spaces[i].markedBy !== 0)){
        return this.spaces[i].markedBy;
      }
      else if(((this.spaces[i/3].markedBy === this.spaces[i/3+3].markedBy) && (this.spaces[i/3+3].markedBy === this.spaces[i/3+6].markedBy)) && (this.spaces[i/3].markedBy !== 0)){
        return this.spaces[i/3].markedBy;
      }
      else if(((this.spaces[2].markedBy === this.spaces[4].markedBy) && (this.spaces[4].markedBy === this.spaces[6].markedBy)) && (this.spaces[2].markedBy !== 0)){
        return this.spaces[2].markedBy;
      }
      else if(((this.spaces[0].markedBy === this.spaces[4].markedBy) && (this.spaces[4].markedBy === this.spaces[8].markedBy)) && (this.spaces[0].markedBy !== 0)){
        return this.spaces[0].markedBy;
      }
    }
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

var player1;
var player2;
var tttBoard;
var currentPlayer;
var scoreboard = {};
scoreboard["stalemates"] = 0;

$(document).ready(function(){
  $('#player-info').submit(function(event) {
    //setup the game
    player1 = Object.create(Player);
    player2 = Object.create(Player);
    player1.initialize("X", $('#player1-name').val());//set from interface later
    player2.initialize("O", $('#player2-name').val());
    scoreboard[player1.name] = 0;
    scoreboard[player2.name] = 0;
    currentPlayer = player1;//set person who goes first
    $('.player-name').text(currentPlayer.name);
    $('.whosTurnIsIt').addClass('player1');

    tttBoard = Object.create(Board);
    tttBoard.initialize();
    $('.setup-screen').hide();
    $('.whosTurnIsIt').slideDown('slow');
    $('.winner').hide();
    event.preventDefault();
  })

  $('.gameboard td').click(function(){
    //parent of cell is row. children of row = all 3 cells.
    //get index of current cell within cells of that row
    var col = $(this).parent().children().index($(this));
    //parent goes to row, paremt to tbody. children = all rows.
    //call index of rows with current row = parent of this.
    var row = $(this).parent().parent().children().index($(this).parent());

    var marked_result;
    if(row === 2){
      if(col === 0){
        marked_result = tttBoard.spaces[0].mark(currentPlayer.symbol);
      }else if(col === 1){
        marked_result = tttBoard.spaces[1].mark(currentPlayer.symbol);
      }else if(col === 2){
        marked_result = tttBoard.spaces[2].mark(currentPlayer.symbol);
      }
    }else if(row === 1){
      if(col === 0){
        marked_result = tttBoard.spaces[3].mark(currentPlayer.symbol);
      }else if(col === 1){
        marked_result = tttBoard.spaces[4].mark(currentPlayer.symbol);
      }else if(col === 2){
        marked_result = tttBoard.spaces[5].mark(currentPlayer.symbol);
      }
    }else if(row === 0){
      if(col === 0){
        marked_result = tttBoard.spaces[6].mark(currentPlayer.symbol);
      }else if(col === 1){
        marked_result = tttBoard.spaces[7].mark(currentPlayer.symbol);
      }else if(col === 2){
        marked_result = tttBoard.spaces[8].mark(currentPlayer.symbol);
      }
    }
    //set symbol on board
    if(marked_result !== "already_marked"){
      $(this).text(currentPlayer.symbol);
      var winner = tttBoard.whoWon();
      if(winner === 0){
        if(currentPlayer === player1){
          currentPlayer = player2;
          $('.whosTurnIsIt').addClass('player2');
          $('.whosTurnIsIt').removeClass('player1');
        } else {
          currentPlayer = player1;
          $('.whosTurnIsIt').addClass('player1');
          $('.whosTurnIsIt').removeClass('player2');
        }
        $('.player-name').text(currentPlayer.name);
      }else if(winner === currentPlayer.symbol){
        $('.whos-turn').text("");
        $('.winner .gametext').text(currentPlayer.name + " Wins!");
        $('.winner').slideDown('slow');
        scoreboard[currentPlayer.name] += 1;
        display_scores();
      }else if(winner === "stalemate"){
        $('.whos-turn').text("");
        $('.winner .gametext').text("Nobody Wins!");
        $('.winner').slideDown('slow');
        scoreboard["stalemates"] += 1;
        display_scores();
      }
    }
  });
})


var display_scores = function(){
  $('.scoreboard').slideDown('slow');
  $('.player1-score').text(player1.name + ": " + scoreboard[player1.name]);
  $('.player2-score').text(player2.name + ": " + scoreboard[player2.name]);
  $('.stalemate-score').text("Stalemates: " + scoreboard["stalemates"]);
}
