import {Production} from "./production";

export class Worker extends Production{
 private _level:number;

 constructor(numerical: number, fullName: string, age: number, genDer: string, address: string, level: number) {
  super(numerical, fullName, age, genDer, address);
  this._level = level;
 }

 get level(): number {
  return this._level;
 }

 set level(value: number) {
  this._level = value;
 }
}