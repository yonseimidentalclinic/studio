"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormState } from "react-dom";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ko } from 'date-fns/locale';
import { useToast } from "@/hooks/use-toast";
import { bookAppointment, type AppointmentFormState } from "@/app/actions/book-appointment";

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  phone: z.string().min(10, { message: "유효한 전화번호를 입력해주세요." }).regex(/^\+?[0-9\s-()]+$/, "잘못된 전화번호 형식입니다."),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  preferredDate: z.date({ required_error: "예약 희망일은 필수입니다." }),
  preferredTime: z.string().min(1, { message: "예약 희망 시간을 선택해주세요." }),
  service: z.string().optional(),
  message: z.string().max(500, { message: "메시지는 500자를 초과할 수 없습니다." }).optional(),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

const timeSlots = [
  "오전 09:00", "오전 10:00", "오전 11:00", "오후 02:00", "오후 03:00", "오후 04:00", "오후 05:00"
];

const dentalServices = [
  "일반 검진", "스케일링", "심미 치과", "교정 치과", "임플란트 상담", "기타"
];

export default function AppointmentForm() {
  const { toast } = useToast();
  
  const initialState: AppointmentFormState = { message: "", success: false };
  const [state, formAction] = useFormState(bookAppointment, initialState);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredTime: "",
      service: "",
      message: "",
    },
  });

  const { formState: { isSubmitting } } = form;

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "성공!",
          description: state.message,
        });
        form.reset(); 
      } else {
        toast({
          title: "오류",
          description: state.message || "예상치 못한 오류가 발생했습니다.",
          variant: "destructive",
        });
        // Populate form errors from server action if any
        if (state.errors) {
          (Object.keys(state.errors) as Array<keyof AppointmentFormData>).forEach((key) => {
            const fieldErrors = state.errors![key];
            if (fieldErrors && fieldErrors.length > 0) {
              form.setError(key, { type: "server", message: fieldErrors.join(", ") });
            }
          });
        }
      }
    }
  }, [state, toast, form]);

  return (
    <section id="appointment" className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">진료 예약하기</h2>
          <p className="mt-4 text-lg text-foreground/80">
            아래 양식을 작성하여 예약을 요청하세요. 곧 연락드리겠습니다!
          </p>
        </div>
        <Card className="shadow-xl p-6 md:p-8">
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>성함</FormLabel>
                      <FormControl>
                        <Input placeholder="성함을 입력하세요" {...field} className="bg-input"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="(010) 1234-5678" {...field} className="bg-input"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일 주소</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="bg-input"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>예약 희망일</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal bg-input",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: ko })
                              ) : (
                                <span>날짜 선택</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setDate(new Date().getDate() - 1)) // Disable past dates
                            }
                            initialFocus
                            locale={ko}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>예약 희망 시간</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-input">
                            <SelectValue placeholder="시간 선택" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>관심 서비스 (선택 사항)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-input">
                          <SelectValue placeholder="서비스 선택" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dentalServices.map(service => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>추가 메시지 (선택 사항)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="추가 정보나 특별 요청 사항이 있으시면 입력해주세요..."
                        className="resize-none bg-input"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    제출 중...
                  </>
                ) : (
                  "예약 요청하기"
                )}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
// Adding Card component import since it's used
import { Card } from "@/components/ui/card";
