class PlayerClan {

    constructor(playerClanData) {

        if (!playerClanData) this.tag, this.name, this.badgeID = 'No clan'
        else {
            this.tag = playerClanData.tag;
            this.name = playerClanData.name;
            this.badgeID = playerClanData.badgeId;
        }

    }

}

module.exports = PlayerClan;