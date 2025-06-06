const ball = document.getElementById('ball');
const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let score = 0;
let ballTop = 0;
let ballLeft = 140;
let basketLeft = 130;
let interval;

function resetBall() {
  ballTop = 0;
  ballLeft = Math.floor(Math.random() * 280);
  ball.style.left = ballLeft + 'px';
}

function updateGame() {
  ballTop += 5;
  ball.style.top = ballTop + 'px';

  if (ballTop >= 460 && ballTop <= 480 &&
      ballLeft + 20 > basketLeft && ballLeft < basketLeft + 60) {
    score++;
    scoreDisplay.textContent = score;
    resetBall();
  }

  if (ballTop > 500) {
    alert("Game Over! Score: " + score);
    score = 0;
    scoreDisplay.textContent = score;
    resetBall();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && basketLeft > 0) {
    basketLeft -= 20;
  } else if (e.key === 'ArrowRight' && basketLeft < 240) {
    basketLeft += 20;
  }
  basket.style.left = basketLeft + 'px';
});

resetBall();
interval = setInterval(updateGame, 50);