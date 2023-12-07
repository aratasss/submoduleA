import { fromFileUrl } from "https://deno.land/std@0.208.0/path/posix/from_file_url.ts";
const p = fromFileUrl("file:///home/foo");
console.log(p); // "/home/foo"