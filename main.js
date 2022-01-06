// variable one 
const d = "Mahmoud";
let e = 'hello form javascript laguage i loved it';

let card = `
    <div class="card">
        <div class="child">
            <h1>${d}</h1>
            <p>${e}</p>
        </div>
    </div>
    `;
document.write(card);
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "50px";

// challange one

let title = "Mahmoud",
    desc = "MERN STACK DEVELOPER , I LOVE THIS LANGUAGE BECO",
    date = "16/12/2021";

const caRd_two = `
    <div id="card-parent">
        <div id="card-child">
            <h3>Hi I'M <span>${title}</span></h3>
            <p>${desc}</p>
            <span>${date}</span>
        </div>
    </div>
    `;

let repeat = caRd_two.repeat(4);

document.write(repeat);

/*   *challange one*   */
let x = "-100";
let y = "20";
let f = 30;
let g = true;

console.log(-x * +y);
console.log(- --x + ++g + f ** 2 / 10 + -y);

/*   *challange two*   */
let aa = 1_00;
let bb = 2_00.5;
let cc = 1e2;
let ddd = 2.4;
console.log(Math.min(aa, bb, cc, ddd));

console.log(Math.pow(aa, 2));

console.log(Math.round(ddd));
console.log(Math.floor(ddd));
console.log(Math.ceil(ddd));
console.log(Math.trunc(ddd));

console.log((-(Math.pow(ddd, 5.6)) + (Math.round(bb))).toFixed(2));


console.log(-(Math.trunc(Math.pow(Math.trunc(ddd), 7.07))) + (Math.ceil(bb)));



let namee = "mahmoud web school";

console.log(namee[0]);
console.log(namee[7]);

console.log(namee.charAt(0));
console.log(namee.charAt(7));

console.log(namee.trim().charAt(2).toUpperCase());

console.log(namee.trim().indexOf("m"));
console.log(namee.trim().lastIndexOf("a"));

console.log(namee.slice(6, 11));

console.log(namee.split("", 7));

console.log(namee.length);

console.log(namee.substring());
console.log(namee.substring(namee.length - 4));
console.log(namee.substring(namee.length - 10, namee.length - 7));

console.log(namee.substr(0, 7));
console.log(namee.substr(-10, 3));

console.log(namee.includes("web"));
console.log(namee.includes("web", 9));


console.log(10 == 10 || 10 === "10" || 10 > 50); //OR || => IF Any Condition True

console.log(10 == 10 && 10 === "10");       //AND && => Must Condition Equal true 

console.log(!(10 == 10 && 10 === "10"));      //NOT   ! => Reflacte The Output Alowse


// if condition 

let price = 100;
let discount = false;
let discountAmount = 25;
let Country = "Egypt";
let student = true;

if (discount === true) {
    price -= discountAmount;
}

else if (Country === "Egypt") {

    if (student === true) {       // Nested if   
        price -= discountAmount + 25;
    }
    else {
        price -= discountAmount + 15;
    }

}

else if (Country === "Palestine") {
    price -= 45;
}

else if (Country === "Ghaza") {
    price -= 50;
}

else {
    price;
}

console.log(price);

/* Condition ternary

conditon? 
*/

const theName = "sara";
const theAge = 20;
const theGender = "female"

let resulate = theGender === "male" ? "Mr" : "Mrs";

let PL = theAge === 20 //if
    ? 20
    : theAge > 20 && theAge < 60 //else if
        ? "20 to 60"
        : theAge > 60 //else if
            ? "larger than 60"
            : "unknown"; //else

console.log(`Hello ${resulate} ${theName} ${PL} `);



/* nullishing coalesting operation
1--logical OR :
null+undefiend+falsy value;

2--Nullishing coalesting Operator ??
null+undefiend;
*/


let priceTwo = null;
console.log(`The Price Is ${priceTwo || 100}`);
console.log(`The Price Is ${priceTwo ?? 100}`);

// Challege if

// Challege if 0ne
let x1 = 10;

