"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export function ContactModal({ isOpen, onClose, serviceTitle }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-[425px] bg-card rounded-lg shadow-xl">
        <DialogHeader className="pt-2">
          <DialogTitle className="text-primary">Contact Us</DialogTitle>
          {serviceTitle ? (
            <DialogDescription>
              We&apos;re happy to discuss <strong>{serviceTitle}</strong>. Please fill out the form below.
            </DialogDescription>
          ) : (
            <DialogDescription>
              Please fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-2">
          <ContactForm context={serviceTitle} onFormSubmit={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
