# Trouble-shooting
Fixing various types of issues:
- [Angular Base Architecture](#angular-base-architecture)
  - [Workspace](#workspace)
  - [Workspace](#workspace-1)
  - [Library](#library)
    - [Create and Configure a Library](#create-and-configure-a-library)

## Exploring the dependency graph
To find the circular dependencies and generate a dependency graph.
```sh
npm i -g madge
madge projects/core/src/public-api.ts --ts-config tsconfig.json --image graph.png
```
The rule is: red = bad = circular dependency!

## Exploring the dependency graph