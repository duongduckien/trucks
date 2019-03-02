
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

    /**
     * Function check is number
     * @param  {any} value
     */
    isNumber(value: any) {
        if (!isNaN(parseInt(value, 10))) {
            return true;
        }
        return false;
    }

    /**
     * Function reverse a string
     * @param  {string} str
     */
    reverseString(str: string) {
        return str.split('').reduce((ret, character) => (character + ret));
    }

}