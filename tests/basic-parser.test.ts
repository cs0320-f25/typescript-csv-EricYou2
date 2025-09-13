import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const PEOPLE_COMMA_CSV_PATH = path.join(__dirname, "../data/people_extra_commas.csv");
const PEOPLE_WHITESPACE_CSV_PATH = path.join(__dirname, "../data/people_whitespace.csv");
const PEOPLE_QUOTES_CSV_PATH = path.join(__dirname, "../data/people_extra_quotes.csv");
const PEOPLE_EMPTY_CSV_PATH = path.join(__dirname, "../data/people_empty.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles quoted fields with commas", async () => {
  const results = await parseCSV(PEOPLE_COMMA_CSV_PATH)
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "description"]);
  expect(results[1]).toEqual(["Alice", '"friend"']);
  expect(results[2]).toEqual(["Bob", '"brother"']);
  expect(results[3]).toEqual(["Charlie", '"father, dad"']);
  expect(results[4]).toEqual(["Nim", '"sister"']);
});

test("parseCSV handles whitespace", async () => {
  const results = await parseCSV(PEOPLE_WHITESPACE_CSV_PATH)
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]);
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV handles escaped quotes inside quoted fields", async () => {
  const results = await parseCSV(PEOPLE_QUOTES_CSV_PATH);
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "description"]);
  expect(results[1]).toEqual(["Alice", "friend"]);
  expect(results[2]).toEqual(["Bob", "brother"]);
  expect(results[3]).toEqual(["Charlie", "father"]);
  expect(results[4]).toEqual(["Nim", "sister"]);
});

test("parseCSV handles empty fields", async () => {
  const results = await parseCSV(PEOPLE_EMPTY_CSV_PATH);
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", ""]);
  expect(results[2]).toEqual(["Bob", ""]);
  expect(results[3]).toEqual(["Charlie", ""]);
  expect(results[4]).toEqual(["Nim", ""]);
});