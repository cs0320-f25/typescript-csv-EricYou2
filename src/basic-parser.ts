import * as fs from "fs";
import * as readline from "readline";
import * as z from "zod";

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @param schema (Optional) A Zod schema describing the structure of each row.
 * @returns If schema is provided, returns an object with either `data` (array of parsed rows) or `errors` (array of error objects).
 *          If schema is not provided, returns a 2-d array of cell values (string[][]).
 */
export async function parseCSV<T>(
  path: string,
  schema?: z.ZodType<T>
): Promise<{ data: T[] } | { errors: { row: number; error: z.ZodError }[] } | string[][]> {
  // This initial block of code reads from a file in Node.js. The "rl"
  // value can be iterated over in a "for" loop. 
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });

  let result: string[][] = [];
  for await (const line of rl) {
    const values = line.split(",").map((v) => v.trim());
    result.push(values);
  }

  if (!schema) {
    return result;
  }

  const parsedRows: T[] = [];
  const errors: { row: number; error: z.ZodError }[] = [];

  result.forEach((row, idx) => {
    const parsed = schema.safeParse(row);
    if (parsed.success) {
      parsedRows.push(parsed.data);
    } else {
      errors.push({ row: idx + 1, error: parsed.error });
    }
  });

  if (errors.length > 0) {
    return { errors };
  } else {
    return { data: parsedRows };
  }
}