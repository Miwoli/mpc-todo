# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Docker build

Run `docker build -t <name:dev> .` to build Docker image of this app for development purpose, or run `docker build -f Dockerfile-prod -t <name:prod> .` to build production version of the app.

## Development server (Docker version)

Run `docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm <name:dev>` to start Docker version on development serwer. You can access the app via `http://localhost:4200/`. It'll automatically reload on changes in source files.

## Development server (without Docker)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run production app (Docker version)

Run `docker run -it -p 80:80 --rm <name:prod>` to start the app. Navigate to `http://localhost` to start using it. Enjoy!

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build (without Docker)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
