'use server';
/**
 * @fileOverview AI-powered Design Assistant Tool to suggest alternative layouts.
 *
 * - suggestLayout - A function that suggests alternative layouts for a given section.
 * - LayoutSuggestionInput - The input type for the suggestLayout function.
 * - LayoutSuggestionOutput - The return type for the suggestLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LayoutSuggestionInputSchema = z.object({
  sectionContent: z
    .string()
    .describe('The content of the section for which layout suggestions are needed.'),
  brandGuidelines: z
    .string()
    .describe('The brand guidelines to be followed for the layout suggestions.'),
});
export type LayoutSuggestionInput = z.infer<typeof LayoutSuggestionInputSchema>;

const LayoutSuggestionOutputSchema = z.object({
  layoutSuggestions: z
    .array(z.string())
    .describe('An array of alternative layout suggestions for the section.'),
});
export type LayoutSuggestionOutput = z.infer<typeof LayoutSuggestionOutputSchema>;

export async function suggestLayout(input: LayoutSuggestionInput): Promise<LayoutSuggestionOutput> {
  return suggestLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'layoutSuggestionPrompt',
  input: {schema: LayoutSuggestionInputSchema},
  output: {schema: LayoutSuggestionOutputSchema},
  prompt: `You are a design assistant tool that suggests alternative layouts for sections of a landing page based on the provided content and brand guidelines.

  Section Content: {{{sectionContent}}}
  Brand Guidelines: {{{brandGuidelines}}}

  Please provide 3 different layout suggestions for the section, keeping in mind the brand guidelines. Each suggestion should be a detailed description of the layout, including the arrangement of elements, the use of colors, and the overall visual style. Return as a JSON array.
  `,
});

const suggestLayoutFlow = ai.defineFlow(
  {
    name: 'suggestLayoutFlow',
    inputSchema: LayoutSuggestionInputSchema,
    outputSchema: LayoutSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
