// essaPalavraEUmPalindromo()

// function essaPalavraEUmPalindromo(){
//     let palavra = "árvore"
//     let separandoAsLetrasDaPalavra = palavra.split("")
//     let palavraInvertida = separandoAsLetrasDaPalavra.reverse()
//     palavraInvertida = palavraInvertida.join("")
//     if(palavra == palavraInvertida){
//         console.log(`A palavra ${palavra} é um palíndromo!`);
//     }else{
//         console.log(`A palavra ${palavra} não é um palíndromo!`);
//     }
// }

const essaPalavraEUmPalindromo = function(palavra){
    let separandoAsLetrasDaPalavra = palavra.split("")
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse()
    palavraInvertida = palavraInvertida.join("")
    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo!`);
    }else{
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    }
}

essaPalavraEUmPalindromo('radar')