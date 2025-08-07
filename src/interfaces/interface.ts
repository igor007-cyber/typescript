interface userId{
    id: number | string;
    nome: string
    idade: number
    senha?: string
    ativo: boolean
}

let usuario: userId = {
    id: 1234,
    nome: "fulano",
    idade: 13,
    ativo: true
}

console.log(usuario.nome)