let reslutX1 = x1 < 10 ? 10

    : x1 >= 10 && x1 <= 40 ? "10 To 40"

        : x1 > 40 ? "40"

            : "UnKnown";

console.log(`The Value Is ${x1}`);

// Challege if two
let st = "Elzero Web school";

if (typeof st === typeof "34") {
    console.log("Good");
}

// Challege if three

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}


// Challege if foure
if (Number(st) !== "string") {
    console.log("Good");
}

// Challege if five
if (typeof Number(st) === "number") {
    console.log("Good");
}

// Challege if six
if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}

// challenge of if && swith 

// challenge one 
let job = "Designer";
let salary = 0;

switch (job) {
    case "manger":
        salary = 8000;
        console.log(`The Salary Is ${salary}`);
        break;

    case "IT":
    case "Support":
        salary = 6000;
        console.log(`The Salary Is ${salary}`);
        break;

    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(`The Salary Is ${salary}`);
        break;


    default:
        salary = 4000;
        console.log(`The Salary Is ${salary}`);

}

// challenge Two 

let holidays = 0;
let mony = 0;

if (holidays === 0) {
    mony = 5000;
    console.log(`My Mony IS ${mony}`);
}
else if (holidays === 1 || holidays === 2) {
    mony = 3000;
    console.log(`My Mony IS ${mony}`);
}
else if (holidays === 3) {
    mony = 2000;
    console.log(`My Mony IS ${mony}`);
}
else if (holidays === 4) {
    mony = 1000;
    console.log(`My Mony IS ${mony}`);
}
else if (holidays === 5) {
    mony = 0;
    console.log(`My Mony IS ${mony}`);
}
else {
    mony = 0;
    console.log(`My Mony IS ${mony}`);
}



// Array

let m = ["mahmoud", "reda", "sayed", ["ali", "OmaR"]];

console.log(`Hello ${m[0]}`);
console.log(m[1][2]);
console.log(m[3][1][3]);
m[3][1] = "Mohamed";
console.log(m[3][1]);
m[2] = ["ahmed", "Sara"]
console.log(m[2][1]);

// length width Array
// length start => 1
// index start => 0


console.log(m.length);
console.log(m);

m[m.length - 1] = "jack"
console.log(m);

m[m.length] = "Mary"
console.log(m);

m[m.length - 3] = 'gemi'
console.log(m);

// the new m = ['mahmoud', 'reda', 'gemi', 'jack', 'Mary'] length => (5)
// added into array && Remove frome array :

/******** From Started*********/
// Unshift : [Add] to [Frist] array; 
// Shift   : [Remove] to [Frist] array; 
/********From End**********/
// Push    : add to [Frist] array; 
// Pop     : Remove to [Frist] array; 

m.unshift("hayam", "MUSTAFA");
console.log(m);

m.shift();
console.log(m);

m.push("x", "y");
console.log(m);

m.pop();
console.log(m);

//Searching Array
// the new m = ['MUSTAFA', 'mahmoud', 'reda', 'gemi', 'jack', 'Mary', 'x'] length => (7)

// indexOf
console.log(m.indexOf("gemi"));
console.log(m.lastIndexOf("x"));

//Array Method's 
//sorting();
//reverse();


let start = 0;
let cont = 3;
let M = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
//challenge One 
console.log(M.slice(start, M.length - --cont).reverse());
//challenge Two
console.log(M.slice(++start, ++cont).reverse());
//challenge Three
M[--cont] = M.slice(cont, ++cont).toString().slice(--start, --cont);
M[++start] = M.slice(start, cont).toString().slice(cont);
NewM = M[++start].concat(M[--cont]);
M[cont] = NewM;
console.log(M.slice(cont, ++cont));
// challenge Four
M[--start] = M[start].slice(cont++).slice(--cont);
console.log(M);
M[start] = "rO";
console.log(M);

/*****Start Loop =>>****/

//For=>
for (let i = 0; i < 15; i++) {
    console.log(i);
}

