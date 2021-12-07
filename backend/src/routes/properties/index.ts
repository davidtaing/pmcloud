import express from "express";
import { addProperty, getProperty } from "../../controllers/properties";

const router = express.Router();

router.route("/").post(addProperty);
router.route("/:propertyId").get(getProperty);

export default router;
