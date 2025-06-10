import { BenefitCard } from './BenefitCard';
import { Award, Cpu, Users, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Trusted Expertise',
    description: 'Our team consists of seasoned professionals with deep knowledge of the real estate and technology sectors.',
  },
  {
    icon: Cpu,
    title: 'Innovative Technology',
    description: 'We harness the latest technological advancements to provide solutions that are ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your needs are at the heart of what we do. We tailor solutions to meet your specific requirements.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We value your time. Our processes are optimized for efficient and prompt project completion.',
  },
];

export function BenefitsSection() {
  return (
    <section 
      id="about" 
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--border)) 0.5px, transparent 0.5px), linear-gradient(to right, hsl(var(--border)) 0.5px, transparent 0.5px)',
        backgroundSize: '10px 10px', // Very close grid lines
      }}
    >
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Why Choose DHARITA?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We combine industry expertise with cutting-edge technology to deliver exceptional real estate experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
