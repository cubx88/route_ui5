 

sap.ui.jsview("hanakeyss.hanaselfservice.view.hana", {
	
	getControllerName: function () {
		return "hanakeyss.hanaselfservice.controller.hana";
	},
	createContent: function (oController) {

		var txtLabel = new sap.m.Label({
			text: ""
		});
		
		var lblhanaSubject = new sap.m.Label({
			text: "user: ",
			visible:false
		});
		
		var lblhanaBody = new sap.m.Label({
			text: "Action:"
		}); 
		var oDropdownActionType = new sap.ui.commons.ComboBox(this.createId("DropdownActionType"), {
			editable: true,
			placeholder: "Choose a Type",
			width: "300px",
			visible: true,
			change: function (oEventCBR) {
				//oController.fDropdownBoxgetSelected(oEventCBR);
			}
		});
		
		var oActionItem = new sap.ui.core.ListItem("ActionType1", {
			text: "Lock / unlock user"
		});
		oDropdownActionType.addItem(oActionItem);
		
		oActionItem = new sap.ui.core.ListItem("ActionType2");
		oActionItem.setText("DB upgrade");
		oDropdownActionType.addItem(oActionItem);
		
		var lblSID = new sap.m.Label({
			text: "System ID:"
		}); 
		
		var inpSID = new sap.m.Input(this.createId("_inpBoxSID"), {
			value: "",//"{/newTxt}",
			editable: true,
			width: "300px",
			//height:"50px"
		});
		
		var lblDBserver = new sap.m.Label({
			text: "DB Server name:"
		}); 
		
		var inpDbServer = new sap.m.Input(this.createId("_inpBoxDbServer"), {
			value: "",//"{/newTxt}",
			editable: true,
			width: "300px",
			//height:"50px"
		});
		
		var lblDbType = new sap.m.Label({
			text: "DB Type:"
		}); 
		var oDropdownDbType = new sap.ui.commons.ComboBox(this.createId("DropdownDbType"), {
			editable: true,
			placeholder: "Choose a Type",
			width: "300px",
			visible: true,
			change: function (oEventCBR) {
				//oController.fDropdownBoxgetSelected(oEventCBR);
			}
		});
		
		var oDbTypeItem = new sap.ui.core.ListItem("DbType1", {
			text: "HANA"
		});
		oDropdownDbType.addItem(oDbTypeItem);
		
		oDbTypeItem = new sap.ui.core.ListItem("DbType2");
		oDbTypeItem.setText("MaxDB");
		oDropdownDbType.addItem(oDbTypeItem);
		
		oDbTypeItem = new sap.ui.core.ListItem("DbType3");
		oDbTypeItem.setText("Sybase");
		oDropdownDbType.addItem(oDbTypeItem);
		
		var lblDbTargetVersion = new sap.m.Label({
			text: "DB target version:"
		}); 
		
		var inpDbTargetVersion = new sap.m.Input(this.createId("_inpDbTargetVer"), {
			value: "",//"{/newTxt}",
			editable: true,
			width: "300px",
			//height:"50px"
		});
		
		
		
		var inpTextArea = new sap.m.TextArea(this.createId("_inpAreaBody"), {
			value: "{/filedata}",
			editable: true,
			width: "300px",
			height:"80px"
		});
		
		inpTextArea.setModel(sap.ui.getCore().getModel("fetchfle"));

		var btnChangeUsr = new sap.m.Button({
			text: "fetch",
			visible: true,
			press: function (oEvent) {
				oController.getHanaSystemUser(oEvent);
			}

		});
		var btnTriggerHdb = new sap.m.Button({
			text: "goPut",
			visible: true,
			press: function (oEvent) {
				oController.putGo(oEvent);
				//oController.lockSystemUser(oEvent);
			}

		});
		var btnGo = new sap.m.Button({
			text: "goPost",
			visible: true,
			press: function (oEvent) {
				oController.postGo(oEvent);
				//oController.lockSystemUser(oEvent);
			}

		});
		var btnGoTrigger = new sap.m.Button({
			text: "submit",
			visible: true,
			press: function (oEvent) {
				oController.tokenValidation(oEvent);
				//oController.lockSystemUser(oEvent);
			}

		});
		
			var oVerticalLayoutEmail = new sap.ui.layout.VerticalLayout({
			content: [lblhanaSubject,
			lblhanaBody,
			oDropdownActionType,
			lblSID,
			inpSID,
			lblDBserver,
			inpDbServer,
			lblDbType,
			oDropdownDbType,
			lblDbTargetVersion,
			inpDbTargetVersion,
			inpTextArea,
			txtLabel,
			//btnChangeUsr,
			//btnTriggerHdb,
			btnGo,
			btnGoTrigger
			],
		});
		
		var hTabFlexBox = new sap.m.FlexBox({
			alignItems: "Center",
			justifyContent: "Center",
			items: [oVerticalLayoutEmail]
		});
		

		var ohanaTabContainer = new sap.m.TabContainer(this.createId("hanaTabContainer"), {

			items: [
				new sap.m.TabContainerItem({
					name: "Hana System User",
					content: [
						hTabFlexBox
					],
				})
			]
		}).addStyleClass("boldTextLogo");
	
		var oMainPage = new sap.m.Page({
	 		title: "{i18n>title}",
	 		//backroundDesign:"blue",
	 		showFooter:true,
	 		//id: "page2",
	 		content: [ohanaTabContainer]
	 	});

	 	var app = new sap.m.App(this.createId("app"), {
	 		initialPage: ""
	 	});
	 	app.addPage(oMainPage);
	 	return app;
		
}

});