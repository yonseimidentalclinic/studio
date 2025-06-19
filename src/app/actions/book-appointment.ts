"use server";

import { z } from "zod";

const AppointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number.").regex(/^\+?[0-9\s-()]+$/, "Invalid phone number format."),
  email: z.string().email("Please enter a valid email address."),
  preferredDate: z.string().refine((date) => !isNaN(Date.parse(date)), "Please select a valid date."),
  preferredTime: z.string().min(1, "Please select a preferred time."),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type AppointmentFormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    preferredDate?: string[];
    preferredTime?: string[];
    service?: string[];
    message?: string[];
  };
};

export async function bookAppointment(
  prevState: AppointmentFormState,
  formData: FormData
): Promise<AppointmentFormState> {
  const validatedFields = AppointmentSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    preferredDate: formData.get("preferredDate"),
    preferredTime: formData.get("preferredTime"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form submission failed. Please check the errors below.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate API call or database interaction
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log("Appointment Data:", validatedFields.data);

  // Example of a potential error during submission
  // if (validatedFields.data.email.includes("testfail")) {
  //   return {
  //     message: "Submission failed due to a server error. Please try again.",
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you! Your appointment request has been submitted successfully. We will contact you shortly to confirm.",
    success: true,
  };
}
