const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const surahListElement = document.querySelector("#surahList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchSurah(searchElement.value);
    };

    const renderResult= function (results) {
        surahListElement.innerHTML = "";
        results.forEach(function (surah) {
            const {name, ayat, img_surah} = surah;

            const surahElement = document.createElement("div");
            surahElement.setAttribute("class", "surah");

            surahElement.innerHTML = `
                <img class="img-surah" src="${img_surah}" alt="Gambar Surah">
                <div class="surah-info">
                    <h2>${name}</h2>
                    <p>${ayat} ayat</p>
                </div>
            `;
            
            surahListElement.appendChild(surahElement);
        })
    };

    const fallbackResult = function (message) {
        surahListElement.innerHTML = "";
        surahListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
}