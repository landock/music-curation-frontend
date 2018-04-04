var _ = require('lodash');
module.exports = {
  helpers: {
    pascalCase: s =>
      _.chain(s)
        .camelCase()
        .upperFirst()
        .value(),
    screamingSnakeCase: s =>
      _.chain(s)
        .snakeCase()
        .toUpper()
        .value(),
  },
};
