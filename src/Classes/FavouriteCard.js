class FavouriteCard {

    constructor(favouriteCardData) {

        this.name = favouriteCardData.name;
        this.id = favouriteCardData.id;
        this.maxLevel = favouriteCardData.maxLevel;
        this.iconURL = favouriteCardData.iconUrls.medium;

    }

}

module.exports = FavouriteCard;