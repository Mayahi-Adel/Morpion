const listCase = Array.from(document.querySelectorAll('button'));
const statuMsg = document.getElementById('game_status');
const tabWins = [//lignes
    [listCase[0], listCase[1], listCase[2]],
    [listCase[3], listCase[4], listCase[5]],
    [listCase[6], listCase[7], listCase[8]],
    //colonnes
    [listCase[0], listCase[3], listCase[6]],
    [listCase[1], listCase[4], listCase[7]],
    [listCase[2], listCase[5], listCase[8]],
    //diagonales
    [listCase[0], listCase[4], listCase[8]],
    [listCase[2], listCase[4], listCase[6]]
];
let matchNul = false;
let pX = false;
let pO = false;
listCase.forEach(element => element.addEventListener('click', jouer))
let countClick = 0;
function jouer(e) {
    if (!e.target.textContent && !pX && !pO) {
        if (countClick % 2 == 0) {
            e.target.textContent = 'X';
            statuMsg.textContent = "Joueur O c'est votre tour."
        }
        else {
            e.target.textContent = 'O';
            statuMsg.textContent = "Joueur X c'est votre tour."
        }
        countClick++;
    }
    verif();
    msgMatchNul();
    console.log(pO);
    console.log(pX);
}

function verif() {
    tabWins.forEach(combinaison => {        
        if (pX || pO){
            msgWinner();
            statuMsg.addEventListener('click', reset);
            return
        }
        pX = combinaison.every((contenu) => contenu.textContent === 'X')
        pO = combinaison.every((contenu) => contenu.textContent === 'O')

    })
}
function msgWinner() {
    statuMsg.textContent = (pX ? 'X' : 'O') + ' a gagné ! Cliquez ici pour rejouer.';    
}

function msgMatchNul() {
    if (listCase.every(el => el.textContent !== '') && !pO && !pX) {
        statuMsg.textContent = `Match nul. Cliquez ici pour rejouer.`;
        matchNul = true;
    }
}
function reset() {
    listCase.forEach(el => el.textContent = '')
    pO = false;
    pX = false;
    countClick = 0;
}
// function verif() {
//     if (listCase[0].textContent !== '' && listCase[0].textContent === listCase[1].textContent && listCase[1].textContent === listCase[2].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[0].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[3].textContent !== '' && listCase[3].textContent === listCase[4].textContent && listCase[4].textContent === listCase[5].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[3].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[6].textContent !== '' && listCase[6].textContent === listCase[7].textContent && listCase[7].textContent === listCase[8].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[6].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[0].textContent !== '' && listCase[0].textContent === listCase[3].textContent && listCase[3].textContent === listCase[6].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[0].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[1].textContent !== '' && listCase[1].textContent === listCase[4].textContent && listCase[4].textContent === listCase[7].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[1].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[2].textContent !== '' && listCase[2].textContent === listCase[5].textContent && listCase[5].textContent === listCase[8].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[2].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[0].textContent !== '' && listCase[0].textContent === listCase[4].textContent && listCase[4].textContent === listCase[8].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[0].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }
//     else if (listCase[2].textContent !== '' && listCase[2].textContent === listCase[4].textContent && listCase[4].textContent === listCase[6].textContent) {
//         statuMsg.textContent = `Joueur ${listCase[2].textContent} a gagné ! Cliquez pour rejouer.`;
//         match = true;
//     }

// }

// function rejouer() {
//     if (match == true) {

//         listCase.forEach(el => el.textContent = '');
//         match = false;
//     }
// }
