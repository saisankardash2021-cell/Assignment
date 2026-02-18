//function without parameter and without return type

/*function greet(): void {
    console.log("Hi type script")
}

greet();*/


/*function greet(name: string): void {
    console.log("Hi "+ name);
}

greet("Sai Sankar Dash");*/

/*function greet(name: string): void {
    console.log(`Hi ${name}`);
}
greet("Sai Sankar Dash");*/

// function with return type

/*function addNumbers(a:number , b:number): number {
    return a+b;
}

console.log(addNumbers(5,10));*/

/*function getCurrentYear():number{
    let currentDate = new Date();
    return currentDate.getFullYear();
}

console.log(getCurrentYear());*/

// optional parameter (?)

/* console.log(5 != "5");   // false (because "5" is coerced to number 5)
console.log(5 !== "5");  // true  (different types: number vs string)
console.log(5 !== 5);    // false (same value and same type)*/


/*So age !== undefined evaluates to:
true if age has been assigned some value (like a number, string, etc.).
false if age is literally undefined.*/


/* function empData(name:string, age?:number): void{
    if(age !== undefined)
        console.log("Employee Name:"+name + "Employee age is:" +age);
    else
        console.log("Employee Name:" +name + "Employee age is not provided");
    } 
    
// function call
    empData("Sai Sanka Dash",40);
    empData("Sai Sanka Dash");*/

// function with default parameters

function printEmpVisaInfo(name:string , visaStatus)


