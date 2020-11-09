export class ContaCorrente{
    saldo;
    numero;
    agencia;
    dono;

    sacar(valorSaque){
        if(this.saldo >= valorSaque){
            this.saldo -= valorSaque;
        }
    }
    depositar(valorDeposito){
        if(valorDeposito < 0){
            return
        }
        this.saldo += valorDeposito;
    }
}