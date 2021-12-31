/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"NamespaceTest1/ProjectTest1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});