import { promises as fs } from "fs";
import path from "path";

const remove = async () => {
  const baseFolder = "src/fs/files";
  const fileToDelete = path.join(baseFolder, "fileToRemove.txt");

  try {
    await fs.access(fileToDelete);
    await fs.unlink(fileToDelete);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
