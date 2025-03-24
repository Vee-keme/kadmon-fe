// import Image from "next/image";
// import { Button } from "@/components/ui/button";
import IMG from "../../assets/HeroImg.png";

const projects = [
  {
    title: "Corporate Rebrand",
    client: "TechCorp Industries",
    description:
      "Complete corporate identity redesign including logo, business cards, letterheads, and marketing materials.",
    image: IMG,
    products: ["Business Cards", "Letterheads", "Brochures", "Folders"],
  },
  {
    title: "Product Launch Campaign",
    client: "Eco Essentials",
    description:
      "Comprehensive print campaign for new product line launch including packaging, promotional materials, and point-of-sale displays.",
    image: IMG,
    products: ["Packaging", "Flyers", "Posters", "Banners"],
  },
  {
    title: "Event Marketing Materials",
    client: "Global Summit 2023",
    description:
      "Complete event branding and marketing materials for international conference including signage, badges, and promotional items.",
    image: IMG,
    products: ["Badges", "Banners", "Programs", "Promotional Items"],
  },
];

const BrandingJobs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            See how our clients have achieved their goals with our printing
            solutions
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <div className="text-sm font-medium text-blue-600 mb-2">
                  Client Project
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-1">
                  Client: {project.client}
                </p>
                <p className="mb-4">{project.description}</p>

                <div className="mb-6">
                  <div className="text-sm font-medium mb-2">Products Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Case Study
                </button>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandingJobs;
