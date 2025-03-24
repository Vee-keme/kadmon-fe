// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Clock,
  Award,
  Palette,
  Shield,
  CreditCard,
  Zap,
  HeartHandshake,
} from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We combine quality, service, and innovation to deliver exceptional
            printing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Truck className="h-10 w-10 text-blue-600" />,
              title: "Fast Delivery",
              description: "Fast delivery on your orders anywhere in Nigeria",
            },
            {
              icon: <Clock className="h-10 w-10 text-blue-600" />,
              title: "Quick Turnaround",
              description:
                "Get your projects completed on time with our efficient production process.",
            },
            {
              icon: <Award className="h-10 w-10 text-blue-600" />,
              title: "Premium Quality",
              description:
                "We use state-of-the-art equipment and premium materials for exceptional results.",
            },
            {
              icon: <Palette className="h-10 w-10 text-blue-600" />,
              title: "Design Services",
              description:
                "Our professional designers can help bring your ideas to life with custom designs.",
            },
            {
              icon: <Shield className="h-10 w-10 text-blue-600" />,
              title: "Satisfaction Guarantee",
              description:
                "Not completely satisfied? We'll reprint your order or refund your money.",
            },
            {
              icon: <CreditCard className="h-10 w-10 text-blue-600" />,
              title: "Secure Payment",
              description:
                "Multiple payment options with secure processing for your peace of mind.",
            },
            {
              icon: <Zap className="h-10 w-10 text-blue-600" />,
              title: "Easy Online Ordering",
              description:
                "Our user-friendly platform makes ordering print products simple and fast.",
            },
            {
              icon: <HeartHandshake className="h-10 w-10 text-blue-600" />,
              title: "Dedicated Support",
              description:
                "Our customer service team is ready to assist you every step of the way.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-md space-y-3"
            >
              <div className="flex flex-col items-center text-center pb-2">
                <div className="bg-blue-50 p-3 rounded-full mb-4">
                  {feature.icon}
                </div>
                <div className="text-xl">{feature.title}</div>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
