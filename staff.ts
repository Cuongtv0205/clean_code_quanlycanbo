import {Production} from "./production";

export class Staff extends Production{
    private _work:string

    constructor(numerical: number, fullName: string, age: number, genDer: string, address: string, work: string) {
        super(numerical, fullName, age, genDer, address);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}