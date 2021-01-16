const numberOfFilms = +prompt("Скільки фільмів вже подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

for(let i = 0; i <= 2; i++){

const a = prompt("Один з останіх переглянутих фільмів?", ""),
      b = +prompt("На скільки оцінюєте його", "");

      if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
        i++;
        console.log("Ok!");
      } else {
        console.log("Error!");
        i--;
      }
}

if(personalMovieDB.count < 10){
    console.log("Ви подивились досить мало фільмів");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log("Ви класичний глядач");
} else if (personalMovieDB.count > 30) {
    console.log("Ви кіноман!");
} else {
    console.log("Вийшла помилка");
}