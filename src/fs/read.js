import { promises as fs } from "fs";
import path from "path";

const read = async () => {
  const baseFolder = "src/fs/files";
  const fileToRead = path.join(baseFolder, "fileToRead.txt");

  try {
    const content = await fs.readFile(fileToRead, "utf-8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
