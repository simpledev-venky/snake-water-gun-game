function generateGame() {
  let rounds = 0;
  let gunscore = 0;
  let waterscore = 0;
  let snakescore = 0;
  let playBtn = document.getElementById("playbtn");

  while (rounds != 10) {
    rounds += 1;

    let players = ["snake", "gun", "water"];
    let player1Num = Math.floor(Math.random() * 3);
    let player2Num = Math.floor(Math.random() * 3);
    let gunSc = document.querySelector(".gunsc");
    let waterSc = document.querySelector(".snakesc");
    let snakeSc = document.querySelector(".watersc");
    let round = document.querySelector(".round");
    let vs = document.getElementById("vs");

    if (player1Num == player2Num) {
      if (player1Num == 0) {
        player1Num += 1;
      } else if (player1Num == 1) {
        player1Num -= 1;
      } else {
        player2Num -= 1;
      }
    }
    let player1 = players[player1Num];
    let player2 = players[player2Num];
    console.log(player1, player2);
    vs.innerHTML += `${player1} vs ${player2} : ${calscore()} <br/>`;
    calscore();
    snakeSc.innerText = snakescore / 2;
    waterSc.innerText = waterscore / 2;
    gunSc.innerText = gunscore / 2;
    round.innerText = rounds;

    console.log(
      `snakescore is :${snakescore}, waterscore is:${waterscore},gunscore is :${gunscore}`
    );

    function calscore() {
      if (player1 == "water" && player2 == "snake") {
        snakescore += 1;
        return "snake";
      } else if (player1 == "snake" && player2 == "water") {
        snakescore += 1;
        return "snake";
      } else if (player1 == "snake" && player2 == "gun") {
        gunscore += 1;
        return "gun";
      } else if (player1 == "gun" && player2 == "snake") {
        gunscore += 1;
        return "gun";
      } else if (player1 == "water" && player2 == "gun") {
        waterscore += 1;
        return "water";
      } else if (player1 == "gun" && player2 == "water") {
        waterscore += 1;
        return "water";
      }
    }
  }
  let winnerImg = document.createElement("img");
  winnerImg.setAttribute("height", "200px");
  winnerImg.setAttribute("width", "200px");
  winnerImg.setAttribute("id", "winnerimg");

  function declareWinner() {
    let winner = Math.max(gunscore, waterscore, snakescore);
    if (winner == gunscore) {
      winnerImg.setAttribute("src", "gun.jpg");
      document.body.insertBefore(winnerImg, playBtn);
    } else if (winner == snakescore) {
      winnerImg.setAttribute("src", "snake.jpg");
      document.body.insertBefore(winnerImg, playBtn);
    } else if (winner == waterscore) {
      winnerImg.setAttribute("src", "water.jpg");
      document.body.insertBefore(winnerImg, playBtn);
    }
  }
  declareWinner();
}
