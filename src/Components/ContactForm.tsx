import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = () => {
    const mailtoLink = `mailto:hello@supriyathukral.com?subject=${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: { xs: "100%", sm: "600px" },
        padding: 4,
        margin: "0 auto",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        type="email"
      />
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
