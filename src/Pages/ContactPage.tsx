import React from "react";
import PageWithChildren from "../Components/PageWithChildren";
import ContactForm from "../Components/ContactForm";
import { Typography } from "@mui/material";

const ContactPage: React.FC = () => {
  return (
    <PageWithChildren id="contact" className="contact">
      <Typography variant="h2">Connect with Me</Typography>
      <ContactForm />
    </PageWithChildren>
  );
};

export default ContactPage;
