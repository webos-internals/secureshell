var CommandAssistant = function(){
}
  
CommandAssistant.prototype.run = function(future) {  
    future.nest(execFuture(this.controller.args.command));
}