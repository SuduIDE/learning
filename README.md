# Package managers Demo

Monorepo demo project to demonstrate various package managers: [npm](https://docs.npmjs.com/), [yarn](https://classic.yarnpkg.com/lang/en/docs/), [pnpm](https://pnpm.io/motivation)

Packages:
* `my-a` - CommonJs module. Exports `say` function that prints Yeoman saying given message to console. Depends on [`yosay`](https://github.com/yeoman/yosay) package
* `my-b` - ES module. Exports `sayRed` function that colors given message and prints Yeoman. Depends on `my-a`
* `my-c` - ES module. Exports `say` function that colors given message to red if it starts with "red: " prefix and prints Yeoman. Depends on `my-a` and `my-b`.

## Branches

* package-managers-yarn-pnp - [Plug-n-play](https://yarnpkg.com/features/pnp) mode for module loading
* package-managers-yarn-pnpm - [pnpm](https://pnpm.io/motivation) mode for module linking

## Getting Started

* Enable [corepack](https://github.com/nodejs/corepack) (requires Node >= 16.9.x, admin rights)
```sh
corepack enable
```
* Activate `yarn` package manager
```sh
corepack prepare yarn@stable --activate
```
* Install dependencies
```sh
yarn
```
* Run scripts
```sh
yarn startA
```
```sh
yarn startB
```
```sh
yarn startC 'red: text'
```