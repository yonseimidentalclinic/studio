"use server";

import { z } from "zod";

const AppointmentSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  phone: z.string().min(10, "유효한 전화번호를 입력해주세요.").regex(/^\+?[0-9\s-()]+$/, "잘못된 전화번호 형식입니다."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  preferredDate: z.string().refine((date) => !isNaN(Date.parse(date)), "유효한 날짜를 선택해주세요."),
  preferredTime: z.string().min(1, "예약 희망 시간을 선택해주세요."),
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
      message: "양식 제출에 실패했습니다. 아래 오류를 확인해주세요.",
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
  //     message: "서버 오류로 인해 제출에 실패했습니다. 다시 시도해주세요.",
  //     success: false,
  //   };
  // }

  return {
    message: "감사합니다! 예약 요청이 성공적으로 제출되었습니다. 확인을 위해 곧 연락드리겠습니다.",
    success: true,
  };
}
