import {getPokemonById} from "../Middleware/ApiInterface";
import {Game} from "../Entity/Game";
import {attack, whoPlayFirst} from "../Middleware/GameInterface";

test('Game Simulation Test', async () => {
    const pokemonOne: any = await getPokemonById(1);
    const pokemonTwo: any = await getPokemonById(2);
    const game = new Game(pokemonOne, pokemonTwo, whoPlayFirst(pokemonOne, pokemonTwo));
    while (game.status !== "finish") {
        if (game.pokemonOne.id == game.turn) {
            await attack(pokemonOne._abilities["0"].move.url, game.pokemonOne, game.pokemonTwo);
            game.turn = game.pokemonTwo.id;
        }
        if (game.pokemonTwo.id == game.turn) {
            await attack(pokemonOne._abilities["0"].move.url, game.pokemonTwo, game.pokemonOne);
            game.turn = game.pokemonOne.id;
        }
        if (game.pokemonOne.hp <= 0) {
            game.status = "finish";
        }
        if (game.pokemonTwo.hp <= 0) {
            game.status = "finish";
        }
    }
    const winner = game.pokemonOne.hp > pokemonTwo.hp ? game.pokemonOne.name : game.pokemonTwo.name;
    expect(winner).toBe("ivysaur");
})