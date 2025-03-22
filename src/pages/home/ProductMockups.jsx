import { useState } from "react";
import { Button, Tabs, Tab, Box, Typography } from "@mui/material";
import IMG from "../../assets/HeroImg.png";

const ProductMockups = () => {
  const [activeTab, setActiveTab] = useState("business-cards");

  const mockups = {
    "business-cards": [IMG, IMG, IMG],
    brochures: [IMG, IMG, IMG],
    banners: [IMG, IMG, IMG],
  };

  const tabContent = {
    "business-cards": {
      title: "Premium Business Cards",
      description:
        "Make a lasting impression with our premium business cards. Available in various paper stocks, finishes, and shapes.",
      features: [
        "16pt and 32pt options",
        "Matte, glossy, or soft-touch finish",
        "Standard or custom shapes",
        "Foil and spot UV options",
      ],
    },
    brochures: {
      title: "Professional Brochures",
      description:
        "Showcase your products and services with our high-quality brochures. Perfect for marketing and information sharing.",
      features: [
        "Bi-fold, tri-fold, or z-fold options",
        "100lb gloss text or 100lb matte text",
        "Full color printing",
        "Fast turnaround times",
      ],
    },
    banners: {
      title: "Eye-Catching Banners",
      description:
        "Get noticed with our durable, high-resolution banners. Ideal for events, storefronts, and promotions.",
      features: [
        "Indoor and outdoor options",
        "13oz or 18oz vinyl material",
        "Grommets or pole pockets",
        "Wind slits available",
      ],
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90%] mx-auto">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Typography variant="h4" fontWeight="bold">
            See Your Designs Come to Life
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Preview how your designs will look on our premium products
          </Typography>
        </div>

        <Box display="flex" justifyContent="center">
          <Tabs value={activeTab} onChange={(_, value) => setActiveTab(value)}>
            <Tab label="Business Cards" value="business-cards" />
            <Tab label="Brochures" value="brochures" />
            <Tab label="Banners" value="banners" />
          </Tabs>
        </Box>

        {Object.keys(tabContent).map(
          (key) =>
            activeTab === key && (
              <Box
                key={key}
                display="grid"
                gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }}
                gap={5}
                alignItems="center"
                padding={4}
              >
                <Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {tabContent[key].title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {tabContent[key].description}
                  </Typography>
                  <ul>
                    {tabContent[key].features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            backgroundColor: "#1976d2",
                            borderRadius: "50%",
                            marginRight: 1,
                          }}
                        />
                        <Typography variant="body2">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Box display="flex" gap={2} mt={3}>
                    <button className="px-8 py-3 rounded-md flex-center bg-blue-600 hover:bg-blue-700 text-white">
                      Start Designing
                    </button>
                    <button className="px-8 py-3 rounded-md flex-center border border-blue-600 text-blue-600 hover:bg-blue-50 ">
                      See Pricing
                    </button>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={400}
                >
                  <img
                    src={mockups[key][0]}
                    alt={`${key} mockup`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                </Box>
              </Box>
            )
        )}
      </div>
    </section>
  );
};

export default ProductMockups;
