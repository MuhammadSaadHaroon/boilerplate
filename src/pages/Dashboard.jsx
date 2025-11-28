import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import ButtonsSection from "../components/ButtonsSection";
import FormsSection from "../components/FormsSection";
import ProductCards from "../components/ProductCards";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";

function Dashboard() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >

        {/* RIGHT CONTENT FULL WIDTH */}
        <Box
          sx={{
            flexGrow: 1,
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Banner />
          <ButtonsSection />
          <FormsSection />
          <ProductCards />
          <TestimonialCarousel />
          <Footer />
        </Box>
      </Box>

      <WhatsAppIcon />
    </>
  );
}

export default Dashboard;
