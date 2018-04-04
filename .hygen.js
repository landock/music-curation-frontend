var _ = require('lodash');
module.exports = {
  helpers: {
    pascalCase: function(s) {
      let newString = s.slice(0);
      newString = _.camelCase(newString);
      newString = _.upperFirst(newString);
      return newString;
    },
    screamingSnakeCase: s =>
      _.chain(s)
        .snakeCase()
        .toUpper()
        .value(),
  },
};
