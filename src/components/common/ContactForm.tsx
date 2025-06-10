"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  context?: string;
  onFormSubmit?: () => void;
}

export function ContactForm({ context, onFormSubmit }: ContactFormProps) {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string; 
    const message = formData.get("message") as string;

    // In a real application, you would send this data to a server.
    console.log("Form submitted:", { name, email, mobile, message, context });

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });

    if (onFormSubmit) {
      onFormSubmit();
    }
    (event.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {context && (
        <p className="text-sm text-muted-foreground mb-2">
          Inquiring about: <strong>{context}</strong>
        </p>
      )}
      <Input name="name" type="text" placeholder="Name" className="w-full" required />
      <Input name="email" type="email" placeholder="Email" className="w-full" required />
      <Input name="mobile" type="tel" placeholder="Mobile Number" className="w-full" required />
      <Textarea name="message" placeholder="Your Message" className="w-full min-h-[100px]" required />
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-[5px]"
      >
        Send Message
      </Button>
    </form>
  );
}