for (let a = 0; a < M.length; a++) {
    console.log(M[a]);
}

let my = [10, 15, "mahmoud", "ali", 2, 5, "amera"];
let myUp = [];

for (i = 0; i < my.length; i++) {
    if (typeof my[i] === "string") {
        myUp.unshift(my[i]);
    }

}

console.log(myUp);

//Nested loops =>>


let product = ["keyboard", "Mouse", "pad", "pen", "iphone", "Monitor"];
let colors = ["Red", "Green", "Blue"];

let Models = [2020, 2021];

for (i = 0; i < product.length; i++) {
    console.log("*".repeat(5));
    console.log(`# ${product[i]}`);
    console.log("*".repeat(10));
    /**FOR COLORS**/
    console.log("Color's:");
    for (j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    /**FOR Models**/
    console.log("Models:");
    for (k = 0; k < Models.length; k++) {
        console.log(`=> ${Models[k]}`);
    }

}

// let product = ["keyboard", "Mouse", "pad", "pen", "iphone", "Monitor"];
// let colors = ["Red", "Green", "Blue"];

/*Show form this product 5 of all it and may it change leatter you must show it as a dynmaically on page*/

let showp = 3;

document.write(`SHOW  ${showp} PRODUCT'S `);
for (i = 0; i < showp; i++) {
    document.write(`<div>`);
    document.write(`<h3>${i + 1}-) ${product[i]}</h3>`);

    document.write(`#COLOR'S:`);
    for (j = 0; j < colors.length; j++) {
        document.write(`<P> -${j + 1} ${colors[j]} </P>`);
    }

    document.write(`<P>* ${colors.join(" & ")}</P>`);
    document.write(`</div>`);
}

//while=>
let a = 0;

while (a < product.length) {
    console.log(product[a]);
    a++;
    if (a === 4)
        break;
}

//do-while=>
let pro = ['x', 'y', 'sm'];
let l = 0;

do {
    console.log(pro[l]);
    l += 1;
    // if (a === 5)
    // break;
} while (l < pro.length);


document.write(`<hr>`);
document.write(`<br>`);
document.write(`<br>`);
// loop challenge



let Admins = ['Ahemd', 'Osama', 'Sayed', 'mahmoud', 'stop', 'sameria'];
let Emp = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'mariam', 'mohamed', 'mona', 'Amany', 'Samia'];
Admins.length = Admins.indexOf('stop');

document.write(`<h1>We Have ${Admins.length} Admins</h1> `);
document.write(`<hr>`);
let aas = 0;
let ja = 0;
let count = 0;

for (aas = 0; aas < Admins.length; aas++) {
    document.write(`<div>`)

    document.write(`<h2>The Admin For Team ${aas + 1} Is ${Admins[aas]} </h2>`);
    document.write(`<h3> # Team Member: </h3>`);
    for (ja = 0; ja < Emp.length; ja++) {
        if (Emp[ja].charAt(0) === Admins[aas][0]) {
            document.write(`<p> -${count + 1} ${Emp[ja]}</p>`);
            count++;
        }



    }
    document.write(`</div>`)
}


//function 
let conter = 0;
function SayHello(userName, Age, Jobs) {
    conter++
    console.log(`  ${conter}  Hello ${userName} Your Age ${Age} And Your Job ${Jobs}`);
    if (Age < 20) {
        console.log("This App Is Not Suitable For You");
    }

}

SayHello("Mahmoud", 24, 'MERN-Stack Developer');
SayHello("Sayed", 25, 'Fornt-End Developer');
SayHello("Jack", 18, 'web-Developer');




//Defualte Value Of Parameter 

function info(n, a = "Unknown") {
    return `Hello ${n} Y're Age Is ${a}`;

}
console.log(info("Mohamed"))


//Return
function clac(num1, num2) {
    return num1 + num2;
}

let Resulte = clac(10, 20);

console.log(Resulte + 100);

//Rest Parameter 

