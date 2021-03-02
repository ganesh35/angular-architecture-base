# Angular Base Architecture
Creating a new Angular application with clean, maintainable and extendable architecture.

- [Angular Base Architecture](#angular-base-architecture)
  - [Requirements](#requirements)
  - [NodeJs](#nodejs)
  - [Angular / Angular CLI](#angular--angular-cli)
  - [Workspace](#workspace)
  - [Library](#library)
    - [Create and Configure a Library](#create-and-configure-a-library)
    - [Library Elements](#library-elements)
      - [Manual process](#manual-process)
      - [Automated process](#automated-process)
  - [Running Library](#running-library)
  - [Folder structure](#folder-structure)
  

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

## Workspace
Generate fresh new Angular workspace and this can be achieved by running
```sh
ng new angular-architecture-base --create-application false --strict --prefix gk
```









------------------------------------------------------------







## Library
### Create and Configure a Library
Generate new library in the workspace 
```sh
ng g library core --prefix gk
```
Changes to nested (lib) package.json
**File:** projects/core/package.json
**Old**
```json
{
  "name": "core",
```
**New**
```json
{
  "name": "@gk/core",
```
Adjust the root tsconfig.json file by replacing original paths content with the following…
**File:** /
**Old**
```json
"paths": {
      "core": [
        "dist/core/core",
        "dist/core"
      ]
    },
```
**New**
```json
"paths": {
      "@gk/core": [
        "projects/core/*",
        "projects/core"
      ],
      "@gk/core": [
        "dist/core/*",
        "dist/core"
      ]
    },
```
The first entry (with the @gk/core/* is used during the development when referencing sub-entries from each other…
The second entry is used during the build to produce library artifacts that can be consumed by the applications in desired way…

**Optional**
Delete the content of the projects/core/src/lib/ folder and remove content of the root public-api.ts file so that it’s empty.

### Library Elements
Creating sub elements 
#### Manual process
Create required folders and files
```sh
mkdir projects/core/src/lib
mkdir projects/core/src/lib/feature-a
cd  projects/core/src/lib/feature-a
touch index.ts package.json public-api.ts
touch a.service.spec.ts
touch a.service.ts
echo '{
  "ngPackage": {
    "lib": {
      "entryFile": "public-api.ts",
      "cssUrl": "inline"
    }
  }
}' >> package.json

echo 'export * from './a.service';' >> public-api.ts
echo 'export * from './public-api';' >> index.ts

cat > a.service.spec.ts <<'EOL'
import { TestBed } from '@angular/core/testing';

import { AService } from './a.service';

describe('AService', () => {
  let service: AService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
EOL

cat > a.service.ts <<'EOL'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor() { }
}
EOL

cd projects/core/src

cat >> public-api.ts <<'EOL'
export * from '@gk/core/src/lib/feature-a';'
EOL
```
#### Automated process
Using ng-samurai Angular Schematics collection and use it to generate additional sub-entry

The --gm and --gc flags stand for generate module and generate component respectively so depending on our feature we might want to generate default module and component but we might also skip them for service only sub-entries…

```sh
npm i -D ng-samurai
cd projects/core/src/lib
ng g ng-samurai:generate-subentry feature-b --gm false --gc false
ng g s feature-b/b
ng g ng-samurai:generate-subentry feature-c --gm false --gc false
ng g s feature-c/c

cat > feature-b/b.service.ts <<'EOL'
import { Injectable } from '@angular/core';

import { CService } from '@my-org/some-lib/src/lib/feature-c';

@Injectable({
  providedIn: 'root',
})
export class BService {
  constructor(private c: CService) {}
}
EOL

cd projects/core/src

cat >> public-api.ts <<'EOL'
export * from '@gk/core/src/lib/feature-b';'
export * from '@gk/core/src/lib/feature-c';'
EOL
```

## Running Library
















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



https://medium.com/@tomastrajan/how-to-build-epic-angular-app-with-clean-architecture-91640ed1656