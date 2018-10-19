var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(nome, eta) {
        this.name = nome;
        this.age = eta;
    }
    Person.prototype.describe = function (nome, eta) {
        var s = nome + "," + eta;
        return s;
        //oppure console.log(nome+","+eta); imposti il metodo :void e togli il return
    };
    Person.prototype.teach = function (nome, materia) {
        console.log(nome + " is now teaching " + materia);
    };
    return Person;
}());
var teacher = new Person("Andrea", 19);
teacher.teach(teacher.name, "matematica");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.Ricevere = function (subject) {
        this.materie.push(subject);
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.Ricevere = function (classe) {
        this.classi.push(classe);
    };
    return Teacher;
}(Person));
var School = /** @class */ (function () {
    function School(docente, studente) {
        this.Studenti = [studente];
        this.Docenti = [docente];
    }
    School.prototype.Print = function () {
        for (var i = 0; i < this.Studenti.length; i++) {
            console.log(this.Studenti[i]);
        }
        for (var i = 0; i < this.Docenti.length; i++) {
            console.log(this.Docenti[i]);
        }
    };
    School.prototype.AddStudente = function (studente) {
        this.Studenti.push(studente);
    };
    School.prototype.AddDocente = function (docente) {
        this.Docenti.push(docente);
    };
    return School;
}());
var StudenteA = new Student("Andrea", 19);
var StudenteB = new Student("Daniele", 21);
var StudenteC = new Student("Lorenzo", 29);
var DocenteA = new Teacher("Costantino", 38);
var DocenteB = new Teacher("Simone", 25);
var DocenteC = new Teacher("Cristiano", 47);
var Scuola = new School(DocenteA, StudenteA);
Scuola.AddDocente(DocenteB);
Scuola.AddDocente(DocenteC);
Scuola.AddStudente(StudenteB);
Scuola.AddStudente(StudenteC);
Scuola.Print();
