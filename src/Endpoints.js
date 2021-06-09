const baseURL = "https://api.clashroyale.com/v1";

module.exports.CLANS = () => `${baseURL}/clans` // Unverified, Await V1.0.1
module.exports.CLAN = (clanTag) => `${baseURL}/clans/%23${clanTag}`; // OK 200

module.exports.PLAYER = (playerTag) => `${baseURL}/players/%23${playerTag}`; // OK 200
module.exports.PLAYER_UPCOMING_CHESTS = (playerTag) => `${baseURL}/players/%23${playerTag}/upcomingchests`; // OK 200
module.exports.PLAYER_BATTLE_LOG = (playerTag) => `${baseURL}/players/%23${playerTag}/battlelog`; // OK 200

module.exports.CARDS = () => `${baseURL}/cards`; // OK 200

module.exports.TOURNAMENTS = () => `${baseURL}/tournaments`; // Unverified, Await V1.0.1
module.exports.TOURNAMENT = (tournamentTag) => `${baseURL}/tournaments/%23${tournamentTag}`; // OK 200
module.exports.GLOBALTOURNAMENTS = () => `${baseURL}/globaltournaments`; // OK 200

module.exports.LOCATIONS = () => `${baseURL}/locations`; // OK 200
module.exports.LOCATION = (locationID) => `${baseURL}/locations/${locationID}`; // OK 200
module.exports.PLAYER_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/players`; // OK 200
module.exports.CLAN_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clans`; // OK 200
module.exports.CLAN_WAR_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clanwars`; // OK 200
module.exports.TOP_PLAYER_LEAGUE_SEASONS = () => `${baseURL}/locations/global/seasons`; // OK 200
module.exports.TOP_PLAYER_RANKINGS_IN_SEASON = (seasonID) => `${baseURL}/locations/global/seasons/${seasonID}/rankings/players`; // OK 200
module.exports.GLOBAL_TOURNAMENT_RANKINGS = (tournamentTag) => `${baseURL}/locations/global/rankings/tournaments/${tournamentTag}` // OK 200