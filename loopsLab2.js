// loop iterating from 50 to 20, for each iteration
// if current number is multiple of 3 console.log value
for (let i = 50; i > 19; i--){
	if (i % 3){
		console.log(i)
	}
}

// infinte loop
for (let i = 50; i > 20; i++){
	console.log(i)
}

// Loop through this array and print every other value, starting with the first.
const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", 
"Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", 
"Katelyn", "Naomi", "Jeff"];

for (let i = 0; i < classmates.length; i++){
	if (i%2){
		console.log(classmates[i])
	}
};

// new array with gluten free options
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},
{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},
{name: "cheeseburger", glutenFree: false}];
const free = [];

for (let i = 0; i < menu.length; i++){
	if (menu[i].glutenFree === true){
		free.push(menu[i])
		console.log(free);
	}
};

const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]},
 {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},
 {name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];
 const goat = [];

// intial for loop to run through league array	
for (let i = 0; i < league.length; i++){
	// second for loop to run through players array (must use different variable for loop above)
	for (let x = 0; x < league[i].players.length; x++){
		if (league[i].players[x].goat === true){
			goat.push(league[i].players[x])
		}
	}	
};

