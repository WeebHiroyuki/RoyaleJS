class Cards {

    constructor(cardsData) {

        let cards = [];

        cardsData.items.forEach(card => {
            cards.push({
                cardName: card.name,
                id: card.id,
                maxLevel: card.maxLevel,
                iconURL: card.iconUrls.medium
            });
        });

        return cards;

    }

}

module.exports = Cards;