function num(...sumValue) {
    let sum = 0;
    for (let i = 0; i < sumValue.length; i++) {
        sum += sumValue[i];
    }

    return `The Final Sum = ${sum}`;
}

console.log(num(10, 20, 30, 40, 50));

// Challenge Of Function 
function showDetails(a, b, c) {
    let sh = [a, b, c];
    let myname, myage, mystatus;

    for (let i = 0; i < sh.length; i++) {
        typeof sh[i] === 'string'
            ? (myname = sh[i])

            : typeof sh[i] === 'number'
                ? (myage = sh[i])
                : typeof sh[i] === 'boolean'
                    ? mystatus = sh[i]
                    : '';

    }

    mystatus === true
        ? console.log(`Hello ${myname} , Y're Age Is ${myage} , Y're Is Avialable For Hire`)

        : console.log(`Hello ${myname} , Y're Age Is ${myage} , Y're Is Not Avialable For Hire`);

}
showDetails("Mahmoud", 38, true);
showDetails(38, "Mahmoud", false);
showDetails(true, 38, "Mahmoud");
showDetails(false, "Mahmoud", 38);


//Anonymous Function
let calculator = function (num1, num2) {
    return num1 + num2;
}
console.log(calculator(20, 40));

document.getElementById('show').onclick = function () {
    console.log('show form P');
};


setTimeout(function () {
    console.log('Good');
}, 2000);



//Arrows Function 

let print = (num1, num2) => {

    if (num1 > num2) {

        return num1 + num2;
    } else {
        return num1 * num2;
    }

}
console.log(print(10, 20) + 50);


//lexical scope 
function parent() {
    let f = 10;
    function child() {
        let f = 20;
        function grand() {
            let f = 30;
            console.log(f);
        } grand()

    } child()

} parent()

//challenge Arrows Function one

// regular Function
let names_1 = function Namess(...arrNam) {
    return arrNam.join(" , ");
}
console.log(`Regular Function //string ${names_1('[mahmoud]', '[osama]', '[gamal]', '[ahmed]')} => Done !`);

// arrow => Function
let names = (...arrNam) => arrNam.join(' , ');
console.log(`Arrows Function //string ${names('[mahmoud]', '[osama]', '[gamal]', '[ahmed]')} => Done !`);

//challenge Arrows Function two

// regular Function
let mynumber = [20, 50, 10, 60];
let clacc = (one, two, ...nums) => one + two + +nums;
console.log(` From Arrows F=> ${clacc(10, mynumber[0], mynumber[1])}`); //80

// arrow => Function

let calcc_2 = function calcul(one, two, ...nums) {
    let mynumber = [20, 50, 10, 60];
    return one + two + +nums;
}
console.log(` From RegularF{} ${calcc_2(10, mynumber[0], mynumber[1])}`); //80


// ///////////     lesson 70            ///////////////////

//   **MAP**  Function with Regular & Arrows Function 

let mynumb = [1, 2, 3, 4, 5, 6];

let newarr = [];

//Sol more Than one way//
//first loop 
for (let i = 0; i < mynumb.length; i++) {
    newarr.push(mynumb[i] + mynumb[i]);
}
console.log(newarr, 'from For loop');

//map with Regular Anonymous Function {}; 
let add = mynumb.map(function (e, i, arr) {
    return e + e;
}, this);
console.log(add, 'from anonymous F{}');

//map with Regular Named Function {}; 
function addition(el) {
    return el + el;
} addition();
let addarr = mynumb.map(addition);
console.log(addarr, 'from Named F{}');
//map with arrows function =>; 
let addd = mynumb.map((a) => a + a);
console.log(addd, 'from arrows F{}');

//   **filter**  Function with Regular & Arrows Function
// the arr mynumb =[1,2,3,4,5,6];

//Get The Even Number :

let evnum = mynumb.filter(function (a) {
    return a % 2 === 0;
}, this);
console.log(evnum);//2,4,6


// filter practice

sent = "I Love Foood Code To Playing Much";

