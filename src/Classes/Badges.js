class Badges {

    constructor(badgesData) {

        let badges = [];

        badgesData.forEach(badge => {
            badges.push({
                badgeName: badge.name,
                progress: badge.progress,
                level: badge.level,
                maxLevel: badge.maxLevel,
                target: badge.target
            });
        });

        return badges;

    }

}

module.exports = Badges;