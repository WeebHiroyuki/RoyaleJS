const baseURL = "https://zws.cloud.libraryofcode.org/royale/api";

module.exports.CLAN = (clanTag) => `${baseURL}/clans/${clanTag}`;
module.exports.PLAYER = (playerTag) => `${baseURL}/players/${playerTag}`;
module.exports.CARDS = () => `${baseURL}/cards`;
module.exports.TOURNAMENT = (tournamentTag) => `${baseURL}/tournaments/${tournamentTag}`;
module.exports.PLAYERRANKINGBYLOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/players`;
module.exports.CLANRANKINGBYLOCATION = (locationID) => `${baseURL}/location/${locationID}/rankings/clans`;
module.exports.GLOBALTOURNAMENTS = () => `${baseURL}/globaltournaments`;