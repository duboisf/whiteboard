/*
* Basic clipboard used to augment grids for copy / paste.
* - Need event handler on the SelectionModel to add records.
* - - How can we configure this to 'hook' it into the selection model (Future Release)
* - Need event handler on the selection of the ClipboardGrid to mark selected.
* - - How to also hook this into the Clipboard Grid's selection model (or do we build this out)
* - - After all this really dosn't need to be SEEN only available. (GRID is for convenience)
* - - The Store alone can act as a paste, every time you 'add' you clear the store. (Optional)
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
	
		// Can this be a simple array of objliterals of format
		// var _store = [];
		/*
		{
			id: 'foo',
			title: 'bar'
			obj: 'More complex stuff here, catch all placeholder'
		}
		*/
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
				// Fast record processs, hell we dont know how many may will be performant.
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