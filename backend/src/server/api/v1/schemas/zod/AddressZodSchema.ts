import { z } from "zod";

const AddressZodSchema = z.object({
  addressLn1: z.string().nonempty(),
  addressLn2: z.string().nonempty(),
});

export default AddressZodSchema;
