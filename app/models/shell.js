function shellHandler() {};

shellHandler.prototype.newScene = function(assistant, url, popit)
{
    try {
	var stageName = 'shell-' + url;
	var stageController = Mojo.Controller.appController.getStageController(stageName);
		
	if (stageController && stageController.activeScene().sceneName == url) {
	    stageController.activate();
	    return;
	}
	else if (stageController && stageController.activeScene().sceneName != url) {
	    stageController.popScenesTo('shell');
	    stageController.activate();
	    return;
	}
		
	if (!popit) {
	    assistant.controller.stageController.pushScene('shell', url, false);
	}
	else {
	    Mojo.Controller.appController.createStageWithCallback({
		    name: stageName, lightweight: true},
		this.newSceneCallback.bind(this, url, true));
	}
    }
    catch (e) {
	Mojo.Log.logException(e, "shellHandler#newScene");
    }
};

shellHandler.prototype.newSceneCallback = function(url, popped, controller)
{
    controller.pushScene('shell', url, popped);
};
