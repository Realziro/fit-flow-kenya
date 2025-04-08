
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "4,999",
      period: "monthly",
      description: "Perfect for beginners getting started with fitness",
      features: [
        "Access to gym facilities (6AM-8PM)",
        "Basic fitness assessment",
        "2 group classes per week",
        "Locker access",
        "Fitness app access"
      ],
      isPopular: false,
      buttonText: "Start Basic Plan",
      buttonLink: "/register?plan=basic"
    },
    {
      name: "Premium",
      price: "7,999",
      period: "monthly",
      description: "Our most popular plan for fitness enthusiasts",
      features: [
        "24/7 gym access",
        "Complete fitness assessment",
        "Unlimited group classes",
        "1 personal training session monthly",
        "Nutrition consultation",
        "Premium locker access",
        "Fitness app with custom workouts"
      ],
      isPopular: true,
      buttonText: "Start Premium Plan",
      buttonLink: "/register?plan=premium"
    },
    {
      name: "Elite",
      price: "12,999",
      period: "monthly",
      description: "For those serious about transformation",
      features: [
        "24/7 gym access",
        "Advanced fitness assessment",
        "Unlimited group classes",
        "4 personal training sessions monthly",
        "Custom nutrition plan",
        "Premium locker with towel service",
        "VIP fitness app with trainer chat",
        "Exclusive member events"
      ],
      isPopular: false,
      buttonText: "Start Elite Plan",
      buttonLink: "/register?plan=elite"
    }
  ];

  return (
    <section className="section-padding container-padding bg-gray-50" id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Plans</h2>
          <div className="w-20 h-1.5 bg-kenya-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your goals and budget. All plans include access to our state-of-the-art facilities 
            and can be paid monthly via M-Pesa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.isPopular ? 'shadow-xl border-kenya-green' : 'shadow-md'}`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-kenya-green text-white py-1 px-4 font-bold text-xs tracking-wide transform rotate-45 translate-x-5 translate-y-3">
                    POPULAR
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Ksh {plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-kenya-green mr-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to={plan.buttonLink} className="w-full">
                  <Button className={`w-full ${plan.isPopular ? 'bg-kenya-green hover:bg-kenya-green-light' : ''}`}>
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
