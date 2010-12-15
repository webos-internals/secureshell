function shellHandler() {};

shellHandler.prototype.newScene = function(assistant, name, popit)
{
    try {
	var stageName = 'shell-' + name;
	var stageController = Mojo.Controller.appController.getStageController(stageName);
		
	if (stageController && stageController.activeScene().sceneName == name) {
	    stageController.activate();
	    return;
	}
	else if (stageController && stageController.activeScene().sceneName != name) {
	    stageController.popScenesTo('shell');
	    stageController.activate();
	    return;
	}
		
	if (!popit) {
	    assistant.controller.stageController.pushScene('shell', name, false);
	}
	else {
	    Mojo.Controller.appController.createStageWithCallback({
		    name: stageName, lightweight: true},
		this.newSceneCallback.bind(this, name, true));
	}
    }
    catch (e) {
	Mojo.Log.logException(e, "shellHandler#newScene");
    }
};

shellHandler.prototype.newSceneCallback = function(name, popped, controller)
{
    controller.pushScene('shell', name, popped);
};
