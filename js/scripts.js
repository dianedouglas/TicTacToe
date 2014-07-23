var Player = {
  symbol: "",
  initialize: function(XO){
    this.symbol = XO;
  }
}

var Space = {
  xCoordinate: 0,
  yCoordinate: 0,
  initialize: function(coordinate1, coordinate2) {
    this.xCoordinate = coordinate1;
    this.yCoordinate = coordinate2;
  }
}

$(document).ready(function(){
  var player1 = Object.create(Player);
  var player2 = Object.create(Player);
  player1.initialize("X");
  player2.initialize("O");


})
