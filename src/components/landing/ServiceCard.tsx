
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: (serviceTitle: string) => void;
}

export function ServiceCard({ icon: Icon, title, description, ctaLabel, onCtaClick }: ServiceCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {ctaLabel && onCtaClick && (
        <CardFooter className="pt-4 pb-6 px-6">
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-[#ff8c66] hover:text-primary rounded-[5px] text-base font-semibold"
            onClick={() => onCtaClick(title)}
          >
            {ctaLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

