class Employee {
    empCode: number = 0
    empName: string = ""
    private empMatricula: string = ""
    protected empSalario: number = 0

    constructor(empCode: number, empName: string, empMatricula: string){
        this.empCode = empCode
        this.empName = empName
        this.setMatricula(empMatricula)
    }
    setMatricula(mat: string){
        if (mat.length >= 5) {
            this.empMatricula = mat
        } else {
            console.log("Insira uma matrícula com pelo menos 5 dígitos")
        }
    }

    setSalario(salario: number){
        this.empSalario = salario
    }
}

class SectorEmployee extends Employee {
    
}

let emp1: Employee 
emp1 = new Employee(10, "Jose da Silva", '123')

console.log(emp1);
