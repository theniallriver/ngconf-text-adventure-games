$(document).ready(function() {
  app.append("Welcome to NG Conf. Do you want to play a game?");
  addChoices([
    {
      id: "yes",
      text: "Yes"
    }
  ]);
  choseIdAndRun("yes", startGame);
});

function startGame() {
  userChose("Yes");
  print("Then let us begin.");
  print(
    "You are walking home from school when you notice a key on the road next to a storm drain. Would you like to pick it up?"
  );
  addChoices([
    {
      id: "yes",
      text: "Yes"
    },
    {
      id: "no",
      text: "No",
      color: "red"
    }
  ]);
  choseIdAndRun("yes", getKey);
  choseIdAndRun("no", ignoreKey);

  function getKey() {
    pickUp("key");
    userChose("No");
    print("You picked up the key");
    print(
      "A huge hairy rat jumps out of the storm drain and runs across your hand as you are picking up the key. You shiver and fall over."
    );
    print("What would you like to do?");
    choices.html(
      '<button class="red" id="fight"> Fight Rat </button> <button id="run"> Run Away </Button>'
    );

    $("#fight").click(function() {
      print(
        " You stand up and kick the rat. As you kick it, it bites through your shoe and into your big toe. Your toe begins to throb as you lose 10 HP."
      );
      loseHealth(10);
    });
  }
  function ignoreKey() {
    u;
  }

  $("#no2").click(function() {
    print(
      "<br> You keep walking home. While you are walking, you notice a man in a black suit walking towards you. What do you do?"
    );
    choices.html(
      '<button id="talk">Talk to the man</button><button id="run">Run away</button>'
    );
  });
}
