import { Stethoscope, Sparkles, Smile } from 'lucide-react';
import ServiceCard from '@/components/cards/service-card';
import type { SVGProps } from 'react';

const InlineToothIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.34 2.404a1 1 0 0 1 .155.295l1.087 3.044a2.29 2.29 0 0 0 1.916 1.499l.076.007a2.29 2.29 0 0 0 1.916-1.499l1.087-3.044a1 1 0 0 1 .155-.295A5.002 5.002 0 0 1 20 6.642V11c0 2.083-.78 4.093-2.288 5.76a4.993 4.993 0 0 1-2.029 1.418c-.76.32-1.571.554-2.41.696a4.993 4.993 0 0 1-2.546 0c-.839-.142-1.65-.376-2.41-.696A4.993 4.993 0 0 1 6.288 16.76C4.78 15.093 4 13.083 4 11V6.642a5.002 5.002 0 0 1 5.34-4.238Z"/>
    <path d="M9.34 2.404a1 1 0 0 1 .155.295l1.087 3.044a2.29 2.29 0 0 0 1.916 1.499l.076.007a2.29 2.29 0 0 0 1.916-1.499l1.087-3.044a1 1 0 0 1 .155-.295"/>
    <path d="M4.5 11.5h15"/>
  </svg>
);


const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive care for your everyday dental needs, from check-ups and cleanings to fillings and root canals.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our cosmetic treatments, including teeth whitening, veneers, and smile makeovers.',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with traditional braces or modern clear aligners.',
  },
  {
    icon: InlineToothIcon,
    title: 'Periodontics',
    description: 'Specialized treatment for gum disease and other conditions affecting the supporting structures of your teeth.',
  },
  {
    icon: InlineToothIcon, 
    title: 'Implant Dentistry',
    description: 'Restore missing teeth with durable and natural-looking dental implants for a complete, functional smile.',
  },
  {
    icon: Stethoscope, 
    title: 'Preventive Care',
    description: 'Proactive measures to maintain optimal oral health and prevent dental problems before they start.',
  },
];

export default function ServiceShowcase() {
  return (
    <section id="services" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer a wide range of dental services to meet all your oral health needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms`}}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
