sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zflightapppids.zflightapppids.controller.View1", {
        onInit() {
    jQuery.sap.includeStyleSheet("css/style.css");
        },

onPress: function (oEvent) {
    var sButtonId = oEvent.getSource().getId();
    if (sButtonId.includes("idCreateFlight")) {
        this.getOwnerComponent().getRouter().navTo("RouteCreateFlight"); // Use the correct route name
    } else {
        MessageToast.show("Button was pressed");
    }
}
    });
});