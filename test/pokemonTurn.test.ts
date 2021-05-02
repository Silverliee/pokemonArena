import {whoPlayFirst} from "../Middleware/GameInterface";
import {Pokemon} from "../Entity/Pokemon";
import {Game} from "../Entity/Game";

test('Pokemon turn test', () => {
    const pokemonOne = new Pokemon(1,'test pokemon One',45,45,45,45,45,45,undefined);
    const pokemonTwo = new Pokemon(2,'test pokemon Two',45,45,45,45,45,46,undefined);
    const game = new Game(pokemonOne,pokemonTwo,whoPlayFirst(pokemonOne,pokemonTwo));
    expect(game.turn).toBe(2);
})