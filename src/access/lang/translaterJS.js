import en from "./en";
import ru from "./LangConstants";
import {LangCatEN, LangCatRU} from "./CatalogLangConstants";

export const allLanguages = [
    "ru",
    "en",
]

export function langCode(lang, word) {

    if (lang === "en") {
        return en[word];
    }
    if (lang === "ru") {
        return ru[word];
    }
}

export function langCodeCatalog(lang, word) {

    if (lang === "en") {
        return LangCatEN[word];
    }
    if (lang === "ru") {
        return LangCatRU[word];
    }
}
