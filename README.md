# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    Initial concerns: data/type checking, quotes in the description, mismatched quotes, commas in the description

- #### Step 2: Use an LLM to help expand your perspective.

Prompt 1: "“I’m working on a CSV parser in TypeScript that currently accepts a filename as input and converts rows into strings or objects. What are some missing features or edge cases that I should consider? What improvements would make it easier for other developers to use in different kinds of apps?”"

Missing Features & Edge Cases
Custom Delimiters: Support for delimiters other than commas (e.g., semicolons, tabs).
Quoted Fields: Handle fields with quotes, including escaped quotes and commas inside quotes.
Line Endings: Support both \n (Unix) and \r\n (Windows) line endings.
Header Row: Option to treat the first row as headers and map rows to objects.
Empty Lines: Skip or handle empty lines gracefully.
Whitespace Trimming: Optionally trim whitespace from fields.
Type Conversion: Allow automatic conversion of numbers, booleans, or dates.
Error Handling: Provide clear errors for malformed CSV (e.g., unclosed quotes, inconsistent columns).
Streaming Support: Parse large files without loading the entire file into memory.
Unicode/Encoding: Handle different file encodings (e.g., UTF-8, UTF-16).
Comments: Optionally skip lines starting with a comment character (e.g., #).

Improvements for Developer Usability
Typed Output: Use TypeScript generics for strong typing of parsed objects.
Flexible Input: Accept input as a string, stream, or file (not just filename).
Async API: Provide both synchronous and asynchronous parsing options.
Documentation: Include clear usage examples and API docs.
Configurable Options: Allow users to customize parsing behavior via options.
Error Reporting: Return detailed error objects, not just strings.
Integration: Make it easy to use with popular frameworks (Node.js, browser, etc.).
Testing: Include a comprehensive test suite and edge case coverage.

Prompt 2: "“I am making a  CSV parser in TypeScript. I want to feed it a filename and it should convert the contents into a useful data structure. What are some possible features or edge cases that I should consider and what would be good to have to lubricate developer experience?"

Features & Edge Cases
Custom Delimiters: Support for commas, semicolons, tabs, etc.
Quoted Fields: Handle fields with quotes, including escaped quotes ("a, ""b""").
Newlines in Fields: Support for line breaks inside quoted fields.
Header Row: Option to use the first row as keys for objects.
Type Inference: Convert numbers, booleans, and nulls automatically.
Empty Fields: Handle missing values gracefully.
Comment Lines: Option to skip lines starting with # or other markers.
Unicode & Encoding: Handle UTF-8 and other encodings.
Large Files: Stream parsing for large files to avoid memory issues.
Error Handling: Clear errors for malformed CSVs.

Developer Experience Enhancements
TypeScript Types: Strong typings for parsed data.
Async API: Promise or async/await support for file reading.
Streaming API: For processing large files row-by-row.
Custom Row Mapping: Allow users to provide a function to transform rows.
Documentation & Examples: Clear usage docs and code samples.
Integration: Easy to use with Node.js file system or browser File API.
Testing Utilities: Helpers for testing CSV parsing in unit tests.

Prompt 3: “I want a  CSV parser in TypeScript. It should take a filename as the input and return the rows of data parsed. What are some features or edge cases that I should consider and what would a developer using this parser need for this parser to be useful?"

Features & Edge Cases
Custom Delimiters: Support for commas, semicolons, tabs, etc.
Quoted Fields: Handle fields enclosed in quotes, including escaped quotes inside fields.
Newlines in Fields: Support for line breaks within quoted fields.
Header Row: Option to treat the first row as headers and return objects instead of arrays.
Type Conversion: Optionally convert values to numbers, booleans, or dates.
Empty Fields: Handle missing or empty values gracefully.
Whitespace Trimming: Option to trim whitespace around fields.
Comment Lines: Ability to skip lines starting with a comment character (e.g., #).
Error Handling: Clear errors for malformed CSV (e.g., unclosed quotes).
Large Files: Stream parsing for large files to avoid memory issues.
Unicode Support: Correctly handle UTF-8 and other encodings.

What Developers Need
Simple API: Easy-to-use function or class, e.g., parseCSV(filename): Promise<Row[]>.
Documentation: Clear docs on options, return types, and error handling.
Type Definitions: Strong TypeScript typings for input and output.
Performance: Efficient parsing, especially for large files.
Extensibility: Ability to customize parsing options (delimiter, headers, etc.).
Sync & Async: Support for both synchronous and asynchronous file reading.


- #### Step 3: use an LLM to help expand your perspective.

    1.  "Quoted Fields: Handle fields with quotes, including escaped quotes and commas inside quotes." - functionality (ME AND THE LLM)
    User story: "As a user, I can correctly parse fields that contain quotes so that I can correctly extract all data without misinterpreting values and avoid errors."

    2. "Type Conversion/Checking: Allow automatic conversion of numbers, booleans, or dates." - functionality (ME AND THE LLM)
    User story: "As a developer, I can avoid the redudancy of creating type conversion so I can correctly use the data in the CSV as the datatype intended.

    3. "Header Row: Option to treat the first row as headers and map rows to objects." - functionality (LLM)
    User story: “As a user of the CSV parser, I can choose to treat the first row as headers so that each subsequent row is mapped to objects with meaningful key-value pairs instead of just raw arrays.”

    4. "Error Handling: Provide clear errors for malformed CSV (e.g., unclosed quotes, inconsistent columns)."
    User story: "As a user of the CSV parser, I receive clear and descriptive error messages when the CSV file is malformed so that I can quickly fix formatting issues in my data."


    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): Github Copilot
#### Total estimated time it took to complete project: 
#### Link to GitHub Repo: https://github.com/cs0320-f25/typescript-csv-EricYou2
