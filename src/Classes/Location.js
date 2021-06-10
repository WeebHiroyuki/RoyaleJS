class Location {

    constructor(locationData) {

        this.id = locationData.id;
        this.locationName = locationData.name;
        this.isCountry = locationData.isCountry;
        this.countryCode = locationData.countryCode;

    }

}

module.exports = Location;