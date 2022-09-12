export class Production{
    private _numerical :number;
    private _fullName:string;
    private _age:number;
    private _genDer:string;
    private _address:string;

    constructor(numerical: number, fullName: string, age: number, genDer: string, address: string) {
        this._numerical = numerical;
        this._fullName = fullName;
        this._age = age;
        this._genDer = genDer;
        this._address = address;
    }

    getNumerical(): number {
        return this._numerical;
    }

    setNumerical(value: number) {
        this._numerical = value;
    }

    getFullName(): string {
        return this._fullName;
    }

    setFullName(value: string) {
        this._fullName = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }

    getGenDer(): string {
        return this._genDer;
    }

    setGenDer(value: string) {
        this._genDer = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }
}
