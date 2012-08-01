/*
* Basic clipboard used to augment grids for copy / paste.
*/
Ext.ns('mspub');

mspub._Clipboard = (function() {

	var _instance,
		_constructor

	_constructor = function () {
	
		var _store = new Ext.data.Store();

		return {
			add: function (record) {
				console.log('add');
			},

			remove: function () {
				console.log('remove');
			},

			getStore: function () {
				return this.store;
			},

			addAll: function (records) {
				var l = records.length;
				// Fast record processs, hell we dont know how many may as well be performant.
				while(l) {
					this.add(records[l]);
					--l;
				}
			},

			markSelected: function (records) {
				this.selected = records;
			},

			getForm: function (argument) {

			}
		};
	};

	return {
		getInstance: function () {
			if(!this._instance) {
				this._instance = this._constructor();
			}
			return this._instance;
		}
	};


})();

mspub.Clipboard = new mspub._Clipboard().getInstance();