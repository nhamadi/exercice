var Employer = /** @class */ (function () {
    function Employer(nom, prenom, datenaissance, tel, poste, adrsse) {
        this.nom = nom;
        this.prenom = prenom;
        this.datenaissance = datenaissance;
        this.tel = tel;
        this.poste = poste;
        this.adresse = adrsse;
    }
    Employer.prototype.getAge = function () {
        var year = new Date().getFullYear();
        return year - this.datenaissance.getFullYear();
    };
    Employer.prototype.getPoste = function () {
        return this.poste;
    };
    return Employer;
}());
var Mohamed = new Employer('Melki', 'Mohamed', new Date('02/02/2000'), '21548796', 'postexxx', '02 Rue X Tunis');
console.log(Mohamed);
