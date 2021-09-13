# About

### Stack contains:

-   Typescript
-   Electron
-   React
-   TypeORM
-   SQLite3
-   Webpack
-   Babel

#### This stack comes with few limitations due to bug(?) in webpack which causes usage of TypeORM on renderer process to be almost impossible.([#4210](https://github.com/typeorm/typeorm/issues/4210))

---

The main idea of this stack is to use TypeORM on main process and communicate with renderer process by usage of remote/ipc calls.

# Compatibility table

| OS      | Status             |
| ------- | ------------------ |
| Windows | ✔️      |
| Linux   | :heavy_check_mark: |
| Mac     | :heavy_check_mark: |

# Installation

1. Clone this repository
2. Remove .gitignore
3. Call npm install to download required dependencies.
4. Have fun :)

# Usage

    npm start

Starts your app in development mode using the same terminal for electron and webpack-dev-server

    npm build

Bundles your app using production config.

    npm run build:dev

Bundles your app using development config.

    npm run package

Packages your app using electron-builder (config can be found in ./electron-builder.json)

    npm run start:dev

Starts webpack-dev-server.

    npm run start:electron

Starts electron instance in development mode.

# Troubleshooting

> -   Webpack-dev-server doesn't notice any changes I make to code.
> -   React-hot-loader doesn't work.

Make sure that you have enough
[watchers](https://webpack.js.org/configuration/watch/#not-enough-watchers).

> -   Webpack warns about not being able to find database drivers in console.

TypeORM has conditional dependencies on other databases (mysql, mssql...) and webpack has no idea which one are needed and tries to load all of them and warnings pop out.

# TODO

-   Improve the sample code.
-   Setup tests.
