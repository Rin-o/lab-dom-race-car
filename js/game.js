class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.height = 600;
      this.width = 500;
    }
    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

             // Hide the start screen
      this.startScreen.style.display = "none";
      
      // Show the game screen
      this.gameScreen.style.display = "block";

    // Start the game loop
    this.gameLoop();
    }  

    gameLoop() {
        this.update();
}

update() {
  console.log("in the update");
}
}  