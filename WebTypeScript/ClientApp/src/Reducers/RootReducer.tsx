import { combineReducers } from 'redux';
import IPokemonReducer from '../Interfaces/API/IPokemonReducer';
import PokemonReducer from './PokemonReducer';

export interface IRootReducerState {
    pokemon: IPokemonReducer;
}

export default combineReducers<IRootReducerState>({
    pokemon: PokemonReducer
});