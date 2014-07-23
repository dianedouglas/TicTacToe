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
    });
  });
});

  // describe("create"); // you write the rest of this one!

//   describe("markBy", function() {
//     it("lets a player mark the space", function() {
//       var testPlayer = Object.create(Player);
//       testPlayer.initialize("X");
//       var testSpace = Object.create(Space);
//       testSpace.initialize(1, 2);
//       testSpace.markBy(testPlayer);
//       testSpace.markedBy.should.equal(testPlayer);
//     });
//   });
// });

// describe("Board", function() {
//   it("creates 9 spaces when it is initialized"); // you write the rest!
// });
