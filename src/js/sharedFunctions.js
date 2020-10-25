import {
    subCatalogListHome,
    subCatalogListOuterwear,
    subCatalogListPants,
    subCatalogListShirts,
    subCatalogListTshirts,
    subCatalogListUnderwear,
    whomParams
} from "../access/temporaryConstants";
import {
    sizeListHome,
    sizeListOuterwear,
    sizeListPants,
    sizeListShirts,
    sizeListTshirts,
    sizeListUnderwear,
    recalculateParamsBoy,
    recalculateParamsDog,
    recalculateParamsGirl,
    recalculateParamsMan,
    recalculateParamsWoman,
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

export function validParamList(paramList, size) {
    let res = true;
    paramList.map((item) => {
        if (size[item] && res) {
            //    Do nothing
        } else {res = false;}
        return res;
    });
    return res;
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
export function genderSwitcher(gender, subCatalog = "") {

    let catalog = [];
    let recalculateSubCatalog = [];
    let recalculateParams = [];

    gender = !gender || gender.length < 2 ? "woman" : gender;
    subCatalog = ((!subCatalog || subCatalog.length < 3) &&
        (gender !== "dog" || gender !== "catalogListDog")) ? "subCatalogListWomenTshirts" : subCatalog;

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

        case "catalogListWomen":
            catalog = recalculateParamsWoman;
            break;
        case "catalogListMen":
            catalog = recalculateParamsMan;
            break;
        case "catalogListBoy":
            catalog = recalculateParamsBoy;
            break;
        case "catalogListGirl":
            catalog = recalculateParamsGirl;
            break;
        case "catalogListDog":
            catalog = recalculateParamsDog;
            subCatalog = "";
            break;

        default :
            catalog = recalculateParamsWoman;
    }

    if (subCatalog === "subCatalogListMenTshirts" || subCatalog === "subCatalogListWomenTshirts" ||
        subCatalog === "subCatalogListBoyTshirts" || subCatalog === "subCatalogListGirlTshirts") {
        recalculateSubCatalog = sizeListTshirts;
    } else if (subCatalog === "subCatalogListMenShirts" || subCatalog === "subCatalogListWomenShirts" ||
        subCatalog === "subCatalogListBoyShirts" || subCatalog === "subCatalogListGirlShirts") {
        recalculateSubCatalog = sizeListShirts;
    } else if (subCatalog === "subCatalogListMenPants" || subCatalog === "subCatalogListWomenPants" ||
        subCatalog === "subCatalogListBoyPants" || subCatalog === "subCatalogListGirlPants") {
        recalculateSubCatalog = sizeListPants;
    } else if (subCatalog === "subCatalogListMenUnderwear" || subCatalog === "subCatalogListWomenUnderwear" ||
        subCatalog === "subCatalogListBoyUnderwear" || subCatalog === "subCatalogListGirlUnderwear") {
        recalculateSubCatalog = sizeListUnderwear;
    } else if (subCatalog === "subCatalogListMenOuterwear" || subCatalog === "subCatalogListWomenOuterwear" ||
        subCatalog === "subCatalogListBoyOuterwear" || subCatalog === "subCatalogListGirlOuterwear") {
        recalculateSubCatalog = sizeListOuterwear;
    } else if (subCatalog === "subCatalogListMenHome" || subCatalog === "subCatalogListWomenHome" ||
        subCatalog === "subCatalogListBoyHome" || subCatalog === "subCatalogListGirlHome") {
        recalculateSubCatalog = sizeListHome;
    } else if (subCatalog === "subCatalogListMenGeneral" || subCatalog === "subCatalogListWomenGeneral" ||
        subCatalog === "subCatalogListBoyGeneral" || subCatalog === "subCatalogListGirlGeneral") {
        recalculateSubCatalog = [];
    } else {
        recalculateParams = catalog;
    }

    catalog.map((item, index) => {
        if (recalculateSubCatalog.indexOf(item.inputName) !== -1) {
            recalculateParams.push(item);
        }
        return recalculateParams;
    });
    return recalculateParams;
}