let small = sent.split(" ").filter(function (a) {
    return a.length < 5;
}, this);

console.log(small.join(" | "));

sent_2 = "I Love Code 122405To Playing Much";

let text = sent_2.split(' ').filter((el) => parseInt(el));
console.log(text);

// challenge Filter & Map :

let mix = "A13BS2ZX";

function numbers(ele) {
    return parseInt(ele);
} numbers();
let numix = mix.split("").filter(numbers);
let summix = numix.map((a) => a * a);
console.log(summix);

//   **Reduce**  Function with Regular & Arrows Function

let newArray = [10, 20, 30, 15];

let sumarr = newArray.reduce(function (a, e) {
    return a + e;
}, 5);
console.log(sumarr);//80;


let textArr = ["bla", "propganda", "other", "aaa", "batterry", "test"];
let check = textArr.reduce((a, e) => a.length > e.length ? a : e);
console.log(check);
console.log('#############');

let xname = "Elzero";
let newxname = xname.split("").join("@");
console.log(newxname.split(""));

let v = newxname.split("").filter((a) => a !== '@' ? a : "").reduce(function (a, e) {
    return a + e;
});
console.log(v);


// challenge for Higher  order function 

let starr = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,s,c,h,o,o,l,2,0,Z";

let Re = starr.split(",").map((a) => a.replace("_", " ")).filter((a) => a !== "," && isNaN(parseInt(a)) && a !== 'Z')
sol = Re.reduce((a, e) => a + e);
console.log(sol);//Elzero Web school;

/*** // Object // ***/

//Syntax:-

let user = {
    //porperties
    theName: "Mahoud",
    theAge: 24,
    //Method
    helloEveryone: function () {
        return `Hello Every ONe`;
    },
};
console.log(user);
console.log(user.theName);
console.log(user.theAge);
console.log(user.helloEveryone());

//Ex:- of pracite notation

let usr = {
    fName: "Osama",
    lAge: 38,
    "country of": "Egypt",
};

console.log(usr["fName"]);
console.log(usr["lAge"]);
console.log(usr["country of"]);

//Ex:- object with new keyword 

let user_2 = new Object();
console.log(user_2);
//properties
user_2.Name = 'mahmoud';//dont notation 
user_2["Age"] = 24;//pracite notation 
//Method
user_2.Hello = function () {
    return `Hi Mido This Y're class`;
}

console.log(user_2);
console.log(user_2.Name);
console.log(user_2["Age"]);
console.log(user_2.Hello());

//Ex:- or object with new keyword

let user_3 = new Object({

    //properties
    Name: 'mahmoud',
    Age: 24,

    //Method
    Hello: function () {
        return `Hi Mido This Y're class`;
    }

});

console.log(user_3.Name);
console.log(user_3.Hello());

/* *** // This Keyword  //  ***  */
// this is refeared to the owner hir function يعني بتعود علي المالك للفانكشن 
//if it inside of an Object it refear to this Object

let calcAge = new Object({
    theName: 'Mahmoud',
    theAge: 24,
    AgeInday: function () {
        return this.theAge * 365;
    }
});
console.log(`${calcAge.theName} Y're Age In day= ${calcAge.AgeInday()} `);


let copyobj = Object.create(calcAge);
copyobj.theAge = 30;
console.log(copyobj);
console.log(copyobj.AgeInday());

//Object With The Assign Method 

let obj1 = new Object({
    pro1: 1,
    pro2: 2,
});

let obj2 = new Object({
    pro3: 3,
    pro4: 4,
});

let obj3 = new Object({
    pro5: 5,
    method: function () {
        return this.pro5 + 10;
    }
});

let Fianlobj = Object.assign(obj3, obj1, obj2);
Fianlobj.pro1 = 200;
console.log(Fianlobj);

//push properties on The Flay when you create this objct with assign 

let newFobj = Object.assign({ madd: function () { return this.pro3 * 2; } }, obj2, { pro5: 5, pro6: 6, });
console.log(newFobj.madd());

