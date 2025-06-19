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
    title: '일반 진료',
    description: '정기 검진 및 스케일링부터 충치 치료, 신경 치료까지 일상적인 치과 진료를 포괄적으로 제공합니다.',
  },
  {
    icon: Sparkles,
    title: '심미 치과',
    description: '치아 미백, 라미네이트, 스마일 메이크오버 등 심미 치료를 통해 당신의 미소를 더욱 아름답게 만들어 드립니다.',
  },
  {
    icon: Smile,
    title: '교정 치과',
    description: '전통적인 교정 장치 또는 현대적인 투명 교정 장치를 통해 치열을 교정하고 교합을 개선합니다.',
  },
  {
    icon: InlineToothIcon,
    title: '치주 치과',
    description: '잇몸 질환 및 치아 지지 구조에 영향을 미치는 기타 질환에 대한 전문 치료를 제공합니다.',
  },
  {
    icon: InlineToothIcon, 
    title: '임플란트',
    description: '내구성이 뛰어나고 자연스러워 보이는 임플란트로 상실된 치아를 복원하여 완벽하고 기능적인 미소를 되찾아 드립니다.',
  },
  {
    icon: Stethoscope, 
    title: '예방 관리',
    description: '최적의 구강 건강을 유지하고 치과 문제가 발생하기 전에 예방하기 위한 선제적인 조치입니다.',
  },
];

export default function ServiceShowcase() {
  return (
    <section id="services" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">제공 서비스</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            저희는 여러분의 모든 구강 건강 요구를 충족시키기 위해 다양한 치과 서비스를 제공합니다.
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
