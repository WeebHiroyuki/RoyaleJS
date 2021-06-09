class LeagueStatistics {

    constructor(leagueStatisticsData) {

        this.currentSeason = { rank: leagueStatisticsData.currentSeason.rank, trophies: leagueStatisticsData.currentSeason.trophies, bestTrophies: leagueStatisticsData.currentSeason.bestTrophies };
        this.previousSeason = { id: leagueStatisticsData.previousSeason.id, rank: leagueStatisticsData.previousSeason.rank, trophies: leagueStatisticsData.previousSeason.trophies, bestTrophies: leagueStatisticsData.previousSeason.bestTrophies };
        this.bestSeason = { id: leagueStatisticsData.bestSeason.id, rank: leagueStatisticsData.bestSeason.rank, trophies: leagueStatisticsData.bestSeason.trophies };

    }

}

module.exports = LeagueStatistics;