import {Pokemon} from "./Pokemon";

export class Game {
    private _pokemonOne: Pokemon;
    private _pokemonTwo: Pokemon;
    private _turn: number;
    private _status: string = "pending";

    constructor(pokemonOne : Pokemon, pokemonTwo: Pokemon,turn: number) {
        this._pokemonOne = pokemonOne;
        this._pokemonTwo = pokemonTwo;
        this._turn = turn;
    }

    get pokemonOne(): Pokemon {
        return this._pokemonOne;
    }

    set pokemonOne(value: Pokemon) {
        this._pokemonOne = value;
    }

    get pokemonTwo(): Pokemon {
        return this._pokemonTwo;
    }

    set pokemonTwo(value: Pokemon) {
        this._pokemonTwo = value;
    }

    get turn(): number {
        return this._turn;
    }

    set turn(value: number) {
        this._turn = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}