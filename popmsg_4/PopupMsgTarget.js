/*jslint plusplus: false, white: false, onevar: false */
/*global Ext:true, Module:true, window:true, console:true */

/**
 * The native implementation of findParentByType fails to find parents
 * that inherit the specified type. E.g. you wish to search for any parent
 * that has a superclass of Ext.BoxComponent and the function will
 * return an Ext.Window
 */
Ext.override(Ext.Component, {
 findParentByType: function(type){
  if (Ext.isFunction(type)){
   return this.findParentBy(function(p){
                return p instanceof type;
            });
  } else {
   return (Ext.isFunction(Ext.ComponentMgr.types[type]))? 
    this.findParentByType(Ext.ComponentMgr.types[type]): 
    null;
  }
 }
});

Ext.Popup = Ext.extend(Ext.Tip, {
	defaultAlign : "tl-tr",
	closable: true,
	cls: "x-form-invalid-popup"
});
Ext.form.MessageTargets.popup = {
	mark: function(field, msg){
		field.el.addClass(field.invalidClass);
		if (!field.focusErrorEvent) {
			field.focusErrorEvent = function(event, fieldel) {
			    if (event.target!==fieldel) {
			        return;
			    }
				if (this.currentErrorMessage) {
					if (!this.popupPanel) {
						this.popupPanel = new Ext.Popup();
					}
					this.popupPanel.show();
					this.popupPanel.body.update(field.currentErrorMessage);
					this.popupPanel.showBy(field.getEl());
				}
			};
	        field.el.on("focus", field.focusErrorEvent, field);
	        field.on("beforedestroy", function() {this.un("focus", this.focusErrorEvent);}, field);
		}
        if (!field.blurErrorEvent) {
            field.blurErrorEvent = function(event, fieldel) {
                if (this.popupPanel&&!this.popupPanel.hidden) {
                    this.popupPanel.hide();
                }
            }
            field.el.on("blur", field.blurErrorEvent, field);
            var component = field;
            var parentBoxComponent = component.findParentByType(Ext.BoxComponent);
            while (parentBoxComponent) {
                parentBoxComponent.el.on("mousedown", field.blurErrorEvent, field);
                if (parentBoxComponent instanceof Ext.Panel) {
                    parentBoxComponent.on("close", field.blurErrorEvent, field);
                }
                component = parentBoxComponent;
                parentBoxComponent = component.findParentByType(Ext.BoxComponent);
            }
        }
		field.currentErrorMessage = msg;
	},
	clear: function(field){
		field.currentErrorMessage = undefined;
		field.el.removeClass(field.invalidClass);
		if (field.popupPanel) {
		    field.popupPanel.hide();
		}
	}
};
