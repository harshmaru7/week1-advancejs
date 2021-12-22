fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});

    function insightData(data){
        const unique_genres = [...new Set(data.map(item => item.genres))];
        var result =  unique_genres.filter(e => e.length);
        var merged = [].concat.apply([], result);
        var final = [...new Set(merged)];

        const actors = [...new Set(data.map(item => item.cast))];
        var r =  actors.filter(e => e.length);
        var m = [].concat.apply([], r);
        var f = [...new Set(m)];

        final.forEach(movies)
        function movies(item){
            let movie = []
            data.forEach(function(e){
                if(e.genres.find(n => n==item)){
                    movie.push(e.title)
                }
            })
            const movieslist = JSON.stringify(movie)
            const charactersDiv = document.querySelector("#mydata");
            const genre = document.createElement("p");
			genre.innerText = `Type: ${item}`;
            const movies = document.createElement("p");
		    movies.innerText = `Movies: ${movieslist}`;
            charactersDiv.append(genre)
			charactersDiv.append(movies);
        }

        f.forEach(actor)
        function actor(item){
            let movie = []
            data.forEach(function(e){
                if(e.cast.find(n=>n==item)){
                    movie.push(e.title)
                }
            })
            const movieslist = JSON.stringify(movie)
            const charactersDiv = document.querySelector("#mydata");
            const cast = document.createElement("p");
			cast.innerText = `Name: ${item}`;
            const movies = document.createElement("p");
		    movies.innerText = `Movies: ${movieslist}`;
            charactersDiv.append(cast)
			charactersDiv.append(movies);
        }

    }