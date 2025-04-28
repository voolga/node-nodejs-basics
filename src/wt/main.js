import { Worker } from "worker_threads";
import path from "path";

const performCalculations = async () => {
  const workerPath = path.resolve("src/wt/worker.js");
  const worker = new Worker(workerPath);
  worker.postMessage(7); // 13
  worker.postMessage(12); // 144
  worker.postMessage(15); // 610

  worker.on("message", (result) => {
    console.log(result);
  });
};

await performCalculations();
