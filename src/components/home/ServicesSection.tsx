
import { Dumbbell, Users, ChefHat, Heart, Timer, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 text-kenya-green" />,
      title: "Personal Training",
      description: "One-on-one sessions with our expert trainers customized to your fitness goals."
    },
    {
      icon: <Users className="h-8 w-8 text-kenya-green" />,
      title: "Group Classes",
      description: "Energetic group workouts including HIIT, yoga, zumba, and cycling."
    },
    {
      icon: <ChefHat className="h-8 w-8 text-kenya-green" />,
      title: "Nutrition Planning",
      description: "Custom meal plans to complement your workout routine for optimal results."
    },
    {
      icon: <Heart className="h-8 w-8 text-kenya-green" />,
      title: "Health Assessment",
      description: "Comprehensive health evaluations to track your progress and improve results."
    },
    {
      icon: <Timer className="h-8 w-8 text-kenya-green" />,
      title: "24/7 Access",
      description: "Our premium members enjoy round-the-clock access to our facilities."
    },
    {
      icon: <Award className="h-8 w-8 text-kenya-green" />,
      title: "Certified Trainers",
      description: "All our trainers are certified professionals with years of experience."
    }
  ];

  return (
    <section className="section-padding container-padding" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1.5 bg-kenya-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of fitness services to help you achieve your goals,
            whether you're just starting out or looking to push your limits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-kenya-green">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
