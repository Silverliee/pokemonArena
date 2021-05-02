export class Pokemon {
    private name: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string | undefined {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}