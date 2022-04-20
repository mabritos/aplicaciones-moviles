function getMovies(cinema) {
    const url = "https://api.movie.com.uy/api/shows/rss/data"
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(
        response => response.json()
    ).then(
        data => processData(data, cinema)
    );

}
const processData = (data, cinema) => {
    var movies = data.contentCinemaShows
    var temp = ""
    console.log(movies)
    for (let i = 0; i < movies.length; i += 1) {
        for (let x = 0; x < movies[i].cinemaShows.length; x += 1) {
            if (movies[i].cinemaShows[x].cinema == cinema)
                temp += "<div> <div><p><b>" + movies[i].movie + "</b></p></div>" + "<div><p>" + movies[i].description + "</p></div>" + "<div> <img width='400' height='400' src=" + movies[i].posterURL + ">" + "</div></div>"

        }
    }
    document.getElementById('billboard').innerHTML = temp;
}