import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const readStream = createReadStream(
    "src/hash/files/fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
