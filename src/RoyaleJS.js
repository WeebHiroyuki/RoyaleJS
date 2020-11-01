const axios = require("axios");
const Endpoints = require("./Endpoints");

class RoyaleJS 
{

    /**
     * 
     * @param {string} apiToken Can be found at https://developer.clashroyale.com/#/account
     */
    constructor(apiToken)
    {
        if(!apiToken) throw new Error("You need to provide an API token.");
        this._apiTOKEN = apiToken;
    }

    /**
     * 
     * @param {string} clanTag 
     * @returns Promise { object }
     */
    async getClan(clanTag)
    {
        if(!clanTag) throw new Error("You need to provide a clan tag.");
        let res = await axios({
            method: "get",
            url: Endpoints.CLAN(clanTag),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @param {string} playerTag 
     * @returns Promise { object }
     */
    async getPlayer(playerTag)
    {
        if(!playerTag) throw new Error("You need to provide a clan tag.");
        let res = await axios({
            method: "get",
            url: Endpoints.PLAYER(playerTag),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });
        
        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @returns Promise { object }
     */
    async getCards()
    {
        let res = await axios({
            method: "get",
            url: Endpoints.CARDS(),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @param {string} tournamentTag 
     * @returns Promise { object }
     */
    async getTournament(tournamentTag)
    {
        if(!tournamentTag) throw new Error("You need to provide a clan tag.");
        let res = await axios({
            method: "get",
            url: Endpoints.TOURNAMENT(tournamentTag),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @param {number} locationID 
     * @returns Promise { object }
     */
    async getPlayerRankingByLocation(locationID)
    {
        if(!locationID) throw new Error("You need to provide a location ID.");
        let res = await axios({
            method: "get",
            url: Endpoints.PLAYERRANKINGBYLOCATION(locationID),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @param {number} locationID 
     * @returns Promise { object }
     */
    async getClanRankingByLocation(locationID)
    {
        if(!locationID) throw new Error("You need to provide a location ID.");
        let res = await axios({
            method: "get",
            url: Endpoints.CLANRANKINGBYLOCATION(locationID),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

    /**
     * 
     * @returns Promise { object }
     */
    async getGlobalTournaments()
    {
        let res = await axios({
            method: "get",
            url: Endpoints.GLOBALTOURNAMENTS(),
            headers: {
                Accept: "application/json",
                authorization: this._apiTOKEN
            }
        });

        if(!res.data) return res;
        return res.data;
    }

}

module.exports = RoyaleJS;