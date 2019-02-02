import axios from 'axios';
import { GET_POKEMON_NAME } from './../Constants/PokemonConstants';

export const getPokemonName= () => ({
    type: GET_POKEMON_NAME,
    payload: axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
})