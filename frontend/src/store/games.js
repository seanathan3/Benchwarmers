import jwtFetch from "./jwt";

const RECEIVE_GAMES = 'games/RECEIVE_GAMES';
const RECEIVE_GAME = 'games/RECEIVE_GAME';
const REMOVE_GAME = 'games/REMOVE_GAME';

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

// export const getGame = (gameId) => state => {
//     if(state.games){
//         return state.games[gameId]
//     }else{
//         return null
//     }
// }

export const fetchGames = () => async dispatch => {
    const res = await jwtFetch('/api/games');
    const data = await res.json();
    dispatch(receiveGames(data));
};

export const fetchGame = gameId => async dispatch => {
    const res = await jwtFetch(`/api/games/${gameId}`)
    const data = await res.json();
    dispatch(receiveGame(data));
};

export const createGame = game => async dispatch => {
debugger
    const response = await jwtFetch(`/api/games/`, {
        method: "POST",
        body: JSON.stringify(game),
        headers: {'Content-Type': 'application/json'}
    })

    const data = await response.json();
    dispatch(receiveGame(data));
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


const gamesReducer = (state={}, action) => {
    let nextState = { ...state }
    switch (action.type) {
        case RECEIVE_GAMES:
            return { ...state, ...action.games }
        case RECEIVE_GAME:
            nextState[action.game.id] = action.game;
            return nextState;
        case REMOVE_GAME:
            delete  nextState[action.gameId];
            return nextState;
        default:
            return state;
    }
};

export default gamesReducer;