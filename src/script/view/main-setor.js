import DataHistory from "../data/data-history.js";

const mainSetor = _ => {
    const buttonSetor = document.querySelector("#buttonSetor");
    const progressListElement = document.querySelector("#progressList");

    const onButtonSetorClicked = _ => {
        DataHistory.inputSetor(history.juz,history.page)
            .then(renderHistory)
            .catch(fallbackResult)
    };

    const showHistory = _ => {
        if (checkForStorage) {
            return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
        } else {
            return [];
        }
    }

    const renderHistory = _ => {
        const historyData = showHistory();
        const progressList = document.querySelector("#progressList");
        progressList.innerHTML = "";
        let res = [];
        let numPage;
        for (let history of historyData) {

            numPage = parseInt(history.page);
            res.push(numPage);
            const sum = res.reduce(function(a,b){
                return a+b;
            },0);console.log(sum);
            if (sum>=20){
                document.querySelector(".result").innerHTML = Math.floor(sum/20)+" Juz "+sum%20+" Halaman";
            } else {
                document.querySelector(".result").innerHTML = sum+" Halaman";
            }

            const row = document.createElement('tr');
            row.innerHTML = "<td>" + history.date + "</td>";
            row.innerHTML += "<td>" + history.juz + "</td>";
            row.innerHTML += "<td>" + history.page + "</td>";
    
            progressList.appendChild(row);

        } console.log(res);
    }

    const fallbackResult = message => {
        progressListElement.innerHTML = "";
        progressListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };


    buttonSetor.addEventListener("click", onButtonSetorClicked);
}

export default mainSetor;