let qtdWin = 25
let qtdLose = 4
let aux
let saldoV = qtdWin - qtdLose
function calculadoraRanked(qtdWin, qtdLose){
    let rank
    let saldo = qtdWin - qtdLose
    if(saldo <= 10){
        rank = "Ferro"
    } else if(saldo <= 20){
        rank = "Bronze"
    } else if(saldo <= 50){
        rank = "Prata"
    } else if(saldo <= 80){
        rank = "Ouro"
    } else if(saldo <= 90){
        rank = "Diamante"
    } else if(saldo <= 100){
        rank = "Lendário"
    } else{
        rank = "Imortal"
    }
    return rank
}

aux = calculadoraRanked(qtdWin, qtdLose)

console.log("O Herói tem saldo de " + saldoV + " está no nível de " + aux)