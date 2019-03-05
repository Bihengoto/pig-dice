//business logic
var gamerA = "";
var gamerB = "";

var tossDice = function() {
  return Math.floor(6 * Math.random()) + 1;
};

function Gamer(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.gamerName;
}

Gamer.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.gamerName + ", you rolled a 1!! Your Game is over!");
  } else {
    this.tempscore += this.roll;
  }
};

Gamer.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;

  alert(this.gamerName + ", your turn is over, pass the mouse!");
};

Gamer.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.gamerName + " You are the winner!");
  }
};

Gamer.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.gamerName = "";
};

var clearValues = function() {
  $(".gamerAname").val("");
  $(".gamerBname").val("");
};

// User Interface
$(document).ready(function() {
  $("button#begin").click(function(event) {
    gamerA = new Gamer(true);
    gamerB = new Gamer(false);
    $("#userB").show();
    $("#userA").hide();

    var gamerAname = $(".gamerAname").val();
    $("#gamerAname").text(gamerAname);

    var gamerBname = $(".gamerBname").val();
    $("#gamerBname").text(gamerBname);

    gamerA.gamerName = gamerAname;
    gamerB.gamerName = gamerBname;
  });
});
