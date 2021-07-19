export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirecturi = "https://spotify-clone-91c72.web.app/";
const clientId = "7de5a685e1864d8390a5ca7e025bedfe";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];
export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
