function tirarP(){
    let frase = document.getElementById("codigo").value
    semP = frase.toLowerCase().split("p")
    string = ""
    numero++
    document.body.style.backgroundColor = (numero % 2 === 0 ? "aqua":"purple")
    console.log(string)
    return rot13(frase)

};

function rot13(letras){
    var alfabeto1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m", " "]
    var alfabeto2 = ["n","o","p","q","r","s","t","u","v","w","x","y","z", " "]
    var palavra = ""
    for(letra in letras){
        for(a of alfabeto1){
            if (a === letras[letra]){
                palavra += alfabeto2[alfabeto1.indexOf(letras[letra])]
            }
        }
        for(b of alfabeto2){
            if(b === letras[letra]){
                palavra += alfabeto1[alfabeto2.indexOf(letras[letra])]}}
        }
    alterar(palavra)
};

function alterar(palavra){
    document.getElementById("descodificado").innerText = palavra
}
var numero = 0
let frase2 = "Hz frevnqb yrtny"
let decodificado = tirarP(frase)

