class Usuario{
    id: number
    nome: string
    email: string
    senha?: string
    ativo: boolean

    constructor(id: number, nome: string, email: string, senha: string="", ativo: boolean){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
        this.ativo  = ativo
    }
} 

const usuarioLogado: Usuario = new Usuario(1, 'grtr', 'gr@gmailc.om', "1234534wr", true)
console.log(usuarioLogado)