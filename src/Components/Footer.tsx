import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { CONTACT_CONTENT } from "../constants";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "transparent",
        padding: "20px 0 36px",
        display: "block",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          borderTop: "1px solid",
          borderColor: "divider",
          pt: 2.5,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Contact Information
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Email:{" "}
            <Link href={`mailto:${CONTACT_CONTENT.EMAIL}`} underline="hover">
              {CONTACT_CONTENT.EMAIL}
            </Link>
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="text.secondary">
            {CONTACT_CONTENT.FOOTER_CREDIT}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
