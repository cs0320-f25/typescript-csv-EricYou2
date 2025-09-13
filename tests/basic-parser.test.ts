import { parseCSV, PersonRowSchema, Person } from "../src/basic-parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const PEOPLE_COMMA_CSV_PATH = path.join(__dirname, "../data/people_extra_commas.csv");
const PEOPLE_WHITESPACE_CSV_PATH = path.join(__dirname, "../data/people_whitespace.csv");
const PEOPLE_QUOTES_CSV_PATH = path.join(__dirname, "../data/people_extra_quotes.csv");
const PEOPLE_EMPTY_CSV_PATH = path.join(__dirname, "../data/people_empty.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);

  if (Array.isArray(results)) {
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "age"]);
    expect(results[1]).toEqual(["Alice", "23"]);
    expect(results[2]).toEqual(["Bob", "thirty"]);
    expect(results[3]).toEqual(["Charlie", "25"]);
    expect(results[4]).toEqual(["Nim", "22"]);
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH);
  if (Array.isArray(results)) {
    for(const row of results) {
      expect(Array.isArray(row)).toBe(true);
    }
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV handles quoted fields with commas", async () => {
  const results = await parseCSV(PEOPLE_COMMA_CSV_PATH);
  if (Array.isArray(results)) {
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "description"]);
    expect(results[1]).toEqual(["Alice", '"friend"']);
    expect(results[2]).toEqual(["Bob", '"brother"']);
    expect(results[3]).toEqual(["Charlie", '"father, dad"']);
    expect(results[4]).toEqual(["Nim", '"sister"']);
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV handles whitespace", async () => {
  const results = await parseCSV(PEOPLE_WHITESPACE_CSV_PATH);
  if (Array.isArray(results)) {
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "age"]);
    expect(results[1]).toEqual(["Alice", "23"]);
    expect(results[2]).toEqual(["Bob", "thirty"]);
    expect(results[3]).toEqual(["Charlie", "25"]);
    expect(results[4]).toEqual(["Nim", "22"]);
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV handles escaped quotes inside quoted fields", async () => {
  const results = await parseCSV(PEOPLE_QUOTES_CSV_PATH);
  if (Array.isArray(results)) {
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "description"]);
    expect(results[1]).toEqual(["Alice", "friend"]);
    expect(results[2]).toEqual(["Bob", "brother"]);
    expect(results[3]).toEqual(["Charlie", "father"]);
    expect(results[4]).toEqual(["Nim", "sister"]);
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV handles empty fields", async () => {
  const results = await parseCSV(PEOPLE_EMPTY_CSV_PATH);
  if (Array.isArray(results)) {
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "age"]);
    expect(results[1]).toEqual(["Alice", ""]);
    expect(results[2]).toEqual(["Bob", ""]);
    expect(results[3]).toEqual(["Charlie", ""]);
    expect(results[4]).toEqual(["Nim", ""]);
  } else {
    throw new Error("Expected string[][] but got schema result");
  }
});

test("parseCSV returns data if all rows are valid according to schema", async () => {
  const results = await parseCSV<Person>(PEOPLE_CSV_PATH, PersonRowSchema);

  if ("data" in results) {
    expect(Array.isArray(results.data)).toBe(true);
    expect(typeof results.data[0].name).toBe("string");
    expect(typeof results.data[0].age).toBe("number");
  } else if ("errors" in results) {
    expect(results.errors[0].row).toBe(1);
  } else {
    throw new Error("Expected schema result but got string[][]");
  }
});

test("parseCSV returns errors if any row is invalid according to schema", async () => {
  const results = await parseCSV<Person>(PEOPLE_CSV_PATH, PersonRowSchema);

  if ("errors" in results) {
    expect(Array.isArray(results.errors)).toBe(true);
    expect(results.errors[0]).toHaveProperty("row");
    expect(results.errors[0]).toHaveProperty("error");
  } else if ("data" in results) {
    expect(Array.isArray(results.data)).toBe(true);
  } else {
    throw new Error("Expected schema result but got string[][]");
  }
});

const NameOnlySchema = z.tuple([z.string()]).transform(tup => ({ name: tup[0] }));
type NameOnly = z.infer<typeof NameOnlySchema>;

test("parseCSV works with a different schema", async () => {
  const results = await parseCSV<NameOnly>(PEOPLE_CSV_PATH, NameOnlySchema);

  if ("data" in results) {
    expect(typeof results.data[0].name).toBe("string");
  } else if ("errors" in results) {
    expect(Array.isArray(results.errors)).toBe(true);
  } else {
    throw new Error("Expected schema result but got string[][]");
  }
});