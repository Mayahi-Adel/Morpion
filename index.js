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
//variable qui vérifie si le vainqueur est le joueur X
let pX = false;
//variable qui vérifie si le vainqueur est le joueur O
let pO = false;
//variable
let nouvelle_partie = false;

listCase.forEach(element => element.addEventListener('click', jouer))

//variable qui swictch les joueur si elle est paire c'est le tour du X sinon c'est qu tour du 0
let countClick = 0;

//callBack à chaque appelée à chaque tour
function jouer(e){
    if(nouvelle_partie) statuMsg.removeEventListener('click', recommencer_partie)
    //si une case n'a pas encore été jouée ou si aucun joueur n'a gagné on peut (continuer à) jouer
    if (!e.target.textContent && !pX && !pO) {
        //si le nombre de de click est pair on écrit un X sinon on écrit un 0
        e.target.textContent = countClick % 2 === 0 ? 'X' : 'O';
        //si le nombre de click est pair alors le prochain à jouer est O sinon le prochain est X
        statuMsg.textContent = "c'est au tour du joueur " + (countClick % 2 === 0 ? 'O' : 'X') ;
        countClick++;
    }
    victoire();
    matchNul();
}

//le message de la status barre s'adapte au gagnant
function msgWinner() {
    statuMsg.textContent = (pX ? 'X' : 'O') + ' a gagné ! Cliquez ici pour rejouer.';    
}
//vérifie si un joueur à gagné
function victoire() {
    tabWins.forEach(combinaison => {        
        if (pX || pO){
            nouvelle_partie = false;
            msgWinner();
            statuMsg.addEventListener('click', recommencer_partie);
            return;
        }
        //parcourt la liste des combinaisons gagnantes pour voir si elles contiennent toutes X ou si elle contiennent toutes O 
        pX = combinaison.every((contenu) => contenu.textContent === 'X')
        pO = combinaison.every((contenu) => contenu.textContent === 'O')
    })
}
//en cas de match nul
function matchNul() {
    //on parcourt les cases
    //si elle toutes jouée
    //et si on n'a pas de gagnant
    if (listCase.every(el => el.textContent !== '')){
        nouvelle_partie = false;
        statuMsg.textContent = `Match nul. Cliquez ici pour rejouer.`;
        statuMsg.addEventListener('click',recommencer_partie)
    }
}
//si on a une victoire ou un match nul on vide le contenu des cases pour recommencer.
function recommencer_partie(){
    listCase.forEach(el => el.textContent = '')
    pO = false;
    pX = false;
    nouvelle_partie ++;
}

