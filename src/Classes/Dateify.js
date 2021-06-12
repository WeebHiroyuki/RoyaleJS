class Dateify {

    constructor(rawTimeData) {

        this.year = rawTimeData.substr(0, 4);
        this.month = rawTimeData.substr(4, 2);
        this.day = rawTimeData.substr(6, 2);
        this.date = [this.year, this.month, this.day].join("-");

    }

}

module.exports = Dateify;