import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";
import { EDUCATION_CONTENT } from "../constants";

const EducationPage: React.FC = () => {
  return (
    <PageWithChildren id="education" className="education">
      <Typography variant="h1" gutterBottom>
        Education
      </Typography>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography variant="h2">{EDUCATION_CONTENT.SCHOOL}</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          {EDUCATION_CONTENT.DEGREE}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.2rem" }}>
          Relevant Coursework
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 3 }}>
          {EDUCATION_CONTENT.COURSES.map((course) => (
            <ListItem key={course} sx={{ display: "list-item", py: 0.5 }}>
              <Typography variant="body1">{course}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </PageWithChildren>
  );
};

export default EducationPage;
