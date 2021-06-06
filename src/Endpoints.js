const baseURL = "https://api.clashroyale.com/v1";

module.exports.CLANS = () => `${baseURL}/clans`
module.exports.CLAN = (clanTag) => `${baseURL}/clans/%23${clanTag}`;
module.exports.CLAN_MEMBERS = (clanTag) => `${baseURL}/clans/%25${clanTag}/members`;
module.exports.CLAN_WAR_LOG = (clanTag) => `${baseURL}/clans/%25${clanTag}/warlog`;
module.exports.CLAN_RIVER_RACE_LOG = (clanTag) => `${baseURL}/clans/%25${clanTag}/riverracelog`;
module.exports.CLAN_CURRENT_WAR = (clanTag) => `${baseURL}/clans/%25${clanTag}/currentwar`;
module.exports.CLAN_CURRENT_RIVER_RACE = (clanTag) => `${baseURL}/clans/%25${clanTag}/currentriverrace`;

module.exports.PLAYER = (playerTag) => `${baseURL}/players/%23${playerTag}`;
module.exports.PLAYER_UPCOMING_CHESTS = (playerTag) => `${baseURL}/players/%23${playerTag}/upcomingchests`;
module.exports.PLAYER_BATTLE_LOG = (playerTag) => `${baseURL}/players/%23${playerTag}/battlelog`;

module.exports.CARDS = () => `${baseURL}/cards`;

module.exports.TOURNAMENTS = () => `${baseURL}/tournaments`;
module.exports.TOURNAMENT = (tournamentTag) => `${baseURL}/tournaments/%23${tournamentTag}`;
module.exports.GLOBALTOURNAMENTS = () => `${baseURL}/globaltournaments`;

module.exports.LOCATIONS = () => `${baseURL}/locations`;
module.exports.LOCATION = (locationID) => `${baseURL}/locations/${locationID}`;
module.exports.PLAYER_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/players`;
module.exports.CLAN_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clans`;
module.exports.CLAN_WAR_RANKINGS_BY_LOCATION = (locationID) => `${baseURL}/locations/${locationID}/rankings/clanwars`;
module.exports.TOP_PLAYER_LEAGUE_SEASONS = () => `${baseURL}/locations/global/seasons`;
module.exports.TOP_PLAYER_LEAGUE_SEASON = (seasonID) => `${baseURL}/locations/global/seasons/${seasonID}`;
module.exports.TOP_PLAYER_RANKINGS_IN_SEASON = (seasonID) => `${baseURL}/locations/global/seasons/${seasonID}/rankings/players`;
module.exports.GLOBAL_TOURNAMENT_RANKINGS = (tournamentTag) => `${baseURL}/locations/global/rankings/tournaments/${tournamentTag}`