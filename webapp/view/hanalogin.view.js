jQuery.sap.require("hanakeyss.hanaselfservice.helper.constants");


sap.ui.jsview("hanakeyss.hanaselfservice.view.hanalogin", {


	getControllerName: function () {
		return "hanakeyss.hanaselfservice.controller.hanalogin";
	},
		
	createContent: function (oController) {

        var oLogoTextDEV = new sap.m.Text({
			text: "H A N A"
		});
		oLogoTextDEV.addStyleClass("boldTextLogo");
        
        var oLogoImage = new sap.m.Image({
        			src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
        			height: "45px"
        			}); 
        var oLogoText = new sap.m.Text({
        			text: "{i18n>loginTitle}"
        		});
        oLogoText.addStyleClass("boldTextLogo");
       
        var oLogoTextD = new sap.m.Text({
        			//text: "{i18n>}"
        		});
        		
        // oLogoTextD.addStyleClass("boldTextLogo");

        var oHBLaNameSSDevAuto = new sap.m.HBox(this.createId("HBLI"), {
        	height: "100%",
        	width: "100%",
        	alignItems: "Center",
        	justifyContent: "Center",
        	visible: true,
        	items: [
        	        oLogoTextDEV,
                    oLogoImage,
        			oLogoText,
        	]
        });	
        
        var oVBLaNameSSDevAutoD = new sap.m.VBox(this.createId("VBLID"), {
        	height: "100%",
        	width: "100%",
        	alignItems: "Center",
        	justifyContent: "Center",
        	visible: true,
        	items: [
        			oHBLaNameSSDevAuto
        			,oLogoTextD
        	]
        });        

		this.setModel(sap.ui.getCore().getModel("i18n"), "i18n");

		var username = new sap.m.Input(this.createId("userInput"), {
			width: "auto",
			//addStyleClass: "sapUIResponsiveMargin",
			value: "{mLFormData>/strUsername}",
			editable: true,
			//valueStateText: "{i18n>/LIFUserFieldText}"
		});
		//
		var passwordField = new sap.m.Input(this.createId("passwordInput"), {
			width: "auto",
			//addStyleClass: "sapUIResponsiveMargin",
			value: "{mLFormData>/strPassword}",
			editable: true,
			valueState: "{mLFormData>/passwordState}",
			type: sap.m.InputType.Password
		});

		var form = new sap.ui.layout.form.SimpleForm({
			// title: "{i18n>LIFTitleText}",
			maxContainerCols: 1,
			layout: "ResponsiveGridLayout",
			editable: true,
			labelSpanL: 2,
			labelSpanM: 2,
			emptySpanL: 4,
			emptySpanM: 4,
			columnsL: 1,
			columnsM: 1,
			content: [
			    // oHBLaNameSSDevAuto,
			    oVBLaNameSSDevAutoD,
                new sap.m.Label({
					text: "{i18n>lUsertxt}",
					//mandatory : true
				}),
                username,
                new sap.m.Label({
					text: "{i18n>lPWtxt}",
					//mandatory : true
				}),
                passwordField,
                new sap.m.Label({
					text: ""
				}),
                new sap.m.Button({
					text: "{i18n>btnLtxt}",
					icon: "sap-icon://key",
					width: "120px",
					type: sap.m.ButtonType.Emphasized,
					press: function (oEvent) {
		 				oController.submitUserCre(oEvent);
		 				//oController.fetchToken(oEvent);
					}
				}),
				// new sap.m.Button({
				// 	text: "getData",
				// 	icon: "sap-icon://key",
				// 	width: "120px",
				// 	type: sap.m.ButtonType.Emphasized,
				// 	press: function (oEvent) {
		 	// 			oController.retrieveHanaData(oEvent);
				// 	}
				// }),
				
				new sap.m.Label({
					text: ""
				}),
				new sap.m.Label({
					text: "Please use this app in chrome only."
					//,mandatory : true
				})
            ]
		});

		var flxbLogin = new sap.m.FlexBox(this.createId("loginContainer"), {
			height: "500px",
			width: "100%",
			alignItems: "Center",
			justifyContent: "Center",
			visible: true,
			items: [form]
		});
		
		sap.ui.getCore().byId(this.createId("passwordInput")).onkeypress = function(event){
			if	(event.keyCode === 13){
				oController.submitUserCre();
			}
		};
		
		var loginPage = new sap.m.Page({
			title: "Hana User Management",
			//id: "page1", // with no ID you can navigate between pages, cause Fiori assigns an id automtaically!
			// ....otherwise you'll get an "duplicate error"
			content: [flxbLogin]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: ""
		});
		app.addPage(loginPage);
		return app;
	
	}

});