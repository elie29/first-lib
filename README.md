# DemoLibs

## Install angular/angular-cli 91.1.12

```
npm uninstall -g @angular/cli
npm cache verify
npm install -g @angular/cli@9.1.12
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Steps

```
ng new demo-libs --create-application=false
cd demo-libs
ng generate library first-lib

ng generate application libs-showcase
```

## Adjust package information

- Modify information in package.json (remove private and add name and keywords...)
- Adjust tsconfig.json
- add a feature with ngPackage

## Add lib dependency

lib dependency should be added as peerDependencies and installed in the main project. No dependency shared between libs

## change version

npm version 0.0.2 && cd projects/first-lib/ && npm version 0.0.2

## build

from root project launch: npm run build

## publish

cd dist/first-lib/ && npm publish --access public

# Consume a module

in order to consume a module, we add first the library:

- npm i @elie29/first-lib
- then import any module: import { FeatureAModule } from '@elie29/first-lib';
