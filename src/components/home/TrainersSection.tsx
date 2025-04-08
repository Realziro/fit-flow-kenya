
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Facebook, Twitter, Instagram } from "lucide-react";

const TrainersSection = () => {
  const trainers = [
    {
      name: "David Kimani",
      role: "Head Trainer",
      image: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
      bio: "Former national bodybuilding champion with 10+ years of training experience.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Sarah Wanjiku",
      role: "Fitness Instructor",
      image: "https://images.unsplash.com/photo-1607413398374-c6b192f1cb43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
      bio: "Specialized in HIIT workouts and weight loss programs with a nutrition certification.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Michael Odhiambo",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
      bio: "Olympic weightlifting specialist with a background in sports science.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      }
    },
    {
      name: "Faith Muthoni",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
      bio: "Certified yoga teacher specializing in power yoga and mindfulness practices.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      }
    }
  ];

  return (
    <section className="section-padding container-padding" id="trainers">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Trainers</h2>
          <div className="w-20 h-1.5 bg-kenya-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced and certified trainers are dedicated to helping you achieve your fitness goals
            through personalized guidance and motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full aspect-square object-cover object-center hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-kenya-green font-medium">{trainer.role}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-gray-600">{trainer.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4 border-t pt-4">
                <a href={trainer.social.facebook} className="text-gray-500 hover:text-kenya-green transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={trainer.social.twitter} className="text-gray-500 hover:text-kenya-green transition-colors">
                  <Twitter size={18} />
                </a>
                <a href={trainer.social.instagram} className="text-gray-500 hover:text-kenya-green transition-colors">
                  <Instagram size={18} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
