// Generated by ts-to-zod
import { z } from "zod";
import IdZodSchema from "./id.zod";
import AddressZodSchema from "./address.zod";

const Landlord = z.object({
  propertyId: IdZodSchema.optional(),
  fullname: z.string().nonempty(),
  phone: z.string().length(10).optional(),
  mobile: z.string().length(10),
  email: z.string().email(),
  address: AddressZodSchema,
});

class LandlordZod {
  static CreateSchema = z.object({
    body: Landlord,
  });

  static GetByIdSchema = z.object({
    params: z.object({
      landlordId: IdZodSchema,
    }),
  });

  static UpdateSchema = z.object({
    body: Landlord.deepPartial(),
    params: z.object({
      landlordId: IdZodSchema,
    }),
  });
}

export default LandlordZod;
