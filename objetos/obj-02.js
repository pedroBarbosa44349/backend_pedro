// Crie um objeto do tema que escolher 
// Crie pelo menos 5 propriedades
// Faça uma imprressão para humanos!
// ex. console.log("Nome do jogador:" + jpgador.nome)

const celular = {
    nome: "iphone",
    modelo: "17 pro max",
    cores: ["laranja","cinza"],
    tela: "OLED",
    valor: "18.000"
}

celular.modelo = "17 pro max"
celular["nome"] = "iphone"
celular.cores = "laranja", "cinza"
celular.tela = "OLED"
celular.valor = "18.000" 

console.log(celular.modelo)
console.log(celular.nome)
console.log(celular.cores)
console.log(celular.tela)
console.log(celular.valor)
console.log("iphone:" + celular.nome)

