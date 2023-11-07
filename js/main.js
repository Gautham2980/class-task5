class   Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
        
    }
    display(){
            let x=(this.salary *12)
        document.write(`I am ${this.name},my salary per month is ${this.salary},my annual salary is  ${x} <br>`);
    }
}


class Manager extends Employee{
    constructor(name,salary,department,bonus){
        super(name,salary);
            this.department=department;
            this.bonus=bonus;
        
    }
   
    display(){
        let z=(this.salary+this.bonus)
    document.write(`I am ${this.name},my salary per month is ${this.salary},and my department is ${this.department} and my bonus is ${this.bonus} Total amount : is ${z} <br> `);
}
    }

let a=new Employee("James",40000);
let b=new Employee("David",10000);
let c=new Manager("Anbu",35000,"Developer",1500);
let d=new Manager("Amar",25000,"Tester",1500);
let e=new Manager("Vikram",30000,)
a.display();
b.display();
c.display();
d.display();
