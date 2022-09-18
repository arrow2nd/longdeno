import { parse } from "flags";
import { longdeno } from "./mod.js";

const args = parse(Deno.args);
const length = args.n;

// help
if (!length) {
  console.log(`
Usage:
  longdeno -n <number>

Options:
  -n <number> : Neck length (number > 0)
`);
  Deno.exit(0);
}

// 🦕
console.log(longdeno(length));
