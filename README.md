# memory-game
 
This is a two-player memory game built using HTML, CSS, and JavaScript for the frontend and Node.js with Express for the backend.

# Table of Contents
* Installation
* Usage
* Features
* Technologies
* Game Rules
* Contributing
* License

# Installation
## Option 1: Cloning the Repository
* 1.You need to have Node.js and npm installed.
* 2.Clone the repository: git clone https://github.com/MarinaPanchenko12345/memory-game
* 3.Navigate into the project directory:cd memory-game

## Option 2: Downloading as a ZIP File
* 1.You can also download the project as a ZIP file from GitHub:
* 2.Go to the repository: memory-game.
* 3.Click the "Code" button and select "Download ZIP".
* 4.Extract the ZIP file to your desired location.

## Setting Up
* 1.install the required node_modules and dependencies for the project :npm install
* 2.Run the server:npm start
* 3.Once the server is running, you should see the following message in the console:"Server is running on port 7778"
* 4.Open your browser and navigate to http://localhost:7778 to start the game.

# Usage
Once the game has loaded, you can start a new game by clicking the "New Game" button. The game supports two players, and their scores will be displayed at the top of the screen.

# Controls:
* New Game: Resets the board and starts a new game.
* Click to flip cards: Players take turns clicking on cards to match pairs.
* The current player is highlighted, and scores are updated in real-time.

# Features
* Two-player turn-based game play.
* Randomly shuffled cards.
* Confetti animation for winning celebration.
* Displays the winner or declares a tie at the end of the game.
* Cards have hover and flip animations.
* Score tracking for both players.
* Game restart functionality.

# Technologies
Frontend:
* HTML, CSS: For the structure and styling of the game.
* JavaScript: For game logic and interactivity.
* SweetAlert2: For displaying game results and alerts.
* Canvas Confetti: For the celebration effect upon game completion.

Backend:
* Node.js & Express: For serving static files and handling API requests.
* File System (fs): For fetching images from the server.

# Game Rules
* 1.Players take turns flipping two cards at a time.
* 2.If the two flipped cards match, the player gains a point and keeps their turn.
* 3.If the cards do not match, the other player gets a turn.
* 4.The game ends when all pairs have been found.
* 5.The player with the most points at the end wins. If both players have the same score, it's a tie.

# Credits
Images used in this project were sourced from Unsplash. They are provided as placeholder images and can be replaced with your own if desired.

 
