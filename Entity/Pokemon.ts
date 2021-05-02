export class Pokemon {

    private _id: number;
    private _name: string ;
    private _hp: number ;
    private _attack: number ;
    private _defence: number ;
    private _specialAttack: number ;
    private _specialDefense: number ;
    private _speed: number ;
    private _abilities: Array<object> | undefined;

    constructor(id: number, name: string, hp: number, attack: number, defence: number, specialAttack: number, specialDefense: number, speed: number,abilities: Array<object> | undefined) {
        this._id = id;
        this._name = name;
        this._hp = hp;
        this._attack = attack;
        this._defence = defence;
        this._specialAttack = specialAttack;
        this._specialDefense = specialDefense;
        this._speed = speed;
        this._abilities = abilities;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get attack(): number {
        return this._attack;
    }

    set attack(value: number) {
        this._attack = value;
    }

    get defence(): number {
        return this._defence;
    }

    set defence(value: number) {
        this._defence = value;
    }

    get specialAttack(): number {
        return this._specialAttack;
    }

    set specialAttack(value: number) {
        this._specialAttack = value;
    }

    get specialDefense(): number {
        return this._specialDefense;
    }

    set specialDefense(value: number) {
        this._specialDefense = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get abilities(): Array<object> | undefined {
        return this._abilities;
    }

    set abilities(value: Array<object> | undefined) {
        this._abilities = value;
    }
}