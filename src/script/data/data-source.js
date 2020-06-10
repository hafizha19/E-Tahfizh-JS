import surahs from "./surahs.js";

class DataSource {    
    static searchSurah(keyword) {
        return new Promise ((resolve, reject) => {
            const filteredSurahs = surahs.filter(surah => {
                return surah.name.toUpperCase().includes(keyword.toUpperCase());
            });

            if (filteredSurahs.length) {
                resolve(filteredSurahs);
            } else {
                reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;