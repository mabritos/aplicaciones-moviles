function getMovies() {
    const url = "https://api.movie.com.uy/api/shows/rss/data"
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(
        response => response.json()
    ).then(
        data => processData(data)
    );

}
const processData = (data) => {
    var movies = data.contentCinemaShows
    var temp = ""
    console.log(movies)
    for (let i = 0; i < movies.length; i += 1) {
        temp += "<div> <div><p><b>" + movies[i].movie + "</b></p></div>" + "<div><p>" + movies[i].description + "</p></div>" + "<div> <img src=" + movies[i].posterURL + ">" + "</div></div>"
    }
    document.getElementById('billboard').innerHTML = temp;
}