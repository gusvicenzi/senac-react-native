"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor(nome, valorHora, totalHorasSemanal) {
        this.nome = nome;
        this.valorHora = valorHora;
        this.totalHorasSemanal = totalHorasSemanal;
    }
    calculaSalario() {
        return parseFloat((this.valorHora * this.totalHorasSemanal).toFixed(2));
    }
    imprimeDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Valor/hora: R$${this.valorHora}`);
        console.log(`Horas semanais: ${this.totalHorasSemanal}`);
        console.log(`Salário: R$${this.calculaSalario()}`);
    }
}
exports.default = Empregado;
