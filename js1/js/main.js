let numberOfFilms;

function srart() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
	
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		alert('Write a number please');
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
	}
}
srart();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {
	},
	actors: {
	},
	genres: [
	],
	privat: false
};

;

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
		const a = prompt("Один из последних просмотренных фильмов?", ''),
				b = +prompt("На сколько вы его оцените?", '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log("error");
				i--;
			}
		}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10 ) {
		alert("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count <= 30){
		alert("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		alert("Вы киноман");
	}
}

detectPersonalLevel();

function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
	
	
	
}
showMyDB();

function writeYourGenres() {
	for (let i = 1; i < 4; i++){
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером? ${i}`);
	}
}
writeYourGenres();



