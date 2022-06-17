"use strict";
// Interfaces (outra maneira de nomear um tipo de objeto)
let fornecedor = { id: 10 };
fornecedor.id = 10;
fornecedor.nome = 'Antartica';
fornecedor.email = "ant@email.com";
fornecedor.fone = "9999";
fornecedor.cpf = 123123;
// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type cannot 
// be re-opened to add new properties vs an interface which is always extendable.
