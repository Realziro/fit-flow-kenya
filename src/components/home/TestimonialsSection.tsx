
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Mwangi",
      role: "Member since 2022",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "FitFlow Kenya changed my life! I've lost over 20kg and gained so much confidence. The trainers are knowledgeable and supportive, pushing me to achieve more than I thought possible."
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "Member since 2021",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The facilities are world-class and the community is so motivating. I love the variety of classes and how the trainers remember everyone's name. It feels like a fitness family!"
    },
    {
      id: 3,
      name: "Peter Ochieng",
      role: "Member since 2023",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      quote: "As someone who was intimidated by gyms, FitFlow Kenya made me feel welcome from day one. The payment plans are flexible and the results speak for themselves."
    },
    {
      id: 4,
      name: "Elizabeth Wanjiru",
      role: "Member since 2020",
      image: "https://randomuser.me/api/portraits/women/59.jpg",
      quote: "The nutrition guidance combined with personal training has transformed my health completely. My doctor is amazed at the improvement in all my health markers!"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding container-padding bg-kenya-green text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
          <div className="w-20 h-1.5 bg-white mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our members have to say about their experience at FitFlow Kenya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white text-kenya-black relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-kenya-green/20" />
            <CardContent className="pt-12 px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-kenya-green mx-auto md:mx-0"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl mb-6 italic text-gray-700">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="text-lg font-semibold text-kenya-black">{testimonials[activeIndex].name}</h4>
                    <p className="text-kenya-green">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white text-white hover:bg-white hover:text-kenya-green rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white text-white hover:bg-white hover:text-kenya-green rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mx-1 h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
