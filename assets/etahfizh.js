function setor(){
    const juz = document.getElementById("juz").value;
    const page = document.getElementById("page").value;

    const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let date = new Date().getDate() +"-"+ bulan[new Date().getMonth()]+"-"+new Date().getFullYear();
    if (juz < 1 || page < 1){
        alert("Masukkan juz dan halamannya.");
        return;
    } 

    const history = {
        date: date,
        juz: juz,
        page: page
    }

    putHistory(history);
    renderHistory();
}

