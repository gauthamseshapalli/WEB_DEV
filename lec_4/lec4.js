// class Rectangle {
//     constructor(height, width, color){
//         this.height=height;
//         this.width=width;
//         this.color=color;

//     }
    
//     area(){
//         const area= this.height * this.width;
//         return area;

//     }

//     paint() {
//         return (`Color of this rectangle is ${this.color}`);

//     }

// }

// const rect = new Rectangle(2,4, "red" );
// const area=rect.area();
// console.log(area);

// console.log(rect.paint());




// class Student{
//     constructor(name,age,rollno){
//         this.name=name;
//         this.age=age;
//         this.rollno = rollno ;

//     }

//     info(){
//         console.log(` My name is ${this.name} and I am ${this.age} years old `);

//     } 

//     rollno1(){
//         console.log(`My rollno is ${this.rollno}`);
//     }
// }
 
// const gautham= new Student("gautham",19,26);
// gautham.info();

// gautham.rollno1();

//circle assignment

// class Circle{
//     constructor(radius){
//         this.radius=radius;
//     }

//     area(){
// const area= this.radius * this.radius * Math.PI;
// return area;    }
 
// }

// const circle= new Circle(3);
// const area=circle.area();
// console.log(area);

//  function logName(){
//     console.log("gautham");
//  }

//  setTimeout(logName,3000);

// function random(resolve){
//     resolve();


// }

// let p=new Promise(random);

// function callback(){
//     console.log("completed");

// }

// p.then(callback);
const fs= require("fs");
function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt", "utf-8", function(err,data){
        sendTheFinalValueHere(data);

    })

}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p= readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);



