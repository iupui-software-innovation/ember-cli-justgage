// blueprints/ember-cli-justgage/index.js

module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addBowerPackageToProject ('https://github.com/toorshia/justgage.git', '1.2.9');
  }
};
