import { z } from "zod";

const hexadecimalRegex = /^[0-9a-f]+$/;
const IdZodSchema = z.string().regex(hexadecimalRegex).length(24);

export default IdZodSchema;
