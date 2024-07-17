import { pokemonApi } from "../../../api";
import { setPokemons, startLoading } from "./pokemonSlice";


export const getPokemonsFetch = ( page = 0 ) => {
    return async (dispatch, getState) => {

        dispatch(startLoading());

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const data = await resp.json();
        
        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));
    }
}

export const getPokemonAxios = ( page = 0 ) => {
    return async (dispatch, getState) => {

        dispatch(startLoading());

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
        
        dispatch(setPokemons({
            pokemons: data.results,
            page: page + 1
        }));
    }
}