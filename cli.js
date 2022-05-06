import { longdeno } from "./mod.js";
import { parse } from "./deps.js";

const args = parse(Deno.args);
const length = args.n;

// help
if (!length) {
  console.log(`
Usage:
  longdeno -n <number>

Options:
  -n <number> : Neck length. (number > 0)
`);
  Deno.exit(0);
}

// deno-kun
console.log(longdeno(length));
