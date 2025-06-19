'use server';

/**
 * @fileOverview 치과 서비스 문의에 답변하는 AI 기반 챗봇입니다.
 *
 * - smartDentalAssistant - 치과 서비스, 진료 시간, 예약 일정에 대한 사용자 문의를 처리하는 기능입니다.
 * - SmartDentalAssistantInput - smartDentalAssistant 함수의 입력 유형입니다.
 * - SmartDentalAssistantOutput - smartDentalAssistant 함수의 반환 유형입니다.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartDentalAssistantInputSchema = z.object({
  query: z.string().describe('치과 서비스, 진료 시간 또는 예약 일정에 대한 사용자 문의입니다.'),
});
export type SmartDentalAssistantInput = z.infer<typeof SmartDentalAssistantInputSchema>;

const SmartDentalAssistantOutputSchema = z.object({
  response: z.string().describe('사용자 문의에 대한 AI 생성 응답입니다.'),
});
export type SmartDentalAssistantOutput = z.infer<typeof SmartDentalAssistantOutputSchema>;

export async function smartDentalAssistant(input: SmartDentalAssistantInput): Promise<SmartDentalAssistantOutput> {
  return smartDentalAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartDentalAssistantPrompt',
  input: {schema: SmartDentalAssistantInputSchema},
  output: {schema: SmartDentalAssistantOutputSchema},
  prompt: `당신은 연세 미 치과를 위한 도움이 되는 AI 기반 챗봇입니다. 당신의 임무는 치과 서비스, 진료 시간, 예약 일정에 대한 사용자 문의에 답변하는 것입니다.

  다음은 연세 미 치과에 대한 정보입니다:
  - 서비스: 일반 진료, 심미 치과, 교정 치과, 치주 치과, 임플란트
  - 진료 시간: 월요일부터 금요일, 오전 9:00부터 오후 6:00까지; 토요일, 오전 9:00부터 오후 1:00까지; 일요일, 휴무
  - 예약: 예약은 저희 웹사이트를 통하거나 진료 시간 중에 저희 사무실로 전화하여 하실 수 있습니다.

  사용자 문의: {{{query}}}
  `,
});

const smartDentalAssistantFlow = ai.defineFlow(
  {
    name: 'smartDentalAssistantFlow',
    inputSchema: SmartDentalAssistantInputSchema,
    outputSchema: SmartDentalAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
