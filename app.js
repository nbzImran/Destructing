let facts = {numPlanets1: 8, yearNeptuneDiscovered: 1846};
let {numPlanets1, yearNeptuneDiscovered} = facts;

console.log(numPlanets1); // 8
console.log(yearNeptuneDiscovered); // 1846



let planetFacts = {
	numPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // 	yearNeptuneDiscovered: 1846,
  								//	yearMarsDiscovered: 1659


								


function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Alejandro, purple;
getUserData({firstName: "Melissa"}) // Melissa, green;
getUserData({}) // undefind, green;								



let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
	"Raindrops on roses",
	"whiskers on kittens",
	"Bright copper kettles",
	"warm woolen mittens",
	"Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses;
  console.log(whiskers); // wiskers on kittens;
  console.log(aFewOfMyFavoriteThings); // all the remaining;


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20];



let obj = {
	numbers: {
	  a: 1,
	  b: 2
	}
  };
  
 let {a, b} = obj.numbers;


 let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];



raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/


const raceResults = ([first, second, third, ...rest]) => {
	({first, second, third, ...rest});
}