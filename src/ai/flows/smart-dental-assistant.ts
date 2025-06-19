// 'use server';

/**
 * @fileOverview An AI-powered chatbot for answering dental service queries.
 *
 * - smartDentalAssistant - A function to handle user queries about dental services, office hours, and appointment scheduling.
 * - SmartDentalAssistantInput - The input type for the smartDentalAssistant function.
 * - SmartDentalAssistantOutput - The return type for the smartDentalAssistant function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartDentalAssistantInputSchema = z.object({
  query: z.string().describe('The user query about dental services, office hours, or appointment scheduling.'),
});
export type SmartDentalAssistantInput = z.infer<typeof SmartDentalAssistantInputSchema>;

const SmartDentalAssistantOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
});
export type SmartDentalAssistantOutput = z.infer<typeof SmartDentalAssistantOutputSchema>;

export async function smartDentalAssistant(input: SmartDentalAssistantInput): Promise<SmartDentalAssistantOutput> {
  return smartDentalAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartDentalAssistantPrompt',
  input: {schema: SmartDentalAssistantInputSchema},
  output: {schema: SmartDentalAssistantOutputSchema},
  prompt: `You are a helpful AI-powered chatbot for Yonsei M Dental Clinic. Your task is to answer user queries about dental services, office hours, and appointment scheduling.

  Here is some information about Yonsei M Dental Clinic:
  - Services: General dentistry, cosmetic dentistry, orthodontics, periodontics, implant dentistry
  - Office Hours: Monday to Friday, 9:00 AM to 6:00 PM; Saturday, 9:00 AM to 1:00 PM; Sunday, Closed
  - Appointment Scheduling: Appointments can be scheduled through our website or by calling our office during office hours.

  User Query: {{{query}}}
  `, // add closing curly brace
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
