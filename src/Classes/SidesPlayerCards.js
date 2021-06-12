class SidesPlayerCards {

    constructor(sidesPlayerCardsData) {

        let sidesPlayerCardsList = [];
        sidesPlayerCardsData.forEach(sidesPlayerCard => {
            sidesPlayerCardsList.push({
                cardName: sidesPlayerCard.name,
                id: sidesPlayerCard.id,
                level: sidesPlayerCard.level,
                maxLevel: sidesPlayerCard.maxLevel,
                iconURL: sidesPlayerCard.iconUrls.medium
            });
        });
        return sidesPlayerCardsList;

    }

}

module.exports = SidesPlayerCards;