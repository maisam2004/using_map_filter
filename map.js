  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];

for (let num of nums){
  results.push(num*2);
}
//console.log(results);
// Using map()
const multyByTwo = (num) => (num*2)
const mapResults= nums.map(num => num*2);
//console.log(mapResults);
const mapResults2 =nums.map(multyByTwo);
//console.log(mapResults2); [ 2, 4, 6, 8, 10 ]

// Simplified w/ map()


// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map((student)=>[student.id,student.name]);
//console.log(studentsWithIds);  [ [ 1, 'Mark' ], [ 2, 'Ariel' ], [ 3, 'Jason' ] ]

const studentsWithIdsobj = students.map((student)=>({id:student.id,name:student.name}));
//console.log(studentsWithIdsobj); 
/*[
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Ariel' },
  { id: 3, name: 'Jason' }
] */


  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
const age20 = people.filter(person => person.age > 20)
//console.log(age20);
const paul = people.filter(p => p.name === 'Paul');
//console.log(paul);

// Complex Filtering
const students2 = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
const hasFiveYear = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => {
  let strongSkills = student.filter(hasFiveYear)
  return strongSkills.length > 0;
};


const candidate = students2.filter(student => {
  let sskills = student.skills;
  //let skillsStrong = sskills.filter(skill => skill.yrsExperience >= 5);
  return sskills.filter(skill => skill.yrsExperience >= 5).length > 0;

})
candidate.map(can => can.name)
//console.log(candidate.map(can => can.name)); return >>>
/* 
[
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [ [Object], [Object], [Object] ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [ [Object], [Object], [Object] ]
  }
]
gitpod /workspace/using_map_filter (main) $ node map.js
[ { name: 'Michael', age: 23 } ]
[ { name: 'Paul', age: 18 } ]
[ 'Mark', 'Jason' ]

*/
let students3 = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

/* const topMaths = students3.filter(student => {
  return student.results.filter(result => result.math > 89).length > 0;
}) */
const studentResult =student => (student.results );
const resultsArray = students3.map(studentResult);
//const topMaths = resultsArray.filter(res =>res.maths > 89);

//console.log(resultsArray);
const topMaths = students3.filter(student => student.results.maths >= 90);
console.log(topMaths);

//------- reduce method ----
const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc,current)=> {
  // console.log(acc);
 /// console.log(current,"current");
   
  //console.log(acc + current ,'plus');
  return acc + current;


},5);
//console.log(sum);
/*using the initial value is a good way to add  more to a previously calculated subtotal,  
add more items into an existing array, or inject  additional properties into an existing object.  */

const develop = [
  {
    name: 'Mark',
    profession: 'Developer',
    yearEx : 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yearEx:7
  },
  {
    name: 'Jason',
    profession: 'Designer',
    yearEx:1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yearEx:3
  },{
    name: 'Johny',
    profession: 'Manager',
    yearEx:8
  },

];
//grouping by a property and totalling
//{Designer:4,Developer:12}
let experianceByProfesseion = develop.reduce((acc,curr) => {
  let key = curr.profession;
  if(!acc[key]){
    acc[key]=curr.yearEx;
  }else{
    acc[key] += curr.yearEx;
  }

  return acc;
},{})

let arrayOfEmployee = develop.reduce((acc, cu) => {
  let key = cu.profession;
  acc[key] = (acc[key] || []).concat(cu.name);
  return acc;
}, {});

console.log(arrayOfEmployee);



//console.log(experianceByProfesseion);

/* 
let arrayOfEmployees = develop.reduce((acc, cu) => {
  let key = cu.profession; // Add 'let' to declare key
  if (!acc[key]) {
    acc[key] = [cu.name];
  } else {
    acc[key].push(cu.name);
  }
  return acc;
}, {});

console.log(arrayOfEmployees);

 */
let arrayOfEmployees = develop.reduce((acc, cu) => {
  
  let key = cu.profession;
  if (!acc[key]) {
    acc[key] = [cu.name];
  }else{
    acc[key].push(cu.name);
  }
  return acc;
},{})
//console.log(arrayOfEmployees);


/* const devEx = develop.filter(dev => dev.yearEx > 0 ).map(dev => dev.yearEx);
const deve = develop.map(dev => dev.yearEx).reduce((acc,current)=> acc + current);
console.log(deve,'map deve');
const newd = develop.reduce((ac,cu) => ac + cu.yearEx,0);
console.log(newd);
//console.log(deve.reduce((acc,current)=> acc + current));
let totalEx =devEx.reduce((acc,curr)=> acc+curr , 0);
console.log(totalEx,' ->> total experiances'); */

let pupils = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

console.log(pupils[0].name);
console.log(pupils[0].results.english);

let biggest = pupils.reduce((acc , cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  /* if( acc.max < cur.results.english){
    acc.max = cur.results.english;
    acc.name = cur.name;
  } */
  return acc;
  
},{name:'',max:0})
console.log(biggest);