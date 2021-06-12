const Dateify = require("./Dateify");

class Members {

    constructor(membersData) {

        let members = [];

        membersData.forEach(member => {
            members.push({
                memberName: member.name,
                tag: member.tag,
                clanRank: member.clanRank,
                previousClanRank: member.previousClanRank,
                expLevel: member.expLevel,
                trophies: member.trophies,
                donations: member.donations,
                donationsReceived: member.donationsReceived,
                role: member.role,
                arena: member.arena,
                clanChestPoints: member.clanChestPoints,
                lastSeen: new Dateify(member.lastSeen)
            });
        });

        return members;

    }

}

module.exports = Members;
