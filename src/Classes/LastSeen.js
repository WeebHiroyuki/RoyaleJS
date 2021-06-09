class LastSeen {

    constructor(lastSeenData) {

        this.rawDate = lastSeenData;
        this.year = lastSeenData.substr(0, 4);
        this.month = lastSeenData.substr(4, 2);
        this.day = lastSeenData.substr(6, 2);
        this.date = [this.year, this.month, this.day].join("-");

    }

}

module.exports = LastSeen;