class Telefone{
    constructor (ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco{
    constructor(estado,cidade,rua,numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoCaixaAlta(){
        return String (this.estado).toUpperCase();};
    getEstadoCaixaBaixa(){
        return String (this.estado).toLowerCase();};
    
    getCidadeCaixaAlta(){
        return String (this.cidade).toUpperCase();};
    getCidadeCaixaBaixa(){
        return String (this.cidade).toLowerCase();};

    getRuaCaixaAlta(){
        return String(this.rua).toUpperCase();};
    getRuaCaixaBaixa(){
        return String(this.rua).toLowerCase();};

}

class Cliente{
    #cpf
    constructor(nome,cpf,endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf (){
        return this.#cpf
    }

    getNomeCaixaAlta(){
        return String (this.nome).toUpperCase();};
    getNomeCaixaBaixa(){
        return String (this.nome).toLowerCase();};
    
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj,endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj(){
        return this.#cnpj;};
    
    getRazaoSocialCaixaAlta(){
        return String(this.razaoSocial).toUpperCase();};
    getRazaoSocialCaixaBaixa(){ 
        return String(this.razaoSocial).toLowerCase();};
    
    getNomeFantasiaCaixaAlta(){ 
        return String(this.nomeFantasia).toUpperCase();};
    getNomeFantasiaCaixaBaixa(){ 
        return String(this.nomeFantasia).toLowerCase();};

    detalhe(){
        
        let descricao = `Razão Social: ${this.razaoSocial}\n` +
                        `Nome fantasia: ${this.nomeFantasia}\n` +
                        `-------------------------\n`;
                        
        let arrayClientes = Array.from(this.clientes);
        
        for (let i = 0; i < arrayClientes.length; i++) {
            let cliente = arrayClientes[i];
            
            descricao += `Nome: ${cliente.nome}\n`;
            descricao += `Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            
            let arrayTelefones = Array.from(cliente.telefones);
            
            for (let j = 0; j < arrayTelefones.length; j++) {
                descricao += `ddd: ${arrayTelefones[j].ddd} numero: ${arrayTelefones[j].numero}\n`;
            }
            descricao += `\n`;
        }

        return descricao;
    }
}

let enderecoEmpresa = new Endereco ('SP', 'São José dos Campos', 'Rua zero', '01')
let empresa = new Empresa ('Unilever Ltda', 'coca', '00000000', enderecoEmpresa)

empresa.telefones.add(new Telefone('12', '111111111'));
empresa.telefones.add(new Telefone('12', '222222222'));

let enderecoCliente1 = new Endereco('SP', 'Jacarei', 'Rua um', '02');
let enderecoCliente2 = new Endereco('SP', 'Taubate', 'Rua dois', '03');
let enderecoCliente3 = new Endereco('SP', 'Caçapava', 'Rua três', '04');
let enderecoCliente4 = new Endereco('SP', 'Guararema', 'Rua quatro', '05');
let enderecoCliente5 = new Endereco('SP', 'Santa Branca', 'Rua cinco', '06');

let cliente1 = new Cliente('Ana', '00000000000', enderecoCliente1);
let cliente2 = new Cliente('Bia', '111111111111', enderecoCliente2);
let cliente3 = new Cliente('Caio', '22222222222', enderecoCliente3);
let cliente4 = new Cliente('Diego', '33333333333', enderecoCliente4);
let cliente5 = new Cliente('Eric', '44444444444', enderecoCliente5);

cliente1.telefones.add(new Telefone('21', '333333333'));
cliente1.telefones.add(new Telefone('21', '444444444'));

cliente2.telefones.add(new Telefone('31', '555555555'));
cliente2.telefones.add(new Telefone('31', '666666666'));

cliente3.telefones.add(new Telefone('41', '777777777'));
cliente3.telefones.add(new Telefone('41', '888888888'));

cliente4.telefones.add(new Telefone('51', '999999999'));
cliente4.telefones.add(new Telefone('51', '909090909'));

cliente5.telefones.add(new Telefone('61', '8080808080'));
cliente5.telefones.add(new Telefone('61', '7070707070'));

empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

console.log(empresa.detalhe())







