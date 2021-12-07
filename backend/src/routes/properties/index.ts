import express from "express";
import { getProperty } from "../../controllers/properties";

const router = express.Router();

router.route("/:propertyId").get(getProperty);

export default router;
