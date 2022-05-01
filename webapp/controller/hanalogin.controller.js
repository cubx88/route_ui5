jQuery.sap.require("hanakeyss.hanaselfservice.helper.constants");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("jquery.sap.storage");
jQuery.sap.require("sap.ui.core.util.Export");

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("hanakeyss.hanaselfservice.controller.hanalogin", {
		onInit: function () {
		},
		
	submitUserCre: function(){
		
		var oRouter = this.getOwnerComponent().getRouter()
			oRouter.navTo("hanamain")
		
		},
	});
});