const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    start: function() {
        personalMovieDB.count = +prompt("Скільки фільмів вже подивились?", "");
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN
        (personalMovieDB.count)){
            personalMovieDB.count = +prompt("Скільки фільмів вже подивились?", "");
        }
    },
    rememberMyFilms: function(){
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
    },

    
    detectPersonalLevel: function(){

        if(personalMovieDB.count < 10){
            console.log("Ви подивились досить мало фільмів");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log("Ви класичний глядач");
        } else if (personalMovieDB.count > 30) {
            console.log("Ви кіноман!");
        } else {
            console.log("Вийшла помилка");
        }
    },
    showMyDB: function(){
        if(personalMovieDB.privet == false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privet){
            personalMovieDB.privet = false;
        } else {
            personalMovieDB.privet = true;
        }
    },
    writeYourGenres: function(){
        for(i = 1; i <= 3; i++){
           const answer = prompt(`Ваш любимий жанр під номером ${i}`, "");
           if(answer == "" || answer == null){
             answer = prompt(`Ваш любимий жанр під номером ${i}`, "");
           }
           personalMovieDB.genres[i - 1] = answer;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимий жанр: ${i + 1} це ${item}`)
        });
    }
};



