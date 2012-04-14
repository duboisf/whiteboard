Ext.ns('gng');

(function(){
  Commands = function(list) {
    /*
    Example of element in list:
    obj = {
      id: 'foo',
      action : 'bar'
    };
    */
    this.hash = {
      items: [{
        id: 'Create Press Release',
        action: function () {
          new Ext.Window({ title: 'Create Press Release', width: 300, heaight: 400 }).show();
        }
      },{
        id: 'Push Document(s)',
        action: function () {
          new Ext.Window({ title: 'Push content window.', wisth: 300, height: 400 }).show();
        }
      }]
    };
  };

  Commands.prototype.indexOf = function (key) {
    var idx = -1, l = this.hash.items.length;
    while(l){ 
      idx = this.hash.items[l-1] ? l-1 : -1;
      if( idx > -1 ) {
        break;
      }
      l--;
    }
    return idx;
  };

  Commands.prototype.has = function (key) {
    var i = this.indexOf(key), found = false;
    if(i>=0) {
      found = true;
    } else {
      found = false;
    }
    return found;
  };

  Commands.prototype.getValue = function(key) {
    var i = this.indexOf(key), item;
    if(i>=0) {
      item = this.hash.items[i];
    }
    return item;
  };

}());

gng.CommandCombo = Ext.extend(Ext.form.ComboBox,{
  typeAhead: true,
  fieldLabel: 'Command to run',
  triggerAction: 'all',
  mode: 'local',
  initComponent: function () {
    var config = {};
    this.buildConfig(config);
    Ext.apply(this, config);
    fireEvent('gng.commandExecuted');
    gng.CommandCombo.superclass.initComponent.call(this);
  },
  buildConfig: function (config) {
    this.buildStore(config);
    this.buildListeners(config);
  },
  buildListeners: function(config) {
    config.listeners = {
      select: function( combo, record, idx ) {
        fire('gng.commandExecuted');
        Ext.Msg.alert('Select Fired!','Select Fired!');
      }
    };
  },
  buildStore: function(config) {
    config.store = new Ext.data.JsonStore({
      root: 'items',
      idProperty: 'id',
      fields: [
        'id',
        'action'
      ],
      data: {
        items: [{
          id: 'Create Press Release',
          action: function () {
            new Ext.Window({ title: 'Create Press Release', width: 300, height: 400 }).show();
          }
        },{
          id: 'Push Document(s)',
          action: function () {
            new Ext.Window({ title: 'Push content window.', width: 300, height: 400 }).show();
          }
        }]
      }
    });
  },
  valueField: 'id',
  displayField: 'id'
});

gng.CommandForm = Ext.extend(Ext.form.FormPanel,{
  initComponent: function () {
    var config = {};
    this.buildConfig(config);
    Ext.apply(this, config);
    gng.CommandForm.superclass.initComponent.call(this);
  },
  buildConfig: function (config) {
    this.buildItems(config);
  },
  buildItems: function (config) {
    config.items = [new gng.CommandCombo()];
  }
});

gng.CommandWindow = Ext.extend(Ext.Window, {
  title: 'Command Window',
  layout: 'fit',
  width: 400,
  height: 100,
  initComponent: function () {
    var config = {};
    this.buildConfig(config);
    Ext.apply(this, config);
    gng.CommandWindow.superclass.initComponent.call(this);
  },
  buildConfig: function (config) {
    this.buildItems(config);
  },
  buildItems: function (config) {
    config.items = [new gng.CommandForm()];
  }
});
