function print(text) {
  app.append(`<br>${text}`);
}

function userChose(text) {
  app.append(`<br> <span class='code'> >> ${text}</span>`);
}

function addChoices(arrayOfChoices) {
  let domString = "";
  arrayOfChoices.forEach(i => {
    domString += `<button id=${i.id} ${
      i.color ? `style="color: ${i.color}; border-color:${i.color}"` : " "
    }'>${i.text}</button>`;
  });
  choices.html(domString);
}

function choseIdAndRun(buttonId, functionToRun) {
  $(`#${buttonId}`).click(functionToRun);
}

function loseHealth(num) {
  characterHealth -= num;
  health.width(characterHealth * 3);
  if (characterHealth <= 0) {
    app.append('<br> <span class="red">Game Over</span>');
    print("Would you like to start over?");
    choices.html("<button id='start-over'> Yes </button>");
    $("#start-over").click(function() {
      console.log("starting over");
      characterHealth = 100;
      health.width(characterHealth * 3);
      charInventory = [];
      inventory.html("");
      $("#app").html("");
      print("Would you like to start over?");
      startGame();
    });
  }
}

function pickUp(item) {
  inventory.append(`<br> ${item}`);
  charInventory.push(item);
}
