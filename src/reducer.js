export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
	savedAlbums: [],
	discover_weekly: null,
	/*token:
		"BQCROIKKBvAwwb0pSgPz9ySlWaFhwr5tCG79C0pndU7ibq8bpkRXBYmjIf07FATZxFzFgqO-ByDclNn6YlmwU5OAT827Ab-Ww6OBgGkK6RjtavOHgrJr5Yym4RnAoN0KJg4NKMe71n1ITiBzRtNX3qZgXo6shSwa4Gt1q6nmJXsvLVLKJzDx",*/
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_SAVED_ALBUMS":
			return {
				...state,
				savedAlbums: action.savedAlbums,
			};
		default:
			return state;
	}
};
export default reducer;
