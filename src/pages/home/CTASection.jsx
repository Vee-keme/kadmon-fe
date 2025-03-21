import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container max-w-[90%] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            From business cards to banners, we have everything you need to make
            your brand stand out. Start creating today and enjoy fast turnaround
            times and premium quality.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              size="lg"
              className="px-8 py-3 rounded-md flex-center bg-white hover:bg-blue-white/60 text-blue-600 "
            >
              Start Designing Now
            </button>
            <button
              size="lg"
              variant="outline"
              className="border border-white text-white hover:bg-blue-700 hover:rounded-md px-8 py-3 flex items-center"
            >
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-blue-100">
            <a href="/samples" className="hover:text-white hover:underline">
              Request Free Samples
            </a>
            <a href="/templates" className="hover:text-white hover:underline">
              Browse Templates
            </a>
            <a href="/pricing" className="hover:text-white hover:underline">
              View Pricing
            </a>
            <a href="/support" className="hover:text-white hover:underline">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
