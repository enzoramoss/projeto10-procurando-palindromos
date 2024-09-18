let word = prompt('Diga me uma palavra.')
let reversedWord = ''
let r 

for (r = word.length - 1; r >= 0; r--) {
    reversedWord += word[r]
}

if (word === reversedWord) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo.`)
    alert(`Pois a palavra ${word} escrita da esquerda pra direita é ${reversedWord}, portanto não é um palíndromo.`)
}