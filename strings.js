
let a="extravaganza"

console.log({characters:a[8]});
console.log({characters:a[9]});
console.log({characters:a[10]});
console.log({characters:a[11]});

// Insert string at the fourth index

 const sentennce="The quick fox jumps over the lazy dog";
 let newsentence="The \"eat\"quick fox jumps over the lazy dog ";
 console.log({foodnew});

// count how many times the strings appears

 const sentence="The quick brown fox over the lazy dog";


console.log((sentence.match(/the/g)).length);
console.log((sentence.match(/brown/g)).length);


// // identify  words from a string

let string2="The pupils are reading in the libary"
let substring2="the"
console.log(string2.includes(substring2))


let string3="The child was sitting on the table before it fell"
let substring3="sitting"
console.log(string3.includes(substring3))


// convert strings into a certain format

let txt1="wonderful"
const upper=txt1.toUpperCase();
console.log({upper})

let txt2="amazing"
const lower=txt2.toLowerCase();
console.log({lower})


let txt3="UndERneath"
const lowerII=txt3.toLowerCase();
console.log({lower2})

let txt4="A wonderful world"
function titlecase(str){
    return str.toLowerCase().replace(/\b\w/g, s=>s.toUpperCase());
}
console.log(titlecase(`A wonderful world`))