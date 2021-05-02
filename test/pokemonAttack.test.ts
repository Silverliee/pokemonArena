import {getPokemonById} from "../Middleware/ApiInterface";
import {Game} from "../Entity/Game";
import {attack, whoPlayFirst} from "../Middleware/GameInterface";


test('Pokemon attack test', async () => {
    const pokemonOne: any = await getPokemonById(1);
    const pokemonTwo: any = await getPokemonById(2);
    const game = new Game(pokemonOne, pokemonTwo, whoPlayFirst(pokemonOne, pokemonTwo));
    await attack(pokemonOne._abilities["0"].move.url, game.pokemonOne, game.pokemonTwo);
    expect(game.pokemonTwo.hp).toBe(54.16)
})