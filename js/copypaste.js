Ext.ns('gng');

// map one key by key code
var map = new Ext.KeyMap("my-element", {
   key: 13, // or Ext.EventObject.ENTER
   fn: myHandler,
   scope: myObject
});

var fakeData = { 
  items: [{
    fname: 'John',
    lname: 'Bateman',
    rank: 1
  },{
    fname: 'Michelle',
    lname: 'Keefe',
    rank: 2
  },{
    fname: 'Rylie',
    lname: 'Keefe-Bateman',
    rank: 3
  },{
    fname: 'Mackenzie',
    lname: 'Keefe-Bateman',
    rank: 4 
  },{
    fname: 'Ryan',
    lname: 'Keefe-Bateman',
    rank: 5
  }]
};

gng.CopyPasteGrid = Ext.extend( Ext.grid.GridPanel, {
  initComponent: function () {
    var config = {};
    this.buildConfig(config);
    Ext.apply(this, Ext.apply(this.initialConfig, config));
    gng.CopyPasteGrid.superclass.initComponent.call(this);
  },
  buildConfig: function (config) {
    this.buildStore(config);
    this.buildSelModel(config);
    this.buildColumns(config);
    //this.buildFbar(config);
  },
  buildStore: function (config) {
    config.store = new Ext.data.JsonStore({
      data: fakeData,
      root: 'items',
      idProperty: 'rank',
      fields: ['fname','lname','rank']
    });
  },
  buildSelModel: function (config) {
    config.selModel = new Ext.grid.CheckboxSelectionModel();
  },
  buildColumns: function (config) {
    config.columns = [
      config.selModel,
      { header: 'First Name', sortable: true, renderer: 'string', dataIndex: 'fname'},
      { header: 'Last Name', sortable: true, renderer: 'string', dataIndex: 'lname'},
      { header: 'Rank', sortable: true, renderer: 'string', dataIndex: 'rank'}
    ];
  },
  buildFbar: function (config) {
    config.fbar = {
      xtype: 'button',
      text: 'Done',
      handler: function () {
        this.close();
      },
      scope: this
    };
  }
});


