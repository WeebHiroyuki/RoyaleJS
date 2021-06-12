const Arena = require("./Arena");
const BattleLogSides = require("./BattleLogSides");
const BattleLogGameMode = require("./BattleLogGameMode");

class BattleLog {

    constructor(battleLogData) {

        let battleLogs = [];
        battleLogData.forEach(battleLog => {
            battleLogs.push({
                battleType: battleLog.type,
                battleTime: battleLog.battleTime,
                ladderTournament: battleLog.isLadderTournament,
                arena: new Arena(battleLog.arena),
                gameMode: new BattleLogGameMode(battleLog.gameMode),
                deckSelection: battleLog.deckSelection,
                allies: new BattleLogSides(battleLog.team),
                opponents: new BattleLogSides(battleLog.opponent),
                hostedMatch: battleLog.isHostedMatch,
            });
        });
        return battleLogs;

    }

}

module.exports = BattleLog;