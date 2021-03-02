# Library

## Creating a Core Library 
```sh
ng generate library core
```

File Changes:
# angular.json
```json
"projects": {
	...
	"blog": {
		"core": {
		      "projectType": "library",
		      "root": "projects/core",
		      "sourceRoot": "projects/core/src",
		      "prefix": "lib",
		      "architect": {
		        "build": {
		          "builder": "@angular-devkit/build-ng-packagr:build",
	...	    		
```

## build, test, and lint the project with CLI commands:
```sh
ng build core
ng test core
ng lint core
```

## Publishing Library
```sh
ng build core
cd dist/core
npm publish
```


## Using core library in apps
```sh
ng build core
```

import to app
```javascript
import { CoreModule } from 'core';
```


## Incremental build
Incremental builds can be run as a backround process in your dev environment. To take advantage of this feature add the --watch flag to the build command:
```sh
ng build core --watch
```

always run ng server after the above command