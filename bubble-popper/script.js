let score = 0; // sets the starting score to 0
const targetScore = 3; // sets the winning score to 3

// lists the different quotes into an array
const quotes = [
    "Exceptional Leadership",
    "Always Positive",
    "Highly Motivated",
    "Inspiring to Others",
    "Dedicated and Committed",
    "Always Goes the Extra Mile",
    "A True Innovator",
    "Creative Problem Solver",
    "A Team Player",
    "Resilient and Strong",
    "Hardworking and Driven",
    "Kind and Compassionate",
    "A True Visionary",
    "Reliable and Dependable",
    "A Source of Inspiration",
    "Driven to Succeed",
    "Focused on Excellence",
    "Persistent and Determined",
    "A True Trailblazer",
    "Outstanding Performance",
    "Always Helping Others Grow",
    "The Heart of the Team",
    "Strategic Thinker",
    "Empathetic and Understanding",
    "Unstoppable Force",
    "Passionate About Success",
    "Remarkable Dedication",
    "Loyal and Trustworthy",
    "A Natural Leader"
];


const gameWindow = document.getElementById('game-window');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button'); // Reference the existing restart button

let gameInterval; // For storing the interval that generates quotes

// Function to start the game
function startGame() {
    score = 0;
    scoreDisplay.innerText = `Score: ${score}`;
    startButton.disabled = true; // Disable the start button during the game
    restartButton.disabled = true; // Disable restart button during the game
    generateQuote(); // Start generating quotes when the game starts
    gameInterval = setInterval(generateQuote, 2000); // Generate quotes every 2 seconds
}

// Function to generate a random quote
function generateQuote() {
    const quoteText = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.createElement("p");

    quoteElement.innerText = quoteText;
    quoteElement.className = "quote";

    // Set random position for the quote within the game window
    quoteElement.style.top = `${Math.random() * (gameWindow.clientHeight - 30)}px`;
    quoteElement.style.left = `${Math.random() * (gameWindow.clientWidth - 100)}px`;

    // Add click event to the quote
    quoteElement.addEventListener("click", () => {
        gameWindow.removeChild(quoteElement);
        increaseScore();
    });

    gameWindow.appendChild(quoteElement);
}

// Function to increase the score
function increaseScore() {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;

    if (score >= targetScore) {
        endGame();
    }
}

// Function to end the game and show a winning message
function endGame() {
    clearInterval(gameInterval); // Stop the quote generation
    startButton.disabled = true; // Disable start button after the game ends
    restartButton.disabled = false; // Enable restart button after the game ends
    alert("Congratulations! You have selected all items that describe this individual! Who do you think I am describing?");

    // Display a pop-up with an image
    const winPopup = document.createElement("div");
    winPopup.id = "win-popup";
    winPopup.innerHTML = `
      <h2>WIDE SMILE!</h2>
      <img src="image.png" alt="Winning Image" width="200px">
    `;
    document.body.appendChild(winPopup);
}

// Function to restart the game
function restartGame() {
    // Clear game window and reset game state
    gameWindow.innerHTML = '';
    score = 0;
    scoreDisplay.innerText = `Score: ${score}`;
    document.getElementById("win-popup")?.remove(); // Remove win pop-up if it exists

    startButton.disabled = false; // Enable start button again
    restartButton.disabled = true; // Disable restart button during the game
    generateQuote(); // Start generating quotes immediately after restarting
    gameInterval = setInterval(generateQuote, 2000); // Generate quotes every 2 seconds
}

// Start button event listener
startButton.addEventListener("click", startGame);

// Restart button event listener
restartButton.addEventListener("click", restartGame);
