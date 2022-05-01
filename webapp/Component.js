
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	//"hanakeyss/hanaselfservice/model/models"
	"hanakeyss/hanaselfservice/model/models"
], function (UIComponent, Device, models) {
	"use strict";
	return UIComponent.extend("hanakeyss.hanaselfservice.Component", {
	//return UIComponent.extend("hanaselfservice.Component", {

		metadata: {
			manifest: "json"
		},

			init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			

			var fileContent = {
				filedata:"",
				newTxt:"Hello",
				jwtToken:""
			};
			var oFileModel = new sap.ui.model.json.JSONModel(fileContent);
			sap.ui.getCore().setModel(oFileModel, "fetchfle");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
		
	});
});