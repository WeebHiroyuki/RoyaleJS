const axios = require("axios");
const Endpoints = require("./Endpoints");
const Player = require("./Classes/Player");
const Clan = require("./Classes/Clan");
const Cards = require("./Classes/Cards");

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

            let clan = new Clan(res.data);
            return clan;

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
     * @returns Promise { object }
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

            let player = new Player(res.data);
            return player;

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
     * @returns Promise { object }
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
     * @returns Promise { object }
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
     * @returns Promise { object }
     */
    async getCards() {

        let res;
        try {

            res = await axios({
                method: "get",
                url: Endpoints.CARDS(),
                headers: this.header
            });

            let cards = new Cards(res.data);
            return cards;

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
     * @returns Promise { object }
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
     * @returns Promise { object }
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
     * @returns Promise { object }
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
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/documentation/reference
     * @returns Promise { object }
     */
    async getLocations() {

        let res;

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
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/documentation/reference
     * @returns Promise { object }
     */
    async getLocation(locationID) {

        let res;

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
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/documentation/reference
     * @returns Promise { object }
     */
    async getPlayerRankingsByLocation(locationID) {

        let res;

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
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/documentation/reference
     * @returns Promise { object }
     */
    async getClanRankingsByLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        let res;

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
     * @description Full list of location IDs can be found in https://docs.zloth.xyz/royalejs/documentation/reference
     * @returns Promise { object }
     */
    async getClanWarRankingsByLocation(locationID) {

        if (!locationID) throw new Error("You need to provide a location ID.");
        let res;

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
     * @returns Promise { object }
     */
    async getTopPlayerLeagueSeasons() {

        let res;

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
     * @description Get full list and information of Top Player Rankings in a specific season
     * @returns Promise { object }
     */
    async getTopPlayerRankingsInSeason(seasonID) {

        if (!seasonID) throw new Error("You need to provide a season ID.");
        let res;

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
     * @returns Promise { object }
     */
    async getGlobalTournamentRankingOfTournament(tournamentTag) {

        if (!tournamentTag) throw new Error("You need to provide a tournament tag.");
        let res;

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