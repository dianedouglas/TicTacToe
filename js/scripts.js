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
  }
}

$(document).ready(function(){
  var player1 = Object.create(Player);
  var player2 = Object.create(Player);
  player1.initialize("X");
  player2.initialize("O");

  // var space1 =Object.create(Space);
  // space1.initialize(0,0);
  // space1.mark(player1.symbol);


})
