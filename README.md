# **Clash Royale Node.js Library**

**Latest Version:** 2.0.0

# **Documentation**
Install RoyaleJS | `npm i @zloth/royalejs`<br>
The full documentation can be found in https://docs.zloth.xyz/royalejs/ (Work in Progress)<br>
Changelogs in versions and updates can be found in [/changelog.md](https://github.com/gavintjhxx/RoyaleJS/blob/master/changelog.md)

## **Existing Features:**
* Clans
  * Get information of a specific clan
    * Get Members 
    * Get Current River Race 
    * Get Current War 
    * Get River Race Log 
    * Get War Log
* Players
  * Get information of a specific player
    * Get Upcoming Chests 
    * Get Battle Log 
* Cards
  * Get a full list and information of all existing cards
* Tournaments
  * Get information of a specific tournament
* Locations
  * Get a full list and information of all existing locations
  * Get information of a specific location

## Upcoming features
* 2.0.1
  * Get a full list of Player Rankings in a specific location
  * Get a full list of Clan Rankings in a specific location
  * Get a full list of Clan War Rankings in a specific location
  * Get Global Tournament Ranking of a specific tournament
* 2.0.2
  * Get a full list of Top Player Rankings in a specific Season
* 2.0.3
  * Get a full list and information of all existing Clans
  * Get a full list and information of all existing Tournaments
  * Get a full list and information of all existing Global Tournaments
  * Get a a full list and information of all existing Top Player League Seasons

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

// OR 

let clan = await client.getClan("clantag");
console.log(clan.members[0]);
// Do something
```
