const cardDataBase = [
    'cards/adisplayofmydarkpower.jpg',
    'cards/allingoodtime.jpg',
    'cards/allshallsmolderinmywake.jpg',
    'cards/approachmymoltenrealm.jpg',
    'cards/beholdthepowerofdestruction.jpg',
    'cards/chooseyourchampion.jpg',
    'cards/dancepatheticmarionette.jpg'
];

let library = [];
let graveyard = [];
let allCards = [];

const libraryImage = document.getElementById("libraryImage");
const actualScheme = document.getElementById("actualSceme");
const ongoingList = document.getElementById("ongoingList");
const button = document.getElementById("shuffle");

const shuffle = () => 
    {shuffleAllCards();
    showActualCard();};

const drawACard = () => 
    {library.length === 0 ? alert("No cards in the Library! Please press Shuffle button!") :
        graveyard.push(library[0]);
        library.shift();
        showActualCard();};

const addOngoing = () => 
    {if (confirm("Would you like to add scheme to Ongoing List?")) {
    const img = document.createElement("img");
    ongoingList.appendChild(img);
    img.src = graveyard[(graveyard.length - 1)];
    } else {}};

const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const showActualCard = () => 
    {graveyard.length !== 0 ? actualScheme.src=graveyard[(graveyard.length - 1)] : actualScheme.src="";};

const cleanUp = () => 
    {allCards = [];
    library = [];
    graveyard = [];
    ongoingList.innerHTML = "";};

const shuffleAllCards = () => 
    {cleanUp();
    allCards = allCards.concat(cardDataBase);
    do  {num = randomNumber(allCards.length)
        library.push(allCards[num]);
        allCards.splice(num, 1);}
    while (allCards.length !== 0);};

const removeElement = (event) => 
    {if (confirm("Would you like to remove scheme from Ongoing List?")) {
    event.target.remove();
    } else {}};

libraryImage.onclick = () => drawACard();
actualScheme.onclick = () => addOngoing();
button.onclick = () => shuffle();
ongoingList.onclick = (event) => removeElement(event);