import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()

cliente1.nome = "Jorge"
cliente1.cpf = "10354325442"

console.log(cliente1)

const conta1 = new ContaCorrente()

conta1.saldo = 0
conta1.numero = "0001"
conta1.agencia = "0001"

console.log(conta1)
