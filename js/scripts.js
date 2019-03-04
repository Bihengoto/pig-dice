$(document).ready(function() {
  $("form#registerIn").submit(function(event) {
    event.preventDefault();
    $("#start").hide();
    $("#overall").show();
    var playerA = $("#nameA").val();
    var playerB = $("#nameB").val();
    $("#namesA").text(playerA);
    $("#namesB").text(playerB);
  });
});
