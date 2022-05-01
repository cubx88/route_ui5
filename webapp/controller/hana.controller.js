
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("jquery.sap.storage");
jQuery.sap.require("sap.ui.core.util.Export");
 
sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/m/MessageBox",
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("hanakeyss.hanaselfservice.controller.hana", {
		onInit: function () {
			this.TabNoClose();
			this._oComponent = sap.ui.core.Component.getOwnerComponentFor(this.getView());
			this._oText = this._oComponent.getModel("i18n").getResourceBundle();
		},
		////Disabling the close sign on the tabs!!!	
		TabNoClose: function () {
			var oTabContainer = this.getView();
			var hanaTabCon = sap.ui.getCore().byId(oTabContainer.createId("hanaTabContainer"));

			hanaTabCon.addEventDelegate({
				onAfterRendering: function () {
					var oTabStrip = this.getAggregation("_tabStrip");
					var oItems = oTabStrip.getItems();
					for (var i = 0; i < oItems.length; i++) {
						var oCloseButton = oItems[i].getAggregation("_closeButton");
						oCloseButton.setVisible(false);
					}
				}
			}, hanaTabCon);
		},
		
		openConfirmDialog: function(fnOK, aArguments, si18nTitle, si18nText) {
			var redirectMe = sap.ui.core.UIComponent.getRouterFor(this);
			MessageBox.show(
				this._oText.getText("Your session has expired, please logon again!"), {
					icon: MessageBox.Icon.QUESTION,
					title: this._oText.getText(si18nTitle),
					//actions: [MessageBox.Action.YES, MessageBox.Action.NO],
					actions: [MessageBox.Action.OK],
					onClose: function(sAnswer) {
						if (sAnswer === MessageBox.Action.OK) {
							//fnOK.apply(this, aArguments);
							redirectMe.navTo("login");
						}
					}
				}
			);
		},

		getGo: function () {
			var fetchGo = {
				"async": true,
				"crossDomain": true,
				//"url": "http://localhost/fetch",
				"url": "https://mo-7dd756311.mo.sap.corp:7443/fetch",
				//"url": "https://10.97.135.148:9443/fetch",
				"method": "GET",
				"headers": {
					"content-type": "application/json",
					"cache-control": "no-cache"
				},

				success: function (data, textStatus, jqXHR) {
            		sap.m.MessageToast.show("Data fetched successfully ;-)");
				},
				error: function (data, textStatus, jqXHR) {
					sap.m.MessageBox.alert("Could not get data!");
				}
			};
			$.ajax(fetchGo);
		},
		
		putGo: function () {

			var GoView = this.getView();
			var GoText = sap.ui.getCore().byId(GoView.createId("_inpBoxSID")).getValue().toLowerCase();
			var that = this;
			
			var objGoPut = {
				"strAppend": GoText
			};

			var strGoBackPack = JSON.stringify(objGoPut);

			var goRequest = {
				"async": true,
				"crossDomain": true,
				//"url": "http://localhost/add",
				//"url": "https://10.97.135.148:7443/add",
				"url": "https://mo-7dd756311.mo.sap.corp:9443/add",
				"method": "PUT",
				"headers": {
					"gobackpack": strGoBackPack,
					"content-type": "\\\"text/plain\\\"",
					"cache-control": "no-cache",
				},
				success: function (data, textStatus, jqXHR) {
				 sap.m.MessageBox.success ("File modified successfully :-)");
						that.getGo();
				},

				error: function (data, textStatus, jqXHR) {
					sap.m.MessageBox.error("File not appended!");
				}

			};
			$.ajax(goRequest);
		},
		postGo: function () {
			var GoView = this.getView();
			var GoText = sap.ui.getCore().byId(GoView.createId("_inpBoxSID")).getValue().toLowerCase();
			
			var objGoPut = {
				"strText": GoText
			};

			var strGoBackPack = JSON.stringify(objGoPut);

			var goRequest = {
				"async": true,
				"crossDomain": true,
				//"url": "http://localhost/createFile",
				//"url": "https://10.97.135.148:7443/createFile",
				"url": "https://mo-7dd756311.mo.sap.corp:9443/createFile",
				"method": "POST",
				"headers": {
					"gobackpack": strGoBackPack,
					"content-type": "\\\"text/plain\\\"",
					"cache-control": "no-cache",
				},
				success: function (data, textStatus, jqXHR) {
				 sap.m.MessageBox.success ("File created successfully :-)");
					
				},

				error: function (data, textStatus, jqXHR) {
					sap.m.MessageBox.error("File not created!");
				}

			};
			$.ajax(goRequest);
		},
		tokenValidation: function () {
			// var that=this;
			// var jToken = sap.ui.getCore().getModel("fetchfle").getProperty("/jwtToken");
			// if(jToken===""){
			// 	sap.m.MessageBox.alert("No valid Token assigned!!!");
			// 	return;
			// }
			// var goRequest = {
			// 	"async": true,
			// 	"crossDomain": true,
			// 	"url": "https://mo-7dd756311.mo.sap.corp:5443/check",
			// 	 //"url": "http://localhost/check",
			// 	"method": "GET",
			// 	"headers": {
			// 		"authorization":jToken,
			// 		"content-type":"application/json",
			// 		"cache-control": "no-cache",
			// 	},
			// 	success: function (data, textStatus, jqXHR) {
			// 	var responseTxt = JSON.parse(data)
			// 	 sap.m.MessageToast.show("Userid: " + responseTxt + " has a valid Token ;-)");
			// 	 that.triggerGo();
			// 	},
			// 	error: function (data, textStatus, jqXHR) {
			// 		sap.m.MessageToast.show(data.responseText);
			// 		that.openConfirmDialog();
			// 	}
			// };
			// $.ajax(goRequest);
			var oRouter = this.getOwnerComponent().getRouter()
			oRouter.navTo("three")
		},
		triggerGo: function () {
			sap.ui.core.BusyIndicator.show();
			var goRequest = {
				"async": true,
				"crossDomain": true,
				//"url": "http://localhost/trigger",
				"url": "https://mo-7dd756311.mo.sap.corp:9443/trigger",
				"method": "POST",
				"headers": {
					"content-type":"application/json",
					"cache-control": "no-cache",
				},
				success: function (data, textStatus, jqXHR) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageBox.success(data);
				},
				error: function (data, textStatus, jqXHR) {
					sap.ui.core.BusyIndicator.hide();
					sap.m.MessageBox.error(data);
				}
			};
			$.ajax(goRequest);
		},
		
	});
});