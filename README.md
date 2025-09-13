# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    Initial concerns: 
    1. How will the parser work on faulty data or type checking of the data? If we have columns that are specifically asking for something like how age should be a number, there should be a standard why of organizing it so the user/developer knows what the output data type will be.
    2. Since the CSV should be able to hold all types of information, what is going to happen if we have quotes in the description? Most interpreters using quotations to indicate strings and will manually remove quotations from text. Let's say that I want a column of quotes said by people, how will that get misinterpreted by the parser?
    3. Along the lines of faulty data, mismatched quotes might be done with purpose or just an error in the given CSV. There needs to be a standard that will either remove this data based on the user's wishes or keep it exactly how it was inputted and leave it up to the user on further checking the parsed data. Maybe mismatched quotes are given if you're a teacher reading over a student's work and trying to parse that work is part of your job, how will the parser make this teacher's life easier?
    4. Commas are the choice of delimiter in CSV, however it is not uncommon to have a comma within a certain column if you want to list multiple things. The CSV parser should be able to determine which commas are used to separate fields and which commas are used in a description for example and kept so the data is not misinterpreted.

- #### Step 2: Use an LLM to help expand your perspective.

    1. Prompt 1: "I’m working on a CSV parser in TypeScript that currently accepts a filename as input and converts rows into strings or objects. What are some missing features or edge cases that I should consider? What improvements would make it easier for other developers to use in different kinds of apps?"

    2. Prompt 2: "I am making a  CSV parser in TypeScript. I want to feed it a filename and it should convert the contents into a useful data structure. What are some possible features or edge cases that I should consider and what would be good to have to lubricate developer experience?"

    3. Prompt 3: "I want a  CSV parser in TypeScript. It should take a filename as the input and return the rows of data parsed. What are some features or edge cases that I should consider and what would a developer using this parser need for this parser to be useful?"

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    1.  "Quoted Fields: Handle fields with quotes, including escaped quotes and commas inside quotes." - functionality (ME AND THE LLM)
    User story: "As a user, I can correctly parse fields that contain quotes so that I can correctly extract all data without misinterpreting values and avoid errors."

    2. "Type Conversion/Checking: Allow automatic conversion of numbers, booleans, or dates." - functionality (ME AND THE LLM)
    User story: "As a developer, I can avoid the redudancy of creating type conversion so I can correctly use the data in the CSV as the datatype intended.

    3. "Header Row: Option to treat the first row as headers and map rows to objects." - functionality (LLM)
    User story: “As a user, I can choose to treat the first row as headers so that each subsequent row is mapped to objects with meaningful key-value pairs instead of just raw arrays.”

    4. "Error Handling: Provide clear errors for malformed CSV (e.g., unclosed quotes, inconsistent columns)." - functionality (LLM)
    User story: "As a user, I receive clear and descriptive error messages when the CSV file is malformed so that I can quickly fix formatting issues in my data."

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.)
    
    My initial ideas for the CSV parser all had to deal with how it was going to make sure the data was valid and what would happen if the data was faulty. This is different from what the LLM suggeseted as it was more focused on the developer experience instead of the data checking itself. It sort of imagined that the parser was going to be good enough at a baseline and was adding more features onto it. For example, with all three of the prompts, the LLM suggested having custom delimiters to help developers, error handling to give more clarity to the user, an API endpoint so parseCSV could be called, and performance benchmarking to check for efficient parsing on large files. Other suggestions it gave were similar to what I had thought originally like seeing if commas would be a problem if wrapped in quotes, or what would happen to the header if one was provided or not. I agreed with a lot of the suggestions like error handling and data checking since that should be a given to help the user use the product. However, I disagreed with needing a lot of extraneous features like the API or allowing custom delimiters because the sole purpose of a CSV parser is to parse COMMA separated values, not semicolon separated values or tab separated values. It was focusing of efficiency when at this stage, I would rather be focused on functionality and complete edge case coverage rather than how fast we can parse a large file, although this is a real concern for future iterations.

### Design Choices

### 1340 Supplement (In Supplemental.txt)

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs: Commas inside quotes are not accounted for, mismatched quotes are not accounted for
#### Tests: quotes with commas, whitespace, quotes inside quotes, empty input, valid data matching schema, valid data mismatching schema, different schemas, returns string[][] when schema is undefined
#### How To… npm install, npm test

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): Github Copilot
#### Total estimated time it took to complete project:
#### Link to GitHub Repo: https://github.com/cs0320-f25/typescript-csv-EricYou2
