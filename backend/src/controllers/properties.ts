import Landlord from "../types/Landlord";
import Tenant from "../types/Tenant";

type response = {
  addressLn1: string;
  addressLn2: string;
  contactDetails: {
    landlord: Landlord;
    tenant: Tenant;
  };
};

export const getProperty = (req: any, res: any, err: any) => {
  const data: response = {
    addressLn1: "52 Ocean St",
    addressLn2: "Sydney NSW 2000",
    contactDetails: {
      landlord: {
        fullName: "David Taing",
        phone: "0255500000",
        mobile: "0491570006",
        email: "davidtaing@email.com",
        addressLn1: "50 Ocean St",
        addressLn2: "Sydney NSW 2000",
      },
      tenant: {
        fullName: "Taing David",
        phone: "",
        mobile: "0491570156",
        email: "taingdavid@email.com",
      },
    },
  };

  console.log(data);
  res.json(data);
};
