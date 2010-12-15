function CreditsAssistant() {};

CreditsAssistant.prototype.setup = function()
{
	this.controller.get('main-title').innerHTML = $L('Secure Shell');
	this.controller.get('version').innerHTML = $L('v0.0.0');
	this.controller.get('subTitle').innerHTML = $L('');	
	
	// setup menu
	this.controller.setupWidget(Mojo.Menu.appMenu, {omitDefaultItems: true}, {visible: false});
	
	// get elements
	this.versionElement = 	this.controller.get('version');
	this.subTitleElement =	this.controller.get('subTitle');
	
	this.versionElement.innerHTML = "v" + Mojo.Controller.appInfo.version;
	this.subTitleElement.innerHTML = $L('The following people are responsible ...');;

};

CreditsAssistant.prototype.activate = function(event)
{
	if (this.controller.stageController.setWindowOrientation)
	{
    	this.controller.stageController.setWindowOrientation("up");
	}
};

CreditsAssistant.prototype.deactivate = function(event) {}
CreditsAssistant.prototype.cleanup = function(event) {}
