class Person{
name:string;
age:number;
constructor(nome:string,eta:number){
this.name=nome;
this.age=eta;
}
public describe(nome:string,eta:number):string{
    let s:string=nome+","+eta;
return s;
//oppure console.log(nome+","+eta); imposti il metodo :void e togli il return
}
public teach(nome:string,materia:string){
console.log(nome+" is now teaching "+materia);
}
}
let teacher:Person=new Person("Andrea",19);
teacher.teach(teacher.name,"matematica");



class Student extends Person{
nome:string;
materie:string[];
public Ricevere(subject:string){
this.materie.push(subject);
}
}
class Teacher extends Person{
    nome:string;
    classi:string[];
    public Ricevere(classe:string){
    this.classi.push(classe);
    }
    }



class School{
   Studenti:Student[];
   Docenti:Teacher[];
constructor(docente:Teacher,studente:Student){
this.Studenti=[studente];
this.Docenti=[docente];
}
public Print(){
for(let i=0;i<this.Studenti.length;i++){
    console.log(this.Studenti[i]);
}
for(let i=0;i<this.Docenti.length;i++){
    console.log(this.Docenti[i]);
}
}
public AddStudente(studente:Student){
    this.Studenti.push(studente);
}
public AddDocente(docente:Teacher){
    this.Docenti.push(docente);
}
}
let StudenteA:Student=new Student("Andrea",19);
let StudenteB:Student=new Student("Daniele",21);
let StudenteC:Student=new Student("Lorenzo",29);
let DocenteA:Teacher=new Teacher("Costantino",38);
let DocenteB:Teacher=new Teacher("Simone",25);
let DocenteC:Teacher=new Teacher("Cristiano",47);
let Scuola:School=new School(DocenteA,StudenteA);
Scuola.AddDocente(DocenteB);
Scuola.AddDocente(DocenteC);
Scuola.AddStudente(StudenteB);
Scuola.AddStudente(StudenteC);
Scuola.Print();