// const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const setorModel = {
    juz: document.getElementById("juz").value,
    page: document.getElementById("page").value,
    date: new Date().getDate() +"-"+ bulan[new Date().getMonth()]+"-"+new Date().getFullYear()
}

export default setorModel;