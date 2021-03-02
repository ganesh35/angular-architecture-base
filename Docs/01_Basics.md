# Angular Base Architecture
Creating a new Angular application with clean, maintainable and extendable architecture.

- [Angular Base Architecture](#angular-base-architecture)
  - [Requirements](#requirements)
  - [NodeJs](#nodejs)
  - [Angular / Angular CLI](#angular--angular-cli)
  - [Angular workspace](#angular-workspace)
  - [The Application](#the-application)
  - [Folder structure](#folder-structure)
  - [Tools and Prerequisites](#tools-and-prerequisites)
    - [Install NodeJs](#install-nodejs)
    - [To update npm](#to-update-npm)
  

## Requirements

| Name | Version |
|------|-------------|
| NodeJs | v15.10.0 |
| npm | 7.6.0 |
| Angular | 11.2.3 |

```sh
Angular CLI: 11.2.2
Node: 15.10.0
OS: win32 x64

Angular: 11.2.3
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1102.2
@angular-devkit/core         11.2.2
@angular-devkit/schematics   11.2.2
@angular/cli                 11.2.2
@schematics/angular          11.2.2
@schematics/update           0.1102.2
rxjs                         6.6.6
typescript                   4.1.5
``` 

## NodeJs
Download and install from <https://nodejs.org/en/download/> based on the OS.
```sh
npm install -g npm
```

## Angular / Angular CLI
Run node package manager to install Angular CLI
```sh
npm install -g @angular/cli
```

## Angular workspace
Generate fresh new Angular workspace and this can be achieved by running
```sh
ng new angular-architecture-base --create-application false --strict
```

ng new angular-architecture-base --create-application false --prefix gk

- --create-application false will create an empty workspace
- --strict will adjust the values of some Typescript compiler flags to nudge us to do the right things

## The Application
Generate new Angular CLI workspace (without default application)

##  Folder structure
```bash
├── 01_tf_lambda_py
|   ├── infra/
|   |   └── iam/
|   |   |   ├── lambda-policy.json
|   |   |   └── lambda-assume-policy.json
|   |   ├── variables.tf
|   |   ├── env.test.tfvars
|   |   ├── provider.tf
|   |   ├── lambda-iam.tf
|   |   ├── lambda.tf
|   ├── src/
|   |   └── welcome.py
|   ├── outputs/
|   └── README.md
```




## Tools and Prerequisites
### Install NodeJs
Download and install from <https://nodejs.org/en/download/> based on the OS.

### To update npm
```sh
npm install -g npm
```

$ node -v
v14.15.5

$ npm -v
7.6.0


