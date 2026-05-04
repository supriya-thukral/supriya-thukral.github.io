import React from "react";
import { Typography, Box, Chip, Stack } from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";
import { SKILLS_GROUPS } from "../constants";

const SkillsPage: React.FC = () => {
  return (
    <PageWithChildren id="skills" className="skills">
      <Typography variant="h1" gutterBottom>
        Skills
      </Typography>
      {SKILLS_GROUPS.map((group) => (
        <Box
          key={group.title}
          sx={{
            mb: 3,
            p: { xs: 2, sm: 3 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" gutterBottom>
            {group.title}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {group.skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Box>
      ))}
    </PageWithChildren>
  );
};

export default SkillsPage;
