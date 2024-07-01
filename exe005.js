/* FUNÇÃO  */


/* function calculoTerreno (largura, comprimento){
    let area = largura*comprimento

    document.write(`O terreno possui ${area} metros quadrados`)

}
calculoTerreno(10,20)
console.log(calculoTerreno)

 */


function media(){
    let num = parseInt(prompt("Primeira nota: "))
    let num1 = parseInt(prompt("Primeira nota: "))
    let num2 = parseInt(prompt("Primeira nota: "))

    calculo = (num+num1+num2)/3
    if (calculo > 7){
        alert("APROVADO")
    }
    else{
        alert("REPROVADO")
    }
}


function soma(nume, numero, number){
    let media2 = (nume+ numero+ number)/3
    console.log("A media é "+ media2)
}
soma(10,8,10)







