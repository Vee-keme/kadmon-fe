import { Link } from "react-router-dom";
import ProductIMG from "../../assets/HeroImg.png";

const categories = [
  {
    title: "Business Cards",
    image: ProductIMG,
    link: "/products/business-cards",
    description: "Make a lasting impression",
  },
  {
    title: "Marketing Materials",
    image: ProductIMG,
    link: "/products/marketing",
    description: "Brochures, flyers & more",
  },
  {
    title: "Signage & Banners",
    image: ProductIMG,
    link: "/products/signage",
    description: "Get noticed everywhere",
  },
  {
    title: "Promotional Products",
    image: ProductIMG,
    link: "/products/promotional",
    description: "Branded merchandise",
  },
  {
    title: "Packaging",
    image: ProductIMG,
    link: "/products/packaging",
    description: "Custom boxes & packaging",
  },
  {
    title: "Apparel & Clothing",
    image: ProductIMG,
    link: "/products/apparel",
    description: "Custom t-shirts & more",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-white w-full mx-auto">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            What would you like to create?
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Browse our most popular product categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%] px-4 mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm text-white/80">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
