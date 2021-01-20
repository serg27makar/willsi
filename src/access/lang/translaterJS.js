import en from "./en";
import ru from "./LangConstants";

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
