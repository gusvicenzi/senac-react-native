"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modulo2_1 = require("./modulo2");
const moduloMatematica_1 = __importDefault(require("./moduloMatematica"));
let y = (0, moduloMatematica_1.default)(20, 10);
console.log(y);
console.log((0, modulo2_1.ola)("Gustavo"), (0, modulo2_1.tchau)("Jubileu"));
