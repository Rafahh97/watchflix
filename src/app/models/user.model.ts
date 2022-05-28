export class User {
    public id: number;
    public nome: string;
    public sobrenome: string;
    public dataNascimento: string;
    public email: string;
    public senha: string;

    constructor()
    constructor(id?: number, nome?: string,sobrenome?: string,dataNascimento?: string, email?: string,
                senha?: string) {
        this.id = (id)? id : 0;
        this.nome = (nome)? nome : '';
        this.sobrenome = (sobrenome)? sobrenome : '';
        this.dataNascimento = (dataNascimento) ? dataNascimento : '';
        this.email = (email)? email : '';
        this.senha = (senha)? senha : '';
    }
}