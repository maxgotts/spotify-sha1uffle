var SpotifyWebApi = require('spotify-web-api-node');

var sapi = new SpotifyWebApi(); // The Spotify API ==> sapi

sapi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK') // getUser('petteralexis') // getMe() ;; getPlaylist('5ieJqeLJjjI8iJWaxeBLuK') ;; 
	.then(data => {
		console.log(data.body)
	}, err => { console.error(err); })
