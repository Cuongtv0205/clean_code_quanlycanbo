import {Production} from "./production";
import {Manager} from "./quanli";
import {Worker} from "./Worker";
import {Staff} from "./staff";
import {Engineer} from "./Enginer";
import {levelEnum} from "./bacEnum";

function main() {
    let worker: Worker = new Worker(1, 'Hoàng Minh Thái', 23, 'Nam', 'Hải Phòng',levelEnum.one)
    let staff: Staff = new Staff(2, 'Trần Văn Vũ', 24, 'Nam', 'Gia Lâm', 'Kỹ Thuật');
    let engineer: Engineer = new Engineer(3, 'Lê Thị Xuân', 22, 'Nữ', 'Thanh Trì', 'Trưởng Phòng');

    Manager.addProduction(worker);
    Manager.addProduction(staff);
    Manager.addProduction(engineer);
    console.log(Manager.showProduction());
    console.log('--');
    console.log(Manager.find('u'));
}
main();