var PreInitView = Backbone.View.extend({
  constructor: function() {
    this.initialize = function(){};
    Backbone.View.apply(this,arguments);
    this.__preInit.apply(this,arguments);
    delete this.initialize;
    this.initialize.apply(this,arguments);
  },
  __preInit: function(opts) {
    //do overrideable magic
  }
})
