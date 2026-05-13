//Objetos são es[truturas do tipo chave-valor
//Pode atrinbuir de forma dinâmica, assim como e
//Podemos usar (for of) ou (for in)


const carros = {
    nome : "camaro",
    modelo: "xpto cam",
    core : ["amarelo", "preto"]
}
carros.modelo = "celta" 
carros["nome"] = "chev"
console.log(carros.modelo)
console.log(carros.nome)


// for(carro in carros){ console.log(carro)}
