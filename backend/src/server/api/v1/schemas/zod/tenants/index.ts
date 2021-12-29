// Generated by ts-to-zod
import { z } from "zod";
import IdZodSchema from "../IdZodSchema";

export const CreateZodSchema = z.object({
  body: z.object({
    propertyId: IdZodSchema.optional(),
    fullname: z.string().nonempty(),
    phone: z.string().length(10).optional(),
    mobile: z.string().length(10),
    email: z.string().email(),
  }),
});

export const GetByIdZodSchema = z.object({
  params: z.object({
    tenantId: IdZodSchema,
  }),
});

export const UpdateZodSchema = z.object({
  body: z.object({
    propertyId: IdZodSchema.optional(),
    fullname: z.string().nonempty().optional(),
    phone: z.string().length(10).optional(),
    mobile: z.string().length(10).optional(),
    email: z.string().email().optional(),
  }),
  params: z.object({
    tenantId: IdZodSchema,
  }),
});