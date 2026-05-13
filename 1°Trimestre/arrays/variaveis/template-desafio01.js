// Crie um perfil profissional que
// Interpole uma frase é um objeto com 
// as características de um profissional a sua escolha]

//criar objeto javascript 'profissional'

//criar variável com interpolação (template)

//imprimir perfilProfissional


const profissional = {
    profissão : "padeira",
    nome: "stefania",
    salário : "R$ 1.960",
}
const perfil = ` \nOlá, ${profissional.nome} - \nsua profissão é ${profissional.profissão} - \nseu salário salário será de ${profissional.salário}`
console.log(perfil)