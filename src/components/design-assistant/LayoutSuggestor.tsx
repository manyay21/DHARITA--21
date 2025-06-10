"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { suggestLayout, type LayoutSuggestionInput, type LayoutSuggestionOutput } from '@/ai/flows/layout-suggestions';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  sectionContent: z.string().min(10, { message: "Section content must be at least 10 characters." }),
  brandGuidelines: z.string().min(10, { message: "Brand guidelines must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function LayoutSuggestor() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sectionContent: "",
      brandGuidelines: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const result: LayoutSuggestionOutput = await suggestLayout(data as LayoutSuggestionInput);
      if (result.layoutSuggestions) {
        setSuggestions(result.layoutSuggestions);
      } else {
        setError("No suggestions returned from the AI.");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">AI Design Assistant</CardTitle>
          <CardDescription>
            Get alternative layout suggestions for your section based on its content and your brand guidelines.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="sectionContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Section Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the content of your section (e.g., 'A hero section with a title, subtitle, and CTA button about our new product...')"
                        className="min-h-[150px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brandGuidelines"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Brand Guidelines</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide your brand guidelines (e.g., 'Colors: primary blue #007bff, secondary gray #6c757d. Font: Sans-serif. Tone: Modern and professional...')"
                        className="min-h-[150px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={isLoading} 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-[5px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Suggestions...
                  </>
                ) : (
                  'Get Layout Suggestions'
                )}
              </Button>
            </form>
          </Form>

          {error && (
            <div className="mt-6 p-4 bg-destructive/10 text-destructive border border-destructive rounded-md">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {suggestions.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Layout Suggestions:</h3>
              <ul className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="p-4 border rounded-md bg-secondary/30 shadow">
                    <p className="text-sm text-foreground">{suggestion}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
