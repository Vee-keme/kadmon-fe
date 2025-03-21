import { useRef } from "react";

// import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    title: "Premium Business Cards",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $19.99",
    rating: 4.8,
    reviews: 1243,
    link: "/products/premium-business-cards",
    badge: "Best Seller",
  },
  {
    title: "Glossy Brochures",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $49.99",
    rating: 4.7,
    reviews: 856,
    link: "/products/glossy-brochures",
  },
  {
    title: "Custom Banners",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $79.99",
    rating: 4.9,
    reviews: 632,
    link: "/products/custom-banners",
    badge: "New",
  },
  {
    title: "Promotional Flyers",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $29.99",
    rating: 4.6,
    reviews: 421,
    link: "/products/promotional-flyers",
  },
  {
    title: "Custom Stickers",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $9.99",
    rating: 4.8,
    reviews: 1876,
    link: "/products/custom-stickers",
    badge: "Popular",
  },
  {
    title: "Branded Merchandise",
    image: "/placeholder.svg?height=300&width=400",
    price: "From $14.99",
    rating: 4.7,
    reviews: 543,
    link: "/products/branded-merchandise",
  },
];

const ProductShowcase = () => {
  //     const scrollContainerRef = useRef < HTMLDivElement > null;

  //   const scrollLeft = () => {
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //     }
  //   };

  //   const scrollRight = () => {
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //     }
  //   };

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container max-w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Best Selling Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Our most popular products loved by customers
            </p>
          </div>
          <div className="flex gap-2">
            <button
              variant="outline"
              size="icon"
              //   onClick={scrollLeft}
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </button>
            <button
              variant="outline"
              size="icon"
              //   onClick={scrollRight}
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </button>
          </div>
        </div>

        <div
          //   ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] snap-start border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={280}
                  height={200}
                  className="w-full h-[180px] object-cover rounded-t-lg"
                />
                {product.badge && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                <p className="text-blue-600 font-medium">{product.price}</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
              <div>
                <a
                  href={product.link}
                  className="w-full inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
