import Ember from 'ember';
import layout from '../templates/components/just-gage';

export default Ember.Component.extend({
  layout,

  // Minimum value of the guage.
  min: 0,

  /// Maximum value of the gauge.
  max: 100,

  /// Current value of the guage.
  value: 0,

  didInsertElement () {
    this._super (...arguments);

    let opts = {
      id: this.elementId,
      value: this.get ('value'),
      min: this.get ('min'),
      max: this.get ('max')
    };

    if (this.get ('title'))
      opts.title = this.get ('title');

    if (this.get ('label'))
      opts.label = this.get ('label');

    if (this.get ('levelColorsGradient'))
      opts.levelColorsGradient = this.get ('levelColorsGradient');

    let guage = new JustGage (opts);
    this.set ('gauge', guage);
  }
});
