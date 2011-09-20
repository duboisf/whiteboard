Ext.ns('gng');
gng.ClosureTestPanel = Ext.extend( Ext.Panel, (function () {
   
   var x;
   
   return {
      title: 'Sample panel',
      height: 400,
      width: 300,
      initComponent: function () {
         x = this.initialConfig.xval || -1;
         
         var config = {};
         buidConfig(config);
         Ext.apply( this, Ext.apply( config, this.initialConfig ) );
         
         gng.ClosureTestPanel.superclass.initComponent.call(this);
      },
      buildConfig: function (config) {
         config.html = 'Closure test.'
      }
   };
   
}) );