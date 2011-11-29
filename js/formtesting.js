Ext.ns('gng');
gng.FormPanelTest = Ext.extend( Ext.form.FormPanel, (function() {
   return {
      title: 'Testing the form panel',
      autoScroll: true,
      autoHeight: true,
      initComponent: function() {
         var config = {
            layout: 'form'
         };

         this.imgone = new Ext.form.TextField({
            xtype: 'textfield',
            itemId: 'imgone',
            fieldLabel: 'Removeable',
            name: 'imgone',
            value: ''
         });

         this.buildConfig(config);
         Ext.apply( this, Ext.apply( this.initialConfig, config ) );
         gng.FormPanelTest.superclass.initComponent.call(this);
      },
      buildConfig: function( config ) {
         this.buildItems( config );
      },
      buildItems: function (config) {
         config.items = [
            this.imgone,{
               xtype: 'textfield',
               fieldLabel: 'Username',
               name: 'username',
               value: 'Enter Username',
               listeners: {
                  focus: function(formField) {
                     formField.setValue('');
                  }
               }
            },{
               xtype: 'radiogroup',
               fieldLabel: 'Favourite color',
               items: [{
                  xtype: 'radio',
                  fieldLabel: 'Red',
                  inputType: 'radio',
                  value: 'red',
                  name: 'color'
               },{
                  xtype: 'radio',
                  fieldLabel: 'Blue',
                  inputType: 'radio',
                  value: 'blue',
                  name: 'color'
               }],
               listeners: {
                  change: {
                     fn: function ( group, checked ) {
                        //Ext.Msg.alert('Change','Okay form: [' + this.title + '] has picked something.' + checked.value);
                        if( checked.value === 'red' ) {
                           //this.remove(this.getComponent('imgone'));
                           this.remove(this.imgone, true);
                        } else {
                           /*this.add({
                              xtype: 'textfield',
                              itemId: 'imgone',
                              fieldLabel: 'Removeable',
                              name: 'imgone',
                              value: ''
                           });*/
                           this.add(this.imgone);
                           this.add({
                              xtype: 'textfield',
                              value: checked.value,
                              name: 'password',
                              fieldLabel: 'Password'
                           });
                        }
                        this.doLayout();
                     },
                     scope: this
                  }
               }
            }
         ];
      },
      buildButtons: function () {
         // TODO Add some buttons.
      }
   }
}()));
