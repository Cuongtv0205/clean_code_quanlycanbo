import {Production} from "./production";

export class Engineer extends Production{
    private _trainingIndustry:string

    constructor(numerical: number, fullName: string, age: number, genDer: string, address: string, trainingIndustry: string) {
        super(numerical, fullName, age, genDer, address);
        this._trainingIndustry = trainingIndustry;
    }

    getTrainingIndustry(): string {
        return this._trainingIndustry;
    }

    setTrainingIndustry(value: string) {
        this._trainingIndustry = value;
    }
}