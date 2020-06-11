const storage = _ => {
    const CACHE_KEY = "hafalan_history";
    
    const checkForStorage = _ => {
        return typeof(Storage) !== "undefined";
    }

    const putHistory = data => {
        if (checkForStorage()) {
            let historyData = null;
            if (localStorage.getItem(CACHE_KEY) === null) {
                historyData = [];
            } else {
                // mengubah nilai objek dalam bentuk string kembali pada bentuk objek JavaScript
                historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
            }
      
            // menambahkan nilai baru pada array yang ditempatkan pada akhir index
            historyData.unshift(data);
     
            // mengubah objek JavaScript ke dalam bentuk String
            localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
        }
    }

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

    renderHistory();
}

export default storage;