/*const greeting = "Hello World";
console.log(greeting);*/

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

// Filter all entrepreneurs born in the 70's
console.log("--------------- The 70's category ------------------");
let oldSchoolBoss = entrepreneurs.filter(entrepreneurs => (entrepreneurs.year > 1969 && entrepreneurs.year < 1980));
for(i = 0; i <= oldSchoolBoss.length; i++){
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}

// Sort an array that will filter the first name and last name of our entrepreneurs array
console.log("--------------- Sort the first and last name of all entrepreneurs ------------------");
let fullName = [];
for(let i in entrepreneurs){
  let temp = entrepreneurs[i].first + " " + entrepreneurs[i].last;
  fullName.push(temp);
  console.log(fullName[i]);
}

