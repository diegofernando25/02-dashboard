import { PokemonGrid, PokemonsResponse, SimplePokemon } from "../../../pokemons";

export const metadata = {
    title: 'Favorite Pokemons',
    description: 'Here we show you your favourite pokemons',
}


export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2 text-blue-500">
                Your Favorite Pokemons</span>
            <small>Global state</small>
            <PokemonGrid pokemons={[]} />
            
        </div>
    );
}