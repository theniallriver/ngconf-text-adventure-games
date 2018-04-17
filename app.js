var app = $("#app");
var choices = $("#choices");
var inventory = $("#inv-list");
$(document).ready(function() {
  app.append("Welcome to NG Conf. Do you want to make a game?");
  choices.html('<button id="yes">Yes</button>');
  $("#yes").click(function() {
    app.append("<br>Then let us begin.");
    app.append(
      "<br>You are walking home from school when you notice a key on the road next to a storm drain. Would you like to pick it up?"
    );
    choices.html(
      '<button id="yes2">Yes</button> <button class="red" id="no2">No </button>'
    );
    $("#yes2").click(grabKey());
    $("#no2").click(ignoreKey());
  });
});

function grabKey() {
  inventory.append("Key");
}
function ignoreKey() {
  app.append("<br> You keep walking without taking any damage.");
}
