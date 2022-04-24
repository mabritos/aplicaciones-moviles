//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.
function deviceReady() {

	//Your code here **********
	//Su código aquí **********
	var vm = new Vue({
		el: '#vue-app',
		data: {
			message: 'Hello Vue.js',
			movies: [],
			cinema: ''
		},
		methods: {
			getMovies: function (cinema) {
				vm.movies = []
				const url = "https://api.movie.com.uy/api/shows/rss/data"
				fetch(url, {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				}).then(
					response => response.json()
				).then(
					data => this.processData(data, cinema)
				);

			},
			processData: function (data, cinema) {

				var movies = data.contentCinemaShows
				console.log(movies)
				for (let i = 0; i < movies.length; i += 1) {
					for (let x = 0; x < movies[i].cinemaShows.length; x += 1) {
						if (movies[i].cinemaShows[x].cinema == cinema)
							vm.movies.push(movies[i])
					}
				}
				vm.cinema = cinema
				mui.viewport.showPage('movies-screen', 'DEF');
				console.log(vm.cinema)

			}


		}
	})






	//Hide splash
	//Ocultar el splash
	if (navigator.splashscreen) {
		navigator.splashscreen.hide();
	}
}
