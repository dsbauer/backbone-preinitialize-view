var BackbonePreinitView = Backbone.View.extend({
  constructor: function() {
    this.initialize = function(){};
    Backbone.View.apply(this,arguments);
    if (this.preinitialize instanceof Function)
      this.preinitialize.apply(this,arguments);
    delete this.initialize;
    this.initialize.apply(this,arguments);
  }
})
