import { promises as fs } from "fs";

const list = async () => {
  const baseFolder = "src/fs/files";

  try {
    await fs.access(baseFolder);
    const files = await fs.readdir(baseFolder);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
