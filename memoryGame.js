const gameBoard = document.getElementById("gameBoard");

const attempts = document.getElementById("match-attempts");
let matchAttempts = 0;
attempts.textContent = matchAttempts;

const cards = [
    {imgSrc: "fotos/aLessonInRomantics.jpeg", name: 'A Lesson In Romantics'},
    {imgSrc: "fotos/am.jpeg", name: "AM"},
    {imgSrc: "fotos/aTodaCubaLeGusta.jpg", name: "A Toda Cuba Le Gusta"},
    {imgSrc: "fotos/besitosYBesitas.jpeg", name: "Besitos Y Besitas"},
    {imgSrc: "fotos/birthdays.jpeg", name: "Birthdays"},
    {imgSrc: "fotos/blackPumas.jpeg", name: "Black Pumas"},
    {imgSrc: "fotos/blkswn.jpeg", name: "blkswn"},
    {imgSrc: "fotos/calambre.jpeg", name: "Calambre"},
    {imgSrc: "fotos/caressYourSoul.png", name: "Caress Your Soul"},
    {imgSrc: "fotos/collideWithTheSky.jpeg", name: "Collide With The Sky"},
    {imgSrc: "fotos/comingHome.jpg", name: "Coming Home"},
    {imgSrc: "fotos/cortasVenas.jpg", name: "Cortas Venas"},
    {imgSrc: "fotos/cryBaby.png", name: "CryBaby"},
    {imgSrc: "fotos/dejaEntendu.jpeg", name: "Deja Entendu"},
    {imgSrc: "fotos/dejenmeLlorar.jpg", name: "Dejenme Llorar"},
    {imgSrc: "fotos/gore.jpeg", name: "Gore"},
    {imgSrc: "fotos/halfTheCity.jpeg", name: "Half the City"},
    {imgSrc: "fotos/here.png", name: "Here"},
    {imgSrc: "fotos/hozier.png", name: "Hozier"},
    {imgSrc: "fotos/iDontLikeShit.jpeg", name: "I Don't Like Shit, I don't Go Outside"},
    {imgSrc: "fotos/ifYoureReadingThisItsTooLate.png", name: "If You're Reading This It's Too Late"},
    {imgSrc: "fotos/jardin.jpeg", name: "Jardin"},
    {imgSrc: "fotos/KG0516.png", name: "KG0516"},
    {imgSrc: "fotos/neoZone.jpeg", name: "Neo Zone"},
    {imgSrc: "fotos/notesFromTheUnderground.jpeg", name: "Notes from the Underground"},
    {imgSrc: "fotos/oasis.png", name: "Oasis"},
    {imgSrc: "fotos/planetHer.png", name: "Planet Her"},
    {imgSrc: "fotos/pony.jpeg", name: "Pony"},
    {imgSrc: "fotos/positions.png", name: "Positions"},
    {imgSrc: "fotos/sol.jpeg", name: "Sol"},
    {imgSrc: "fotos/somethingToFeel.jpeg", name: "Something to Feel"},
    {imgSrc: "fotos/songsForImaginativePeople.jpeg", name: "Songs for Imaginative People"},
    {imgSrc: "fotos/suckItUp.jpeg", name: "Suck It Up"},
    {imgSrc: "fotos/suga.jpeg", name: "SUGA"},
    {imgSrc: "fotos/sway.jpg", name: "Sway"},
    {imgSrc: "fotos/thaCarterIV.jpeg", name: "Tha Carter IV"},
    {imgSrc: "fotos/theAvantGarden.jpeg", name: "The Avant Garden"},
    {imgSrc: "fotos/theDutchess.png", name: "The Dutchess"},
    {imgSrc: "fotos/theEmancipationOfMimi.jpg", name: "The Emancipation of Mimi"},
    {imgSrc: "fotos/theHarderTheyFall.jpeg", name: "The Harder They Fall (Soundtrack)"},
    {imgSrc: "fotos/theLastDonII.jpeg", name: "The Last Don II"},
    {imgSrc: "fotos/theLumineers.jpeg", name: "The Lumineers"},
    {imgSrc: "fotos/thePointOfItAll.jpg", name: "The Point of It All"},
    {imgSrc: "fotos/tuVenenoMortal.jpg", name: "Tu Veneno Mortal"},
    {imgSrc: "fotos/unpredictable.jpeg", name: "Unpredictable"},
    {imgSrc: "fotos/unVeranoSinTi.jpeg", name: "Un Verano Sin Ti"},
    {imgSrc: "fotos/venus.jpeg", name: "Venus"},
    {imgSrc: "fotos/wastelandBaby.jpg", name: "Wasteland, Baby"},
    {imgSrc: "fotos/YHLQMDLG.png", name: "YHLQMDLG"},
    {imgSrc: "fotos/zaba.jpeg", name: "Zaba"}
];
//create buttons choose gameBoard size
const chooseBoard = document.getElementById('choose-board');
//const fourByFour = document.getElementById('4x4');
const sixBySix = document.getElementById('6x6');
//const eightByEight = document.getElementById('8x8');
//const tenByTen = document.getElementById('10x10');

//randomize and randomize again... and a third time
const getCards = (num) => {
    const gameCards = cards.sort(() => Math.random() - 0.5).slice(0,num);
    const gameCards2 = gameCards.sort(() => Math.random() - 0.5);
    const deck = [...gameCards, ...gameCards2].sort(() => Math.random() - 0.5);
    return deck;
}

//get the cards to actually, yanno, show up... 9MAY, @1647: HOW IS THIS SO IMPOSSIBLE RN?
const createCards = (num) => {
    const cardInfo = getCards(num);
    console.log(cardInfo);
    //need card info teehee
    cardInfo.forEach((selection) => {
        //console.log(selection);
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        front.classList = "front";
        front.src = selection.imgSrc;
        back.classList = "back";
        gameBoard.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        card.setAttribute('name', selection.name);
        //card flip
        card.addEventListener('click', (c) => {
            console.log('you clicked card');
            card.classList.toggle('card-flip');
            selected(c);
        })
    });
}

//board size based on button click - should be a square always ***figure out how to get ONLY that board to show, another click shouldn't add more cards to board 11:34 15MAY
chooseBoard.addEventListener('click', (e) => {
    e.preventDefault();
    gameBoard.classList.add('thirty-six');
    createCards(18);
})

//search for matches, flip over 1sec to view - confirm or deny matches
//////// if matched leave facing up (pop up saying "whew a match") if not flip back down
 const selected = (c) => {
    console.log(c);
    const clicked = c.target;
    clicked.classList.add('flipped');
    const flipped = document.querySelectorAll('.flipped');

    const stuck = document.querySelectorAll('.card-flip');

    if (flipped.length === 2){
        if (flipped[0].getAttribute('name') === flipped[1].getAttribute('name')){
            console.log('matched');
            flipped.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none'; //makes the card unclickable - BOY OH BOY DID THIS TAKE TEN YEARS
                //card.classList.add('stuck');
            })
        } else {
            console.log('no match');
            flipped.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => {card.classList.remove('card-flip')}, 1050);
            }); 
            matchAttempts++;
            attempts.textContent = matchAttempts;
        }
    };
    endGame = () => {
        console.log(flipped.length);
        console.log(stuck.length);
        if (stuck.length === 36){
            setTimeout(() => {
                alert(`Bet ya can't do it again 🙂 ...`);
                location.reload();
            }, 1100);
        }
    }
    endGame();
}

//give up button should end game => prompt a "nice try" alert then clear board
const giveUp = document.querySelector("#end-game");
giveUp.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You're bad at this 🙄 ...`);
    location.reload();
})
