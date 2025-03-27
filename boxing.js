// Initial setup
let player1 = {
    name: "Player 1",
    health: 100,
};
/* Todo: 
- Create the player2 Object ; 
- Create a variable called `currentPlayer` and set it to your `player1` object*/
let player2 = {
    name: "Player 2",
    health: 100
};
let currentPlayer = player1;

// Function to generate random damage
function generateDamage() {
    return Math.floor(Math.random() * 10) + 1; // Damage ranges from 1 to 10
}
    