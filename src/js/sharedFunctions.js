import {whomParams} from "../access/temporaryConstants";

export function validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

export function evenOdd(index) {
    return index % 2 !== 0;
}

export function updateResult(res) {
    // console.log(res);
}

export function activeBtn(gen) {
    let activeBtn = -1;
    whomParams.map((item, index) => {
        if (item.data === gen) activeBtn = index;
        return index;
    });
    return activeBtn;
}
