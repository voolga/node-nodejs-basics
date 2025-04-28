import { createWriteStream } from "fs";

const write = async () => {
  const writeStream = createWriteStream("src/streams/files/fileToWrite.txt");

  writeStream.on("error", (error) => {
    throw new Error(error.message);
  });

  process.stdin.pipe(writeStream);
};

await write();
