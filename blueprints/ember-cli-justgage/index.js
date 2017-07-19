// blueprints/ember-cli-justgage/index.js

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addBowerPackageToProject ([
      {name: 'justgage', target: '1.0.0'},
      {name: 'raphael', target: '2.2.7'}
    ]);
  }
};
