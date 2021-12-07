import express from "express";

const router = express.Router();

const data = {
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

router.route("/").get((req, res, err) => {
  console.log(data);
  res.json(data);
});

export default router;
