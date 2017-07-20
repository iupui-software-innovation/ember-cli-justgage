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

    let opts = this._getOptionsHash ();
    let gauge = new JustGage (opts);

    this.set ('gauge', gauge);
  },

  _getOptionsHash () {
    // The required options.
    let opts = {
      id: this.elementId,
      value: this.get ('value')
    };

    // Optional configuration values

    if (this.get ('title')) opts.title = this.get ('title');
    if (this.get ('label')) opts.label = this.get ('label');
    if (this.get ('width')) opts.width = this.get ('width');
    if (this.get ('height')) opts.height = this.get ('height');
    if (this.get ('valueFontColor')) opts.valueFontColor = this.get ('valueFontColor');
    if (this.get ('valueFontFamily')) opts.valueFontFamily = this.get ('valueFontFamily');
    if (this.get ('symbol')) opts.symbol = this.get ('symbol');
    if (this.get ('min')) opts.min = this.get ('min');
    if (this.get ('minTxt')) opts.minTxt = this.get ('minTxt');
    if (this.get ('max')) opts.max = this.get ('max');
    if (this.get ('maxTxt')) opts.maxTxt = this.get ('maxTxt');
    if (this.get ('reverse')) opts.reverse = this.get ('reverse');
    if (this.get ('humanFriendlyDecimal')) opts.humanFriendlyDecimal = this.get ('humanFriendlyDecimal');
    if (this.get ('levelColorsGradient')) opts.levelColorsGradient = this.get ('levelColorsGradient');
    if (this.get ('gaugeWidthScale')) opts.gaugeWidthScale = this.get ('gaugeWidthScale');
    if (this.get ('gaugeColor')) opts.gaugeColor = this.get ('gaugeColor');
    if (this.get ('label')) opts.label = this.get ('label');
    if (this.get ('labelFontColor')) opts.labelFontColor = this.get ('labelFontColor');
    if (this.get ('shadowOpacity')) opts.shadowOpacity = this.get ('shadowOpacity');
    if (this.get ('shadowSize')) opts.shadowSize = this.get ('shadowSize');
    if (this.get ('shadowVerticalOffset')) opts.shadowVerticalOffset = this.get ('shadowVerticalOffset');
    if (this.get ('levelColors')) opts.levelColors = this.get ('levelColors');
    if (this.get ('startAnimationTime')) opts.startAnimationTime = this.get ('startAnimationTime');
    if (this.get ('startAnimationType')) opts.startAnimationType = this.get ('startAnimationType');
    if (this.get ('refreshAnimationTime')) opts.refreshAnimationTime = this.get ('refreshAnimationTime');
    if (this.get ('refreshAnimationType')) opts.refreshAnimationType = this.get ('refreshAnimationType');
    if (this.get ('donutStartAngle')) opts.donutStartAngle = this.get ('donutStartAngle');
    if (this.get ('valueMinFontSize')) opts.valueMinFontSize = this.get ('valueMinFontSize');
    if (this.get ('labelMinFontSize')) opts.labelMinFontSize = this.get ('labelMinFontSize');
    if (this.get ('minLabelMinFontSize')) opts.minLabelMinFontSize = this.get ('minLabelMinFontSize');
    if (this.get ('maxLabelMinFontSize')) opts.maxLabelMinFontSize = this.get ('maxLabelMinFontSize');
    if (this.get ('hideValue')) opts.hideValue = this.get ('hideValue');
    if (this.get ('hideMinMax')) opts.hideMinMax = this.get ('hideMinMax');
    if (this.get ('showInnerShadow')) opts.showInnerShadow = this.get ('showInnerShadow');
    if (this.get ('humanFriendly')) opts.humanFriendly = this.get ('humanFriendly');
    if (this.get ('noGradient')) opts.noGradient = this.get ('noGradient');
    if (this.get ('donut')) opts.donut = this.get ('donut');
    if (this.get ('relativeGaugeSize')) opts.relativeGaugeSize = this.get ('relativeGaugeSize');
    if (this.get ('counter')) opts.counter = this.get ('counter');
    if (this.get ('decimals')) opts.decimals = this.get ('decimals');
    if (this.get ('customSectors')) opts.customSectors = this.get ('customSectors');
    if (this.get ('formatNumber')) opts.formatNumber = this.get ('formatNumber');
    if (this.get ('pointer')) opts.pointer = this.get ('pointer');
    if (this.get ('pointerOptions')) opts.pointerOptions = this.get ('pointerOptions');

    return opts;
  }
});
