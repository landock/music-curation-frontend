# Music Curation Frontend
Helpful links and documentation on tech in this app.
 - [Create React App](https://github.com/facebookincubator/create-react-app).

 - [Create React App Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

 - [React Storybook](https://storybook.js.org)

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
hygen container new --name [NAME]

Generates a React container and a test.

  NAME        The container name in kebab-case (required).
```

```
hygen module new --name [NAME] --action [ACTION]

Generates a Redux module (using ducks pattern) and a test.

  NAME        The module name in kebab-case (required).
  ACTION      An action name in kebab-case (optional).
```
