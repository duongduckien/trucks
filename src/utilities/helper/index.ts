
export class Helper {

    listYears() {
        const arrYears = [];
        arrYears.push('None');
        for (let i = 1970; i < 2030; i++) {
            arrYears.push(i);
        }
        return arrYears;
    }

    listStatus() {
        const arrStatus = ['None', 'In-use', 'New', 'Stopped'];
        return arrStatus;
    }

}