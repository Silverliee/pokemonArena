import fetch from 'node-fetch';
import {Pokemon} from "../Entity/Pokemon";

export async function getPokemonById(pokemonId: number): Promise<Pokemon> {
    const pokemonApiRequest = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/');
    const data = await pokemonApiRequest.json();
    return new Pokemon(
        pokemonId,
        data.forms[0].name,
        data.stats[0].base_stat,
        data.stats[1].base_stat,
        data.stats[2].base_stat,
        data.stats[3].base_stat,
        data.stats[4].base_stat,
        data.stats[5].base_stat,
        data.moves
    );
}

export async function apiCall(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json()
}