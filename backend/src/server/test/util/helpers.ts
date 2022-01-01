import LandlordsService from "../../api/v1/services/landlords.service";
import PropertiesService from "../../api/v1/services/properties.service";

class Helpers {
  static async createLandlord() {
    const testLandlord = {
      fullname: "John Smith",
      mobile: "0491570006",
      email: "johnsmith@fake.com",
      address: {
        addressLn2: "123 Fake St",
        suburb: "Sydney",
        state: "NSW",
        postcode: "2000",
      },
    };

    return await LandlordsService.create(testLandlord);
  }

  static async createProperty(landlordId: string) {
    const testProperty = {
      address: {
        addressLn2: "500 Fake Rd",
        suburb: "Sydney",
        state: "NSW",
        postcode: "2000",
      },
      landlordId: landlordId,
    };

    return await PropertiesService.create(testProperty);
  }
}

export default Helpers;
