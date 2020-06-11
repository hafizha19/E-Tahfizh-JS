class DataHistory {
    static inputSetor(juz,page) {
        return new Promise ((resolve, reject) => {
            const juzElement = document.querySelector("#juz");
            const pageElement = document.querySelector("#page");
            const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            let date = new Date().getDate() +"-"+ bulan[new Date().getMonth()]+"-"+new Date().getFullYear();

            const putHistory = data => {
                if (checkForStorage()) {
                    let historyData = null;
                    
                    if (localStorage.getItem(CACHE_KEY) === null) {
                        historyData = [];
                    } else {
                        historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
                    }
                    
                    historyData.unshift(data);
                    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
                }
            }
    
            const history = {
                date: date,
                juz: juzElement.value,
                page: pageElement.value
            }
            if (juz > 0 && page > 0){
                resolve(putHistory(history));
            } else {
                reject(`Masukkan Juz dan Halamannya`);
            }
        })
    }
}

export default DataHistory;