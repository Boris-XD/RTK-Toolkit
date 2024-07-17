import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonAxios, getPokemonsFetch } from "../store/slices/pokemon";

export const Pokemon = () => {

  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokemon);

  console.log(pokemon);


  useEffect(() => {
    dispatch(getPokemonAxios());
    console.log(pokemon);
  }, [])

  return (
    <>
    <h1>Pokemon</h1>
    <hr />
    {
      pokemon != null && <span>Loading: {pokemon.isLoading ? 'True':'False'}</span>
    }
      <h3>Pokemon</h3>
      <h4>Page: {pokemon != null && pokemon.page}</h4>
    <ul>
        {
          pokemon != null && pokemon.pokemons.map(poke => <li key={poke.name}>{poke.name}</li>)
        }
    </ul>
    {
      (pokemon != null && pokemon.isLoading == false) &&
      <button onClick={() => dispatch(getPokemonAxios(pokemon.page))}>
        Next Page
      </button>
    }
    </>
  )
}
