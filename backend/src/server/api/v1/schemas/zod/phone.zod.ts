import { z } from "zod";
const PhoneZodSchema = z.string().length(10);

export default PhoneZodSchema;
