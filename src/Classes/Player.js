const Arena = require("./Arena");
const PlayerClan = require("./PlayerClan");
const LeagueStatistics = require("./LeagueStatistics");
const Badges = require("./Badges");
const Achievements = require("./Achievements");
const PlayerCards = require("./PlayerCards");
const FavouriteCard = require("./FavouriteCard");

class Player {

    constructor(playerData) {

        this.tag = playerData.tag;
        this.name = playerData.name;
        this.trophies = playerData.trophies;
        this.bestTrophies = playerData.bestTrophies;
        this.wins = playerData.wins;
        this.losses = playerData.losses;
        this.battleCount = playerData.battleCount;
        this.threeCrownWins = playerData.threeCrownWins;
        this.challengeCardsWon = playerData.challengeCardsWon;
        this.challengeMaxWins = playerData.challengeMaxWins;
        this.tournamentCardsWon = playerData.tournamentCardsWon;
        this.tournamentBattleCount = playerData.tournamentBattleCount;
        this.role = playerData.role;
        this.donations = playerData.donations;
        this.donationsReceived = playerData.donationsReceived;
        this.totalDonations = playerData.totalDonations;
        this.warDayWins = playerData.warDayWins;
        this.clanCardsCollected = playerData.clanCardsCollected;
        this.clan = new PlayerClan(playerData.clan);
        this.arena = new Arena(playerData.arena);
        this.leagueStatistics = new LeagueStatistics(playerData.leagueStatistics);
        this.badges = new Badges(playerData.badges);
        this.achievements = new Achievements(playerData.achievements);
        this.cards = new PlayerCards(playerData.cards);
        this.currentDeck = new PlayerCards(playerData.currentDeck);
        this.currentFavouriteCard = new FavouriteCard(playerData.currentFavouriteCard);

    }

}

module.exports = Player;