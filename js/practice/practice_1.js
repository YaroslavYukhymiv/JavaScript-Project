const numberOfFilms = +prompt("Скільки фільмів вже подивились?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

for(let i = 0; i < 2; i++){}

const a = prompt("Один з останіх переглянутих фільмів?", ""),
      b = +prompt("На скільки оцінюєте його", ""),
      c = prompt("Один з останіх переглянутих фільмів?", ""),
      d = +prompt("На скільки оцінюєте його", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;