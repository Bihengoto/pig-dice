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
