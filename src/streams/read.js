import { createReadStream } from "fs";

const read = async () => {
  const fileToRead = "src/streams/files/fileToRead.txt";

  const readStream = createReadStream(fileToRead);

  readStream.pipe(process.stdout);

  readStream.on("error", (error) => {
    throw new Error(error.message);
  });

  readStream.on("end", () => {
    console.log("\nEnd of file");
  });
};

await read();
