'use client';
import { useAppSelector } from '@/src/store';
import PokemonGrid from './PokemonGrid'
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites));
    /*const [pokemons, setPokemons] = useState(favoritePokemons); 
    
    useEffect(()=>{
        //console.log({favoritePokemons})
        setPokemons(favoritePokemons);
    }, [favoritePokemons])*/

    return (
        <>
            {
            favoritePokemons.length === 0
            ? (<NoFavorites />)
            : (<PokemonGrid pokemons={(favoritePokemons)} />)
            },
        </>
  )}


export const NoFavorites = () => {
    return(
        <div className="flex flex-col justify-center items-center h-[50vh]">
            <IoHeartOutline size={100} className="text-red-400" />
            <span>
                You don't have favorite pokemons yet. 
            </span>
        </div>
    )
}

export default FavoritePokemons
