import { z } from "zod";

const AddressZodSchema = z.object({
  addressLn1: z.string().optional(),
  addressLn2: z.string().nonempty(),
  suburb: z.string().nonempty(),
  state: z.string().nonempty(),
  // Australian Postcodes are 4 digits
  postcode: z.string().length(4).nonempty(),
});

export default AddressZodSchema;
