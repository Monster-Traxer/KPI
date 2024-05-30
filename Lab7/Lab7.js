let first = prompt("Оберіть число для 1 завдання")
chech(first)

prosti();

let third = prompt('Оберіть число для 3 завдання ');
easy(third);

// Написати функцію, яка починає перебирати числа від 1 до нескінченності і перевіряє чи є число простим (просте число - те яке ділиться лише на 1 чи само на себе). Якщо просто число знайдене - воно додається до масиву. Після пʼятого знайденого простого числа функція повинна повернути суму всіх пʼяти простих чисел в масиві.
function easy(third){
let resault = 0;
let ones = "0";
let fitch;
for(let y = 0 ; y<third;y++){
	ones = ones + "1";
	fitch = parseInt(ones);
	 resault += fitch;
}
alert(resault)
}

// Написати функцію з одним аргументом, яка перевіряє чи є аргумент числом. Якщо так, то повертає чи є це цисло парним чи не парним. Якщо аргумент не число - повертає пусту строку.
function chech (num){
	if(isNaN(first) === false){
		if(first%2 == 0) {
			alert('Число парне')
		}
		else{
			alert('Число непарне')
		}
	}
	else{
		alert('Пустота')
	}
	}

// Написати функцію з одним аргументом n, що є числом. Функція повинна повернути суму наступного ряду з n чисел 1 + 11 + 111 + 1111 + ...., де кожний елемент - число з постійно зростаючою кількістю одиниць.
function prosti(){
let array  = [];
let search = 0;
let Bolle = true;
let sam =0;
for(let b = 1;b < 99999; b++){
if(b===1){
	console.log("Пропустити елемент")
}
else{
for (let i = 2; i < b; i++) {
	if (b % i == 0) {
		Bolle = false;
		break; 
	}
	else{
		Bolle = true;
	}
}

if(Bolle == true){
	array.push(b);
	search++;
}
if(search === 5){
	break;
}
}
}
console.log(array);
for(let z = 0 ;z<5;z++){
	 sam += array[z];
	 console.log(sam);
}

alert (sam);
}