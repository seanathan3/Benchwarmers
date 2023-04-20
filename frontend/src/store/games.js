import jwtFetch from "./jwt";

const RECEIVE_GAMES = 'games/RECEIVE_GAMES';
const RECEIVE_GAME = 'games/RECEIVE_GAME';
const REMOVE_GAME = 'games/REMOVE_GAME';
const RESET_GAMES = 'games/RESET_GAMES';
const RECEIVE_ERRORS = 'games/RECEIVE_ERRORS'
const REMOVE_ERRORS = 'games/REMOVE_ERRORS'

export const receiveGames = games => ({
    type: RECEIVE_GAMES,
    games
});

export const receiveGame = game => ({
    type: RECEIVE_GAME,
    game
});

export const removeGame = gameId => ({
    type: REMOVE_GAME,
    gameId
});

export const resetGames = () => ({
    type: RESET_GAMES
})

export const receiveErrors = (errors) => ({
	type: RECEIVE_ERRORS,
	errors,
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})

// export const getGame = (gameId) => state => {
//     if(state.games){
//         return state.games[gameId]
//     }else{
//         return null
//     }
// }

export const getFilteredGames = (userId) => state => {
    const games = state.games ? Object.values(state.games) : []
    const filteredGames = games.filter((game) => (game.host._id == userId))
    return filteredGames
}

export const fetchGames = () => async dispatch => {
    const res = await jwtFetch('/api/games');
    const data = await res.json();
    dispatch(receiveGames(data));
};

export const fetchGame = gameId => async dispatch => {
// debugger
    const res = await jwtFetch(`/api/games/${gameId}`)
    const data = await res.json();
    dispatch(receiveGame(data));
};

export const createGame = game => async dispatch => {
    try {
        const response = await jwtFetch(`/api/games/`, {
            method: "POST",
            body: JSON.stringify(game),
            headers: {'Content-Type': 'application/json'}
        })
    
        const data = await response.json();
        console.log(data)
        return dispatch(receiveGame(data));
    }
    catch(err) {
        const res = await err.json();

		if (res.statusCode === 400) {
			return dispatch(receiveErrors(res.errors));
		}
    }
};


export const updateGame = (game) => async dispatch => {
    const response = await jwtFetch(`/api/games/${game._id}`, {
        method: "PATCH",
        body: JSON.stringify(game),
        headers: {'Content-Type': 'application/json'}
    })

    const data = await response.json()
    dispatch(receiveGame(data))
}


export const deleteGame = gameId => async dispatch => {
    const response = await jwtFetch(`/api/games/${gameId}`, {
        method: "DELETE"
    })

    if (response.ok){
        dispatch(removeGame(gameId))
    }
}

export const gameErrorsReducer = (state = null, action) => {
	switch (action.type) {
		case RECEIVE_ERRORS:
			return action.errors;
        case REMOVE_ERRORS:
            return {};
		default:
			return state;
	}
};

const gamesReducer = (state={}, action) => {
    let nextState = { ...state }
    switch (action.type) {
        case RECEIVE_GAMES:
            return { ...state, ...action.games }
        case RECEIVE_GAME:
            nextState[action.game._id] = action.game;
            return nextState;
        case REMOVE_GAME:
            delete  nextState[action.gameId];
            return nextState;
        case RESET_GAMES:
            return {};
        default:
            return state;
    }
};

export default gamesReducer;