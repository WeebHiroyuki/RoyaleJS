# **Clash Royale Node.js Library**

**Latest Version:** 1.0.0

# **Documentation**
Install RoyaleJS | `npm i @zloth/royalejs`<br>
The full documentation can be found in https://docs.zloth.xyz/royalejs/ (Working in Progress)<br>
Changelogs in versions and updates can be found in [/changelog.md](https://github.com/gavintjhxx/RoyaleJS/blob/master/changelog.md)

## **Existing Features:**
* Clans
  * Get information of a specific clan
  * Get Members in a specific clan
  * Get Current River Race of a specific clan
  * Get Current War of a specific clan
  * Get River Race Log of a specific clan
  * Get War Log of a specific clan
* Players
  * Get information of a specific player
  * Get Upcoming Chests of a specific player
  * Get Battle Log of a specific player
* Cards
  * Get a full list and information of all existing cards
* Tournaments
  * Get information of a specific tournament
  * Get a full list and information of all global tournaments
* Locations
  * Get a full list and information of all existing locations
  * Get information of a specific location
  * Get Player Rankings in a specific location
  * Get Clan Rankings in a specific location
  * Get Clan War Rankings in a specific location
  * Get full list and information of Top Player League seasons
  * Get information of a specific Top Player League season
  * Get full list and information of Top Player Rankings in a specific season
  * Get Global Tournament Ranking of a specific tournament

## **Configuration**
```javascript
const RoyaleJS = require("royalejs");
const client = new RoyaleJS("apiKey");
```

## **Example**
```javascript
client.getClan("clanTag").then((clan) => {
  console.log(clan)
  // Do something
});

client.getPlayer("playerTag").then((player) => {
  console.log(player);
  // Do something
});
```