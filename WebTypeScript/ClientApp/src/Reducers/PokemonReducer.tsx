import IAction from "../Interfaces/IAction";
import IPokemonReducer from "../Interfaces/API/IPokemonReducer";
import * as constants from './../Constants/PokemonConstants';

const defaultState:IPokemonReducer = { fetching: false, name: "", errorMessage: "" };

export default (pervState: IPokemonReducer = defaultState, action: IAction) => {
    let state = pervState;
    switch (action.type) {
        case constants.GET_POKEMON_NAME_PENDING:
            state = { ...state, fetching: true };
            break;
        case constants.GET_POKEMON_NAME_FULFILLED:
            state = { ...state, fetching: false, name: action.payload.data.results[0].name }
            break;
        case constants.GET_POKEMON_NAME_REJECTED:
            state = {...state, fetching: false, errorMessage: action.payload.message }
            break;
    }

    return state;
};