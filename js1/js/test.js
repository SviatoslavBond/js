// function calculateVolumeAndArea(x) {
// 	if (Number.isNaN(x) || x < 0 || !Number.isInteger(x) ) {
// 		return 'При вычислении произошла ошибка';
// 	} else {
// 		let result = 0;
// 		result = `Объем куба: ${Math.pow(x, 3)}, площадь всей поверхности: ${Math.pow(x, 2) * 6}`;
// 		return result;
// 	}
// }
// console.log(calculateVolumeAndArea(7));

// function getCoupeNumber(x) {
	
// 	if (x == 0 || x > 36) {
// 		return "Таких мест в вагоне не существует";
// 	} else if (!Number.isInteger(x) || Number.isNaN(x) || x < 0) {
// 		return "Ошибка.Проверьте правильность введенного номера места";
// 	}

// 	for (let i = 4; i <= 36;  i++) {
// 		if (x <= i) {
// 			 return Math.ceil(i / 4);
// 		}
//   }
// }
// console.log(getCoupeNumber(37));


// function getTimeFromMinutes(x) {
// 	if (x < 0 || !Number.isInteger(x) || Number.isNaN(x) || x > 600) {
// 		return "Ошибка, проверьте данные";
// 	}
// 	if (x <= 600 ) {
// 		const hour = Math.floor(x / 60);
// 		const min = x % 60;
// 		if ( x < 60) {
// 			return `Это ${hour} часов и ${min} минут`;
// 		}else if (x < 120) {
// 			return `Это ${hour} час и ${min} минут` ;
// 		} else if (x < 300) {
// 			return `Это ${hour} часа и ${min} минут`;
// 		} else if (x >= 300) {
// 			return `Это ${hour} часов и ${min} минут`;
// 		}
// 	}
// }

// console.log(getTimeFromMinutes(350));


// function findMaxNumber(a,b,c,d) {
// 	if (typeof (a) !== 'number' ||
// 		typeof (b) !== 'number' ||
// 		typeof (c) !== 'number' ||
// 		typeof (d) !== 'number'
// 		) {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 		}
// }
// console.log(findMaxNumber(3, 7,88,54)
// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ru', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			  php: '10%'
// 		 },
// 		 exp: '1 month'
// 	}
// };
// console.log();
// function showExperience(plan) {
//    const { skills } = plan;
// 	const { exp } = skills;

// 	return exp;
// }
// console.log(showExperience(personalPlanPeter));

///////////////////////////////////////////

// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ru', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			 php: '10%',
			 
// 		 },
// 		 exp: '1 month'
// 	},
// 	showAgeAndLangs: function (obj) {
// 		const { age } = obj;
// 		const { languages } = obj.skills;
// 		let lang = languages.join(' ').toUpperCase();
// 		let str = `Мне ${age} и я владею языками:${lang}`;
// 		return str;
	
// 	}
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// ////////////////////////////////////////////////////////////////////

// function showProgrammingLangs(plan) {
// 	const { skills } = plan;
// 	const { programmingLangs } = skills;
// 	let string = '';
// 	for (let key in programmingLangs) {
// 		string += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}

// 	return string;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// /////////////////////////////////////////////////////////
// //Задичи на роботу с массивами///////////////////////////
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let str = '';
// 	arr.length <= 0  ? str = 'Семья пуста': str = `Семья состоит из: ${family.join(' ')}`;
// 	return str;
// }
// console.log(showFamily(family));

// ///////////////////////////////////////////////////////////////


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// console.log(favoriteCities.join(' '));

// function standardizeStrings(arr) {

// 	arr.forEach(function (value) {
// 		return (console.log(value.toLowerCase()));
// 	});

// }


// standardizeStrings(favoriteCities);
// //////////////////////////////////////////////////////////
// const someString = 'This is some strange string';

// function reverse(str) {
// 	if (typeof (str) == 'string') {
//    	return str.split('').reverse().join('');
// 	} 
// 	return 'Ошибка';
// }
// console.log(reverse(someString));

// //////////////////////////////////////
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
// 	if (arr.length === 0) {
// 		 return 'Нет доступных валют';
// 	} else {
// 		let result = 'Доступные валюты:\n';
// 		arr.forEach((item, i) => {
// 			if (missingCurr == item) {
// 				delete arr[i];
// 			} else {
// 				result += `${item}\n`;
// 			}
// 		});
// 		return result; 
// 	}	
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));

const shoppingMallData = {
	shops: [
		 {
			  width: 10,
			  length: 5
		 },
		 {
			  width: 15,
			  length: 7
		 },
		 {
			  width: 20,
			  length: 5
		 },
		 {
			  width: 8,
			  length: 10
		 }
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
}

function isBudgetEnough(data) {
	
}