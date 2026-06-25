# Default vs Named (Non-default) Exports

This note explains the difference between default exports and named (non-default) exports in JavaScript/TypeScript, with concise examples and import patterns.

## Default export
- A module can have at most one `default` export.
- Use `export default` to mark the primary value the module exposes.
- When importing, you choose a local name for the default export.

Syntax examples:

```js
// module: utils.js
export default function calculate() {
  // ...
}

// importing
import calculate from './utils.js';
```

You can also export a value directly:

```js
export default 42;
// import using any name you prefer
import answer from './module.js';
```

## Named (non-default) exports
- A module can export multiple named bindings using `export`.
- Named exports must be imported by their exported name (or renamed with `as`).

Syntax examples:

```js
// module: helpers.js
export function add(a, b) { return a + b; }
export const VERSION = '1.0';

// importing
import { add, VERSION } from './helpers.js';
// or rename
import { add as sum } from './helpers.js';
```

## Mixing default and named exports
A module can export a default plus any number of named exports.

```js
// module: mixed.js
export default function main() {}
export const helper = () => {};

// importing both
import main, { helper } from './mixed.js';
```

## Re-exporting
You can re-export defaults and named exports from another module.

```js
// re-export the default
export { default } from './other.js';
// re-export named
export { foo, bar } from './other.js';
```

## Importing differences (summary)
- Default: `import whateverName from './module';`
- Named: `import { exactName } from './module';`
- Both: `import defaultName, { named1, named2 } from './module';`

## When to use which
- Use `default` when a module has a single primary export (a single class, function, or value).
- Use named exports when the module should expose multiple utilities or constants.
- Named exports make IDE auto-imports and refactors safer (names are explicit).

## Examples referencing your workspace files
- `chapter_20_Typescript_Basics/EXPORT_IMPORT_169_utils.js` — likely contains utility exports (could be named exports).
- `chapter_20_Typescript_Basics/EXPORT_IMPORT/170_Logger.js` — likely contains a logger implementation (could be a default export if it's the main export).

Example patterns you might see or adopt:

```js
// If 169_utils.js uses named exports
// chapter_20_Typescript_Basics/EXPORT_IMPORT_169_utils.js
export function formatDate(d) { /*...*/ }
export function parseIntSafe(s) { /*...*/ }

// import where used
import { formatDate, parseIntSafe } from '../chapter_20_Typescript_Basics/EXPORT_IMPORT_169_utils.js';
```

```js
// If 170_Logger.js exports a default logger
// chapter_20_Typescript_Basics/EXPORT_IMPORT/170_Logger.js
export default class Logger { /*...*/ }

// import where used
import Logger from '../chapter_20_Typescript_Basics/EXPORT_IMPORT/170_Logger.js';
const logger = new Logger();
```

## Notes
- Default exports are imported without curly braces; named exports require curly braces.
- You can rename both default and named imports on import:
  - Default: `import LocalName from './mod';`
  - Named: `import { exportedName as LocalName } from './mod';`

---
Created to clarify `default` vs named exports and practical import patterns.
