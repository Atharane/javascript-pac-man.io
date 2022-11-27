const scoreDisplay = document.getElementById("score");
const width = 28;
let score = 0;
const grid = document.querySelector(".grid");
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

let items_map = {
  0: "pac-dot",
  1: "wall",
  2: "ghost-lair",
  3: "power-pellet",
  4: "empty",
};

const squares = [];

//create board
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.classList.add(items_map[layout[i]]);
    squares.push(square);
  }
}
createBoard();

//draw pacman onto the board
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pac-man");

//move pacman
function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove("pac-man");

  function isBlocked(index) {
    return (
      squares[index].classList.contains("wall") ||
      squares[index].classList.contains("ghost-lair")
    );
  }

  switch (e.keyCode) {
    case 37:
      if (squares[pacmanCurrentIndex] === squares[364])
        pacmanCurrentIndex = 391;
      else if (
        pacmanCurrentIndex % width !== 0 &&
        !isBlocked(pacmanCurrentIndex - 1)
      )
        pacmanCurrentIndex -= 1;

      break;
    case 38:
      if (
        pacmanCurrentIndex - width > 0 &&
        !isBlocked(pacmanCurrentIndex - width)
      )
        pacmanCurrentIndex -= width;
      break;
    case 39:
      if (squares[pacmanCurrentIndex] === squares[391])
        pacmanCurrentIndex = 364;
      else if (
        (pacmanCurrentIndex % width) + 1 < width &&
        !isBlocked(pacmanCurrentIndex + 1)
      )
        pacmanCurrentIndex += 1;
      break;
    case 40:
      if (
        pacmanCurrentIndex + width < width * width &&
        !isBlocked(pacmanCurrentIndex + width)
      )
        pacmanCurrentIndex += width;
      break;
  }

  squares[pacmanCurrentIndex].classList.add("pac-man");
  pacDotEaten();
  powerPelletEaten();
  checkForGameOver();
  checkForWin();
  scoreDisplay.textContent = score;
}

document.addEventListener("keyup", movePacman);

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score += 1;
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
  }
}

function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    score += 10;
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScareGhosts, 10000);
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
  }
}

function checkForGameOver() {
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    setTimeout(function () {
      alert("Game Over 👎");
    }, 500);
  }
}

function checkForWin() {
  if (score >= 274) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", movePacman);
    setTimeout(function () {
      alert("You have WON!");
    }, 500);
  }
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

//all my ghosts
ghosts = [
  new Ghost("trumpy", 348, 250),
  new Ghost("xinping", 351, 300),
  new Ghost("kim", 376, 400),
  new Ghost("putin", 379, 500),
];

ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].id = ghost.id;
  squares[ghost.currentIndex].classList.add("ghost");
});

function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

function moveGhost(ghost) {
  const directions = [-1, +1, width, -width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    //if the next square the ghost is going to go to does not have a ghost and does not have a wall
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      !squares[ghost.currentIndex + direction].classList.contains("wall")
    ) {
      //remove the ghosts classes
      squares[ghost.currentIndex].id = "";
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");

      //move into that space
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add("ghost");
      squares.id = ghost.id;
      //else find a new random direction ot go in
    } else direction = directions[Math.floor(Math.random() * directions.length)];

    //if the ghost is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    //if the ghost is currently scared and pacman is on it
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pac-man")
    ) {
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      squares[ghost.currentIndex].id = "";
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      squares[ghost.currentIndex].classList.add("ghost");
      squares[ghost.currentIndex].id = ghost.id;
    }
    checkForGameOver();
  }, ghost.speed);
}

//move the Ghosts randomly
ghosts.forEach((ghost) => moveGhost(ghost));
