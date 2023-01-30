# Package managers Demo

Monorepo demo project to demonstrate various package managers: [npm](https://docs.npmjs.com/), [yarn](https://classic.yarnpkg.com/lang/en/docs/), [pnpm](https://pnpm.io/motivation)

Packages:
* `my-a` - CommonJs module. Exports `say` function that prints Yeoman saying given message to console. Depends on [`yosay`](https://github.com/yeoman/yosay) package
* `my-b` - ES module. Exports `sayRed` function that colors given message and prints Yeoman. Depends on `my-a`
* `my-c` - ES module. Exports `say` function that colors given message to red if it starts with "red: " prefix and prints Yeoman. Depends on `my-a` and `my-b`.

## Getting Started

* Enable [corepack](https://github.com/nodejs/corepack) (requires Node >= 16.9.x, admin rights)
```sh
corepack enable
```
* Activate `pnpm` package manager
```sh
corepack prepare pnpm@latest --activate
```
* Install dependencies
```sh
pnpm i
```
* Run scripts
```sh
pnpm startA
```
```sh
pnpm startB
```
```sh
pnpm startC 'red: text'
```