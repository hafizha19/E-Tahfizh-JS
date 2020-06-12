import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/surah-list.js";

const main = _ => {
    const searchElement = document.querySelector("search-bar");
    const surahListElement = document.querySelector("surah-list");

    const onButtonSearchClicked = _ => {
        DataSource.searchSurah(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        surahListElement.surahs = results;
    };

    const fallbackResult = message => {
        surahListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

}

export default main;