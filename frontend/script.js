let cards = [];
let player1 = 0;
let player2 = 0;
let isFirstPlayer = true;

// Function to shoot confetti
function shootConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
// Function to update the UI with the current player's score
function bind() {
  const p1 = document.getElementById("player1");
  const p2 = document.getElementById("player2");
  // Update player scores in the UI
  p1.querySelector("p").innerText = player1;
  p2.querySelector("p").innerText = player2;
  // Highlight the current player
  if (isFirstPlayer) {
    p1.classList.add("current");
    p2.classList.remove("current");
  } else {
    p2.classList.add("current");
    p1.classList.remove("current");
  }
}
// Function to check if all cards have been found and declare the winner or tie
function checkWin() {
  const foundCards = cards.filter((card) =>
    card.div.classList.contains("found")
  ).length;
  // Если все карточки найдены
  if (foundCards === cards.length) {
    let winnerText;
    console.log(`Player 1: ${player1}, Player 2: ${player2}`);
    if (player1 > player2) {
      winnerText = "Player 1 is the Winner!";
    } else if (player2 > player1) {
      winnerText = "Player 2 is the Winner!";
    } else {
      winnerText = "It's a tie!";
      console.log("It's a tie!");
    }
    //Show a SweetAlert with the result
    Swal.fire({
      title: winnerText,
      text: "Congratulations!",
      confirmButtonText: "OK",
    });
    shootConfetti();
  }
}
// Function to start a new game by resetting
async function newGame() {
  const board = document.getElementById("board");
  board.innerHTML = ""; // Clear the board for a new game
  cards = [];
  player1 = 0;
  player2 = 0;

  

  const res = await fetch("/images");
  const images = await res.json();
  // Create two instances of  image
  images.forEach((image, i) => {
    cards.push({ i, image }, { i, image });
  });
  // Shuffle the cards randomly
  cards.sort((a, b) => Math.random() - 0.5);

  cards.forEach((c) => {
    const div = document.createElement("div");
    console.log(c.image);
    div.style.backgroundImage = `url("/images/${c.image}")`;
    board.appendChild(div);
    c.div = div;
    // Add  mouse hover effects
    div.addEventListener("mouseover", () => {
      cards
        .filter((x) => x.i == c.i)
        .forEach((card) => {
          card.div.classList.add("cheat");
        });
    });
    // Remove mouse hover effects
    div.addEventListener("mouseout", () => {
      cards.forEach((card) => card.div.classList.remove("cheat"));
    });
    // Add click  to flip the card
    div.addEventListener("click", () => {
      if (c.showed) {
        return;
      }
      const showed = cards.filter((c) => c.showed);
      if (showed.length < 2) {
        div.classList.add("showed");
        c.showed = true;
      }
      if (showed.length === 2) {
        return; // If two cards are already shown, don't allow more flips
      }
      // If a pair of cards is shown
      if (showed.length) {
        const prev = showed[0];
        const current = c;
        // If the two cards match
        if (prev.i === current.i) {
          setTimeout(() => {
            prev.div.classList.add("found");
            current.div.classList.add("found");

            prev.div.classList.remove("showed");
            current.div.classList.remove("showed");

            prev.showed = false;
            current.showed = false;
            // Update the score of the current player
            if (isFirstPlayer) {
              player1++;
            } else {
              player2++;
            }
            bind();
            checkWin(); // Проверяем победителя после каждой пары
          }, 1500);
        } else {
          // If the cards don't match, flip them back and switch player
          setTimeout(() => {
            prev.div.classList.remove("showed");
            current.div.classList.remove("showed");

            prev.showed = false;
            current.showed = false;

            isFirstPlayer = !isFirstPlayer; // Switch player
            bind();
          }, 1500);
        }
      }
    });
  });
  bind();
}
newGame();
