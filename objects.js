//object

// function person(age,name,l_name){
//     this.age =age;
//     this.name = name;
//     this.l_name=l_name;
// }

// function person(l_name){
//     this.l_name=l_name;
// }



// let qasim = new person(24,"qasim","khundmiri");// we are passing the parameters
// let rehaan = new person (56,"syed","yolo"); // we are paasing the parameters with different object name
// let fayaz = new person("lol")

// console.log(qasim.name); 


// classes

// class Vehicle{
//     constructor(name,brand,color){
//         this.name = name;
//         this.brand = brand;
//         this.color - color;
//     }
//     getName(){
//         return(`the name of the vehicle is ${this.name}`);
//        }

//     getBrand(){
//         return(`The name of the vehicle is ${this.brand}`);
//     }
// }

// let veh1 =new Vehicle("toyota","bmw");
// console.log(veh1.name); 

class Bank{
    constructor(employee_name, unique_id,branch_id){
        this.employee_name = employee_name;
        this.unique_id = unique_id;
        this.branch_id = branch_id; 
   }
   getDetails(){
    console.log(`name : ${this.employee_name}`);
    console.log(`unique_id : ${this.unique_id}`);
    console.log(`branch_id : ${this.branch_id}`);

   }
}

 let  ban = new Bank("rehaan", 23,55);
console.log(ban.employee_name);
console.log(ban.getDetails());


// space complexcity - amount of space taking to execute a program
// time complexcity of the program - amount of taking to execute a program
//linear search if the ele