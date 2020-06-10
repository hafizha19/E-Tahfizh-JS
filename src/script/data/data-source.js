function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchSurah = function (keyword) {
    const filteredSurahs = surahs.filter(function (surah) {
        return surah.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredSurahs.length) {
        this.onSuccess(filteredSurahs);
    } else {
        this.onFailed(keyword + " is not found");
    }
};