"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Yonsei Revive Dental has completely transformed my smile! The staff is incredibly friendly and professional. I highly recommend them.",
    author: "Jiyeon K.",
    image: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "happy patient"
  },
  {
    quote: "I used to be anxious about dental visits, but Dr. Park and his team made me feel so comfortable. Excellent service and results!",
    author: "Michael S.",
    image: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "dental review"
  },
  {
    quote: "The best dental clinic I've ever been to. They are very thorough and use the latest technology. My teeth have never felt healthier.",
    author: "Emily R.",
    image: "https://placehold.co/100x100.png",
    rating: 5,
    imageHint: "satisfied client"
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Auto-play
  useEffect(() => {
    if (!isClient) return;
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, isClient]);


  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return (
      <section id="testimonials" className="bg-background">
        <div className="container text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12">What Our Patients Say</h2>
          <div className="relative max-w-2xl mx-auto h-80 bg-muted rounded-lg shadow-xl animate-pulse"></div>
        </div>
      </section>
    );
  }
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-background">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12">What Our Patients Say</h2>
        <div className="relative max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-xl bg-card border-primary/20">
            <CardContent className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center items-center">
              <Image 
                src={currentTestimonial.image} 
                alt={`Photo of ${currentTestimonial.author}`} 
                width={80} 
                height={80} 
                className="rounded-full mb-4 border-2 border-accent shadow-md"
                data-ai-hint={currentTestimonial.imageHint}
              />
              <div className="flex mb-2">
                {Array(currentTestimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl italic text-foreground/90 mb-6">
                "{currentTestimonial.quote}"
              </p>
              <p className="font-semibold text-accent text-md">
                - {currentTestimonial.author}
              </p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full h-10 w-10 shadow-md bg-background hover:bg-muted"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full h-10 w-10 shadow-md bg-background hover:bg-muted"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </Button>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
