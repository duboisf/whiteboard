Ext.ns('gng');

(function () {
   var originalRender = Ext.form.FormPanel.prototype.render;
   
   Ext.override( Ext.form.FormPanel, {
      render: function() {
         
         // Make a call to the original render process to ensure its' all cool
         originalRender.apply( this, arguments );
         
         // now we add our listeners to the basicForm.
         this.getForm().on({
            actioncomplete: function ( form, action ) {
               Ext.Msg.alert('', 'Action Failed!')
            }, 
            actionfailed: function ( form, action) {
               Ext.Msg.alert('', 'Action Failed!')
            }
         }); 
      },
      processErrors = function () {
         // This is where we need to process the informastion passed to us from the action complete and action fail events.
      };
   });
   
}());

// TODO -> Derivce the Abstract Form Panel from this.
gng.LoginFormPanel = Ext.extend( Ext.form.FormPanel, ( function () {
   return {
      title: 'Login Form',
      initComponent: function () {
         var config = {};
         
         this.buildConfig( config );
         
         Ext.apply( this, Ext.apply( this.initialConfig, config ));
         
         gng.LoginFormPanel.superclass.initComponent.call(this);
      },
      buildConfig: function ( config ) {
         this.buildItems( config );
         this.buildButtons( config );
      }, 
      buildButtons: function ( config ) {
         config.buttons = [{
            // Submit
         },{
            // Reset
         }];
      }, 
      buildItems: function ( config ) {
         config.items = [{
            // Username
         },{
            // Password 1
         },{
            // Password 2
         }];
      }
   };
}()));