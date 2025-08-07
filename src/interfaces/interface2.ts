interface Produto{
    id: number
    nome: string
    preco: number
    descricao: string 
}

const Produto1: Produto = {
    id: 1,
    nome: "computador",
    preco: 2599.99,
    descricao: "computador samsung"  
}

const Produto2: Partial<Produto> = {
    id: 2,
    nome: "celular",
    preco: 2000, 
}