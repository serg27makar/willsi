import en from "./en";
import ru from "./LangConstants";

export function langCode(word) {
    const lang = "en";
    if (lang === "en") {
        return en[word];
    }
    if (lang === "ru") {
        return ru[word];
    }
}