class Person{
   name:string;
   age:number;
  constructor(name:string,age:number){
   this.name=name;
   this.age=age;
  }
  public describe(name:string,age:number):string{
    let s:string=name+","+age;
  return s;
  }
}

class Student extends Person{
    name:string;
    subjects:string[];
  public output(subject:string){
     this.subjects.push(subject);
  }
}
class Teacher extends Person{
    name:string;
    classes:string[];
  public out(name:string){
    this.classes.push(name);
  }
  public teach(teacher:Teacher,subject:string){
    console.log(teacher.name+" is now teaching "+subject);
  }
}



class School{
   students:Student[] = [];
   teachers:Teacher[]= [];
  constructor(student:Student,teacher:Teacher){
      this.students.push(student);
      this.teachers.push(teacher);
  }
  public print(){
      for(let i=0;i<this.students.length;i++){
         console.log(this.students[i]);
      }
      for(let i=0;i<this.teachers.length;i++){
         console.log(this.teachers[i]);
      }
  }
  public addStudent(student:Student){
      this.students.push(student);
  } 
  public addTeacher(teacher:Teacher){
      this.teachers.push(teacher);
  }
}
let StudentA:Student=new Student("Andrea",19);
let StudentB:Student=new Student("Daniele",21);
let StudentC:Student=new Student("Lorenzo",29);
let TeacherA:Teacher=new Teacher("Costantino",38);
let TeacherB:Teacher=new Teacher("Simone",25);
let TeacherC:Teacher=new Teacher("Cristiano",47);
let Schools:School=new School(StudentA,TeacherA);
Schools.addTeacher(TeacherB);
Schools.addTeacher(TeacherC);
Schools.addStudent(StudentB);
Schools.addStudent(StudentC);
Schools.print();