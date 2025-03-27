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

// Function to apply damage to the opponent
function applyDamage(opponent, damage) {
    if (damage < 6) {
        console.log(`${currentPlayer.name} lands a basic hit on ${opponent.name}!`);
    } else if (damage >= 6 && damage <= 9) {
        console.log(`${currentPlayer.name} lands a critical hit on ${opponent.name}!`);
    } else {
        console.log(`${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}!🥊`);
    }
    opponent.health -= damage;
    if (opponent.health < 0 || damage === 10) {
        // Ensure health doesn't go below 0 and automatic KO
        opponent.health = 0;
    }
    console.log(`${opponent.name}'s health is now ${opponent.health}.`);
}

// Function to check if the game is over
function checkKnockout(opponent) {
    if ( opponent.health === 0) {
        console.log(`${opponent.name} has been knocked out!`);
        console.log(`${currentPlayer.name} is the WINNER! 🏆`);
        return true; // Game over
    }
    return false;
}
    
    
    