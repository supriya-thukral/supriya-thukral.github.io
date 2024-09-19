import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        display: { xs: "none", sm: "block" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Contact Information
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Email:{" "}
            <Link href="mailto:supriyathukral@hotmail.com" underline="hover">
              supriyathukral@hotmail.com
            </Link>
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="text.secondary">
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Supriya Thukral
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
