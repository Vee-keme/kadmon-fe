import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import IMG from "../../assets/HeroImg.png";

const products = [
  {
    title: "Premium Business Cards",
    image: IMG,
    price: "From $19.99",
    rating: 4.8,
    reviews: 1243,
    link: "/products/premium-business-cards",
    badge: "Best Seller",
  },
  {
    title: "Glossy Brochures",
    price: "From $19.99",
    image: IMG,
    rating: 4.7,
    reviews: 856,
    link: "/products/glossy-brochures",
  },
  {
    title: "Custom Banners",
    image: IMG,
    price: "From $79.99",
    rating: 4.9,
    reviews: 632,
    link: "/products/custom-banners",
    badge: "New",
  },
  {
    title: "Promotional Flyers",
    image: IMG,
    price: "From $29.99",
    rating: 4.6,
    reviews: 421,
    link: "/products/promotional-flyers",
  },
  {
    title: "Custom Stickers",
    image: IMG,
    price: "From $9.99",
    rating: 4.8,
    reviews: 1876,
    link: "/products/custom-stickers",
    badge: "Popular",
  },
  {
    title: "Branded Merchandise",
    image: IMG,
    price: "From $14.99",
    rating: 4.7,
    reviews: 543,
    link: "/products/branded-merchandise",
  },
];

const ProductShowcase = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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
              onClick={scrollLeft}
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 p-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </button>
            <button
              onClick={scrollRight}
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 p-2"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                maxWidth: 280,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                border: "none",
                transition: "box-shadow 0.3s",
                scrollSnapAlign: "start",
                "&:hover": {
                  boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                />
                {product.badge && (
                  <Chip
                    label={product.badge}
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "#1e40af",
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Box>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {product.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#1e40af", fontWeight: "bold" }}
                >
                  {product.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    value={product.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {product.rating} ({product.reviews})
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  href={product.link}
                  sx={{
                    bgcolor: "#1e40af",
                    "&:hover": {
                      bgcolor: "#1e3a8a",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
