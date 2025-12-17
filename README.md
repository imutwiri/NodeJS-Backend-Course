# NodeJS-TS Examples

Small repository of Node.js + TypeScript example scripts demonstrating core Node APIs (http, fs, path, events, os, async patterns).

## Contents

- `src/` — example TypeScript source files:
  - `node-async.ts`
  - `node-events.ts`
  - `node-fs-path.ts`
  - `node-http-class.ts`
  - `node-http.ts`
  - `node-os.ts`
  - `data/example.txt`

## Prerequisites

- Node.js 16+ (recommended)
- npm

## Install

Install dependencies:

```bash
npm install
```

## Development

Run the project in development (if `package.json` defines a script):

```bash
npm run dev
```

## Build

Compile the TypeScript sources to `dist/`:

```bash
npx tsc
```

After building, run the compiled files with Node, for example:

```bash
node dist/node-http-class.js
```

## Notes

- This repo includes small, focused examples intended for learning Node core modules with TypeScript.
- There's a `tsconfig.json` configured for Node + ESNext features.
- Add a `.gitignore` to exclude `node_modules` and `dist` if you haven't already.

## License

See the `LICENSE` file in the repository.
# NodeJS-Backend-Course