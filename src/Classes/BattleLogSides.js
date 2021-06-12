const PlayerClan = require("./PlayerClan");
const SidesPlayerCards = require("./SidesPlayerCards");

class BattleLogSides {

    constructor(battleLogSidesData) {

        let battleLogSides = [];
        battleLogSidesData.forEach(battleLogSide => {
            battleLogSides.push({
                tag: battleLogSide.tag,
                playerName: battleLogSide.name,
                startingTrophies: battleLogSide.startingTrophies,
                crowns: battleLogSide.crowns,
                kingTowerHitPoints: battleLogSide.kingTowerHitPoints,
                princessTowerHitPoints: battleLogSide.princessTowersHitPoints,
                clan: new PlayerClan(battleLogSide.clan),
                cards: new SidesPlayerCards(battleLogSide.cards)
            });
        });
        return battleLogSides;

    }

}

module.exports = BattleLogSides;