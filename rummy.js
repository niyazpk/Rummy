var currentPlayer = 0;
var numberOfPlayers = 4;
var numberOfCardsPerPlayer = 10;

var players = [];
var stock = [];
var discardPile = [];

function playHand(){
	//alert('hi');
}

function score(array){
	
}

var Player = function(){
	this.hand =[];
}

var colors = 'CSHD';
var numbers = '23456789TJQKAX'; // X is a joker and T is a 10;

function getDeck(){
	var deck = [];
	for(var i = 0; i < colors.length; i++){
		for(var j = 0; j < numbers.length; j++){
			deck.push(colors[i] + numbers[j]);
		}
	}
	return deck;	
}

function shuffle(cards){
	var n = cards.length;
	for(var i = n - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = cards[i];
		cards[i] = cards[j];
		cards[j] = tmp;
	}
	return cards;
}

var deck = getDeck(); // Get a new deck
deck = shuffle(deck); // Shuffle the deck

// Deal the Cards
for(var i = 0; i < numberOfPlayers; i++){
	var newPlayer = new Player();
	for(var j = 0; j < numberOfCardsPerPlayer; j++){
		var index = j * numberOfPlayers + i;
		newPlayer.hand.push(deck[index]);
		deck[index] = undefined;
	}
	newPlayer.hand.sort();
	players.push(newPlayer);
}

console.log(players[0].hand);

//window.setInterval(playHand, 5000);
//alert('♥♠♦♣');