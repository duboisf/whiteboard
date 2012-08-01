/*
* Basic clipboard used to augment grids for copy / paste.
* - Need event handler on the SelectionModel to add records.
* - Need event handler on the selection of the ClipboardGrid to mark selected.
* - Need event handler on the actual pasting of the selected records to whatever target.
* --
* - BRAINSTORMING. 
* - Should we look at how DragNDrop is implemented in ExtJS
* - implement the same thing for Clipboard afterall you have a Source -> Target
* -- 
*/
Ext.ns('mspub');

mspub._Clipboard = (function() {

	var _instance,
		_constructor

	_constructor = function () {
	
		var _store = new Ext.data.Store();

		this._instance = {
			add: function (record) {
				console.log('add');
			},

			remove: function () {
				console.log('remove');
			},

			getStore: function () {
				console.log('getStore');
				return this._store;
			},

			addAll: function (records) {
				console.log('addAll');
				var l = records.length;
				// Fast record processs, hell we dont know how many may as well be performant.
				while(l) {
					this.add(records[l]);
					--l;
				}
			},

			markSelected: function (records) {
				console.log('markSelected');
				this.selected = records;
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