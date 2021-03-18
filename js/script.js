// Carne - 400 gr por mulher e 700 gr por homem  + de 6 horas - 700gr por mulher e 1kg por homem
// Cerveja - 1500 ml por pessoa + 6 horas - 2500 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

//Crianças valem por 0,5
//Bebidas = Agua, Refrigerante , Sucos e qualquer coisa não alcoolica

let inputMen = document.getElementById("men")
let inputWoman = document.getElementById("woman")
let inputChildren = document.getElementById("children")
let inputTimer = document.getElementById("timer")

let result = document.getElementById("result")

function calcular() {
    console.log("Calculando...")

    let men = inputMen.value
    let woman = inputWoman.value
    let children = inputChildren.value
    let timer = inputTimer.value

    let valuesMeat = meatFP(timer)
    let womanMeat = valuesMeat[0] 
    let menMeat = valuesMeat[1]
    let childrenMeat = valuesMeat[2]
    let menTotalMeat = men * menMeat
    let womanTotalMeat = woman * womanMeat

    let valuesBeer = beerFP(timer)
    let menBeer = valuesBeer[1]
    let womanBeer = valuesBeer[0]
    let menTotalBeer = men * menBeer
    let womanTotalBeer = woman * womanBeer

    let meatTotal = menTotalMeat + womanTotalMeat + childrenMeat
    let beerTotal = menTotalBeer + womanTotalBeer
    let drinksTotal = drinksFP(timer) * men + (drinksFP(timer) / 2 * children)

    result.innerHTML = `<p>${meatTotal / 1000} Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil(beerTotal/350)} Latas de Cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(drinksTotal/2000)} Garrafas de Bebidas</p>`
    
}

function meatFP(timer){    

    if(timer >= 6){
        womanMeat = 700
        menMeat = 1000
        childrenMeat = 500
        return [womanMeat,menMeat,childrenMeat]
    }
    else{
        womanMeat = 400
        menMeat = 700
        childrenMeat = 300
        return [womanMeat,menMeat,childrenMeat]
    }
}

function beerFP(timer){    
    if(timer >= 6){
        womanBeer = 1800
        menBeer = 2200
        return [womanBeer,menBeer]
    }
    else{
        womanBeer = 1200
        menBeer = 1500
        return [womanBeer,menBeer]
    }
}

function drinksFP(timer){    
    if(timer >= 6){
        womanDrinks = 750
        menDrinks = 1200
        childrenDrinks = 1500
        return [womanDrinks,menDrinks,childrenDrinks]
    }
    else{
        womanDrinks = 450
        menDrinks = 600
        childrenDrinks = 700
        return [womanDrinks,menDrinks,childrenDrinks]
    }
}
