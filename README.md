# Pink Pig Bank UI

This is a **demo** application of a very simple bank UI.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using [Material UI](https://mui.com/) for the layout and [Keycloak](https://www.keycloak.org/) for user authentication and authorization.

It also depends on [bank-users](https://github.com/pink-pig-bank/bank-users) and [bank-accounts](https://github.com/pink-pig-bank/bank-accounts) applications.

## Local runs

In order to get the application working locally, you must create a `.env` file on the root of the project defining the following variables:

```
REACT_APP_AUTH_URL=<Keycloak URL>
REACT_APP_USERS_API=<bank-users URL>
REACT_APP_ACCOUNTS_API=<bank-accounts URL>
```

Be advised that if any of the services (specially Keycloak) the application depends on is running with HTTPS support, you also must configure SSL support in the UI with:

```
HTTPS=true
SSL_CRT_FILE=<Path to the public key file>
SSL_KEY_FILE=<Path to the private key file>
```

## Container image

The container image extends Nginx alpine, configured to serve on port 80. It uses the following environment variable to configure the application on initialization:

| Variable     | Usage                                                                              |
| :----------- | :--------------------------------------------------------------------------------- |
| SERVER_NAME  | Defines `server_name` parameter of Nginx configuration. E.g.: www.pinkpigbank.zn   |
| AUTH_URL     | Keycloak URL. E.g.: https://keycloak.pinkpigbank.zn                                |
| USERS_API    | Complete URL to the bank-users API. E.g.: https://api.pinkpigbank.zn/api/v1/users       |
| ACCOUNTS_API | Complete URL to the bank-accounts API. E.g.: https://api.pinkpigbank.zn/api/v1/accounts |

To build the image, you first need to generate the production version of the application (see [`npm run build`](#npm-run-build)). To avoid leaking your local configuration into the production build, rename/remove the  `.env` file before running the build.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.