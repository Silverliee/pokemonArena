import {Pokemon} from "../Entity/Pokemon";
import {apiCall} from "./ApiInterface";

export function whoPlayFirst(pokemonOne: Pokemon, pokemonTwo: Pokemon): number {
    return pokemonOne.speed >= pokemonTwo.speed ? pokemonOne.id : pokemonTwo.id
}

export async function attack(attack: string, pokemon: Pokemon, enemy:Pokemon){
    const move = await apiCall(attack);
    const damage = (2 / 5 + 2) * pokemon.attack * move.power / pokemon.defence / 50 + 2;
    enemy.hp -= damage;
}