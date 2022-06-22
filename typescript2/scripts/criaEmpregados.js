"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classeEmpregado_1 = __importDefault(require("./classeEmpregado"));
const emp1 = new classeEmpregado_1.default("José", 7.89, 40);
const emp2 = new classeEmpregado_1.default("Gustavo", 55, 40);
console.log(emp1);
console.log(emp1.calculaSalario());
emp1.imprimeDados();
console.log(emp2);
console.log(emp2.calculaSalario());
emp2.imprimeDados();
