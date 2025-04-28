import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = async () => {
  const readStream = createReadStream("src/zip/files/archive.gz");
  const writeStream = createWriteStream("src/zip/files/fileToCompress.txt");

  readStream.pipe(createGunzip()).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File decompressed and saved");
  });
};

await decompress();
