Ext.onReady(function() {
    //Ext.QuickTips.init();
    Ext.tip.QuickTipManager.init();
    Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
        showDelay: 50,
        trackMouse: false,
        hideDelay: 0,
        dismissDelay: 0,
        interceptTitles: true
    });
    Ext.tip.QuickTipManager.enable();
    
	var extwindow = new Ext.Window({
	   width: 500,
      height: 200,
      minWidth: 500,
      minHeight: 200,
      items: [{
         border: false,
         id: "testForm",
         style: "padding: 10px",
         xtype: "form",
         items: [{
            xtype: "textarea",
            name: "test",
            id: "test",
            fieldLabel: "Test",
            emptyText: "Enter Text.",
            width: 350,
            allowBlank: false,
            grow: true,
            cls: "required",
            // TODO Check to see how this was linked.
            msgTarget: "popup"
         },{
            xtype: "datefield",
            name: "datetest",
            id: "datetest",
            fieldLabel: "Date Test",
            emptyText: "Enter Date.",
            allowBlank: false,
            grow: true,
            cls: "required",
            msgTarget: "popup"      
         }]
      }],
      bbar: {
         xtype: "toolbar",
         height: 30,
         items: [{
            xtype: 'tbfill'
         },{
            iconCls: "x-btn-reset",
            text: "Reset",
            id: "reset",
            handler: function() {
               Ext.getCmp("testForm").getForm().reset();
            }
         },{
            iconCls: "x-btn-submit",
            text: "Submit",
            id: "submit",
            handler: function() {
               Ext.getCmp("testForm").getForm().submit({
                  timeout: 90000,
                  waitMsg: "Submitting request...",
                  waitTitle: "Submitting",
                  scope: this,
                  url: "success.json",
                  method: "GET",
                  success: function() {
                     Ext.MessageBox.alert("Submitted", "Test Submitted.", function() {
                        Ext.getCmp("testForm").getForm().reset();
                     });
                  },
                  failure: function() {
                     var msg;
                     if (Ext.getCmp("testForm").getForm().isValid()) {
                        msg = 'An error occurred whilst attempting to submit the form. Please try again.';
                     } else {
                        msg = 'Please correct the errors on the form before submitting';
                     }
                     Ext.Msg.show({
                        title:'Error',
                        msg: msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.WARNING
                     });
                  }
               });
            } // handler
         }] // end items
      } // end bbar
   });
	extwindow.show();
});
