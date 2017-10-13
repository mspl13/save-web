# save-web
A web-based frontend for the [save-api](https://github.com/albalitz/save-api) backend.

## Not supported features
The features below are supported by the backend but not yet by this frontend. They should be added over time.

- Register an account
- Show a specific link by id

## Getting started
This project assumes you have installed the latest version of [yarn](https://yarnpkg.com/en/) and you are already running the latest [save-api](https://github.com/albalitz/save-api) backend server.

1. Clone the repository.
```shell
$ git clone git@github.com:mspl13/save-web.git
$ cd save-web
```
2. Install all dependencies.
```shell
$ yarn install
```
3. Create a `config.local.js` file in `src/app`.
```shell
touch src/app/config.local.js
```
4. Specify the address of your backend server in the newly created `src/app/config.local.js` file and export the variable (it will be imported in the acutal config file).
```javascript
export const serverBaseURL = "https://url.to.backend";
```
5. Start the development server.
```shell
$ yarn start
```

## Testing
To run the [karma](https://karma-runner.github.io/1.0/index.html) test suite simply run the test script.
```shell
$ yarn test
```
