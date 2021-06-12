const baseURL = "https://api.clashroyale.com/v1";

module.exports.CLANS = () => `${baseURL}/clans` // Unverified, Await V2.0.3
module.exports.CLAN = (clanTag) => `${baseURL}/clans/%23${clanTag}`; // Clan

/* Comments will indicate Class used for object returned */
module.exports.PLAYER = (playerTag) => `${baseURL}/players/%23${playerTag}`; // Player
module.exports.PLAYER_UPCOMING_CHESTS = (playerTag) => `${baseURL}/players/%23${playerTag}/upcomingchests`; // UpcomingChests
module.exports.PLAYER_BATTLE_LOG = (playerTag) => `${baseURL}/players/%23${playerTag}/battlelog`; // BattleLog

module.exports.CARDS = () => `${baseURL}/cards`; // Cards

module.exports.TOURNAMENTS = () => `${baseURL}/tournaments`; // Unverified, Await V2.0.3
module.exports.TOURNAMENT = (tournamentTag) => `${baseURL}/tournaments/%23${tournamentTag}`; // Tournament
module.exports.GLOBALTOURNAMENTS = () => `${baseURL}/globaltournaments`; // Unverified, Await V2.0.3

module.exports.LOCATIONS = () => `${baseURL}/locations`; // Locations
module.exports.LOCATION = (locationID) => `${baseURL}/locations/${locationID}`; // Location
module.exports.PLAYER_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/players`; // Await V2.0.1
module.exports.CLAN_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clans`; // Await V2.0.1
module.exports.CLAN_WAR_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clanwars`; // Await V2.0.1
module.exports.TOP_PLAYER_LEAGUE_SEASONS = () => `${baseURL}/locations/global/seasons`; // Await V2.0.3
module.exports.TOP_PLAYER_RANKINGS_IN_SEASON = (seasonID) => `${baseURL}/locations/global/seasons/${seasonID}/rankings/players`; // Await V2.0.2
module.exports.GLOBAL_TOURNAMENT_RANKINGS = (tournamentTag) => `${baseURL}/locations/global/rankings/tournaments/${tournamentTag}` // Await V2.0.1