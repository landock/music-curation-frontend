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
container - hygen container new --name NewContainer
```

```
module - hygen module new --name newModule --action NEW_MODULE_ACTION
```

```
component - hygen component new --name newComponent
```