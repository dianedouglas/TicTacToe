describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
      testSpace.markedBy.should.equal(0);
    });
  });

  describe("mark", function() {
    it("sets the markedBy property to either X or O", function() {
      var testSpace = Object.create(Space);
      testSpace.xCoordinate = 1;
      testSpace.yCoordinate = 2;
      testSpace.markedBy = 0;
      testSpace.mark("X");
      testSpace.markedBy.should.equal("X");
    });
  });
});

describe("Board", function() {
  describe("initialize", function(){
    it("creates 9 spaces when it is initialized", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces[0].xCoordinate.should.equal(0);
      testBoard.spaces[0].yCoordinate.should.equal(0);
    });
  });
  describe("whoWon", function(){
    it("will return an X if there is a row of three Xs", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces[0].mark("X");
      testBoard.spaces[1].mark("X");
      testBoard.spaces[2].mark("X");
      testBoard.whoWon().should.equal("X");
    });
    it("will return stalemate if all spaces are full and there is no winning combination", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces[0].mark("X");
      testBoard.spaces[1].mark("O");
      testBoard.spaces[2].mark("O");
      testBoard.spaces[3].mark("O");
      testBoard.spaces[4].mark("X");
      testBoard.spaces[5].mark("X");
      testBoard.spaces[6].mark("X");
      testBoard.spaces[7].mark("X");
      testBoard.spaces[8].mark("O");
      testBoard.whoWon().should.equal("stalemate");
    })
  });
});

// describe("create"); // you write the rest of this one!
