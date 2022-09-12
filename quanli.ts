import {Production} from "./production";

export class Manager {
    static listProduction: Production[] = [];

    static addProduction(production: Production) {
        this.listProduction.push(production);
    }

    static showProduction() {
        return this.listProduction;
    }

    static find(fullName: string) {
        let flat = 0;
        for (let i = 0; i < this.listProduction.length; i++) {
            if (this.listProduction[i].getFullName() == fullName) {
                flat++;
                console.log(this.listProduction[i]);
            }
        }
        if (flat == 0) {
            console.log('--Không có--');
        }
        //     // @ts-ignore
        //     return this.listProduction.filter(item => item.getFullName().includes(fullName))
        //      Hàm includes:trả về true hoặc false tìm kiếm theo ký tự trong tên//
    }
}