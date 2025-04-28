import { promises as fs } from "fs";
import path from "path";

const copy = async () => {
  const sourceFolder = "src/fs/files";
  const destinationFolder = "src/fs/files_copy";

  try {
    await fs.access(sourceFolder);

    try {
      await fs.access(destinationFolder);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await fs.mkdir(destinationFolder, { recursive: true });
    const files = await fs.readdir(sourceFolder);

    for (const file of files) {
      const sourceFile = path.join(sourceFolder, file);
      const destinationFile = path.join(destinationFolder, file);
      await fs.copyFile(sourceFile, destinationFile);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
