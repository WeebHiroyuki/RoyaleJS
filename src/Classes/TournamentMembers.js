const PlayerClan = require("./PlayerClan");

class TournamentMembers {

    constructor(tournamentMembersData) {

        let tournamentMembers = [];
        tournamentMembersData.forEach(tournamentMember => {
            tournamentMembers.push({
                tag: tournamentMember.tag,
                playerName: tournamentMember.name,
                score: tournamentMember.score,
                rank: tournamentMember.rank,
                clan: new PlayerClan(tournamentMember.clan)
            });
        });
        return tournamentMembers;

    }

}

module.exports = TournamentMembers;