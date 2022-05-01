sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("hanakeyss.hanaselfservice.controller.three", {
		onInit: function () {
			this._oComponent = sap.ui.core.Component.getOwnerComponentFor(this.getView());
		},
        goBack: function(){
            var oRouter = this.getOwnerComponent().getRouter()
			oRouter.navTo("hanamain")
        }
    });
});