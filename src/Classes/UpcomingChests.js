class UpcomingChests {

    constructor(upcomingChestsData) {

        let upcomingChests = [];

        upcomingChestsData.items.forEach(upcomingChest => {
            upcomingChests.push({
                index: upcomingChest.index,
                chestName: upcomingChest.name
            });
        });

        return upcomingChests;

    }

}

module.exports = UpcomingChests;