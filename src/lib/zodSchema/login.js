import { z } from "zod";

export const loginFormSchema = z.object({
  login_id: z
    .string()
    .min(1, {
      message: "Email is a Required Field.",
    })
    .email()
    .trim(),
  login_password: z
    .string()
    .min(1, {
      message: "Password is a Required Field.",
    })
    .trim(),
  remember: z.boolean(),
  ip_address: z.string().trim().optional(),
});

export const registrationFormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username is a Required Field.",
    })
    .trim(),
  email: z
    .string()
    .min(1, {
      message: "Email is a Required Field.",
    })
    .email()
    .trim(),
  password: z
    .string()
    .min(1, {
      message: "Password is a Required Field.",
    })
    .trim(),
});
