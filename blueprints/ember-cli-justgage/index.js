// blueprints/ember-cli-justgage/index.js

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addBowerPackageToProject ([
      {name: 'https://github.com/toorshia/justgage.git', target: '1.2.9'},
      {name: 'raphael', target: '2.2.7'}
    ]);
  }
};
