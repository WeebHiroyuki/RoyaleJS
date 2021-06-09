const Location = require("./Location");
const Members = require("./Members");

class Clan {

    constructor(clanData) {

        this.tag = clanData.tag;
        this.name = clanData.name;
        this.type = clanData.type;
        this.description = clanData.description;
        this.badgeID = clanData.badgeId;
        this.clanScore = clanData.clanScore;
        this.clanWarTrophies = clanData.clanWarTrophies;
        this.location = new Location(clanData.location);
        this.requiredTrophies = clanData.requiredTrophies;
        this.donationsPerweek = clanData.donationsPerWeek;
        this.clanChestStatus = clanData.clanChestStatus;
        this.clanChestLevel = clanData.clanChestLevel;
        this.clanChestMaxLevel = clanData.clanChestMaxLevel;
        this.memberCount = clanData.members;
        this.members = new Members(clanData.memberList);

    }

}

module.exports = Clan;