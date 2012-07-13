Ext.ns('gng');

(function () {
	gng.Commands = {
		items: [{
			id: 'Create Press Release',
			action: function () {
				new Ext.Window({ title: 'Create Press Release', width: 300, height: 400 }).show();
			}
		},{
			id: 'Push document(s)',
			action: function () {
				new Ext.Window({ title: 'Push content window.', width: 300, height: 400 }).show();
			}
		},{
			id: 'Push folder',
			action: function () {
				new Ext.Window({ title: 'Push folder window.', width: 300, height: 400 }).show();
			}
		},{
			id: 'Preview document(s)',
			action: function () {
				new Ext.Window({ title: 'Preview document window.', width: 300, height: 400 }).show();
			}
		},{
			id: 'Preview folder',
			action: function () {
				new Ext.Window({ title: 'Preview folder window.', width: 300, height: 400 }).show();
			}
		},{
			id: 'Create folder',
			action: function () {
				new Ext.Window({ title: 'Create folder window.', width: 300, height: 400 }).show();
			}
		}]
	};

	gng.CommandCombo = Ext.extend(Ext.form.ComboBox,{
		id: 'commandCombo',
		typeAhead: true,
		typeAheadDelay: 125,
		fieldLabel: 'Command to run',
		triggerAction: 'all',
		mode: 'local',
		forceSelection: true,
		hideTrigger: true,
		valueField: 'id',
		displayField: 'id',
		initComponent: function () {
			var config = {};
			this.buildConfig(config);
			Ext.apply(this, Ext.apply(config, this.initialConfig));
			// Need to bubble this up to the form itself.
			gng.CommandCombo.superclass.initComponent.call(this);
		},

		buildConfig: function (config) {
			this.buildStore(config);
		},

		buildStore: function(config) {
			config.store = new Ext.data.JsonStore({
				root: 'items',
				idProperty: 'id',
				fields: [
					'id',
					'action'
				],
				data: gng.Commands			
			});
		}
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
			var that = this;
			config.items = [
				new gng.CommandCombo({
					listeners: {
						scope: that,
						select: function( combo, record, idx ) {
							if(console) {
								console.log('Executing action for : ' + record.data.id);
							}
							record.data.action();
						}
					}
				})
			];
		}
	});

	gng.CommandWindow = Ext.extend(Ext.Window, {
		title: 'Command Window',
		layout: 'fit',
		width: 289,
		height: 56,
		initComponent: function () {
			var config = {};
			this.buildConfig(config);
			Ext.apply(this, config);
			gng.CommandWindow.superclass.initComponent.call(this);
			this.on({
				afterrender: function (cmp) {
					Ext.getCmp('commandCombo').focus(false, 250);
				}
			});
		},

		buildConfig: function (config) {
			this.buildItems(config);
		},

		buildItems: function (config) {
			config.items = [new gng.CommandForm()];
		}
	});
}());
