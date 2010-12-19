/*global IMPORTS */
var Foundations = IMPORTS.foundations;

var Future = Foundations.Control.Future;

//check to see if NOV-108635 is fixed yet
if (typeof require === 'undefined') {
   require = IMPORTS.require;
}

var logger = require('pmloglib');
var exec = require('child_process').exec;

var execFuture = function(command) {
    var future = new Future();
    exec(command, function(error, stdout, stderr) {
	    if (error) {
		future.exception = new Error(error);
	    } else {
		future.result = {
                    success: true,
                    stdout: stdout,
                    stderr: stderr
		};
	    }
	});
    return future;
};
