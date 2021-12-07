import express from "express";
import propertiesRouter from "./properties";

const router = express.Router();

router.use("/properties", propertiesRouter);

export default router;
