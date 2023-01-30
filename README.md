# Package managers Demo

Monorepo demo project to demonstrate various package managers: [npm](https://docs.npmjs.com/), [yarn](https://classic.yarnpkg.com/lang/en/docs/), [pnpm](https://pnpm.io/motivation)

Packages:
* `my-a` - CommonJs module. Exports `say` function that prints Yeoman saying given message to console. Depends on [`yosay`](https://github.com/yeoman/yosay) package
* `my-b` - ES module. Exports `sayRed` function that colors given message and prints Yeoman. Depends on `my-a`
* `my-c` - ES module. Exports `say` function that colors given message to red if it starts with "red: " prefix and prints Yeoman. Depends on `my-a` and `my-b`. 

## Prerequisites

* Enable [corepack](https://github.com/nodejs/corepack) (requires Node >= 16.9.x, admin rights)
```sh
corepack enable
```

## Getting Started

Checkout one of the branches
* package-managers-npm
* package-managers-yarn
* package-managers-pnpm