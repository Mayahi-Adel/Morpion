const listCase = document.querySelectorAll('button');
const statuMsg = document.getElementById('game_status');
const tabWins = [//lignes
                [listCase[0],listCase[1],listCase[2]],
                [listCase[3],listCase[4],listCase[5]],
                [listCase[6],listCase[7],listCase[8]],
                //colonnes
                [listCase[0],listCase[3],listCase[6]],
                [listCase[1],listCase[4],listCase[7]],
                [listCase[2],listCase[5],listCase[8]],
                //diagonales
                [listCase[0],listCase[4],listCase[8]],
                [listCase[2],listCase[4],listCase[6]]
];
let match = false;
listCase.forEach(element => element.addEventListener('click', jouer))
let countClick = 0;
function jouer(e) {
    if(e.target.textContent == "" && !match){
        if (countClick % 2 == 0) {
        e.target.textContent = 'X';
        statuMsg.textContent = "Joueur O c'est votre tour."
        }
        else{
        e.target.textContent = 'O';
        statuMsg.textContent = "Joueur X c'est votre tour."        
        }
        countClick++;
        
    }
    verif();
    console.log(match);
}

function verif() {
    tabWins.forEach(combinaison => {
        match = combinaison.every((contenu, i) => {
           return (contenu.textContent==='X' || contenu.textContent === 'O') && contenu === combinaison[i+1]
        })
    })
    
    }

