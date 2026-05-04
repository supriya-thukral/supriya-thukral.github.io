import React from "react";
import PageWithChildren from "../Components/PageWithChildren";
import { Typography, Box, Link } from "@mui/material";
import { CONTACT_CONTENT } from "../constants";

const ContactPage: React.FC = () => {
  return (
    <PageWithChildren id="contact" className="contact">
      <Box
        sx={{
          maxWidth: "720px",
          p: { xs: 2, sm: 3 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography variant="h1" gutterBottom>
          {CONTACT_CONTENT.TITLE}
        </Typography>
        <Typography variant="body1" paragraph>
          {CONTACT_CONTENT.BODY}
        </Typography>
        <Typography variant="body1">
          Email:{" "}
          <Link href={`mailto:${CONTACT_CONTENT.EMAIL}`} underline="hover">
            {CONTACT_CONTENT.EMAIL}
          </Link>
        </Typography>
      </Box>
    </PageWithChildren>
  );
};

export default ContactPage;
