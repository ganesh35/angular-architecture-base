# Angular Base Architecture
Creating a new Angular application with clean, maintainable and extendable architecture.

- [Angular Base Architecture](#angular-base-architecture)
  - [Workspace](#workspace)
  - [Application](#application)
  - [The Application Architecture](#the-application-architecture)
  - [Core Module](#core-module)
  - [Layout](#layout)
  - [The Lazy Modules](#the-lazy-modules)

## Workspace
Generate fresh new Angular workspace and this can be achieved by running
```sh
ng new angular-architecture-base --create-application false --strict --prefix gk
```
## Application

```sh
ng g application control --prefix gk --style css --routing
```
## The Application Architecture
![App Architecture](/assets/app-arch.jpg)

Application will have 2 main parts…
- The eager part which will be loaded from start (the main.js bundle). It will contain the AppModule with top-level routes and CoreModule with basic layout and all the core singleton services which will be used throughout the whole application.
- The lazy loaded features which will be loaded as a result of user navigation to these features. The lazy modules will also import SharedModule. This will be a result of carefully evaluated trade-off between smallest possible bundle size and reasonable developer experience!
  
## Core Module

```sh
ng g m core


cat > projects/control/src/app/core/core.module.ts <<'EOL'
// projects/control/src/app/core/core.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ]
})
export class CoreModule { }
EOL

cat > projects/control/src/app/app.module.ts <<'EOL'
// projects/control/src/app/app.module.ts
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
EOL
cat > projects/control/src/app/app.component.html <<'EOL'
<h1>Hello World!</h1>
<p>control app is running!</p>
EOL


```

## Layout
```sh
npm install --save @angular/material
ng g c core/layout/main-layout
```


## The Lazy Modules


