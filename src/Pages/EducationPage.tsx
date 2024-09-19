import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import PageWithChildren from "../Components/PageWithChildren";

const EducationPage: React.FC = () => {
  return (
    <PageWithChildren id="education" className="education">
      <Typography variant="h1" gutterBottom>
        Education
      </Typography>

      {/* McMaster University */}
      <Typography variant="h2" gutterBottom>
        McMaster University
      </Typography>
      <Typography variant="h2" gutterBottom fontSize="1em">
        Honours Science
      </Typography>

      <Divider />
      <Box>
        <Typography variant="h2" fontSize="1.5em" fontStyle={""}>
          Relevant Courses
        </Typography>
        <List>
          {/* Data Structures and Algorithms */}
          <ListItem>
            <ListItemText
              primary={<strong>Data Structures and Algorithms</strong>}
              secondary={
                <Typography variant="body2">
                  Basic data structures: stacks, queues, hash tables, and binary
                  trees; searching and sorting; graph representations and
                  algorithms, including minimum spanning trees, traversals,
                  shortest paths; introduction to algorithmic design strategies;
                  correctness and performance analysis.
                </Typography>
              }
            />
          </ListItem>

          {/* Databases */}
          <ListItem>
            <ListItemText
              primary={<strong>Databases</strong>}
              secondary={
                <Typography variant="body2">
                  Data modelling, integrity constraints, principles and design
                  of relational databases, relational algebra, SQL, query
                  processing, transactions, concurrency control, recovery,
                  security and data storage.
                </Typography>
              }
            />
          </ListItem>

          {/* Principles of Programming */}
          <ListItem>
            <ListItemText
              primary={<strong>Principles of Programming</strong>}
              secondary={
                <Typography variant="body2">
                  Fundamental concepts of programming: expressions, statements,
                  procedures, control structures, iteration, recursion,
                  exceptions; precise memory model of traditional imperative
                  programming languages; basic data structures: records, arrays,
                  dynamic structures; use of libraries.
                </Typography>
              }
            />
          </ListItem>

          {/* Computer Science Practice and Experience: Software Development Skills */}
          <ListItem>
            <ListItemText
              primary={
                <strong>
                  Computer Science Practice and Experience: Software Development
                  Skills
                </strong>
              }
              secondary={
                <Typography variant="body2">
                  Unix and shell programming, makefiles, version control;
                  assembly basics, translating high-level language into
                  assembly, parameter passing, arrays, recursion; compiling,
                  debugging, profiling, and software optimizations.
                </Typography>
              }
            />
          </ListItem>

          {/* Sprint Methodologies */}
          <ListItem>
            <ListItemText
              primary={<strong>Sprint Methodologies</strong>}
              secondary={
                <Typography variant="body2">
                  Rapid prototyping, testing and iteration of ideas with
                  customers using design sprint methodologies. Students will
                  also learn about agile development and pathways from idea to
                  market.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </PageWithChildren>
  );
};

export default EducationPage;
