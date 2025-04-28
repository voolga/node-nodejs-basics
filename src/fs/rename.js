import { promises as fs } from "fs";
import path from "path";

const rename = async () => {
  const baseFolder = "src/fs/files";
  const wrongNamedFile = path.join(baseFolder, "wrongFilename.txt");
  const newNamedFile = path.join(baseFolder, "properFilename.md");

  try {
    await fs.access(wrongNamedFile);

    try {
      await fs.access(newNamedFile);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await fs.rename(wrongNamedFile, newNamedFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
