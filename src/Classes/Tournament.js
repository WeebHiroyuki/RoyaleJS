const Dateify = require("./Dateify");
const TournamentMembers = require("./TournamentMembers");

class Tournament {

    constructor(tournamentData) {

        this.tag = tournamentData.tag;
        this.type = tournamentData.type;
        this.status = tournamentData.status;
        this.creatorTag = tournamentData.creatorTag;
        this.tournamentName = tournamentData.name;
        this.levelCap = tournamentData.levelCap;
        this.firstPlaceCardPrize = tournamentData.firstPlaceCardPrize;
        this.capacity = tournamentData.capacity;
        this.maxCapacity = tournamentData.maxCapacity;
        this.preparationDuration = tournamentData.preparationDuration;
        this.duration = tournamentData.duration;
        this.createdDate = new Dateify(tournamentData.createdTime);
        this.startedDate = new Dateify(tournamentData.startedTime);
        this.endedDate = new Dateify(tournamentData.endedTime);
        this.members = new TournamentMembers(tournamentData.membersList);

    }

}

module.exports = Tournament;