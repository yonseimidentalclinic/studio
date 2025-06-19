import DentistCard from '@/components/cards/dentist-card';

const dentists = [
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: 'Dr. Hana Kim',
    specialization: 'Lead Dentist, DDS',
    bio: 'Dr. Kim is dedicated to providing top-quality dental care with a gentle touch. With over 15 years of experience, she specializes in cosmetic and restorative dentistry.',
    imageHint: "female dentist"
  },
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: 'Dr. John Park',
    specialization: 'Orthodontist, DMD',
    bio: 'Dr. Park is passionate about creating beautiful, healthy smiles. He offers a range of orthodontic treatments for all ages, focusing on patient comfort and results.',
    imageHint: "male dentist"
  },
  {
    imageSrc: 'https://placehold.co/400x500.png',
    name: 'Dr. Sarah Lee',
    specialization: 'Periodontist, MS',
    bio: 'Dr. Lee specializes in the prevention, diagnosis, and treatment of periodontal disease, and in the placement of dental implants. She is committed to lifelong learning.',
    imageHint: "dentist specialist"
  },
];

export default function DentistProfiles() {
  return (
    <section id="team" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Meet Our Dental Team</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our skilled and compassionate professionals are here to provide you with the best dental experience.
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
