# Music Curation Frontend
Helpful links and documentation on tech in this app.

  - [Create React App](https://github.com/facebookincubator/create-react-app)
  - [Create React App Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
  - [Semantic UI components](https://react.semantic-ui.com/introduction)
  - [Redux](https://redux.js.org/introduction)
    - [Ducks pattern for reducer bundles](https://github.com/reduxjs/redux-thunk)
    - [Redux thunk: helps build async action creators](https://github.com/reduxjs/redux-thunk)
    - [Seamless Immutable: immutable data lib for redux](https://github.com/rtfeldman/seamless-immutable)
  - [Recycle:  Convert functional/reactive object description using RxJS into React component](https://github.com/recyclejs/recycle)
    - [Example recycle app using redux](https://github.com/recyclejs/recycle/tree/master/examples/redux-todos)
    - [RxJs 5.X docs: Recycle uses this version under the hood](https://github.com/ReactiveX/rxjs/tree/stable)
  - [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
    - [React Router Redux: keep router info in sync with redux store](https://github.com/reactjs/react-router-redux)
  - [React Storybook](https://storybook.js.org)
  - [Hygen: The scalable code generator that saves you time](http://www.hygen.io/)


 

## Prerequisites
```
$ npm i -g @storybook/cli
```

## LOCAL DEV

### [TAB 1]
```
$ nvm use 
```
### [TAB 2]
React App runs on http://localhost:3000/
```
$ nvm use && yarn start
```

### [TAB 3]
Storybook runs on http://localhost:9009/
```
$ nvm use && yarn run storybook
```

### Testing
We're using Jest + Enzyme: [Quck intro to testing React apps in Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html)
  - [Enzyme Docs](https://github.com/airbnb/enzyme)
  - [Jest Docs](https://facebook.github.io/jest/docs/en/getting-started.html)
  - [redux-mock-store: a mock store for testing your redux async action creators and middleware](https://github.com/arnaudbenard/redux-mock-store)
```
$ yarn test
```


### Development  
I added some tooling to generate Containers, Components, and Redux Modules. 

From the commandline inside the project run the following commands to create the js, scss, and test files you initially need: 

```
hygen component new --name NAME [--stateful] [--functional]

Generates a React component, a storybook, a SCSS file, and a test.

  NAME           The component name in kebab-case (required).
  --stateful     Generate a stateful component (optional).
  --functional   Generate a functional component (optional).

If no flags given, will generate a PureComponent.
```

```
hygen container new --name NAME

Generates a React container using Recycle and a test.

  NAME        The container name in kebab-case (required).
  --redux     Generate a Redux specific container (optional).
```

```
hygen module new --name NAME --action ACTION

Generates a Redux module that bundles reducers, action types, and actions, as well as a test file.

  NAME          The module name in kebab-case (required).
  ACTION        An action name in kebab-case (optional).

We're using the Ducks proposal as a reference - https://github.com/erikras/ducks-modular-redux
```
