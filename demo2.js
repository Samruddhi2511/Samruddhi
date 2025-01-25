console.log("Hello World")

var a=10;
var b=20;
var c=a+b;
console.log(c)

console.log(4**4)
console.log(4*4)

console.log("----------------------------------------------------------------");

let X=3
console.log("1 km ="+X*0.621 +" miles")


let C = 2; 
console.log("1 F = " + ((C * (9/5)) + 32) + " Fahrenheit")


let kg = 1;
console.log(kg + " kg = " + (kg * 2.20462) + " pounds");


let P=100 , T=20,R=10
console.log("simple intrest ="+(P*T*R)/100)


console.log("----------------------------------------------------------------");
var h=1.57;
var w=48;

var bmi=(h/w^2);

//let w =30;

if(bmi<18.5)
{
    console.log("under weight");
}
else if(bmi<=24.9 && bmi>=18.5)
{
    console.log("Normal weight");
}
else if(bmi<=29.9 && bmi>=25)
{
    console.log("Overweight");
}
else if(bmi>30)
{
    console.log("Obese");
}

console.log("----------------------------------------------------------------");


let units=350;
if(units<=100)
{
    console.log("No charge");
}
else if(units<=200 && units>100)
{   
    units=units-100
    console.log("Rs 5 per unit charge="+units*5+"Rs");
}
else if(units>200)
{
    var p=units-200
    var q =p*10;
    var f= q + 500;
    console.log("Rs 10 per unit charge="+ f +"Rs");

    console.log("hii samruddhiii");
}
    
    

