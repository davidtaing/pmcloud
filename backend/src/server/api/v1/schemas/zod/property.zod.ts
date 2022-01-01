// Generated by ts-to-zod
import { z } from "zod";
import IdZodSchema from "./id.zod";
import AddressZodSchema from "./address.zod";

class PropertyZod {
  static Property = z.object({
    address: AddressZodSchema,
    landlordId: IdZodSchema,
    tenantId: IdZodSchema.optional(),
  });

  static CreateSchema = z.object({
    body: this.Property,
  });

  static GetByIdSchema = z.object({
    params: z.object({
      propertyId: IdZodSchema,
    }),
  });

  static UpdateSchema = z.object({
    body: this.Property.omit({ tenantId: true }).deepPartial(),
    params: z.object({
      propertyId: IdZodSchema,
    }),
  });
}

export default PropertyZod;
