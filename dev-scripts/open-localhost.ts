import { spawn } from "node:child_process";
import open from "open";

const child = spawn("next", ["dev"], { stdio: ["inherit", "pipe", "inherit"] });
let opened = false;
child.stdout.on("data", (data: Buffer) => {
  const text = data.toString();
  process.stdout.write(text);
  if (!opened && text.includes("Ready")) {
    opened = true;
    open("http://localhost:3000");
  }
});

child.on("exit", (code) => process.exit(code ?? 0));
