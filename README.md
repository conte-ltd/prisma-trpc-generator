[![npm version](https://badge.fury.io/js/prisma-trpc-generator.svg)](https://badge.fury.io/js/prisma-trpc-generator)
[![npm](https://img.shields.io/npm/dt/prisma-trpc-generator.svg)](https://www.npmjs.com/package/prisma-trpc-generator)
[![HitCount](https://hits.dwyl.com/conte-ltd/prisma-trpc-generator.svg?style=flat)](http://hits.dwyl.com/conte-ltd/prisma-trpc-generator)
[![npm](https://img.shields.io/npm/l/prisma-trpc-generator.svg)](LICENSE)



<p align="center">
  <a href="https://github.com/conte-ltd/prisma-trpc-generator">
    <img src="https://raw.githubusercontent.com/conte-ltd/prisma-trpc-generator/master/logo.png" alt="Logo" width="200" height="200">
  </a>
  <h3 align="center">Prisma tRPC Generator</h3>
  <p align="center">
    A Prisma generator that automates creating your tRPC routers from your Prisma schema.
    <br />
    <a href="https://github.com/conte-ltd/prisma-trpc-generator#additional-options"><strong>Explore the options »</strong></a>
    <br />
    <br />
    <a href="https://github.com/conte-ltd/prisma-trpc-generator/issues/new?template=bug_report.yml">Report Bug</a>
    ·
    <a href="https://github.com/conte-ltd/prisma-trpc-generator/issues/new?template=feature_request.md">Request Feature</a>
  </p>
</p>


## Table of Contents

- [About The Project](#about-the-project)
- [Supported Prisma Versions](#supported-prisma-versions)
- [Installation](#installation)
- [Usage](#usage)
- [Additional Options](#additional-options)

# About The Project

Automatically generate fully implemented tRPC routers from your [Prisma](https://github.com/prisma/prisma) Schema. This includes routers, app router and of course all input schemas using [Zod](https://github.com/colinhacks/zod). Updates every time `npx prisma generate` runs.

# Supported Prisma Versions

### Prisma 4  
- 0.2.0 and higher
### Prisma 2/3 
- 0.1.12 and lower

# Installation

Using npm:

```bash
 npm install @conte-ltd/prisma-trpc-generator @conte-ltd/prisma-zod-generator
```

Using yarn:

```bash
 yarn add @conte-ltd/prisma-trpc-generator @conte-ltd/prisma-zod-generator
```

# Usage

1- Star this repo 😉

2- Add the generator to your Prisma schema

```prisma
generator trpc {
  provider         = "prisma-trpc-generator"
  baseRouterPath   = "../../../src/router"
  baseRouterName   = "baseRouter"
  createRouterName = "createRouter"
}
```

3- Enable strict mode in `tsconfig` as it is required by Zod, and considered a Typescript best practice

```ts
{
  "compilerOptions": {
    "strict": true
  }
}

```

4- Running `npx prisma generate` for the following schema.prisma

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String
  content   String?
  published Boolean  @default(false)
  viewCount Int      @default(0)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}
```

will generate

![tRPC Routers](https://raw.githubusercontent.com/conte-ltd/prisma-trpc-generator/master/trpcRouters.png)

5- Make sure you have a valid `Context` file, as specified in `contextPath` option. The official [tRPC docs](https://trpc.io/docs/context) for reference.

# Additional Options

| Option             |  Description                                               | Type      |  Default                  |
|--------------------|------------------------------------------------------------| --------- |---------------------------|
| `output`           | Output directory for the generated routers and zod schemas | `string`  | `./generated`             |
| `baseRouterPath`   | Sets the base router path used in your routers             | `string`  | `../../../../src/context` |
| `baseRouterName`   | Sets the base router name used in your routers             | `string`  | `baseRouter`              |
| `createRouterName` | Sets the create router name used in your routers           | `string`  | `createRouter`            |

Example of `bathRouter` and `createRouter`

```ts
import * as trpc from '@trpc/server';
import { Context } from './context';

export const createRouter = () => {
  return trpc.router<Context>();
};

export const baseRouter = createRouter();
```
