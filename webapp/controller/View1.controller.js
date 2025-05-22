sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zflightapppids.zflightapppids.controller.view1", {
        onInit() {
    jQuery.sap.includeStyleSheet("css/style.css");
        },

    navToCreateFlight(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteCreateFlight");
        },

    navToDisplayFlight(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteToDisplayFlight");
        }    
    });
});