class Achievements {

    constructor(achievementsData) {

        let achievements = [];

        achievementsData.forEach(achievement => {
            achievements.push({
                name: achievement.name,
                info: achievement.info,
                stars: achievement.stars,
                value: achievement.value,
                target: achievement.target,
                completionInfo: achievement.completionInfo
            });
        });

        return achievements;

    }

}

module.exports = Achievements;