import React from "react";
import PageWithChildren from "../Components/PageWithChildren";

const EducationPage: React.FC = () => {
  return (
    <PageWithChildren id="education" className="education">
      <h1>Education</h1>

      {/* McMaster University */}
      <h2>McMaster University</h2>
      <h3>Honours Science</h3>
      <ul>
        {/* Relevant Courses */}
        <li>
          Relevant Courses
          <ul>
            {/* Data Structures and Algorithms */}
            <li>
              <strong>Data Structures and Algorithms</strong>
              <p>
                Basic data structures: stacks, queues, hash tables, and binary
                trees; searching and sorting; graph representations and
                algorithms, including minimum spanning trees, traversals,
                shortest paths; introduction to algorithmic design strategies;
                correctness and performance analysis.
              </p>
            </li>

            {/* Databases */}
            <li>
              <strong>Databases</strong>
              <p>
                Data modelling, integrity constraints, principles and design of
                relational databases, relational algebra, SQL, query processing,
                transactions, concurrency control, recovery, security and data
                storage.
              </p>
            </li>

            {/* Principles of Programming */}
            <li>
              <strong>Principles of Programming</strong>
              <p>
                Fundamental concepts of programming: expressions, statements,
                procedures, control structures, iteration, recursion,
                exceptions; precise memory model of traditional imperative
                programming languages; basic data structures: records, arrays,
                dynamic structures; use of libraries.
              </p>
            </li>

            {/* Computer Science Practice and Experience: Software Development Skills */}
            <li>
              <strong>
                Computer Science Practice and Experience: Software Development
                Skills
              </strong>
              <p>
                Unix and shell programming, makefiles, version control; assembly
                basics, translating high-level language into assembly, parameter
                passing, arrays, recursion; compiling, debugging, profiling, and
                software optimizations.
              </p>
            </li>
            <li>
              <strong>Sprint Methodologies</strong>
              <p>
                Rapid prototyping, testing and iteration of ideas with customers
                using design sprint methodologies. Students will also learn
                about agile development and pathways from idea to market.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </PageWithChildren>
  );
};

export default EducationPage;
