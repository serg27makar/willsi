import {
    sizeListHome,
    sizeListOuterwear,
    sizeListPants,
    sizeListShirts,
    sizeListTshirts,
    sizeListUnderwear,
    subCatalogListHome,
    subCatalogListOuterwear,
    subCatalogListPants,
    subCatalogListShirts,
    subCatalogListTshirts,
    subCatalogListUnderwear,
    whomParams
} from "../access/temporaryConstants";
import {
    Home, Outerwear, Pants,
    recalculateParamsBoy,
    recalculateParamsDog,
    recalculateParamsGirl,
    recalculateParamsMan,
    recalculateParamsWoman,
    Shirts, Tshirts, Underwear
} from "../access/recalculateConstants";

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

export function isEmptyObject(obj) {
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

export function chooseSizeList(subCatalog) {
    let verificationList = [];
    let paramsList = [];
    if (subCatalogListTshirts.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListTshirts.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    if (subCatalogListShirts.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListShirts.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    if (subCatalogListPants.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListPants.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    if (subCatalogListUnderwear.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListUnderwear.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    if (subCatalogListOuterwear.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListOuterwear.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    if (subCatalogListHome.indexOf(subCatalog) !== -1) {
        recalculateParamsWoman.map((item) => {
            if (sizeListHome.indexOf(item.inputName) !== -1) {
                paramsList.push(item);
            }
            return paramsList;
        });
        verificationList = sizeListTshirts;
    }
    return {verificationList, paramsList}
}

export function validPostpone(checking, verifiable) {
    let result = false;
    if (checking && checking.length && verifiable) {
        checking.map((item) => {
            if(!result) {
                result = item.product === verifiable;
            }
            return result;
        });
    }
    return result;
}
export function genderSwitcher(gender = "woman", subCatalog = "subCatalogListWomenTshirts") {
    let catalog = [];
    let recalculateSubCatalog = [];
    let recalculateParams = [];
    switch (gender) {
        case "woman":
            catalog = recalculateParamsWoman;
            break;
        case "man":
            catalog = recalculateParamsMan;
            break;
        case "boy":
            catalog = recalculateParamsBoy;
            break;
        case "girl":
            catalog = recalculateParamsGirl;
            break;
        case "dog":
            catalog = recalculateParamsDog;
            subCatalog = "";
            break;
    }
    if (subCatalog === "subCatalogListMenTshirts" || subCatalog === "subCatalogListWomenTshirts" ||
        subCatalog === "subCatalogListBoyTshirts" || subCatalog === "subCatalogListGirlTshirts") {
        recalculateSubCatalog = Tshirts;
    } else if (subCatalog === "subCatalogListMenShirts" || subCatalog === "subCatalogListWomenShirts" ||
        subCatalog === "subCatalogListBoyShirts" || subCatalog === "subCatalogListGirlShirts") {
        recalculateSubCatalog = Shirts;
    } else if (subCatalog === "subCatalogListMenPants" || subCatalog === "subCatalogListWomenPants" ||
        subCatalog === "subCatalogListBoyPants" || subCatalog === "subCatalogListGirlPants") {
        recalculateSubCatalog = Pants;
    } else if (subCatalog === "subCatalogListMenUnderwear" || subCatalog === "subCatalogListWomenUnderwear" ||
        subCatalog === "subCatalogListBoyUnderwear" || subCatalog === "subCatalogListGirlUnderwear") {
        recalculateSubCatalog = Underwear;
    } else if (subCatalog === "subCatalogListMenOuterwear" || subCatalog === "subCatalogListWomenOuterwear" ||
        subCatalog === "subCatalogListBoyOuterwear" || subCatalog === "subCatalogListGirlOuterwear") {
        recalculateSubCatalog = Outerwear;
    } else if (subCatalog === "subCatalogListMenHome" || subCatalog === "subCatalogListWomenHome" ||
        subCatalog === "subCatalogListBoyHome" || subCatalog === "subCatalogListGirlHome") {
        recalculateSubCatalog = Home;
    } else {
        recalculateParams = catalog;
    }
    catalog.map((item, index) => {
        if (recalculateSubCatalog.indexOf(index) !== -1) {
            recalculateParams.push(item);
        }
    });
    return recalculateParams;
}