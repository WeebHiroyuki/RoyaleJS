# **Clash Royale Node.js Library**

**Latest Version:** 0.1.0

# **Documentation**
Remember to first install RoyaleJS. | `npm i RoyaleJS`

## **Basic setup**
```javascript
const RoyaleJS = require("RoyaleJS");
const client = new RoyaleJS("apiKey");
```

## **Functions**
```javascript
//Get clan details
client.getClan("clanTag").then((clan) => {
    //Do something
});

//Get player details
client.getPlayer("playerTag").then((player) => {
    //Do something
});

//Get tournament details
client.getTournament("tournamentTag").then((tournament) => {
    //Do something
});

//Get details of ranking of clan in a location
client.getClanRankingByLocation("locationID").then((ranking) => {
    //Do something
});

//Get details of ranking of players in a location
client.getPlayerRankingByLocation("locationID").then((clan) => {
    //Do something
});

//Get a full list of in-game cards
client.getCards().then((cards) => {
    //Do something
});

//Get a full list of global tournaments
client.getGlobalTournaments().then((globalTournaments) => {
    //Do something
});
```