import LandlordsService from "../../api/v1/services/landlords.service";
import PropertiesService from "../../api/v1/services/properties.service";

class Helpers {
  static async createLandlord() {
    const testLandlord = {
      fullname: "John Smith",
      mobile: "0491570006",
      email: "johnsmith@fake.com",
      address: {
        addressLn1: "123 Fake St",
        addressLn2: "Sydney NSW 2000",
      },
    };

    return await LandlordsService.create(testLandlord);
  }

  static async createProperty(landlordId: string) {
    const testProperty = {
      address: {
        addressLn1: "500 Fake Rd",
        addressLn2: "Sydney NSW 2000",
      },
      landlordId: landlordId,
    };

    return await PropertiesService.create(testProperty);
  }
}

export default Helpers;
