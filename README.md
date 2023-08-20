# Reset Password Practice

This project is a practice with React and TypeScript to build a reset-password page with password validation.

### Requirements
#### `Password Should`
- Not empty
- At least 8 characters
- At least 1 number
- At least 2 special characters
Or:
- More than 15 characters with no restriction

**_Note_**: The "Reset" button should only be enabled if the new password is valid.

#### `Screenshots`

![Kapture 2023-08-20 at 21 48 00](https://github.com/ivyfu77/reset-password/assets/23366740/7bc711c9-a725-4975-8a08-ba297c68b2e9)


### Assumptions
- Assume user gets this reset password link in a secure way (eg: by a registered email)

### Limitations
- It's just a validation PoC, clicking "Reset" button won't happen anything
- Ideally should add `ConfirmPassword` functionalities to make sure user has remembered his new password, but doesn't have enough time to finish it

## Available Scripts

In the project directory, you can run:

### `yarn install`

To install all necessary dependencies and set up your environment.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
