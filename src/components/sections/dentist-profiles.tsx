import DentistCard from '@/components/cards/dentist-card';

const dentists = [
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: '김하나 원장',
    specialization: '대표원장, DDS',
    bio: '김 원장님은 15년 이상의 경력을 바탕으로 부드러운 손길로 최고 수준의 치과 진료를 제공하기 위해 최선을 다하고 있습니다. 심미 치과 및 보존 치과를 전문으로 합니다.',
    imageHint: "female dentist"
  },
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: '박지훈 원장',
    specialization: '교정과 전문의, DMD',
    bio: '박 원장님은 아름답고 건강한 미소를 만드는 데 열정적입니다. 환자의 편안함과 결과에 중점을 두고 모든 연령대를 위한 다양한 교정 치료를 제공합니다.',
    imageHint: "male dentist"
  },
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: '이수진 원장',
    specialization: '치주과 전문의, MS',
    bio: '이 원장님은 치주 질환의 예방, 진단 및 치료, 그리고 치과 임플란트 식립을 전문으로 합니다. 평생 학습에 전념하고 있습니다.',
    imageHint: "dentist specialist"
  },
];

export default function DentistProfiles() {
  return (
    <section id="team" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">의료진 소개</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            숙련되고 따뜻한 마음을 가진 저희 전문가들이 최고의 치과 경험을 선사하기 위해 여기 있습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dentists.map((dentist, index) => (
             <div key={dentist.name} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms`}}>
              <DentistCard
                imageSrc={dentist.imageSrc}
                name={dentist.name}
                specialization={dentist.specialization}
                bio={dentist.bio}
                imageHint={dentist.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
