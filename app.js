alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
let chute;
let tentativas= 1;
// enquanto
while (chute != numeroSecreto){
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto 
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// outra forma de escrever o codigo acima

// if (tentativas > 1){
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
