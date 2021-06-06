const axios = require("axios");
const Endpoints = require("./Endpoints");

class RoyaleJS {

    /**
     * 
     * @param {string} apiToken Can be found at https://developer.clashroyale.com/#/account
     */
    constructor(apiToken) {
        if (!apiToken) throw new Error("You need to provide an API token.");
        this._apiTOKEN = apiToken;
        this.header = { Accept: "application/json", Authorization: `Bearer ${this._apiTOKEN}` }
    }


    /**
     * 
     * @description Queries the API for a full list of clans matching at least one filtering criteria
     * @returns Promise { object }
     */
    /*
    async getClans() 
    {

        let res;
        try {
            
            res = await axios({
                method: "get",
                url: Endpoints.CLANS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }
    */

    /**
     * 
     * @param {string} clanTag 
     * @description Get information of a specific clan
     * @returns Promise { object }
     */
    async getClan(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} clanTag 
     * @description Get Members in a specific clan
     * @returns Promise { object }
     */
    async getClanMembers(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_MEMBERS(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} clanTag 
     * @description Get Current War of a specific clan
     * @returns Promise { object }
     */
    async getClanCurrentWar(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_CURRENT_WAR(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} clanTag 
     * @description Get Current River Race of a specific clan
     * @returns Promise { object }
     */
    async getClanCurrentRiverRace(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_CURRENT_RIVER_RACE(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
    * 
    * @param {string} clanTag 
    * @description Get River Race Log of a specific clan
    * @returns Promise { object }
    */
    async getClanRiverRaceLog(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_RIVER_RACE_LOG(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
   * 
   * @param {string} clanTag 
   * @description Get War Log of a specific clan
   * @returns Promise { object }
   */
    async getClanWarLog(clanTag) {
        if (!clanTag) throw new Error("You need to provide a clan tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_WAR_LOG(clanTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} playerTag 
     * @description Get information of a specific player
     * @returns Object
     */
    async getPlayer(playerTag) {

        if (!playerTag) throw new Error("You need to provide a player tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.PLAYER(playerTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} playerTag 
     * @description Get Upcoming Chests of a specific player
     * @returns Object
     */
    async getPlayerUpcomingChests(playerTag) {

        if (!playerTag) throw new Error("You need to provide a player tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.PLAYER_UPCOMING_CHESTS(playerTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} playerTag 
     * @description Get Battle Log of a specific player
     * @returns Object
     */
    async getPlayerBattleLog(playerTag) {

        if (!playerTag) throw new Error("You need to provide a player tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.PLAYER_BATTLE_LOG(playerTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @description Get a full list and information of all existing cards
     * @returns Object
     */
    async getCards() {

        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CARDS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @description Queries the API for a full list of existing Tournaments
     * @returns Object
     */
    /*
    async getTournaments() {

        if (!tournamentTag) throw new Error("You need to provide a tournament tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.TOURNAMENTS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }
    */

    /**
     * 
     * @param {string} tournamentTag 
     * @description Get information of a specific tournament
     * @returns Object
     */
    async getTournament(tournamentTag) {

        if (!tournamentTag) throw new Error("You need to provide a tournament tag.");
        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.TOURNAMENT(tournamentTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @description Get a full list and information of all global tournaments
     * @returns Object
     */
    async getGlobalTournaments() {

        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.GLOBALTOURNAMENTS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @description Get a full list and information of all existing locations
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/locations
     * @returns Object
     */
    async getLocations() {

        try {

            res = await axios({
                method: "get",
                url: Endpoints.LOCATIONS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} locationID Location ID (e.g. "57000001" - North America])
     * @description Get information of a specific location
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/locations
     * @returns Object
     */
    async getLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.LOCATION(locationID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} locationID Location ID (e.g. "57000001" - North America])
     * @description Get Player Rankings in a specific location
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/locations
     * @returns Object
     */
    async getPlayerRankingsByLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.PLAYER_RANKINGS_BY_LOCATION(locationID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} locationID Location ID (e.g. "57000001" - North America])
     * @description Get Clan Rankings in a specific location
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/locations
     * @returns Object
     */
    async getClanRankingsByLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_RANKINGS_BY_LOCATION(locationID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} locationID Location ID (e.g. "57000001" - North America])
     * @description Get Clan War Rankings in a specific location
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/locations
     * @returns Object
     */
    async getClanWarRankingsByLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CLAN_WAR_RANKINGS_BY_LOCATION(locationID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @description Get full list and information of Top Player League seasons
     * @returns Object
     */
    async getTopPlayerLeagueSeasons() {

        try {

            res = await axios({
                method: "get",
                url: Endpoints.TOP_PLAYER_LEAGUE_SEASONS(),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} seasonID Season ID
     * @description Get information of a specific Top Player League season
     * @returns Object
     */
    async getTopPlayerLeagueSeason(seasonID) {

        if (!seasonID) throw new Error("You need to provide a season ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.TOP_PLAYER_LEAGUE_SEASON(seasonID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} seasonID Season ID
     * @description Get full list and information of Top Player Rankings in a specific season
     * @returns Object
     */
    async getTopPlayerRankingsInSeason(seasonID) {

        if (!seasonID) throw new Error("You need to provide a season ID.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.TOP_PLAYER_RANKINGS_IN_SEASON(seasonID),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

    /**
     * 
     * @param {string} tournamentTag Tournament Tag
     * @description Get Global Tournament Ranking of a specific tournament
     * @returns Object
     */
    async getGlobalTournamentRankingOfTournament(tournamentTag) {

        if (!tournamentTag) throw new Error("You need to provide a tournament tag.");
        try {

            res = await axios({
                method: "get",
                url: Endpoints.GLOBAL_TOURNAMENT_RANKINGS(tournamentTag),
                headers: this.header
            });

            return res.data;

        } catch (error) {
            let err = error.toString().split(" ");
            let errCode = err[err.length - 1];
            res = { status: errCode, error: err.join(" ") };
            return res;
        }

    }

}

module.exports = RoyaleJS;