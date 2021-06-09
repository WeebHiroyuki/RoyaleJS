class PlayerCards {

    constructor(playerCardsData) {

        let cards = [];

        playerCardsData.forEach(card => {
            cards.push({
                name: card.name,
                id: card.id,
                level: card.level,
                maxLevel: card.maxLevel,
                count: card.count,
                iconURL: card.iconUrls.medium
            });
        });

        return cards;

    }

}

module.exports = PlayerCards;