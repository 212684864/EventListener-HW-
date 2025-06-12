const points = [0, 15, 30, 40];
let player1Score = 0;
let player2Score = 0;
let gameEnded = false;

function scorePoint(player) {
  if (gameEnded) return;

  if (player === 'player1') {
    player1Score++;
  } else {
    player2Score++;
  }

  updateScores();
}

function updateScores() {
  let display1 = '';
  let display2 = '';
  let status = '';

  if (player1Score >= 3 && player2Score >= 3) {
    if (player1Score === player2Score) {
      display1 = display2 = 'Deuce';
    } else if (player1Score === player2Score + 1) {
      display1 = 'Advantage';
      display2 = '';
    } else if (player2Score === player1Score + 1) {
      display1 = '';
      display2 = 'Advantage';
    } else if (player1Score >= player2Score + 2) {
      status = 'שחקן 1 ניצח!';
      gameEnded = true;
    } else if (player2Score >= player1Score + 2) {
      status = 'שחקן 2 ניצח!';
      gameEnded = true;
    }
  }

  if (!display1 && !display2 && !status) {
    display1 = points[player1Score] || '40+';
    display2 = points[player2Score] || '40+';
  }

  document.getElementById('score1').textContent = display1;
  document.getElementById('score2').textContent = display2;
  document.getElementById('status').textContent = status;
}
