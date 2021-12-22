// Generated by ts-to-zod
import { z } from "zod";

const propertyZodSchema = z.object({
  addressLn1: z.string(),
  addressLn2: z.string(),
  landlordId: z.string(),
  tenantId: z.string().optional(),
});

export default propertyZodSchema;