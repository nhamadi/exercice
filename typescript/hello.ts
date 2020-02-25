class User{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}
let No = new User('Karim');
console.log(No.getName())