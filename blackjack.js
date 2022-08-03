let messageElem = document.getElementById("message-element");
let messageElem_Query = document.querySelector(".message-element");

let sumElem = document.getElementById("sum-element");
let sumElem_Query = document.querySelector(".sum-element");

let cardsElem = document.getElementById("cards-element");
let cardsElem_Query = document.querySelector(".cards-element");
// querySelector - Asking for an element by its selector. Specify the given selector inside of the parentheses
// selecting CSS classes using the the dot -- the .sum-element

let playerElem = document.getElementById("player-element");

// let cards = [card_1, card_2] // - Array - ordered list of items
// Zero-indexed 

let message = " ";
let isAlive = false;
let hasBlackjack = false;

let cards = [];
let card_sums = 0;

let playerName = "Test";
let playerChips = 145;

let Player = {
    name: null,
    chips: 150,
    sayHello: function()
    {
        console.log("Hello there!")
    }
}

player.sayHello();

playerElem.textContent = Player.name + ": $" + Player.chips;

/*
 * Function Declaration
 *
 * Any function that gets declared before the global variables 
 * gets placed to the top of the stack when the program is run
 */
function startGame()
{
    isAlive = true;

    let card_1 = getRandomCard();
    let card_2 = getRandomCard();

    cards = [card_1, card_2];
    card_sums = card_1 + card_2;
    
    renderGame()
}

function renderGame()
{
    // Initial cardsElem textContent
    cardsElem.textContent = "Cards: ";

    // Render out all of the cards using the for loop
    for (let i = 0 ; i < cards.length ; i++)
    {
        cardsElem.textContent += cards[i] + " ";
    }

    // Render out ALL of the cards
    sumElem.textContent = "Sum: " + card_sums

    if (card_sums <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if (hasBlackjack == false && card_sums === 21)
    {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageElem.textContent = message
}

function newCard()
{
    let new_card = getRandomCard();

    card_sums += new_card;

    cards.push(new_card);
    console.log(cards);

    renderGame();
}

function getRandomCard()
{

    if (isAlive && !hasBlackjack)
    {
        let random_card = Math.floor((Math.random() * 13) + 1);

        if (random_card === 1)
        {
            return 11;
        }
        else if (random_card > 10)
        {
            return 10;
        }
        else
        {
            return random_card;
        }
    }   
}



