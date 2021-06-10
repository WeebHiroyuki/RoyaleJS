class Locations {

    constructor(locationsData) {

        let locations = [];
        locationsData.items.forEach(location => {
            locations.push({
                id: location.id,
                name: location.name,
                isCountry: location.isCountry,
                countryCode: location.countryCode
            });
        });
        return locations;

    }

}

module.exports = Locations;