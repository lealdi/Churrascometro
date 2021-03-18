//Homens comem 700 gr e + de 6 horas 1.400 gr.  Bebem 1500ml de Cerveja e + de 6 horas 2500ml. Bebem 600ml de bebidas não alcoolicas e 
// + de 6 horas 1200ml 

//Mulheres comem 400 gr e + de 6 horas 800gr. Bebem 1200ml de Cerveja e + de 6 horas 1800ml. Bebem 450ml de bebidas não alcoolicas e 
// + de 6 horas 750ml 

//Crianças comem 300gr e + de 6horas 500gr. Crianças bebem 700ml de bebidas não alcoolicas e + de 6horas 1500ml
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
    let womanMeat = valuesMeat[0] * woman 
    let menMeat = valuesMeat[1] * men
    let childrenMeat = valuesMeat[2] * children    

    let valuesBeer = beerFP(timer)
    let womanBeer = valuesBeer[0] * woman
    let menBeer = valuesBeer[1] * men        

    let valuesDrinks = drinksFP(timer)
    let womanDrinks = valuesDrinks[0] * woman 
    let menDrinks = valuesDrinks[1] * men
    let childrenDrinks = valuesDrinks[2] * children
    

    let meatTotal = womanMeat + menMeat + childrenMeat
    let beerTotal = womanBeer + menBeer
    let drinksTotal = womanDrinks + menDrinks + childrenDrinks

    result.innerHTML = `<p><img src="./images/meat.png" alt="">${meatTotal / 1000} Kg de Carne</p>`
    result.innerHTML += `<p><img src="./images/beer.png" alt="">${Math.ceil(beerTotal/350)} Lata (as) de Cerveja</p>`
    result.innerHTML += `<p><img src="./images/soft-drink.png" alt="">${Math.ceil(drinksTotal/2000)} Garrafa (as) de Bebida</p>`
    
}

function meatFP(timer){    

    if(timer >= 6){
        womanMeat = 800
        menMeat = 1400
        childrenMeat = 600
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
        menBeer = 2500
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

