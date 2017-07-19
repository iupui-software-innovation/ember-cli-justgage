// blueprints/ember-cli-justgage/index.js

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addBowerPackageToProject ([
      {name: 'justgage'},
      {name: 'raphael', target: '2.1.4'}
    ]);
  }
};
