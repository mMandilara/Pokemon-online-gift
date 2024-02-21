// Initialize client with localhost:3000
client.init("localhost:3000");

// Function to play background music
function playBackgroundMusic() {
    const audio = new Audio("res/Music.background.mp3"); // Provide the path to your music file
    audio.loop = true; // Loop the music
    audio.play(); // Start playing the music
}

// Call the playBackgroundMusic function to start playing the music when the script loads
playBackgroundMusic();

// setup function remains unchanged

function setup() {
    Screen.init();
    new rawImage("Characters", "boy_run");
    new imageSet("Tilesets", "Outside", 8, 502);
    new rawMap("maps", "OurCorner1");
    const playerInstance = new player();
    setupFind(playerInstance); // Pass the player instance to setupFind function

    new ImagePopup("res/first_message.png", 820, 600);
}

// step function remains unchanged
function step() {
    drawMap("OurCorner1");
}
