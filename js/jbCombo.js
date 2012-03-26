// Customized Combo to show a 'manage' link after the dropdown.
Ext.ns('gng');

gng.JBCombo = Ext.extend(Ext.form.ComboBox,{
  typeAhead: true,
  loadingText: 'Loading data...',
  triggerAction: 'all',
  lazyRender: true,
  mode: 'local',
  store: new Ext.data.ArrayStore({
    id: 0,
    fields: [
      'myId',
      'displayText'
    ],
    data: [[1, 'item1'], [2, 'item2']]
  }),
  valueField: 'myId',
  displayField: 'displayText'
});

gng.JBComposite = Ext.extend(Ext.form.CompositeField, {
  labelWidth: 120,
  items: [
    new gng.JBCombo(),
    '->',
    {
      xtype: 'box',
      html: '<a href="">Manage...</a>'
    }
  ]
});
