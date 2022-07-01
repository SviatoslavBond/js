




const personalMovieDB = {
	count: 0,
	movies: {
	},
	actors: {
	},
	genres: [
	],
	privat: true,

	start: function () {
				
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
				
				while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
					alert('Write a number please');
					personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
				}
	},
	
	rememberFilms: function () {
							for (let i = 0; i < 2; i++){
						
								const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
										b = +prompt("На сколько вы его оцените?", '');
								
									if (a != null && b != null && a != '' && b != '' && a.length < 50) {
										personalMovieDB.movies[a] = b;
									} else {
										i--;
									}
								}
							},
	personalLevel: function () {
							if (personalMovieDB.count <= 10 ) {
								alert("Просмотрено довольно мало фильмов");
							} else if(personalMovieDB.count <= 30){
								alert("Вы классический зритель");
							} else if (personalMovieDB.count > 30) {
								alert("Вы киноман");
							}
	},
	showDB: function () {
					if (!personalMovieDB.privat) {
						console.log(personalMovieDB);
						}
		
	},
	writeGenres: function () {
	
		for (let i = 1; i < 4; i++){
			
			const a = prompt(`Ваш любимый жанр под номером? ${i}`);

			if (a != null && a != '') {
				personalMovieDB.genres[i - 1] = a;
			}  else {
				i--;
			}
		}

		personalMovieDB.genres.forEach(function (item, i) {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
	
};
personalMovieDB.start();
personalMovieDB.rememberFilms();
personalMovieDB.personalLevel();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB();
personalMovieDB.writeGenres();
console.log(personalMovieDB);









