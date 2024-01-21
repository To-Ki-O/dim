export { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
export {
  DenoLandProvider,
  GithubProvider,
  UpgradeCommand,
} from "https://deno.land/x/cliffy@v0.25.7/command/upgrade/mod.ts";

export { CompletionsCommand } from "https://deno.land/x/cliffy@v0.25.7/command/completions/mod.ts";
export { HelpCommand } from "https://deno.land/x/cliffy@v0.25.7/command/help/mod.ts";

export { ensureDir, ensureDirSync, ensureFile } from "https://deno.land/std@0.146.0/fs/mod.ts";

export * as Colors from "https://deno.land/std@0.146.0/fmt/colors.ts";

export * as encoding from "https://cdn.skypack.dev/encoding-japanese";

import { decompress as _decompress } from "https://deno.land/x/zip@v1.2.3/mod.ts";

export { readXLSX, xlsx } from "https://deno.land/x/flat@0.0.14/mod.ts";

import ky from "https://cdn.skypack.dev/ky@0.31.0?dts";
export { ky };

import { HTTPError } from "https://cdn.skypack.dev/ky@0.31.0?dts";
export { HTTPError };
export type { KyResponse, NormalizedOptions, ResponsePromise } from "https://cdn.skypack.dev/ky@0.31.0?dts";

export { Confirm, Input, Number } from "https://deno.land/x/cliffy@v0.25.4/prompt/mod.ts";

export { Sha1 } from "https://deno.land/std@0.146.0/hash/sha1.ts";

export { parse } from "https://deno.land/std@0.174.0/encoding/csv.ts";

export { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export const zipWrapper = {
  decompress: _decompress,
};
export const decompress = (
  // deno-lint-ignore no-explicit-any
  ...args: [filePath: string, destinationPath?: string | null | undefined, options?: any]
): Promise<string | false> => {
  return zipWrapper.decompress.apply(zipWrapper.decompress, args);
};
