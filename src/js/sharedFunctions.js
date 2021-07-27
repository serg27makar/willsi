import {
    subCatalogListDogOuterwear,
    subCatalogListDogPants,
    subCatalogListDogShirts,
    subCatalogListDogShoes,
    subCatalogListTshirts,
    whomParams
} from "../access/temporaryConstants";
import {
    sizeListTshirts,
    recalculateParamsBoy,
    recalculateParamsDog,
    recalculateParamsGirl,
    recalculateParamsMan,
    recalculateParamsWoman,
    dogSizeListPants,
    dogSizeListShirts,
    dogSizeListOuterwear,
    dogSizeListShoes,
    allSizeLists,
} from "../access/recalculateConstants";

export function validateEmail(email) {
    if (email === "primaryAdmin") return true;
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

export function isValid(obj, arr) {
    let isValidOutput = true
    arr.map(item => {
        if (!obj[item] && isValidOutput) {
            isValidOutput = false;
        }
        return isValidOutput;
    })
    return isValidOutput;
}

export function chooseSizeList(subCatalog, catalog) {
    let verificationList = [];
    let paramsList = [];
    const RecalculateParams = setRecalculateParams(catalog);
    const sizeListT = getSizeList(subCatalog)
    RecalculateParams.map((item) => {
        if (sizeListT.indexOf(item.inputName) !== -1) {
            paramsList.push(item);
        }
        return paramsList;
    });
    verificationList = sizeListT;
    return {verificationList, paramsList}
}

function getSizeList(subCatalog) {
    let sizeListT = []
    allSizeLists.map(item => {
        if (item.name === subCatalog) {
            console.log(subCatalog, item.size)
            return sizeListT = item.size;
        }
        return sizeListT
    })
    if (subCatalogListTshirts.indexOf(subCatalog) !== -1) {
        sizeListT = sizeListTshirts;
    }

    if (subCatalogListDogPants.indexOf(subCatalog) !== -1) {
        sizeListT = dogSizeListPants
    }
    if (subCatalogListDogShirts.indexOf(subCatalog) !== -1) {
        sizeListT = dogSizeListShirts
    }
    if (subCatalogListDogOuterwear.indexOf(subCatalog) !== -1) {
        sizeListT = dogSizeListOuterwear
    }
    if (subCatalogListDogShoes.indexOf(subCatalog) !== -1) {
        sizeListT = dogSizeListShoes
    }
    return sizeListT;
}

function setRecalculateParams(catalog) {
    let RecalculateParams = [];
    switch (catalog) {
        case "catalogListWomen":
            RecalculateParams = recalculateParamsWoman;
            break;
        case "catalogListMen":
            RecalculateParams = recalculateParamsMan;
            break;
        case "catalogListBoy":
            RecalculateParams = recalculateParamsBoy;
            break;
        case "catalogListGirl":
            RecalculateParams = recalculateParamsGirl;
            break;
        case "catalogListDog":
            RecalculateParams = recalculateParamsDog;
            break;
        default :
            RecalculateParams = [];
    }
    return RecalculateParams;
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

    catalog = setRecalculateParams(gender);

    if (!catalog.length) {
        catalog = setRecalculateConstant(gender);
    }

    if (subCatalog) {
        recalculateSubCatalog = getSizeList(subCatalog)
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

export function miDateFormatNumber(inputDate) {
    let outputDate;
    let month = String(inputDate.getMonth() + 1);
    month = month.length < 2 ? "0" + month : month;
    let day = String(inputDate.getDate());
    day = day.length < 2 ? "0" + day : day;
    inputDate = new Date(inputDate);
    outputDate = String(inputDate.getFullYear());
    outputDate = outputDate + month;
    outputDate = outputDate + day;
    return Number(outputDate);
}

export function miDateFormatParser(inputDate) {
    inputDate = String(inputDate);
    const year = inputDate.substr(0, 4);
    const month = inputDate.substr(4, 2);
    const day = inputDate.substr(6, 2);
    return year + " " + month + " " + day;
}

export function setGenderByCatalogName(catalogName) {
    let gender = "";
    switch (catalogName) {
        case "catalogListMen":
            gender = "man";
            break;
        case "catalogListWomen":
            gender = "woman";
            break;
        case "catalogListBoy":
            gender = "boy";
            break;
        case "catalogListGirl":
            gender = "girl";
            break;
        case "catalogListDog":
            gender = "dog";
            break;
        default : gender = "";
    }
    return gender;
}

export function setRecalculateConstant(gender) {
    let RecalculateConstant = [];
    switch (gender) {
        case "man":
            RecalculateConstant = recalculateParamsMan;
            break;
        case "woman":
            RecalculateConstant = recalculateParamsWoman;
            break;
        case "boy":
            RecalculateConstant = recalculateParamsBoy;
            break;
        case "girl":
            RecalculateConstant = recalculateParamsGirl;
            break;
        case "dog":
            RecalculateConstant = recalculateParamsDog;
            break;
        default : RecalculateConstant = [];
    }
    return RecalculateConstant;
}

export function getSizeMinMax(itemName) {
    let sizeMin = 0;
    let sizeMax = 250;
    recalculateParamsMan.map((item) => {
        if (item.inputName === itemName) {
            sizeMax = item.sizeMax;
        }
        return itemName;
    })
    recalculateParamsGirl.map((item) => {
        if (item.inputName === itemName) {
            sizeMin = item.sizeMin;
        }
        return itemName;
    })
    return {sizeMin, sizeMax};
}

export function isValidStartParams(UsersParameters, index) {
    let valid = true;
    if (UsersParameters && UsersParameters.length &&
        UsersParameters.length >= index &&
        !isEmptyObject(UsersParameters[index]) &&
        UsersParameters[index].Parameters &&
        UsersParameters[index].Parameters.length &&
        UsersParameters[index].Gender) {
        const sizeList = UsersParameters[index].Gender === "dog" ? dogSizeListShirts : sizeListTshirts;
        if (UsersParameters[index].Parameters.length >= sizeList.length) {
            let i = 0;
            UsersParameters[index].Parameters.map((item) => {
                if (sizeList.indexOf(item.title) !== -1) {
                    i++
                }
                return i;
            })
            if (sizeList.length !== i) {
                valid = false;
            }
        } else {
            valid = false;
        }
    } else {
        valid = false;
    }
    return valid;
}