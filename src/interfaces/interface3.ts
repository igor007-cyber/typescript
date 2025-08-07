interface Animal{
    nome: string
    tipo: 'terrestre' | 'aquatico'
    domestico: boolean
}

interface Pet extends Animal{
    dono: String
}

let Cachorro: Pet = {
    nome: "Rex",
    tipo: "terrestre",
    domestico: true,
    dono: 'igor'
}

console.log(Cachorro.nome)