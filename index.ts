import {apiCall, getPokemonById} from "./Middleware/ApiInterface";
import {attack, whoPlayFirst} from "./Middleware/GameInterface";
import {Game} from "./Entity/Game";

async function app() {
    console.log("##############Combat Pokemon###############\n");
    console.log("ps: si ça prends du temps c'est totalement normal :/\n");
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
    console.log("##############RESULTAT###############\n");
    console.log(game.pokemonOne.name + " : " + game.pokemonOne.hp + " hp\n");
    console.log(game.pokemonTwo.name + " : " + game.pokemonTwo.hp + " hp\n");
    const winner = game.pokemonOne.hp > pokemonTwo.hp ? game.pokemonOne.name : game.pokemonTwo.name;
    console.log("le vainqueur est donc : " + winner + " !");
}

app().then();