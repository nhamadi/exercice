interface Iemployer {
    nom:string;
    prenom:string;
    datenaissance:Date;
    tel:string;
    poste:string;
    adresse:string;
    getAge(): number ;
    getPoste():string;
}
 
class Employer implements Iemployer{
    nom: string;
    prenom: string;
    datenaissance: Date;
    tel: string;
    poste: string;
    adresse: string;

    constructor(nom:string,prenom:string,datenaissance:Date,tel:string,poste:string,adrsse:string){
        this.nom = nom;
        this.prenom = prenom;
        this.datenaissance = datenaissance;
        this.tel = tel;
        this.poste = poste;
        this.adresse = adrsse;
    }

    getAge():number {
     let year = new Date().getFullYear();
     return year - this.datenaissance.getFullYear();
    }

    getPoste():string {
      return this.poste;
    }
}

let Mohamed = new Employer('Melki','Mohamed',new Date('02/02/2000'),'21548796','postexxx','02 Rue X Tunis');
// console.log(Mohamed);
console.log(Mohamed.getAge());
// console.log(Mohamed.getPoste());
